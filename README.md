# Al-Mas Advisory website

Multi-page Next.js (App Router) site for Al-Mas Advisory, under Sharq Afriqiya General Traders Limited.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before launch

- Replace placeholder email, WhatsApp number and year in `lib/site.ts`.
- Replace the marked placeholders on `/about` (registration number, team, office address) and `/services` (prices).
- Wire an email provider in `app/api/contact/route.ts` (see the TODO there).
