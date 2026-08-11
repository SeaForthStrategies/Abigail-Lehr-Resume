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
};

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    title: "Media Manager",
    company: "Italic USA / Oren Klaff",
    location: "Carlsbad, CA",
    period: "March 2026 - Present",
    periodShort: "2026 - Present",
    intro: "Media, content, and growth support across brand accounts and digital initiatives.",
    bullets: [
      "Lead content planning, publishing, and community engagement across brand social accounts",
      "Keep media output consistent across multiple properties while supporting audience growth",
      "Support growth marketing work that improves brand visibility and engagement",
    ],
  },
  {
    title: "Co-Founder & Marketing Engineer",
    company: "SeaForth Strategies",
    location: "California (Remote)",
    period: "March 2020 - Present",
    periodShort: "2020 - Present",
    intro: "Building digital products and the brands, funnels, automation, and growth systems behind them.",
    bullets: [
      "Lead product development and growth work from concept through launch",
      "Build and ship full-stack digital products while shaping brand, UX, content, and go-to-market strategy",
      "Own AI-assisted development, automation, analytics, conversion optimization, SEO/AEO, and growth experiments",
      "Create landing pages, tracking systems, and campaign assets that connect marketing work to measurable outcomes",
    ],
  },
  {
    title: "Marketing Engineer Lead (Campaign)",
    company: "John Franklin for Supervisor 2026",
    location: "San Diego, CA",
    period: "October 2025 - April 2026",
    periodShort: "2025 - 2026",
    intro: "Six-month campaign contract covering web development, digital marketing, social, events, analytics, and outreach.",
    bullets: [
      "Led digital outreach that contributed to a 47% increase in online voter engagement",
      "Designed, developed, and optimized the campaign website, scaling traffic to 25,000 monthly visitors with an 8% conversion rate",
      "Produced 150+ digital assets, social posts, and branded graphics, increasing social shares by 32%",
      "Managed social media strategy, publishing, event promotion, and real-time content creation",
      "Ran A/B tests across email and web, improving open rates by 12% and reducing bounce rate by 15%",
    ],
  },
  {
    title: "Marketing Coordinator",
    company: "1031 Capital Solutions",
    location: "San Marcos, CA",
    period: "June 2024 - June 2025",
    periodShort: "2024 - 2025",
    intro: "Promoted from Administrative Assistant to Marketing Coordinator; supported marketing, events, CRM, and reporting.",
    roleTimeline: [
      { role: "Administrative Assistant", period: "June 2024" },
      { role: "Marketing Coordinator", period: "July 2024 - June 2025", promoted: true },
    ],
    bullets: [
      "Planned and executed 4-8 investor and recruiting events per month, managing logistics, vendors, and guest experience",
      "Built and maintained CRM pipelines, improving visibility into candidate and investor engagement by 20%",
      "Automated outreach workflows and scheduling, saving 10+ hours per week in manual coordination",
      "Built structured reporting that helped leadership see which events and programs drove the strongest outcomes",
    ],
  },
  {
    title: "Marketing Director",
    company: "Toothpicks Catering",
    location: "East Troy, WI (Remote)",
    period: "September 2021 - June 2025",
    periodShort: "2021 - 2025",
    intro: "Marketing leadership for a catering company, spanning brand, web, social, client experience, and large events.",
    roleTimeline: [
      { role: "Marketing Intern (Growth & Events)", period: "Jan 2015 - Sep 2016" },
      { role: "Marketing Coordinator", period: "Sep 2016 - Sep 2018", promoted: true },
      { role: "Senior Marketing Manager", period: "Sep 2018 - Sep 2021", promoted: true },
      { role: "Marketing Director", period: "Sep 2021 - Jun 2025", promoted: true },
    ],
    bullets: [
      "Directed website management, social media, brand identity, and day-to-day marketing",
      "Executed events for 500+ guests, coordinating multi-department teams and staffing logistics",
      "Managed the client lifecycle from initial consultation through post-event follow-up",
      "Streamlined planning workflows so high-pressure events could run on tight timelines",
    ],
  },
];
