# Personal Portfolio Website Audit

## Audit metadata

- Audit date: 2026-07-11
- Repository: `husanaulakh/Portfolio-website`
- Branch: `main`
- Commit at audit start: `2a06091abc4a944997c362b76bcffc1896b2a28e`
- Framework: Next.js 15.2.3 App Router
- Language: TypeScript / TSX
- Package manager: npm with `package-lock.json`
- Runtime: Node.js 22.21.0
- Deployment target: Standard Next.js host (to be confirmed)
- Lead agent: Codex
- Audit status: Updated through 2026-07-12; Resend integration, developer preview mode, email suggestions, and validation complete

## Executive summary

The site is a functioning Next.js portfolio with home, about, projects, work-experience, contact, project-detail, and not-found routes. The baseline production build succeeded, but type checking initially failed and the build was configured to suppress type/lint failures. Those issues were fixed. The local preview is running at http://localhost:9002.

The largest remaining launch concerns are incomplete contact delivery, placeholder imagery for several projects, missing owner-approved canonical production URL/social preview asset, and unresolved transitive dependency vulnerabilities. Personal content was not invented.

## Overall scorecard

| Area | Initial score | Final score | Notes |
|---|---:|---:|---|
| Completeness | 6/10 | 7/10 | Core sections/routes exist; resume, evidence, and legal/contact delivery need owner input |
| Code quality | 5/10 | 7/10 | Type errors fixed; legacy commented blocks and HTML-string content remain |
| Design and UX | 7/10 | 7/10 | Coherent system; homepage still contains temporary “whack a mole” copy |
| Accessibility | 6/10 | 7/10 | Labels and semantics present; manual WCAG audit remains |
| SEO | 4/10 | 6/10 | Metadata, Open Graph basics, favicon, and robots added; canonical/domain/social image pending |
| Performance | 6/10 | 6/10 | Static routes and optimized images used; Spline/client UI need measurement |
| Security | 5/10 | 6/10 | No secrets found; header hardened; contact endpoint lacks delivery/rate limiting |
| Maintainability | 5/10 | 6/10 | Understandable app; dependency drift and commented-out data remain |
| Production readiness | 5/10 | 6/10 | Build/routes pass; contact and dependency work block strong sign-off |

## Repository overview

Next.js App Router application. App code is under `src/app`, reusable UI under `src/components`, project content under `src/data`, images under `public/images`, and AI/Genkit code under `src/ai`. The checkout had extensive pre-existing tracked modifications at audit start; they were preserved.

## Architecture map

- Root layout: `src/app/layout.tsx`
- Routes: home, about, projects, project detail, work experience, contact
- API: `src/app/api/contact/route.ts`
- Shared navigation: `src/components/layout/NavigationBar.tsx`
- UI primitives: `src/components/ui/*`
- Data: `src/data/projects.ts`, `src/lib/constants.ts`
- Styling: Tailwind CSS and `src/app/globals.css`
- Forms: React Hook Form + Zod
- External services: Spline CDN and Genkit/Google AI development flows
- No explicit CI or hosting manifest found

## Route and page inventory

| Route | Result |
|---|---|
| `/`, `/about`, `/projects`, `/work-experience`, `/contact` | 200 |
| `/projects/[slug]` generated pages | 200 |
| `/api/contact` | Present; delivery simulated |
| `/robots.txt` | 200 |
| Unknown route | 404 |

## Portfolio content inventory

Present: name, positioning, about, skills, education, work/volunteer experience, projects, contact email, GitHub, LinkedIn, location, navigation, favicon, and not-found route.

Needs owner confirmation: approved title, resume/CV, project repositories/demos, verified metrics/dates, production domain, social preview, privacy/legal copy, and contact provider.

## Findings summary

| ID | Severity | Area | Status | Title |
|---|---|---|---|---|
| AUDIT-001 | P1 | Build | Fixed | TypeScript failed for App Router params and Spline element |
| AUDIT-002 | P1 | Build | Fixed | Build suppressed type and lint failures |
| AUDIT-003 | P1 | Contact | Needs owner input | Contact endpoint simulates delivery and logs personal data |
| AUDIT-004 | P1 | Dependencies | Open | npm audit reports high/critical transitive vulnerabilities |
| AUDIT-005 | P2 | SEO | Fixed | Robots and Open Graph basics were missing |
| AUDIT-006 | P2 | Content | Needs owner input | Placeholder visuals and claims need verification |
| AUDIT-007 | P2 | Maintainability | Open | Commented-out project records and HTML strings remain |
| AUDIT-008 | P2 | Tooling | Fixed | Obsolete interactive next lint script |
| AUDIT-009 | P2 | Security | Open | Contact endpoint lacks rate limiting |

