/**
 * Single source of truth for work experience.
 * Used by About (full) and AboutPreview (quick glance).
 */
export type RoleStep = {
  role: string;
  period: string;
  promoted?: boolean;
};

export type ExperienceRole = {
  title: string;
  company: string;
  location: string;
  period: string;
  periodShort: string;
  intro: string;
  bullets: string[];
  /** Promotion/career progression timeline within this company */
  roleTimeline?: RoleStep[];
  /** Reason for leaving (e.g. "Still consulting", "Budget cuts, volunteered to leave for career growth") */
  reasonLeft?: string;
};

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    title: "Campaign Digital Marketing & Design Lead",
    company: "John Franklin for Supervisor 2026",
    location: "San Diego, CA",
    period: "October 2025 – Present",
    periodShort: "2025 – Present",
    intro: "Running digital for a political campaign-web, email, content, and social.",
    bullets: [
      "Digital outreach: 47% increase in online voter engagement",
      "Built campaign site from scratch; 25k monthly visitors, 8% conversion",
      "Designed 150+ assets and social posts; policy content that got shared 32% more",
      "A/B tested email and web; open rates up 12%, bounce down 15%",
    ],
  },
  {
    title: "Founder",
    company: "SeaForth Strategies",
    location: "California",
    period: "March 2020 – Present (6 years)",
    periodShort: "2020 – Present",
    intro: "Custom websites for small businesses-I use Cursor, Next.js, Vercel, and GitHub.",
    bullets: [
      "Started agency; web design and branding for 8+ clients",
      "Mentored interns on Next.js and digital strategy",
      "Built fast, secure sites on Next.js + Vercel; strong Lighthouse scores",
      "Custom landing pages + GA4; client leads up 20%",
      "AI tools (Cursor, LLMs) cut project time ~30%",
    ],
  },
  {
    title: "Marketing Coordinator",
    company: "1031 Capital Solutions",
    location: "San Marcos, CA",
    period: "June 2024 – June 2025",
    periodShort: "2024 – 2025",
    intro: "Promoted from Admin to Marketing Coordinator in a month; ran marketing and biz dev.",
    reasonLeft: "Budget cuts; volunteered to leave for career growth.",
    roleTimeline: [
      { role: "Admin", period: "June 2024" },
      { role: "Marketing Coordinator", period: "July 2024 – June 2025", promoted: true },
    ],
    bullets: [
      "Planned 4–8 investor events/month; handled vendors and guests",
      "Overhauled CRM; sales pipeline visibility up 20%",
      "Built email automations; saved team 10+ hrs/week",
      "Designed flyers and templates that made investment concepts easy to grasp",
    ],
  },
  {
    title: "Marketing & Events Manager",
    company: "Toothpicks Catering",
    location: "East Troy, WI",
    period: "April 2020 – January 2026 (5 years 10 months)",
    periodShort: "2020 – 2026",
    intro: "Marketing and ops for a busy catering company-brand, web, social, and big events.",
    reasonLeft: "Still consulting. Trained team and set up automations so the company can run without me.",
    roleTimeline: [
      { role: "Events & Marketing", period: "April 2020 – 2022" },
      { role: "Marketing & Events Manager", period: "2022 – Jan 2026", promoted: true },
    ],
    bullets: [
      "Ran all marketing: website, social, brand",
      "Events for 500+ guests; coordinated teams and staffing",
      "Client lifecycle from first call to post-event follow-up",
      "Tightened planning workflows so we could hit deadlines under pressure",
    ],
  },
];
