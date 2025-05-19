# **App Name**: Neon Canvas

## Core Features:

- Navigation Bar: Persistent navigation with active page indicator, ensuring smooth transitions between sections using a fixed, left-edge vertical nav in a semi-opaque rounded rectangle, and a neon-green active dot.
- Project Carousel: Carousel component for displaying featured projects, featuring 3D render on a shelf, project title, tag line, and two buttons with keyboard & swipe controls, lazy-loading, keyboard-accessible.
- Work history: AI tool to assist in writing and organizing a description about professional history, that will populate the work experience section. Includes an 'Rewrite with AI' button that opens a modal prompting for edits & saves to local draft.
- Contact Form: Contact form with validation (HTML + JS) + honeypot + optional reCAPTCHA, providing a streamlined way for visitors to get in touch. On submit, calls a Next.js API route that sends email via SendGrid.
- Dynamic Project Pages: Dynamic project pages generated from local data (data/*.json and MDX), enabling easy updates and maintenance of the portfolio. Includes title + meta, rich content, sidebar shelf graphic, and a 'Back to Works' link.
- Skills & Education Section: Interactive bar charts or icon grids showing proficiency levels for Software, EE, and ME skills, and a horizontal timeline of education + awards.
- Landing Page: Landing page with a full-screen hero section, featuring the H1 "Let's make it move." (first line normal, second italic), a centred floating 3D shelf graphic, and two CTA buttons.
- Work Experience Page: Work Experience page featuring a vertical accordion listing each role from CV, with company name, title, dates in the header, and a bullet summary of responsibilities & impact in the body.
- About Page: About page with title "About Me", a two-column layout featuring a collage image on the left and personal information (name, mission statement, bulleted 'Quick Facts') on the right.

## Style Guidelines:

- Background color: Near-black (#030803) providing a dark backdrop that will contrast the text and focal elements and add some visual depth. The subtle tint comes from the primary color below.
- Primary color: Saturated green (#81FF53), which brings the vibrance from the prompt, and stays clear of cliché choices while maintaining the correct design-historical reference for the art.
- Accent color: A vivid lime green (#B1FF53), creates emphasis and highlights important UI elements. Together, these color decisions will support both dark mode and an eye catching aesthetic.
- Serif headings, such as Playfair Display, paired with sans-serif body text like Inter, for clear hierarchy and readability.
- Use simple, outlined icons in neon green to match the accent color.
- Full-width pages with a 1200px max-width container for centered content and consistent spacing.
- Subtle animations on hover for navigation items and buttons, with scroll-triggered fade-ins for sections, to enhance user experience via Intersection Observer.