## Detailed findings

### AUDIT-001: TypeScript failed for App Router params and custom Spline element

- **Severity:** P1
- **Status:** Fixed
- **Area:** Build reliability
- **Files:** `src/app/projects/[slug]/page.tsx`, `src/types/spline-viewer.d.ts`
- **Detected by:** Lead baseline check
- **Confidence:** High
- **Safe to auto-fix:** Yes

#### Finding

Type checking failed because Next App Router params are Promise-based in generated types, and TypeScript had no intrinsic declaration for `spline-viewer`.

#### Impact

The repository could not pass type checking.

#### Evidence

Initial `npm run typecheck` reported TS2339 for `spline-viewer`; generated types then reported the params mismatch.

#### Resolution

Awaited route params and added the narrow custom-element declaration.

#### Validation

`npm run typecheck` passes.

### AUDIT-002: Build suppressed type and lint failures

- **Severity:** P1
- **Status:** Fixed
- **Area:** Build reliability
- **Files:** `next.config.ts`
- **Detected by:** Lead baseline check
- **Confidence:** High
- **Safe to auto-fix:** Yes

#### Finding

Next configuration ignored TypeScript and ESLint errors during production builds.

#### Impact

A green build could conceal launch defects.

#### Resolution

Removed both suppression settings and disabled the unnecessary X-Powered-By header.

#### Validation

`npm run build` passes with type validation.

### AUDIT-003: Contact endpoint simulates delivery and logs personal data

- **Severity:** P1
- **Status:** Needs owner input
- **Area:** Contact/privacy
- **Files:** `src/app/api/contact/route.ts`
- **Detected by:** Lead review
- **Confidence:** High
- **Safe to auto-fix:** No

#### Finding

The endpoint returns success without sending anything and logs names, emails, subjects, and message bodies.

#### Impact

Visitors may believe messages were delivered; logs contain unnecessary personal data.

#### Recommended fix

Choose a server-side provider, remove PII logging, add abuse controls, and return an honest error/configuration state until delivery is active.

#### Resolution

Deferred because provider, sender, recipient, and privacy requirements require owner input.

### AUDIT-004: Dependency vulnerabilities

- **Severity:** P1
- **Status:** Open
- **Area:** Dependencies/security
- **Files:** `package.json`, `package-lock.json`
- **Detected by:** npm audit
- **Confidence:** High
- **Safe to auto-fix:** No

#### Finding

Baseline `npm audit --omit=dev` reported 45 vulnerabilities: 3 critical, 12 high, 29 moderate, and 1 low. Some fixes require breaking upgrades.

#### Recommended fix

Review direct dependency ownership and upgrade in a dedicated change, beginning with supported Next 15 patches and Genkit compatibility.

#### Resolution

Deferred to avoid blind `npm audit fix --force`.

### AUDIT-005: Missing robots/Open Graph basics

- **Severity:** P2
- **Status:** Fixed
- **Area:** SEO
- **Files:** `src/app/layout.tsx`, `src/app/robots.ts`
- **Detected by:** Lead review
- **Confidence:** High
- **Safe to auto-fix:** Yes

#### Resolution

Added robots metadata, localhost-safe metadata base, and Open Graph title/description. Production canonical/domain and social image remain owner-dependent.

#### Validation

Build generated `/robots.txt`; smoke test returned 200.

### AUDIT-006: Placeholder visuals and claims need verification

- **Severity:** P2
- **Status:** Needs owner input
- **Area:** Content
- **Files:** `src/data/projects.ts`
- **Detected by:** Lead review
- **Confidence:** High
- **Safe to auto-fix:** No

#### Finding

Several projects use `placehold.co` images and descriptions contain quantitative claims requiring owner verification.

#### Resolution

Needs approved images, repositories/demos, dates, and evidence.

### AUDIT-007: Legacy commented-out project records and HTML strings

- **Severity:** P2
- **Status:** Open
- **Area:** Maintainability
- **Files:** `src/data/projects.ts`, `src/app/projects/[slug]/page.tsx`
- **Detected by:** Lead review
- **Confidence:** High
- **Safe to auto-fix:** No

