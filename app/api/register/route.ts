import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { teamName, participants } = body;

    if (!teamName || !participants || participants.length < 4) {
      return NextResponse.json(
        { error: "Team name and at least 4 participants are required." },
        { status: 400 }
      );
    }

    const sql = neon(process.env.DATABASE_URL!);

    // Create tables if not exist
    await sql`
      CREATE TABLE IF NOT EXISTS teams (
        id SERIAL PRIMARY KEY,
        team_name TEXT UNIQUE NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS participants (
        id SERIAL PRIMARY KEY,
        team_id INTEGER REFERENCES teams(id),
        full_name TEXT NOT NULL,
        grade INTEGER NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        school TEXT NOT NULL,
        is_captain BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Insert team
    const [team] = await sql`
      INSERT INTO teams (team_name)
      VALUES (${teamName})
      RETURNING id
    `;

    // Insert participants
    for (let i = 0; i < participants.length; i++) {
      const p = participants[i];
      await sql`
        INSERT INTO participants (team_id, full_name, grade, email, phone, school, is_captain)
        VALUES (${team.id}, ${p.fullName}, ${p.grade}, ${p.email}, ${p.phone}, ${p.school}, ${i === 0})
      `;
    }

    return NextResponse.json({ success: true, teamId: team.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    if (message.includes("unique") || message.includes("duplicate")) {
      return NextResponse.json(
        { error: "This team name is already taken. Please choose a unique name." },
        { status: 409 }
      );
    }
    console.error("Registration error:", message);
    return NextResponse.json({ error: "Registration failed. Please try again." }, { status: 500 });
  }
}
