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
    title: "Growth & Digital Marketing Lead (Campaign)",
    company: "John Franklin for Supervisor 2026",
    location: "San Diego, CA",
    period: "October 2025 – Present",
    periodShort: "2025 – Present",
    intro: "Running digital for a political campaign—web, email, content, and social.",
    bullets: [
      "Digital Strategy: Led comprehensive digital outreach, resulting in a 47% increase in online voter engagement",
      "Web Development: Built and optimized campaign website, scaling traffic to 25,000 monthly visitors with an 8% conversion rate",
      "Content Creation: Designed 150+ brand assets and social posts, translating complex policy into digestible content that increased shares by 32%",
      "Performance Optimization: Executed A/B testing for email and web, increasing open rates by 12% and reducing bounce rates by 15%",
    ],
  },
  {
    title: "Founder & Growth Marketing Consultant",
    company: "SeaForth Strategies",
    location: "California",
    period: "March 2020 – Present (6 years)",
    periodShort: "2020 – Present",
    intro: "We build custom websites using AI-powered development tools (Cursor) and modern infrastructure—GitHub for collaboration, Vercel for fast, reliable deployment.",
    bullets: [
      "Agency Leadership: Founded a digital agency providing full-stack web design and branding for 8+ small businesses",
      "Team Management: Recruited and mentored interns in modern web development (Next.js) and digital strategy",
      "Technical Execution: Developed high-speed, secure websites using Next.js and Vercel, achieving top-tier performance scores",
      "Lead Generation: Increased client leads by 20% via custom landing pages and GA4 tracking",
      "Efficiency: Integrated AI tools (Cursor & LLMs) to accelerate project delivery by 30% without compromising quality",
    ],
  },
  {
    title: "Marketing & Growth Operations Manager",
    company: "Toothpicks Catering",
    location: "East Troy, WI",
    period: "April 2020 – January 2026 (5 years 10 months)",
    periodShort: "2020 – 2026",
    intro: "Marketing and ops for a busy catering company—brand, web, social, and large-scale events.",
    reasonLeft: "Still consulting. Trained team and set up automations so the company can run without me.",
    roleTimeline: [
      { role: "Marketing Associate (Growth & Events)", period: "Jan 2015 – Sep 2020" },
      { role: "Marketing & Growth Operations Manager", period: "Apr 2020 – Jan 2026", promoted: true },
    ],
    bullets: [
      "Brand Direction: Directed all marketing efforts, including website management, social media, and brand identity",
      "Large-Scale Operations: Executed events for 500+ guests, managing multi-departmental teams and staffing logistics",
      "Client Relations: Managed the full client lifecycle from initial consultation through post-event follow-up",
      "Process Improvement: Streamlined internal planning workflows to deliver high-pressure events on strict schedules",
    ],
  },
  {
    title: "Growth Marketing Coordinator",
    company: "1031 Capital Solutions",
    location: "San Marcos, CA",
    period: "June 2024 – June 2025",
    periodShort: "2024 – 2025",
    intro: "Promoted from Administrative Assistant → Growth Marketing Coordinator in 1 month; ran day-to-day marketing and business development.",
    reasonLeft: "Career growth opportunities.",
    roleTimeline: [
      { role: "Administrative Assistant", period: "June – Aug 2024" },
      { role: "Growth Marketing Coordinator", period: "July 2024 – June 2025", promoted: true },
    ],
    bullets: [
      "Event Logistics: Planned 4–8 high-value investor events per month, managing all vendors and guest relations",
      "CRM Operations: Overhauled the company database, increasing sales pipeline visibility by 20%",
      "Automation: Developed automated email workflows, saving the team 10+ hours per week in manual tasks",
      "Visual Communication: Designed financial marketing flyers and templates that simplified complex investment concepts",
    ],
  },
];
