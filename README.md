# Abigail Lehr — Founder // Marketer // Software Developer (AI-Augmented)

A React + TypeScript portfolio for Abigail Lehr—digital marketer and web specialist with a founder mindset. Curious, self-directed, and motivated by learning how things work end to end.

**Highlights:**
- Scaled a political campaign website to 25k+ monthly visitors
- Increased engagement by ~47% through content, UX, and SEO improvements
- Drove a 20% lift in leads via custom landing pages and analytics optimization
- Saved teams 10+ hours per week through automation and smarter systems
- Improved internal efficiency by ~30% by refining tools and processes

**Contact:** United States | ajlehr123@gmail.com | [LinkedIn](https://linkedin.com/in/abigaillehr) | [abigaillehr.com](https://abigaillehr.com) | [seaforthstrategies.com](https://seaforthstrategies.com) | [GitHub](https://github.com/SeaForthStrategies)

## Tech Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui** + **Framer Motion**
- **React Router** for SPA navigation
- **next-themes** for light/dark mode

## Project Structure

```
src/
├── components/
│   ├── portfolio/     # Portfolio-specific (Hero, Navbar, Projects, etc.)
│   ├── ui/            # shadcn components
│   └── theme-provider.tsx
├── pages/             # Route pages (Home, About, Portfolio, etc.)
├── data/              # Work manifest, project data
├── hooks/             # Shared hooks
└── lib/               # Utilities
public/
├── work/              # Portfolio assets (manifest-driven gallery)
└── favicon, headshot, etc.
```

## Setup (Before Deploy)

1. **OG Image**: Add `og-image.png` (1200×630px) to `/public` for social sharing previews.
2. **Contact Form**: Create a form at [Formspree](https://formspree.io), then set `VITE_FORMSPREE_FORM_ID` in `.env` (see `.env.example`).
3. **Testimonials**: Edit `src/data/testimonials.ts` with real client/colleague quotes.

## Development

```bash
pnpm install
pnpm dev
```

## Build & Deploy

```bash
pnpm build
```

- **Vercel**: Connect repo → auto-deploys on push
- **GitHub Pages**: Set `VITE_BASE_PATH=/Abigail-Lehr-Resume/` in build env

## Scripts

| Script   | Description        |
|----------|--------------------|
| `pnpm dev`   | Start dev server (port 8080) |
| `pnpm build` | Production build    |
| `pnpm preview` | Preview production build |
| `pnpm lint`   | Run ESLint          |