#### Finding

The data file contains prior commented versions and descriptions render with `dangerouslySetInnerHTML`.

#### Recommended fix

Remove obsolete blocks, model sections as structured data, and render with React or sanitize at a trust boundary.

### AUDIT-008: Obsolete lint script

- **Severity:** P2
- **Status:** Fixed
- **Area:** Tooling
- **Files:** `package.json`
- **Detected by:** Baseline check
- **Confidence:** High
- **Safe to auto-fix:** Yes

#### Resolution

Changed `next lint` to deterministic `tsc --noEmit`. A true ESLint migration remains future work.

### AUDIT-009: Contact abuse controls missing

- **Severity:** P2
- **Status:** Open
- **Area:** Security
- **Files:** `src/app/api/contact/route.ts`
- **Detected by:** Lead review
- **Confidence:** Medium
- **Safe to auto-fix:** No

#### Finding

The API has input limits and a honeypot but no platform/provider rate limiting.

#### Recommended fix

Add deployment/provider rate limiting, managed spam protection, and monitoring once the contact provider is selected.

## Dependency review

| Package | Installed | Action | Risk | Status |
|---|---:|---|---|---|
| next | 15.2.3 | Review supported patch upgrade | High | Open |
| react / react-dom | 18.3.1 range | Keep pending framework plan | Medium | Accepted risk |
| zod | 3.24.2 range | Keep pending lockfile plan | Low | Accepted risk |

## Dependency research sources

- `npm audit --omit=dev` advisories and lockfile graph
- Next.js build output and generated App Router types
- Official package release notes are required before dependency upgrades

## Changes implemented

- Created this report.
- Added Spline custom-element typing.
- Updated dynamic project params for Next App Router.
- Removed build validation suppression.
- Made lint script deterministic.
- Added robots route and basic Open Graph metadata.
- Disabled X-Powered-By.
- Added safe `.env.example`.
- Preserved pre-existing tracked changes.

## Files changed

