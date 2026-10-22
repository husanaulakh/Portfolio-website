# Husan Aulakh — Engineering Portfolio

A Next.js 15 portfolio showcasing software engineering, robotics, machine learning, and venture projects.

**Live:** https://portfolio-website-mu-lime-32.vercel.app

## Stack

- Next.js App Router, React 18, TypeScript, Tailwind CSS, Radix UI
- Resend for server-side contact emails
- Static typed project case studies and generated project routes
- SEO metadata, `sitemap.xml`, `robots.txt`, and generated social image

## Develop

Requires Node.js 24 and npm 11.

```bash
npm ci
npm run dev
```

Set `RESEND_API_KEY`, `CONTACT_EMAIL_RECIPIENT`, and `CONTACT_EMAIL_SENDER` in `.env.local` for contact delivery. For developer-only preview mode, both `NEXT_PUBLIC_CONTACT_DEV_TOOLS=true` and `CONTACT_DEV_MODE=true` are required. Never expose `RESEND_API_KEY` through a `NEXT_PUBLIC_` variable. The API includes a honeypot and a best-effort instance-level limiter; configure edge/provider abuse protection for distributed deployments.

Set `NEXT_PUBLIC_SITE_URL` to the production origin if you move to a custom domain.

## Checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

The `lint` script runs the pinned Biome CLI through npm's package runner. `test` uses the Node.js built-in test runner. GitHub Actions runs all checks on pull requests and pushes to main, with a non-blocking dependency-security audit.

## Content editing

- Project data: `src/data/projects.ts`, a single typed list
- Work experience: `src/components/work-experience/WorkExperienceAccordion.tsx`
- Shared navigation: `src/lib/constants.ts`
- Theme: `src/app/globals.css`

Case studies are structured as text and bullet points rendered by React; they do not inject HTML. Placeholder project visuals are clearly labeled concept illustrations, not screenshots.

## Deployment

Deploy on a Next.js-compatible host and configure production contact variables. Verify all quantitative career/project claims before using the site as a formal resume.
