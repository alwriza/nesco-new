import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Basic validation
    if (!data.team_name) {
      return NextResponse.json({ success: false, error: "Team name is required" }, { status: 400 });
    }

    const sql = neon(process.env.DATABASE_URL!);

    // Create table if not exists to keep it zero-config
    await sql`
      CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        team_name TEXT UNIQUE NOT NULL,
        p1_name TEXT, p1_grade TEXT, p1_email TEXT, p1_phone TEXT, p1_school TEXT,
        p2_name TEXT, p2_grade TEXT, p2_email TEXT, p2_phone TEXT, p2_school TEXT,
        p3_name TEXT, p3_grade TEXT, p3_email TEXT, p3_phone TEXT, p3_school TEXT,
        p4_name TEXT, p4_grade TEXT, p4_email TEXT, p4_phone TEXT, p4_school TEXT,
        p5_name TEXT, p5_grade TEXT, p5_email TEXT, p5_phone TEXT, p5_school TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Insert into Neon
    await sql`
      INSERT INTO registrations (
        team_name,
        p1_name, p1_grade, p1_email, p1_phone, p1_school,
        p2_name, p2_grade, p2_email, p2_phone, p2_school,
        p3_name, p3_grade, p3_email, p3_phone, p3_school,
        p4_name, p4_grade, p4_email, p4_phone, p4_school,
        p5_name, p5_grade, p5_email, p5_phone, p5_school
      ) VALUES (
        ${data.team_name},
        ${data.p1_name}, ${data.p1_grade}, ${data.p1_email}, ${data.p1_phone}, ${data.p1_school},
        ${data.p2_name}, ${data.p2_grade}, ${data.p2_email}, ${data.p2_phone}, ${data.p2_school},
        ${data.p3_name}, ${data.p3_grade}, ${data.p3_email}, ${data.p3_phone}, ${data.p3_school},
        ${data.p4_name}, ${data.p4_grade}, ${data.p4_email}, ${data.p4_phone}, ${data.p4_school},
        ${data.p5_name || null}, ${data.p5_grade || null}, ${data.p5_email || null}, ${data.p5_phone || null}, ${data.p5_school || null}
      )
    `;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error("Registration error:", err);
    const message = err?.message || "Unknown error";
    if (message.includes("unique") || message.includes("duplicate")) {
      return NextResponse.json(
        { success: false, error: "This team name is already taken. Please choose a unique name." },
        { status: 409 }
      );
    }
    return NextResponse.json({ 
      success: false, 
      error: "Database error. Make sure the table exists and DATABASE_URL is correct." 
    }, { status: 500 });
  }
}
