import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Project {
    title: string;
    type: string;
    period: string;
    description: string;
    tags: string[];
    category: string;
    services: string[];
    scope: string[];
    outcomes: string[];
    results: string;
    github?: string;
    link?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Abigail-Lehr-Resume",
      type: "Vibe Coding • React • Vite",
      period: "2024",
      description: "This site. Built with Lovable, React, Vite, Tailwind, and Framer Motion. Deployed on Vercel.",
      tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      category: "Personal Project",
      services: ["Web Development", "UI/UX Design"],
      scope: [
        "Prototyping with Lovable",
        "Custom shadcn-ui components",
        "Framer Motion animations",
        "CI/CD via GitHub + Vercel"
      ],
      outcomes: [
        "Responsive layout",
        "99/100 Lighthouse score",
        "Skills/tools visualization",
        "Easy to update"
      ],
      results: "GitHub • Vercel",
      github: "https://github.com/SeaForthStrategies/Abigail-Lehr-Resume"
    },
    {
      title: "SeaForth Strategies Dashboard",
      type: "Web Development • Next.js",
      period: "2024",
      description: "Internal dashboard for SeaForth-client workflows and marketing analytics. Next.js + Supabase.",
      tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
      category: "Business Tools",
      services: ["Web Dev", "Database Design", "Marketing Tech"],
      scope: [
        "Next.js App Router front-end",
        "Supabase schema for clients and campaigns",
        "Auth and role-based access",
        "GA4 and Stripe API integration"
      ],
      outcomes: [
        "Centralized client data",
        "Serverless automations for recurring tasks",
        "Team collaboration up ~40%",
        "Less manual data entry"
      ],
      results: "Next.js • Supabase • Real-time Analytics"
    },
    {
      title: "Real Estate Marketing Campaigns",
      type: "Digital Marketing Specialist",
      period: "2022-2023",
      description: "Digital marketing for real estate pros-Michael Nucci Real Estate and others. Lead capture, Meta ads, email nurture campaigns.",
      tags: ["Real Estate Marketing", "Lead Capture", "Social Advertising", "CRM Integration"],
      category: "Real Estate",
      services: ["Lead Generation", "Social Media", "Marketing Technology"],
      scope: [
        "Lead capture funnels and landing pages",
        "Meta ads for listings and brand awareness",
        "Email nurturing and CRM automation",
        "Local SEO and listings management",
        "Content (video, reels) and posting cadence",
      ],
      outcomes: [
        "40+ leads per month sustained",
        "Cost per lead reduced by 22%",
        "Lead→appointment conversion at 24%",
        "Email open rate 36% and click‑through 7%",
        "Avg response time down 35% via automation",
      ],
      results: "40+ leads/month • 25% lead→appt • 80% social engagement"
    },
    {
      title: "Beauty & Wellness Brand Growth",
      type: "Social Media & Content Marketing",
      period: "2021-2023", 
      description: "Multi-brand work for Amazing Grace Salon, Lux Wellness, Luxe Wellness. Content strategy, booking integrations, visual brand-bookings and engagement up.",
      tags: ["Multi-Brand Management", "Visual Content", "Booking Optimization", "Brand Identity"],
      category: "Beauty & Wellness",
      services: ["Social Media", "Content Marketing", "Marketing Technology"],
      scope: [
        "Cross-brand content strategy and visual cohesion",
        "Always-on social and promotion calendars",
        "Booking funnel UX and integrations",
        "Influencer/UGC and review generation",
      ],
      outcomes: [
        "Client bookings +150% across focus services",
        "Instagram audience +180%",
        "Website booking conversion +22%",
        "Customer acquisition cost reduced by 18%",
      ],
      results: "+150% bookings • +180% Instagram • 90% satisfaction"
    },
    {
      title: "Service Business Marketing Optimization",
      type: "Digital Strategy Consultant",
      period: "2021-2022",
      description: "Marketing for service businesses-People MVR, CA Notary Dynamics, The Social Affair. Local SEO, social, conversion optimization.",
      tags: ["Local SEO", "Service Marketing", "Conversion Optimization", "Multi-Channel Strategy"],
      category: "Service Business",
      services: ["SEO & Local Search", "Social Media", "Performance Analytics"],
      scope: [
        "Local SEO (citations, reviews, on-page) and GMB",
        "Website CRO and form/event tracking",
        "Content calendars for social and email",
        "High-intent paid search pilots",
      ],
      outcomes: [
        "Local search impressions +62%",
        "Qualified leads +55% YoY",
        "Lead→booked appointment conversion +33%",
        "Cost per lead reduced by 21%",
      ],
      results: "+60% local search • 35% conversion • 50+ leads/month"
    }
  ];

  const mapServiceToGroup = (service: string): string => {
    const s = service.toLowerCase();
    if (s.includes("web") || s.includes("site") || s.includes("framework") || s.includes("vibe")) return "Web & Dev";
    if (s.includes("design") || s.includes("ui") || s.includes("ux")) return "UI/UX Design";
    if (s.includes("tech") || s.includes("automation") || s.includes("api") || s.includes("crm")) return "Tech & Automation";
    if (s.includes("analytic") || s.includes("ga4") || s.includes("data")) return "Data & Analytics";
    return "Web & Dev";
  };

  const condensedCategories = [
    "All", "Web & Dev", "UI/UX Design", "Tech & Automation", "Data & Analytics",
  ];

  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.services.some((s) => mapServiceToGroup(s) === filter));

  return (
    <section className="py-12 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Filter */}
          <motion.div className="flex flex-wrap gap-2 mb-10 min-w-0" layout>
            {condensedCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === cat ? "bg-cyan-500 text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                layout
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Project cards */}
          <motion.div className="space-y-6" layout initial={false}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Disclosures - compact */}
          <div className="mt-16 pt-8 border-t border-zinc-800 text-xs text-zinc-500 max-w-2xl break-words">
            <p>Metrics are aggregated across selected client projects. Results depend on budget, product–market fit, and market conditions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: index * 0.04, type: "spring", stiffness: 100 }}
      className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm overflow-hidden hover:border-cyan-500/20 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.08)] transition-all duration-300 min-w-0"
      whileHover={{ y: -2 }}
    >
      <div className="p-4 sm:p-6 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-4 min-w-0">
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-white break-words">{project.title}</h3>
            <p className="text-sm text-zinc-400 mt-0.5 break-words">{project.type}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-zinc-500">{project.period}</span>
            {(project.github || project.link) && (
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-sm flex items-center gap-1">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-sm flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> Live
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="text-zinc-400 text-sm mt-3 line-clamp-2 break-words">{project.description}</p>

        {project.results && (
          <div className="mt-3 px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 min-w-0 overflow-hidden">
            <span className="text-sm text-cyan-400 font-medium break-words">{project.results}</span>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.span>
          {expanded ? "Show less" : "View details"}
        </button>

        <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
          <div className="mt-4 pt-4 border-t border-zinc-800 space-y-4">
            <p className="text-zinc-400 text-sm">{project.description}</p>
            {project.scope?.length > 0 && (
              <div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Scope</div>
                <ul className="space-y-1 text-sm text-zinc-400">
                  {project.scope.map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-400">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.outcomes?.length > 0 && (
              <div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Outcomes</div>
                <ul className="space-y-1 text-sm text-zinc-400">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-500">•</span> {o}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-xs">{tag}</span>
              ))}
            </div>
          </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Projects;