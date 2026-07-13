# Husan Aulakh — Portfolio

A Next.js portfolio for Husan Aulakh, an Engineering Physics student and multidisciplinary builder working across software, robotics, hardware, and strategy.

## Requirements

- Node.js 24 LTS
- npm 11+

The project pins its intended Node version in `.node-version` and declares the runtime in `package.json`.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:9002](http://localhost:9002).

## Production build

```bash
npm run build
npm run start
```

## Contact form configuration

The contact form sends email through Resend. Create `.env.local` with:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL_RECIPIENT=you@example.com
CONTACT_EMAIL_SENDER=Portfolio <onboarding@resend.dev>
```

These values are server-side only. Never expose secrets through variables prefixed with `NEXT_PUBLIC_`.

## Verification

```bash
npm run typecheck
npm run build
npm audit
```

The local preview runs on port `9002`. The project audit and preview history are documented in [`PORTFOLIO_AUDIT.md`](./PORTFOLIO_AUDIT.md).