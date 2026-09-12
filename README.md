# Husan Aulakh — Portfolio

A modern, interactive portfolio website showcasing expertise in software, robotics, hardware, and strategy. Built with Next.js, featuring dynamic project pages, responsive design, and integrated contact forms.

**Live Demo:** [portfolio-website-mu-lime-32.vercel.app](https://portfolio-website-mu-lime-32.vercel.app)

## Overview

This portfolio presents a comprehensive view of work across multiple disciplines including software engineering, electrical engineering, mechanical engineering, and product strategy. The site features:

- Interactive project showcase with 3D graphics
- Dynamic project detail pages
- Work experience timeline
- Skills and education sections
- Contact form with email integration
- Responsive design for all devices
- Dark/light theme support

## Tech Stack

### Frontend
- **Framework**: [Next.js 15.5](https://nextjs.org/) - React-based framework with App Router and Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Type-safe form validation
- **Visualization**: [Recharts](https://recharts.org/) - Interactive charts for skills
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **3D Graphics**: [Spline](https://spline.design/) - Interactive 3D elements

### Backend & Services
- **Email Service**: [Resend](https://resend.com/) - Transactional email delivery
- **AI Integration**: [Google Genkit](https://genkit.ai/) - For development workflows

### Development Tools
- **Node.js**: 24 LTS (required)
- **npm**: 11+ (required)
- **Package Management**: npm with lockfile pinning

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout with metadata
│   │   ├── page.tsx                      # Home/landing page
│   │   ├── about/page.tsx                # About section
│   │   ├── projects/
│   │   │   ├── page.tsx                  # Projects showcase
│   │   │   └── [slug]/page.tsx           # Dynamic project detail pages
│   │   ├── work-experience/page.tsx      # Work history
│   │   ├── contact/page.tsx              # Contact form
│   │   ├── api/contact/route.ts          # Contact form API endpoint
│   │   ├── robots.ts                     # SEO robots configuration
│   │   ├── not-found.tsx                 # 404 page
│   │   └── globals.css                   # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   └── NavigationBar.tsx         # Persistent navigation
│   │   └── ui/                           # Reusable UI components
│   ├── data/
│   │   ├── projects.ts                   # Project database
│   │   └── constants.ts                  # Configuration constants
│   ├── lib/
│   │   └── utils.ts                      # Utility functions
│   └── ai/                               # Genkit development flows
├── public/
│   ├── images/                           # Portfolio images
│   └── favicon/                          # Favicon assets
├── docs/
│   └── blueprint.md                      # Design specifications
├── PORTFOLIO_AUDIT.md                    # Comprehensive audit report
├── package.json
└── README.md
```

## Features

### 🏠 Landing Page
- Hero section with messaging "Let's make it move"
- Interactive 3D shelf graphic (Spline)
- Call-to-action buttons for navigation
- Animated transitions

### 📁 Projects Showcase
- Featured projects carousel with 3D graphics
- Project cards with images, tags, and descriptions
- Dynamic project detail pages generated from data
- Full project descriptions and links to repositories/demos

### 💼 Work Experience
- Vertical accordion timeline of professional roles
- Company name, title, and date information
- Bullet-point summaries of responsibilities and impact
- Interactive expand/collapse interface

### 👤 About Section
- Two-column layout with personal image and details
- Professional mission statement
- Quick facts about current interests and projects
- Skills visualization with interactive charts

### 🎯 Skills & Education
- Software engineering proficiency levels
- Electrical engineering competencies
- Mechanical engineering expertise
- Education timeline with awards and certifications

### 📧 Contact Form
- Form validation with React Hook Form + Zod
- Email delivery via Resend API
- Developer preview mode for testing
- Honeypot field for spam prevention
- Error handling and user feedback

## Getting Started

### Prerequisites
- **Node.js**: 24.x LTS
- **npm**: 11+
- Resend API key (for contact form - optional for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/husanaulakh/Portfolio-website.git
   cd Portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (optional)
   ```bash
   cp .env.example .env.local
   ```
   
   Then add your Resend API key and email configuration:
   ```env
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL_RECIPIENT=you@example.com
   CONTACT_EMAIL_SENDER=Portfolio <onboarding@resend.dev>
   ```
   
   **Note**: These are server-side only. Never expose secrets through `NEXT_PUBLIC_` prefixed variables.

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:9002](http://localhost:9002) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack on port 9002 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run lint` | Run ESLint validation |

## Configuration

### Contact Form Setup

The contact form uses Resend for email delivery. To enable:

1. Create a Resend account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=your_key_here
   CONTACT_EMAIL_RECIPIENT=your-email@example.com
   CONTACT_EMAIL_SENDER=Portfolio <contact@yourdomain.com>
   ```

### Development Preview Mode

The contact form includes a developer preview mode when `NEXT_PUBLIC_CONTACT_DEV_TOOLS=true`:
- **Preview Mode**: Simulates form submission without sending emails (for testing UI/UX)
- **Live Mode**: Actually sends emails via Resend

Access the contact form at `/contact` and toggle between modes in the header.

## Routes & Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero and CTA |
| `/about` | About | Personal information and quick facts |
| `/projects` | Projects | Featured projects showcase |
| `/projects/[slug]` | Project Detail | Dynamic project pages with full details |
| `/work-experience` | Work Experience | Timeline of professional roles |
| `/contact` | Contact | Contact form with email integration |
| `/robots.txt` | SEO | Search engine crawling rules |
| `404` | Not Found | Custom 404 page |

## API Endpoints

### POST `/api/contact`
Handles contact form submissions and sends emails via Resend.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss..."
}
```

**Response:** JSON with success/error status

## Styling System

- **Theme**: Light/dark mode support with CSS variables
- **Colors**: Primary, secondary, accent, muted color palette
- **Typography**: Serif headlines, sans-serif body text
- **Spacing**: Consistent spacing scale for alignment
- **Components**: Modular Radix UI components with Tailwind styling

## Deployment

### Deploy to Vercel (Recommended)

```bash
npm run build
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables for Production

Set these in your Vercel project settings:
- `RESEND_API_KEY` - Your Resend API key
- `CONTACT_EMAIL_RECIPIENT` - Email to receive contact form submissions
- `CONTACT_EMAIL_SENDER` - Verified sending email address

## Performance & Optimization

- Static site generation for fast page loads
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized Spline 3D graphics loading
- Responsive design for all device sizes

## Accessibility

- Semantic HTML structure
- Form labels and ARIA attributes
- Keyboard navigation support
- Color contrast compliance
- Alt text for images

## Security

- No hardcoded secrets in repository
- Environment variables for sensitive data
- Server-side API route for email (hides API key)
- Honeypot field for spam prevention
- Content Security Policy headers

## SEO

- Open Graph metadata
- Dynamic page titles and descriptions
- Robots.txt configuration
- Semantic HTML markup
- Mobile-responsive design
- Favicon and branding assets

## Known Issues & Future Improvements

See [`PORTFOLIO_AUDIT.md`](./PORTFOLIO_AUDIT.md) for detailed audit findings.

### Completed
✅ TypeScript type checking fixed
✅ Build validation enabled
✅ Open Graph metadata added
✅ Robots.txt configuration
✅ Resend contact integration

### Pending
⏳ Production domain configuration
⏳ Placeholder images replacement
⏳ Rate limiting for contact form
⏳ Dependency vulnerability remediation
⏳ Manual accessibility testing
⏳ Social preview image

## Verification Checklist

Before launching to production:

```bash
# Check types
npm run typecheck

# Build for production
npm run build

# Check dependencies
npm audit

# Run local preview
npm run dev
```

## License

Private and proprietary.

## Support & Questions

For issues or questions about the portfolio, please open an issue on GitHub.

---

**Built with ❤️ by Husan Aulakh**

Engineering Physics student • Software • Robotics • Hardware • Strategy