import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

type ProjectStatus = "Production" | "Client Work" | "Internal" | "In Development" | "Experiment" | "Concept";

interface Project {
  title: string;
  status: ProjectStatus;
  period: string;
  summary: string;
  group: string;
  categories: string[];
  image?: string;
  challenge: string;
  role: string;
  strategy: string;
  execution: string[];
  techStack: string[];
  growthStack: string[];
  results: string[];
  demonstrates: string[];
  github?: string;
  link?: string;
}

const PROJECTS: Project[] = [
  {
    title: "NDSES Website Platform",
    status: "Production",
    period: "2026",
    summary: "A full-stack web and business-systems platform using a custom Next.js frontend with WordPress/ACF as the CMS.",
    group: "Software & AI",
    categories: ["Software", "Web Development", "SEO/AEO", "Analytics", "Marketing Technology"],
    challenge: "The project needed to work as more than a redesign: it had to support service-area structure, CMS usability, lead generation, technical SEO, analytics, deployment, and future payment integration.",
    role: "Worked across requirements translation, technical architecture, frontend development, CMS structure, SEO/AEO planning, analytics, QA, hosting/staging decisions, and PayEngine integration planning.",
    strategy: "Use WordPress and ACF where the business needed editable content, then pair it with a custom Next.js frontend so the public experience could be fast, structured, conversion-focused, and easier to evolve.",
    execution: [
      "Planned the Next.js + WordPress + ACF architecture",
      "Structured service and geographic-area content for SEO, AEO, and user navigation",
      "Worked on responsive frontend patterns, lead-generation UX, and technical QA",
      "Planned emergency/announcement banner functionality, dynamic calendar functionality, and a dumpster-size guide",
      "Accounted for GA4, Google Search Console, conversion tracking, hosting, staging, backups, Cloudflare, and PayEngine API/payment integration",
    ],
    techStack: ["Next.js", "React", "WordPress", "ACF", "Vercel", "Flywheel", "Cloudflare", "REST APIs"],
    growthStack: ["SEO/AEO", "GA4", "Search Console", "Conversion Tracking", "Lead Gen UX", "SEO Migration"],
    results: [
      "Production platform work connecting website architecture, CMS operations, SEO, analytics, and business systems",
      "Future-ready structure for payments, announcements, calendars, and location/service expansion",
    ],
    demonstrates: ["Full-Stack Web Architecture", "CMS Strategy", "Technical SEO", "Business Systems Thinking"],
    github: "https://github.com/SeaForthStrategies/NDSESMockup",
  },
  {
    title: "Premium Manufacturing Brand Growth Infrastructure",
    status: "Production",
    period: "2026 - Present",
    summary: "Confidential client work building digital growth infrastructure across positioning, content systems, partner marketing, analytics, and website strategy.",
    group: "Growth Systems",
    categories: ["Growth", "GTM", "SEO/AEO", "Analytics", "Brand"],
    challenge: "The brand needed repeatable digital systems that could support multiple audiences, partner programs, campaign planning, content production, and performance visibility.",
    role: "Worked across brand positioning, digital marketing, growth strategy, landing pages, analytics, partner marketing, marketing operations, and content-production workflows.",
    strategy: "Connect brand positioning to repeatable content, partner enablement, landing pages, conversion tracking, and SEO/AEO so marketing efforts create both demand and long-term search value.",
    execution: [
      "Supported website strategy, landing pages, campaign planning, and digital marketing operations",
      "Worked across analytics, CRM, SEO tooling, and conversion-tracking concepts",
      "Helped shape partner marketing, co-marketing, backlinks, and geographic market strategy",
      "Turned brand positioning into repeatable content and review workflows",
    ],
    techStack: ["Analytics", "CRM", "SEO Tooling", "Conversion Tracking", "Landing Pages"],
    growthStack: ["Partner Marketing", "SEO/AEO", "Paid/Organic Coordination", "Content Architecture"],
    results: [
      "Built public-safe digital growth infrastructure rather than one-off social posts",
      "Created systems to support partner acquisition, content production, and measurable campaign activity",
    ],
    demonstrates: ["Growth Infrastructure", "Marketing Technology", "Partner Marketing", "Technical Marketing"],
  },
  {
    title: "Koda Time-Tracking System",
    status: "Production",
    period: "2026",
    summary: "A Next.js-powered time-tracking system with automated hour calculations, bot-protected authentication, and email distribution workflows.",
    group: "Software & AI",
    categories: ["Software", "Product", "Web Development"],
    challenge: "The product needed to make time entry and hour visibility simple while protecting access and reducing manual calculation work.",
    role: "Built a minimalist web application around task-level transparency, automated hour calculations, authentication, and email distribution.",
    strategy: "Keep the product focused: clean task-level inputs, automated calculations, secure access, and communication workflows without unnecessary dashboard noise.",
    execution: [
      "Built a Next.js application for time tracking and task-level visibility",
      "Implemented automated hour calculations",
      "Added bot-protected authentication and dynamic email distribution patterns",
    ],
    techStack: ["Next.js", "TypeScript", "Authentication", "Email Workflows", "Vercel"],
    growthStack: ["Product UX", "Workflow Automation", "Operational Efficiency"],
    results: [
      "Public GitHub project with a live Vercel deployment",
      "Shows ability to build practical internal tooling with secure workflow considerations",
    ],
    demonstrates: ["Next.js Product Development", "Workflow Automation", "Authentication", "Operational Tooling"],
    github: "https://github.com/SeaForthStrategies/Koda",
    link: "https://koda-inky.vercel.app",
  },
  {
    title: "SignalAI Getting Started",
    status: "Experiment",
    period: "2026",
    summary: "A lightweight getting-started project for an analytics API concept that explains why product metrics changed in plain language.",
    group: "Software & AI",
    categories: ["Software", "AI", "Analytics", "Product"],
    challenge: "Product teams often wait on dashboards or data support to understand why metrics moved. This concept explores a simpler API-driven explanation layer.",
    role: "Created a public getting-started project and product framing for an analytics API concept.",
    strategy: "Frame analytics around plain-language metric-change explanations rather than another dashboard.",
    execution: [
      "Built a simple public project page for the SignalAI concept",
      "Defined the developer-facing product promise around one API call and plain-language analysis",
      "Connected analytics, product, and AI positioning into a technical proof-of-concept",
    ],
    techStack: ["HTML", "API Concept", "Vercel"],
    growthStack: ["Product Positioning", "Analytics", "Developer Messaging"],
    results: [
      "Public GitHub project with a live deployment",
      "Demonstrates product thinking around AI-assisted analytics workflows",
    ],
    demonstrates: ["AI Product Positioning", "Analytics UX", "Developer-Facing Messaging", "Concept Validation"],
    github: "https://github.com/SeaForthStrategies/signalAIgettingstarted",
    link: "https://signalaigettingstarted.vercel.app",
  },
  {
    title: "John Franklin Political Campaign Digital Platform",
    status: "Production",
    period: "Oct 2025 - Apr 2026",
    summary: "An integrated web development, growth, and campaign-strategy project for a local political campaign.",
    group: "Growth Systems",
    categories: ["Growth", "Web Development", "Analytics", "Brand"],
    image: "/work/websites/issues-page-mayor-franklin.png",
    challenge: "The campaign needed a digital platform that could explain policy, support event promotion, convert visitors, and keep up with real-time campaign communication.",
    role: "Owned digital strategy across website development, landing pages, social strategy, event promotion, photography/content coordination, campaign assets, analytics, and optimization.",
    strategy: "Pair a clear campaign website with fast content production, event promotion, analytics, and A/B testing so the digital operation could keep improving during the campaign.",
    execution: [
      "Designed, developed, and optimized campaign website pages and landing experiences",
      "Produced campaign graphics, digital assets, social content, and event-promotion materials",
      "Managed publishing, real-time content, conversion optimization, analytics, and A/B testing",
    ],
    techStack: ["Website Development", "Landing Pages", "Analytics", "A/B Testing"],
    growthStack: ["Digital Strategy", "Campaign Strategy", "Event Promotion", "Social Strategy", "CRO"],
    results: [
      "47% increase in online voter engagement",
      "Approximately 25,000 monthly website visitors",
      "Approximately 8% conversion rate",
      "150+ campaign and digital assets",
      "32% increase in social sharing",
      "12% improvement in email open rates and 15% lower website bounce rate",
    ],
    demonstrates: ["Integrated Digital Campaigns", "Web + Growth Execution", "Content Systems", "Performance Optimization"],
    github: "https://github.com/SeaForthStrategies/franklinsup",
    link: "https://franklin4sup.vercel.app",
  },
  {
    title: "Financial Webinar Launch Funnel",
    status: "Client Work",
    period: "2026",
    summary: "Confidential client work on a webinar acquisition funnel and launch-operations dashboard connecting landing pages, CRM workflows, reporting, and follow-up automation.",
    group: "Growth Systems",
    categories: ["Growth", "Marketing Technology", "Analytics", "GTM"],
    challenge: "The funnel needed to move people from campaign touchpoint to registration, attendance, follow-up, and performance reporting, while the team also needed a clearer launch operating system.",
    role: "Worked on funnel architecture, webinar landing pages, registration flow, CRM workflows, reporting, conversion tracking, and a launch dashboard surface.",
    strategy: "Treat the webinar as a measurable funnel, not a standalone event: source tracking, registration, attendance quality, follow-up, segmentation, campaign analysis, and launch-plan visibility all needed to connect.",
    execution: [
      "Built or supported webinar landing pages and registration flows",
      "Connected webinar tooling, CRM workflows, lead routing, email follow-up, and reporting",
      "Analyzed funnel quality, attendee behavior, and opportunities to improve conversion",
      "Built a Next.js launch-operations dashboard with metrics, asset/workflow statuses, search/filtering, and workspace persistence",
    ],
    techStack: ["Next.js", "TypeScript", "Landing Pages", "CRM Workflows", "UTM Tracking", "Vercel"],
    growthStack: ["Campaign Coordination", "Lead Routing", "Email Automation", "Audience Segmentation", "Conversion Tracking"],
    results: [
      "Created a clearer view of launch health, funnel status, assets, workflows, blockers, and follow-up opportunities",
      "Analysis focused on funnel quality, conversion points, and follow-up opportunities rather than raw registration volume alone",
    ],
    demonstrates: ["Funnel Architecture", "Launch Ops", "Marketing Ops", "Campaign Analytics", "Lifecycle Follow-Up"],
  },
  {
    title: "SEO + AEO AI Agent Experiment",
    status: "Experiment",
    period: "2026",
    summary: "Claude-based AI agents for SEO/AEO strategy, comparing generic web-informed output with an agent grounded in my own frameworks and process.",
    group: "Software & AI",
    categories: ["AI", "SEO/AEO", "Product", "Marketing Technology"],
    challenge: "Generic SEO/AEO agents often produce broad advice. The experiment tested whether expert-grounded context could produce more useful strategic output.",
    role: "Created, prompted, grounded, evaluated, and iterated on multiple Claude-based AI agents for SEO/AEO workflows.",
    strategy: "Use context engineering and custom knowledge grounding so the agent could reason from a stronger strategic base instead of repeating generic online guidance.",
    execution: [
      "Built one agent using broader generic SEO/AEO information",
      "Built another agent grounded in my own SEO/AEO knowledge, frameworks, and strategic process",
      "Compared output quality through internal testing and iteration",
      "Used the experiment to refine prompt structure, knowledge grounding, and evaluation criteria",
    ],
    techStack: ["Claude", "AI Agents", "Prompt Engineering", "Knowledge Grounding", "Context Engineering"],
    growthStack: ["SEO Strategy", "AEO Strategy", "AI Workflow Design", "Evaluation"],
    results: [
      "In my internal evaluation, the expertise-grounded agent performed substantially better than the generic version",
      "When referencing the rough 90% improvement, I treat it as an internal evaluation, not an independent benchmark",
    ],
    demonstrates: ["AI-Assisted Strategy", "Agent Design", "Human Expertise + AI", "SEO/AEO Systems"],
  },
  {
    title: "Marketing Analytics & Tracking Infrastructure",
    status: "Client Work",
    period: "2025 - Present",
    summary: "Tracking and reporting systems that connect websites, forms, campaigns, CRMs, and follow-up activity.",
    group: "SEO & Analytics",
    categories: ["Analytics", "Marketing Technology", "Growth", "SEO/AEO"],
    challenge: "Marketing work is hard to improve when traffic, source, conversion, and follow-up data live in separate places or are not tracked cleanly.",
    role: "Configured and interpreted analytics/tracking infrastructure across campaign, website, CRM, SEO, and paid-media workflows.",
    strategy: "Set up enough tracking to make decisions: source, behavior, conversion, attribution, and follow-up quality.",
    execution: [
      "Worked across GA4, Google Tag Manager, Google Search Console, Meta Pixel, Microsoft Clarity, and HubSpot",
      "Supported UTM architecture, event tracking, conversion tracking, lead attribution, funnel analysis, KPI dashboards, and campaign reporting",
      "Used data to identify funnel problems, content performance trends, conversion opportunities, acquisition patterns, and SEO opportunities",
    ],
    techStack: ["GA4", "GTM", "Search Console", "Meta Pixel", "Microsoft Clarity", "HubSpot"],
    growthStack: ["Attribution", "UTM Architecture", "Funnel Analytics", "KPI Reporting", "SEO Reporting"],
    results: [
      "Reusable tracking infrastructure for campaign and website decision-making",
      "Clearer visibility into where leads come from and where funnel drop-off happens",
    ],
    demonstrates: ["Analytics Implementation", "Data-Informed Optimization", "Marketing Technology", "Funnel Diagnosis"],
  },
  {
    title: "SeaForth Strategies Venture Studio",
    status: "Internal",
    period: "2020 - Present",
    summary: "A consumer venture studio and product-development company spanning software, AI-assisted development, product strategy, brand, GTM, and growth.",
    group: "Product & Brand",
    categories: ["Software", "Product", "AI", "Growth", "GTM"],
    challenge: "Early-stage ideas need more than code: they need positioning, UX, technical decisions, acquisition thinking, launch strategy, and iteration.",
    role: "Co-founder and builder across full-stack product development, AI-assisted software development, product strategy, UX, brand, SEO/AEO, analytics, conversion optimization, and community development.",
    strategy: "Operate across the full lifecycle - idea, strategy, UX, development, integrations, analytics, launch, marketing, and optimization - so projects move without waiting on separate handoffs.",
    execution: [
      "Developed consumer product concepts, prototypes, brand systems, and launch plans",
      "Used AI-assisted software development for faster research, planning, coding, and iteration",
      "Built positioning, GTM strategy, acquisition paths, analytics plans, and growth loops around product ideas",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GitHub", "Vercel", "AI-Assisted Development"],
    growthStack: ["Product Strategy", "GTM", "SEO/AEO", "Analytics", "Community Growth", "Launch Strategy"],
    results: [
      "Demonstrates ability to take projects from concept through development and growth planning",
      "Links technical product thinking with business, brand, and acquisition work",
    ],
    demonstrates: ["Founder Mindset", "Product Development", "AI-Assisted Building", "Growth Strategy"],
    github: "https://github.com/SeaForthStrategies/sfswebsite",
    link: "https://seaforthstrategies-seaforthstrategies.vercel.app",
  },
  {
    title: "TurboStack Arena",
    status: "Internal",
    period: "2026",
    summary: "A kid-friendly SaaS startup browser game where players dodge bugs, collect boosts, grow startup value, buy upgrades, and sign sponsor contracts.",
    group: "Software & AI",
    categories: ["Software", "Product", "Web Development"],
    challenge: "The project needed to turn an abstract startup-building concept into a playable browser experience with progression, controls, state, and a clear loop.",
    role: "Built the browser app experience across gameplay flow, UI, progression systems, local persistence, and deployment.",
    strategy: "Use a simple arcade loop to make startup concepts playful: movement, risk, boosts, cash, fans, hype, upgrades, sponsor contracts, and replayable progression.",
    execution: [
      "Built a five-lane arcade arena with keyboard and button controls",
      "Added vehicle toggles, cash, fans, hype, level, combo, and startup value stats",
      "Created an upgrade shop for speed, style, scale, and hype",
      "Implemented sponsor-contract progression and local save progress with browser storage",
    ],
    techStack: ["TypeScript", "Browser App", "Local Storage", "Vercel"],
    growthStack: ["Consumer UX", "Game Loop", "Product Concept", "Social Preview"],
    results: [
      "Public GitHub project with a live Vercel deployment",
      "Shows ability to build an interactive product surface, not just static marketing pages",
    ],
    demonstrates: ["Interactive Product Development", "Game UX", "Stateful Browser Apps", "Consumer Product Thinking"],
    github: "https://github.com/SeaForthStrategies/asherapp",
    link: "https://asherapp.vercel.app",
  },
  {
    title: "Hey Beautiful",
    status: "In Development",
    period: "In Development",
    summary: "A consumer dating technology product being developed through SeaForth Strategies.",
    group: "Product & Brand",
    categories: ["Product", "Software", "AI", "Growth", "Brand"],
    challenge: "Dating products need a differentiated concept, trusted UX, strong positioning, thoughtful monetization, and growth loops before launch.",
    role: "Working across product ideation, concept development, UX, product positioning, brand development, software architecture, MVP planning, user acquisition, growth loops, launch strategy, and monetization thinking.",
    strategy: "Develop the product as both a software system and a growth/product strategy project, with the MVP, audience, brand, and acquisition mechanics considered together.",
    execution: [
      "Defined product concept, positioning, and MVP direction",
      "Explored UX flows, software architecture, launch strategy, and acquisition loops",
      "Used AI-assisted development and research workflows to accelerate planning and iteration",
    ],
    techStack: ["Product Architecture", "MVP Planning", "AI-Assisted Development", "UX"],
    growthStack: ["User Acquisition", "Growth Loops", "Launch Strategy", "Monetization Thinking", "Brand Development"],
    results: [
      "Product is in development; not presented as launched",
      "Shows ability to connect consumer software thinking with positioning and growth strategy",
    ],
    demonstrates: ["Consumer Product Strategy", "MVP Planning", "Brand + Software", "Growth Loops"],
  },
  {
    title: "Personal Life Recap Product",
    status: "Concept",
    period: "Concept",
    summary: "A consumer application concept for creating a Spotify Wrapped-style recap of your life.",
    group: "Product & Brand",
    categories: ["Product", "AI", "Software", "Growth"],
    challenge: "Personal data is scattered across photos, health, music, calendars, and activity tools, but people want meaningful summaries without manual work.",
    role: "Developed the concept around product strategy, data integrations, AI personalization, privacy-aware UX, API thinking, and sharing mechanics.",
    strategy: "Design around weekly, monthly, and annual memory summaries while treating privacy, integrations, personalization, and shareability as core product requirements.",
    execution: [
      "Mapped potential data sources such as photos, health/fitness, music, calendars, and personal activity",
      "Outlined weekly recaps, monthly recaps, annual recaps, milestones, memory summaries, pattern insights, and shareable life summaries",
      "Explored product architecture, personalization, AI-generated insights, and growth mechanics",
    ],
    techStack: ["API Thinking", "Data Integrations", "AI", "Personalization", "Privacy-Aware UX"],
    growthStack: ["Consumer Product Strategy", "Sharing Mechanics", "Retention Loops", "Launch Strategy"],
    results: [
      "Concept/product exploration; not presented as launched",
      "Shows how I think through consumer product architecture and growth from the earliest stage",
    ],
    demonstrates: ["Product Ideation", "Integration Strategy", "AI UX", "Privacy-Aware Product Design"],
  },
  {
    title: "Salt & Serendipity",
    status: "In Development",
    period: "In Development",
    summary: "A community and experiential brand focused on real-world connection, events, and a broader consumer technology ecosystem.",
    group: "Product & Brand",
    categories: ["Product", "Growth", "Brand", "GTM"],
    challenge: "Community products need more than a brand: they need real-world programming, audience acquisition, partnerships, economics, and a path into a larger product ecosystem.",
    role: "Worked on brand creation, community strategy, event development, growth strategy, partnerships, sponsorship strategy, merchandising concepts, and product ecosystem thinking.",
    strategy: "Use physical events as both the community experience and the acquisition channel for a broader consumer tech ecosystem.",
    execution: [
      "Developed brand and community positioning",
      "Explored event concepts, sponsorship strategy, merchandising, partnerships, and event economics",
      "Mapped how offline experiences could feed acquisition, retention, content, and future product opportunities",
    ],
    techStack: ["Product Ecosystem Strategy", "Community UX", "Concept Development"],
    growthStack: ["Community-Led Growth", "Partnerships", "Sponsorship Strategy", "Audience Acquisition", "Event Economics"],
    results: [
      "In-development community and consumer product ecosystem; not presented as fully launched",
      "Shows ability to connect offline experiences with digital product and acquisition strategy",
    ],
    demonstrates: ["Community Strategy", "Experiential GTM", "Brand Ecosystems", "Audience Development"],
    github: "https://github.com/SeaForthStrategies/Salt-Serendipity",
    link: "https://saltandserendipity.vercel.app",
  },
  {
    title: "1031 Capital Solutions Marketing Operations",
    status: "Client Work",
    period: "Jun 2024 - Jun 2025",
    summary: "Marketing coordination, CRM process improvement, event operations, automation, reporting, and lead visibility for a financial-services team.",
    group: "Growth Systems",
    categories: ["Marketing Technology", "Analytics", "Growth", "GTM"],
    image: "/work/websites/Financial Services Website home.png",
    challenge: "The team needed cleaner visibility into candidates, investors, events, and follow-up activity while reducing manual coordination work.",
    role: "Worked on CRM processes, marketing coordination, automation, workflow improvement, reporting, and event logistics.",
    strategy: "Improve the operational system behind marketing: CRM structure, workflows, scheduling, reporting, and repeatable event support.",
    execution: [
      "Planned and executed 4-8 investor and recruiting events per month",
      "Built and maintained CRM pipelines for candidate and investor engagement",
      "Automated outreach workflows and scheduling",
      "Created reporting that helped leadership see which events and programs drove the strongest outcomes",
    ],
    techStack: ["CRM Systems", "Automation", "Reporting", "Landing Pages"],
    growthStack: ["Event Marketing", "Lead Visibility", "Email Workflows", "Investor Engagement"],
    results: [
      "Improved pipeline visibility by approximately 20%",
      "Saved approximately 10+ hours per week through workflow improvements",
    ],
    demonstrates: ["CRM Operations", "Marketing Automation", "Event Funnels", "Operational Improvement"],
    github: "https://github.com/SeaForthStrategies/1031CS-Website-2025",
    link: "https://1031capitalsolutions.com",
  },
  {
    title: "Marketing Funnel & Automation Systems",
    status: "Client Work",
    period: "2025 - Present",
    summary: "Grouped technical marketing work connecting channels, websites, forms, CRMs, analytics, and follow-up systems into acquisition funnels.",
    group: "Growth Systems",
    categories: ["Marketing Technology", "Growth", "Analytics", "GTM"],
    challenge: "Across initiatives, the hard part is often not one landing page or email - it is making the whole acquisition system connect and report clearly.",
    role: "Worked across HubSpot, GoHighLevel/LeadConnector, Zapier, webinar systems, lead routing, CRM workflows, nurture sequences, UTM architecture, landing pages, retargeting, and KPI reporting.",
    strategy: "Build funnels as systems: traffic source, landing page, form, CRM, routing, follow-up, retargeting, and reporting all need to reinforce each other.",
    execution: [
      "Connected marketing channels, websites, forms, CRMs, analytics, and follow-up systems",
      "Supported initiatives across manufacturing, financial-services, webinar, and early-stage product teams",
      "Worked on lead-source tracking, conversion tracking, nurture sequences, landing pages, and campaign reporting",
    ],
    techStack: ["HubSpot", "LeadConnector", "GoHighLevel", "Zapier", "Landing Pages", "CRM Workflows"],
    growthStack: ["Lead Routing", "Nurture Sequences", "UTM Architecture", "Retargeting", "KPI Reporting"],
    results: [
      "Reusable funnel operations across multiple brands and initiatives",
      "Better connection between acquisition activity, lead capture, follow-up, and reporting",
    ],
    demonstrates: ["Growth Engineering", "Marketing Automation", "Systems Integration", "Funnel Operations"],
  },
  {
    title: "Radical Surfaces Growth & Marketing Operations",
    status: "Client Work",
    period: "2026 - Present",
    summary: "Growth and marketing operations work across landing pages, website strategy, analytics, partner marketing, recruiting initiatives, and creative operations.",
    group: "Growth Systems",
    categories: ["Growth", "Marketing Technology", "Analytics", "Brand"],
    challenge: "The work needed practical systems and technical problem-solving across marketing, tracking, content, partner efforts, and campaign execution.",
    role: "Worked on landing pages, website strategy, analytics, branding, partner marketing, funnel operations, recruiting initiatives, social/content, tracking, reporting, troubleshooting, and project management.",
    strategy: "Create trackers, systems, processes, and technical solutions that make ongoing marketing work easier to execute and easier to measure.",
    execution: [
      "Built or supported landing pages, trackers, reporting processes, and campaign systems",
      "Worked across partner marketing, social/content, marketing systems, creative operations, and technical troubleshooting",
      "Helped coordinate projects so creative, analytics, web, and growth work stayed connected",
    ],
    techStack: ["Landing Pages", "Analytics", "Tracking", "Reporting", "Marketing Systems"],
    growthStack: ["Partner Marketing", "Funnel Operations", "Recruiting Campaigns", "Branding", "Project Management"],
    results: [
      "Distinct operational systems and process improvements across growth and marketing workflows",
      "Better coordination between creative execution, technical troubleshooting, and performance reporting",
    ],
    demonstrates: ["Marketing Operations", "Technical Troubleshooting", "Process Design", "Growth Systems"],
    github: "https://github.com/SeaForthStrategies/RadicalLP",
  },
  {
    title: "Partner Marketing Program",
    status: "Client Work",
    period: "2026",
    summary: "A partner-marketing systems project focused on partner acquisition, co-marketing, backlinks, lead generation, and geographic growth.",
    group: "SEO & Analytics",
    categories: ["Growth", "SEO/AEO", "Marketing Technology", "GTM"],
    challenge: "A partner ecosystem can drive both demand generation and organic-search value, but only if the landing pages, applications, content, backlinks, and enablement are connected.",
    role: "Worked around partner acquisition, partner landing pages, applications, co-marketing, backlink strategy, partner content, geographic market strategy, and lead generation.",
    strategy: "Treat partners as both a sales channel and an SEO/AEO asset: local market pages, partner proof, backlinks, and co-marketing can compound over time.",
    execution: [
      "Planned partner landing pages, applications, and enablement materials",
      "Connected geographic market strategy with backlink opportunities and partner content",
      "Supported demand generation through partner marketing and co-marketing ideas",
    ],
    techStack: ["Landing Pages", "Forms", "Tracking", "SEO Architecture"],
    growthStack: ["Partner Acquisition", "Backlink Strategy", "Co-Marketing", "Lead Generation", "Geographic Strategy"],
    results: [
      "Partner program structure designed to support both demand generation and organic-search value",
      "Clearer path from partner acquisition to market coverage and lead generation",
    ],
    demonstrates: ["Partner GTM", "SEO Strategy", "Marketing Enablement", "Demand Generation"],
  },
  {
    title: "The Social Affair / Long-Term Event Marketing",
    status: "Client Work",
    period: "Long-Term",
    summary: "Event and hospitality marketing work connecting digital acquisition with real-world experiences.",
    group: "Product & Brand",
    categories: ["Growth", "Brand", "GTM"],
    challenge: "Event brands need audience development, promotion, creative, customer acquisition, and reliable real-world execution.",
    role: "Worked across event marketing, brand development, digital marketing, social, creative, event promotion, audience development, and customer acquisition.",
    strategy: "Use digital channels to drive attention and attendance while keeping the real-world guest experience central.",
    execution: [
      "Supported creative, event promotion, audience development, and customer acquisition",
      "Applied broader event experience from hospitality and events with 500+ attendees",
      "Connected digital marketing activity with in-person event execution",
    ],
    techStack: ["Creative Production", "Event Promotion", "Digital Marketing"],
    growthStack: ["Audience Development", "Customer Acquisition", "Brand Development", "Community"],
    results: [
      "Long-term event marketing experience across digital and physical touchpoints",
      "Demonstrates ability to turn marketing into attended, real-world experiences",
    ],
    demonstrates: ["Event Marketing", "Brand Development", "Audience Acquisition", "Experiential Growth"],
    github: "https://github.com/SeaForthStrategies/thesocialaffair",
    link: "https://thesocialaffair.vercel.app",
  },
  {
    title: "The Fortier Group Website",
    status: "Production",
    period: "2026",
    summary: "A modern Next.js 16 website for an air-traffic-control training, consulting, and quality-assurance company.",
    group: "Software & AI",
    categories: ["Software", "Web Development", "Brand"],
    challenge: "The site needed a clear professional structure for a specialized aviation-services business, including public pages and a protected employee portal surface.",
    role: "Built a modern Next.js website with centralized content, reusable sections, SEO metadata patterns, responsive UI, and Vercel deployment readiness.",
    strategy: "Use a typed Next.js/Tailwind structure so business content, page sections, metadata, and deployment settings stay maintainable.",
    execution: [
      "Built pages for home, about, services, employees, and contact",
      "Used reusable UI and section components",
      "Centralized text copy and metadata patterns",
      "Prepared the project for Vercel deployment with standard Next.js build settings",
    ],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    growthStack: ["Website Strategy", "SEO Metadata", "Professional Services Positioning"],
    results: [
      "Public GitHub project with a live Vercel deployment",
      "Demonstrates modern web build structure for a professional-services website",
    ],
    demonstrates: ["Next.js Architecture", "Reusable Components", "SEO Metadata", "Vercel Deployment"],
    github: "https://github.com/SeaForthStrategies/4tagroup.com",
    link: "https://4tagroup-com.vercel.app",
  },
];

const FILTERS = ["All", "Software & AI", "Growth Systems", "SEO & Analytics", "Product & Brand"];

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Production: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "Client Work": "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  Internal: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "In Development": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Experiment: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
  Concept: "bg-zinc-700/60 text-zinc-300 border-zinc-600",
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((project) => project.group === filter);
  const [selectedTitle, setSelectedTitle] = useState(PROJECTS[0].title);
  const selectedProject = filtered.find((project) => project.title === selectedTitle) ?? filtered[0] ?? PROJECTS[0];

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    const next = cat === "All" ? PROJECTS[0] : PROJECTS.find((project) => project.group === cat);
    if (next) setSelectedTitle(next.title);
  };

  return (
    <section className="py-12 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-cyan-400/80 text-sm font-medium uppercase tracking-wider mb-2">Selected Work</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">I build digital products and the growth systems behind them.</h2>
            <p className="text-zinc-400 max-w-3xl leading-relaxed">
              These case studies show the work I do across software, AI-assisted development, product strategy, SEO/AEO, analytics, marketing technology, and growth. Public GitHub repos and Vercel deployments are linked where available.
            </p>
          </div>

          <motion.div className="flex flex-wrap gap-2 mb-8 min-w-0" layout>
            {FILTERS.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === cat ? "bg-cyan-500 text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-[380px,1fr] gap-6 items-start">
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3" layout>
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  selected={selectedProject.title === project.title}
                  onSelect={() => setSelectedTitle(project.title)}
                />
              ))}
            </motion.div>

            <ProjectDetail project={selectedProject} />
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-800 text-xs text-zinc-500 max-w-3xl break-words">
            <p>Production, client, internal, concept, and experiment labels are intentional. Metrics are included only where there is a defensible project or resume source; otherwise outcomes are described qualitatively.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({
  project,
  index,
  selected,
  onSelect,
}: {
  project: Project;
  index: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.025, type: "spring", stiffness: 100 }}
      className={`text-left rounded-2xl border p-4 backdrop-blur-sm transition-all duration-300 min-w-0 ${
        selected
          ? "border-cyan-500/50 bg-cyan-500/10 shadow-[0_0_24px_-8px_rgba(34,211,238,0.25)]"
          : "border-zinc-800/80 bg-zinc-900/60 hover:border-zinc-700"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className={`px-2 py-1 rounded-md border text-[10px] font-bold uppercase tracking-wider ${STATUS_STYLES[project.status]}`}>
          {project.status}
        </span>
        <span className="text-xs text-zinc-500">{project.period}</span>
      </div>
      <h3 className="text-base font-semibold text-white break-words">{project.title}</h3>
      <p className="text-sm text-zinc-400 mt-2 line-clamp-2">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.demonstrates.slice(0, 2).map((item) => (
          <span key={item} className="px-2 py-1 rounded-md bg-zinc-800/80 text-zinc-400 text-[11px]">
            {item}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <motion.article
      key={project.title}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm overflow-hidden min-w-0 lg:sticky lg:top-28"
    >
      {project.image && (
        <div className="aspect-[16/7] bg-zinc-950 border-b border-zinc-800/80 overflow-hidden">
          <img src={encodeURI(project.image)} alt="" className="w-full h-full object-cover object-top opacity-90" loading="lazy" decoding="async" />
        </div>
      )}
      <div className="p-5 sm:p-6 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`px-2 py-1 rounded-md border text-[10px] font-bold uppercase tracking-wider ${STATUS_STYLES[project.status]}`}>
                {project.status}
              </span>
              <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-wider">
                {project.group}
              </span>
              <span className="text-xs text-zinc-500">{project.period}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white break-words">{project.title}</h3>
          </div>
          <ProjectLinks project={project} />
        </div>

        <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">{project.summary}</p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <CaseStudyText title="Problem" body={project.challenge} />
          <CaseStudyText title="Role" body={project.role} />
          <CaseStudyText title="Approach" body={project.strategy} />
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <ListBlock title="Built / Shipped" items={project.execution.slice(0, 4)} dot="text-cyan-400" />
          <ListBlock title="Outcome" items={project.results.slice(0, 3)} dot="text-emerald-400" />
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <BadgeBlock title="Technical Stack" items={project.techStack} />
          <BadgeBlock title="Growth Stack" items={project.growthStack} />
        </div>

        <div className="mt-6">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Proves</p>
          <div className="flex flex-wrap gap-2">
            {project.demonstrates.map((item) => (
              <span key={item} className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.link) return null;
  return (
    <div className="flex gap-3 shrink-0">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-sm flex items-center gap-1">
          <Github className="w-4 h-4" /> GitHub
        </a>
      )}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-sm flex items-center gap-1">
          <ExternalLink className="w-4 h-4" /> {project.link.includes("vercel.app") ? "Vercel" : "Live Site"}
        </a>
      )}
    </div>
  );
}

function CaseStudyText({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">{title}</p>
      <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
    </div>
  );
}

function ListBlock({ title, items, dot }: { title: string; items: string[]; dot: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">{title}</p>
      <ul className="space-y-1.5 text-sm text-zinc-400">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={`${dot} shrink-0`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BadgeBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default Projects;
