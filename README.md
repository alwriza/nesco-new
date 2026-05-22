# NEScO — National Engineering Science Olympiad Website

A modern, minimalist Next.js website for NEScO 2026.

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS 4**
- **Neon** (Postgres serverless) for registration data
- **Fonts**: Unbounded, Inter, Raleway (Google Fonts)

## Getting Started

### 1. Clone and install

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your **Neon database connection string**:

```
DATABASE_URL=postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require
```

You can get this from your [Neon dashboard](https://console.neon.tech).

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> The database tables (`teams` and `participants`) are created automatically on the first registration submission.

---

## Adding Photos

### Team photos
Place individual team member photos in:
```
/public/team/member-1.jpg
/public/team/member-2.jpg
...
```
Then update `/app/team/page.tsx` — replace `photo: null` with `photo: "/team/member-1.jpg"` for each member.

### Event/group photos
Place event photos in `/public/events/`. Reference them in the homepage or team page as needed.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, stats, about, stages, partners |
| `/rules` | Competition rules and format |
| `/team` | Team bios and partners |
| `/register` | Registration form → saves to Neon DB |
| `/api/register` | POST endpoint — inserts into `teams` + `participants` |

---

## Deployment (Vercel — recommended)

1. Push to GitHub
2. Import repo in [Vercel](https://vercel.com)
3. Add environment variable: `DATABASE_URL`
4. Deploy ✓

---

## Color Palette

- **Navy**: `#112864`
- **White**: `#FFFFFF`
- All other shades are navy with opacity (`navy/8`, `navy/40`, etc.)

## Fonts

- **Unbounded** — headings and display
- **Raleway** — labels, nav, UI elements
- **Inter** — body text
