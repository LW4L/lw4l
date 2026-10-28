# LW4L — Lone Wolf For Life

A responsive, dark-editorial community website built with **Next.js 15**, **TypeScript**, **Supabase**, and custom CSS. Includes the **original uploaded LW4L logo** unchanged.

## Included

- Cinematic homepage and responsive navigation
- Free email/password registration and sign-in
- Private member dashboard
- Four official Ghost Mode challenges
- Up to three active challenges per member
- Custom challenges and editable daily check-ins
- Optional reflections and check-in history
- Profile customization: symbol, dark theme, username, bio, motto
- Supabase SQL schema with row-level security (RLS)

## 1. Upload to GitHub

1. Download and unzip the project.
2. In your GitHub organization, create a **new repository** (for example `lw4l-website`).
3. Upload **the contents of the unzipped `lw4l-website` folder**, including `app`, `components`, `lib`, `public`, `supabase`, `package.json`, etc. Do not upload the ZIP itself as the only repository file.
4. Commit the files.

## 2. Set up Supabase (required for accounts and saved progress)

1. Create a free Supabase project.
2. Open **SQL Editor** and run the entire `supabase/schema.sql` file once on a fresh project.
3. Under **Project Settings → API / API Keys**, find the **Project URL** and **publishable key** (or legacy `anon` public key).
4. Under **Authentication → URL Configuration**, set your live site URL and add `http://localhost:3000/**` for local testing. Add your deployment URL to redirect allow-list as needed.
5. Under **Authentication → Providers → Email**, decide whether email confirmation is required (recommended for production). If enabled, set up production SMTP before public launch; the default mail service is rate-limited.
6. **Never put a Supabase service-role/secret key in `NEXT_PUBLIC_` variables.** Only the publishable/anon key belongs there. Database privacy depends on RLS, already defined in the SQL file.

## 3. Run locally (optional)

Install Node.js 20+ and run:

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-publishable-or-anon-key
```

Then run:

```bash
npm run dev
```

Open `http://localhost:3000`.

## 4. Deploy on Vercel

1. Create a Vercel account and import your GitHub organization repository.
2. Framework preset: **Next.js** (auto-detected).
3. Add both environment variables from step 3 in **Project Settings → Environment Variables**.
4. Deploy, then update your Supabase authentication site URL/redirect configuration with your real Vercel domain.
5. Future pushes to GitHub will trigger new deployments.

A custom domain is **not required** to start; Vercel provides a deployment URL. GitHub itself is for source code, not your custom domain.

## Important limitations (MVP)

- The public homepage is viewable immediately; account and tracker features require Supabase configuration.
- This is a first working implementation, **not a production security audit**. Test sign-up, confirmation email, RLS, mobile layouts, and account flows before announcing a public launch.
- Challenge daily tasks are the same each day; there are no reminders, push notifications, social feeds, or public leaderboards.
- Members can currently mark challenges completed when the duration has elapsed; there is no pause or delete control yet.
- The homepage preview is illustrative; the dashboard and Ghost Mode pages use real Supabase data.
- Original logo is stored in `public/lw4l-original-logo.png` exactly as provided. The website uses a black background to match it.

## Brand rules

- Keep the original metallic silver LW4L logo with the **red 4** unchanged.
- Use silver, graphite, and white for interface emphasis — not red.
- Any future people photography must remain strictly faceless.
- Brand identity: quiet, fearless, independent; independence is **not** isolation.

## Next iterations

Email recovery, stronger account protections, more granular challenge analytics, accessible motion testing, account deletion/export, legal pages and privacy disclosures, production monitoring, and advanced profile visuals.