- `PORTFOLIO_AUDIT.md`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/app/robots.ts`
- `src/types/spline-viewer.d.ts`
- `next.config.ts`
- `package.json`
- `.env.example`

## Validation commands and results

| Check | Command | Initial result | Final result |
|---|---|---|---|
| Install | `npm ci` | Pass, 738 packages | Pass |
| Lint | `npm run lint` | Interactive prompt | Deterministic type validation passes |
| Type check | `npm run typecheck` | Fail | Pass |
| Build | `npm run build` | Passed while suppressing validation | Pass with validation |
| Audit | `npm audit --omit=dev` | 45 vulnerabilities | Same; deferred |
| Route smoke | curl localhost:9002 | Not recorded | Expected routes 200; unknown route 404 |
| Dev preview | Next dev port 9002 | Running | Running after clean restart |

## Accessibility results

Static review found labelled navigation, form labels, semantic headings, and image alt text. Manual keyboard, screen-reader, contrast, reduced-motion, and mobile touch-target checks remain.

## SEO results

Added Open Graph basics and robots. Production canonical URL, social preview image, and Person/Project schema remain pending.

## Performance results

Build reports about 100 kB shared first-load JS and static generation for primary pages. Lighthouse/Core Web Vitals were not run. Spline is external client-side work and should be measured.

## Security results

No committed secrets were found in reviewed configuration. `.env.example` contains names only. Contact logging/delivery and rate limiting remain unresolved.

## Deployment readiness

Install: `npm ci`; build: `npm run build`; start: `npm run start`. Domain, email provider, rate limiting, and CI still need specification.

## Missing owner information

- Approved professional title/positioning
- Production domain/canonical URL
- Resume/CV
- Project repositories/live demos
- Verified metrics and dates
- Contact provider, sender, recipient, and privacy policy
- Social preview image and analytics preferences

## Accepted risks

- Dependency remediation deferred due to breaking fixes.
- Manual accessibility and Lighthouse testing not completed.
- Project descriptions remain repository-controlled HTML strings.

## Model usage and escalation log

| Task | Initial model tier | Escalated? | Reason |
|---|---:|---|---|
| Repository mapping | Lightweight | No | Straightforward inventory |
| Baseline and safe fixes | Lightweight | No | Localized type/build issues |
| Dependency review | Lightweight | No | Recorded audit output; no risky upgrade |
| Final regression | Lightweight | No | Build and route checks sufficient |

## Remaining work

1. Configure real contact delivery and abuse controls.
2. Remediate dependency advisories in a dedicated upgrade.
3. Replace placeholder visuals and verify metrics.
4. Add production canonical/social metadata.
5. Run manual accessibility/responsive/Lighthouse review.
6. Add CI checks.

## Final launch checklist

- [x] Audit report complete
- [x] Routes and major features reviewed
- [x] Safe fixes validated
- [x] Dependency decisions documented
- [x] Production build passes
- [ ] Contact delivery configured
- [ ] Dependency vulnerabilities remediated or accepted
- [ ] Owner content/domain confirmed
- [ ] Manual accessibility/performance review complete
- [x] Final route regression check complete


## Resend contact integration update

Implemented the contact delivery flow using the official `resend` package.

- Backend: `src/app/api/contact/route.ts`
- Frontend: `src/components/contact/ContactForm.tsx`
- Configuration: `.env.example`
- Secret handling: reads `process.env.RESEND_API_KEY` server-side only; no `NEXT_PUBLIC_` exposure
- Sender: `Portfolio Contact <onboarding@resend.dev>`
- Recipient: `CONTACT_EMAIL_RECIPIENT` when configured, otherwise the existing portfolio email
- Reply-To: visitor email
- Subject: `New Portfolio Contact from {Name}`
- Body: name, email, and message
- Spam readiness: existing honeypot preserved; optional `turnstileToken` accepted for future Turnstile verification
- Failure behavior: 400 validation, 502 Resend failure, 503 missing configuration, 500 unexpected server error
- Frontend behavior: prevents refresh, disables while submitting, shows loading/success/error toasts, resets after success

Validation after integration:

- `npm install resend`: passed
- `npm run typecheck`: passed
- `npm run build`: passed
- Server-only scan: no API key or `RESEND_API_KEY` reference in `.next/static`


## Contact email formatting and developer preview update

- Added a branded HTML email with escaped visitor content, dark portfolio header, reply card, readable message section, and plain-text fallback.
- Added local-only developer controls gated by `NEXT_PUBLIC_CONTACT_DEV_TOOLS=true` and `CONTACT_DEV_MODE=true`.
- The Preview only toggle validates the submission and returns success without calling Resend.
- Production ignores the client preview request unless the server-side development guard is enabled.
- Verified the preview endpoint response: `{"message":"Preview mode: email was not sent.","preview":true}`.
- The local preview is available at http://localhost:9002/contact.

## Cleanup verification (2026-07-12)

- Removed Firebase, Genkit, Google AI, and Firebase Studio configuration and dependencies.
- Removed the unused AI work-history rewrite flow and simplified the local draft editor.
- Removed nine unused template UI components after repository-wide reference checks.
- Typecheck: passed.
- Production build: passed.
- Local preview: passed at http://localhost:9002.
- npm audit: 8 remaining transitive advisories (4 high, 4 moderate), primarily in Next.js/tooling dependencies; no Firebase/Genkit/Google Cloud chain remains.


## Complete implementation log

### 1. Repository setup and baseline

- Cloned `husanaulakh/Portfolio-website` into `/home/husan/personal website`.
- Installed dependencies with `npm ci`.
- Identified the application as a Next.js App Router project using TypeScript, Tailwind CSS, React Hook Form, and Zod.
- Started the local development preview on port 9002.
- Recorded the initial repository state and findings in this audit document.
- Preserved pre-existing tracked working-tree modifications rather than resetting them.

### 2. Build and framework fixes

- Added TypeScript support for the custom `<spline-viewer>` element.
- Updated `src/app/projects/[slug]/page.tsx` for Promise-based Next.js App Router params.
- Removed `ignoreBuildErrors` and `ignoreDuringBuilds` from `next.config.ts`.
- Replaced the obsolete interactive `next lint` script with deterministic TypeScript validation.
- Disabled the `X-Powered-By` response header.
- Added `src/app/robots.ts`.
- Added basic Open Graph metadata and metadata base configuration.
- Added safe environment-variable documentation in `.env.example`.

### 3. Resend contact integration

- Added the official `resend` npm package.
- Replaced simulated email delivery with a real Resend API call.
- Reads `RESEND_API_KEY` only from server-side `process.env`.
- Sends from `Portfolio Contact <onboarding@resend.dev>`.
- Sends to `CONTACT_EMAIL_RECIPIENT`, defaulting to the existing portfolio email.
- Uses the visitor’s email as `Reply-To`.
- Uses the subject format `New Portfolio Contact from {Name}`.
- Sends both HTML and plain-text email versions.
- Escapes visitor-controlled content before inserting it into HTML.
- Removes personal-data logging from the normal contact submission path.
- Returns clear HTTP statuses:
  - 400 for invalid input
  - 502 for Resend delivery failure
  - 503 when the server key is missing
  - 500 for unexpected server errors

### 4. Contact form behavior

- Preserved the existing form design and UI components.
- Kept client-side React Hook Form + Zod validation.
- Added server-side validation as a second protection layer.
- Trims whitespace from name, email, and message.
- Prevents page refresh on submit.
- Disables the submit button while sending.
- Displays a loading spinner.
- Displays success and error toast messages.
- Resets the form after a successful live send.
- Preserves the existing honeypot field.
- Leaves an optional `turnstileToken` field in the backend schema for future CAPTCHA integration.

### 5. Developer preview mode

- Created local-only `.env.local` with restricted permissions.
- Configured:
  - `CONTACT_DEV_MODE=true`
  - `NEXT_PUBLIC_CONTACT_DEV_TOOLS=true`
- Added a developer-only toggle to the contact form:
  - `Preview only`: validates and processes the form without sending an email.
  - `Live email`: sends through Resend.
- The server only honors preview mode when `CONTACT_DEV_MODE=true`.
- Production will not trust the client toggle unless the server-side development guard is enabled.
- Verified the preview response:
  `{"message":"Preview mode: email was not sent.","preview":true}`.

### 6. Email autocomplete suggestions

- Added native browser email suggestions to the email field.
- Suggestions are generated from the visitor’s typed local part.
- Example: typing `husan` offers common domains such as Gmail, Outlook, Hotmail, iCloud, and Yahoo.
- Added `autocomplete="email"`.
- Suggestions do not expose the portfolio owner’s email and do not replace normal validation.
- The form still cannot verify whether a mailbox exists; that would require an email-confirmation workflow.

### 7. Email presentation

The Resend email now includes:

- Branded dark header
- Portfolio contact label
- Visitor name in the title
- Reply-directly-to card
- Readable message body
- Portfolio footer
- Escaped HTML content
- Plain-text fallback for clients that do not render HTML

### 8. Validation and preview checks

- `npm ci`: passed.
- `npm install resend`: passed.
- `npm run typecheck`: passed.
- `npm run lint`: deterministic TypeScript validation passes.
- `npm run build`: passed with Next.js type validation enabled.
- Route smoke tests passed for the main pages, project detail pages, contact page, and robots route.
- Unknown routes return 404.
- Local contact page returns 200.
- Controlled Resend submission returned `Message sent successfully!`.
- Developer preview submission returned a successful no-send response.
- Client bundle scan found no API key or `RESEND_API_KEY` reference in `.next/static`.
- `.env.local` is ignored by Git and has permission mode 600.

### 9. Current local usage

- Contact preview: http://localhost:9002/contact
- Main preview: http://localhost:9002
- Developer toggle is visible locally because `NEXT_PUBLIC_CONTACT_DEV_TOOLS=true`.
- Use Preview only while testing form behavior.
- Use Live email only when an actual Resend message should be delivered.

### 10. Remaining work

- Rotate the Resend API key because it was pasted into the conversation.
- Configure a verified production sending domain when ready.
- Add rate limiting or provider-side abuse controls.
- Complete dependency vulnerability remediation.
- Replace placeholder project visuals.
- Verify project metrics and owner-provided claims.
- Add production canonical URL and social preview image.
- Perform manual keyboard, screen-reader, responsive, and Lighthouse testing.

## Local preview verification (2026-07-12)

- Runtime: Node 24.18.0 / npm 11.16.0
- Command: npm run dev
- URL: http://localhost:9002
- Verified HTTP 200 responses for /, /about, /projects, /work-experience, /contact, and /robots.txt.
- Preview log contains legacy next/image warnings in project cards; these do not prevent the app from running and are a follow-up cleanup item.

## Detached preview restart (2026-07-12)

- Restarted the development server as a detached WSL process under Node 24.18.0.
- Confirmed http://localhost:9002 responds with HTTP 200 after the shell exits.
