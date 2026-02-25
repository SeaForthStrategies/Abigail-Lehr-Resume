import { Code2, PenTool, BarChart3, Workflow, MessageSquare, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { ToolBadge } from "@/components/portfolio/ToolBadge";

const CATEGORIES = [
  {
    id: "design",
    icon: PenTool,
    title: "Design",
    description: "Branding, UI/UX, and graphics for web and marketing.",
    skills: ["Visual Branding", "UI/UX Design", "Figma", "Framer", "Canva", "Adobe Express", "Behance", "Graphic Design"],
  },
  {
    id: "web-tech",
    icon: Code2,
    title: "Web & Tech",
    description: "Web dev, AI-assisted workflows, and deployment.",
    skills: ["Next.js", "Vercel", "Squarespace", "WordPress", "Lovable", "Framer", "Final Cut Pro", "Tailwind CSS", "SEO", "HTML/CSS", "Python", "JavaScript", "Git", "GitHub", "VSCode", "Cursor", "Claude", "ChatGPT", "GoDaddy", "Netlify", "AI-Assisted Development"],
  },
  {
    id: "marketing",
    icon: BarChart3,
    title: "Marketing",
    description: "Strategy, email, social, and analytics.",
    skills: ["Digital Strategy", "Growth Strategies", "Lead Generation", "HubSpot", "Mailchimp", "Google Analytics (GA4)", "Email Automation", "Buffer", "Hootsuite", "Meta", "Instagram", "LinkedIn", "A/B Testing", "Zapier"],
  },
  {
    id: "events",
    icon: CalendarDays,
    title: "Events & Webinars",
    description: "Big events, webinars, vendor coordination.",
    skills: ["Large-Scale Event Planning (500+ guests)", "Eventbrite", "Zoom", "Calendly", "Vendor Management", "Webinar Hosting"],
  },
  {
    id: "operations",
    icon: Workflow,
    title: "Operations",
    description: "Project management, POS, and workflow tools.",
    skills: ["Project Management", "Airtable", "Notion", "Asana", "Trello", "Square", "POS Systems", "Typeform"],
  },
  {
    id: "communication",
    icon: MessageSquare,
    title: "Communication",
    description: "Copywriting, client relations, and process.",
    skills: ["Technical Copywriting", "Client Relations", "Process Improvement", "Public Messaging"],
  },
];

const ExpertiseAndTools = () => {
  return (
    <section className="py-16 md:py-24 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400/80 text-sm font-medium uppercase tracking-wider mb-2">Skills</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Expertise & Tools
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            6+ years in design, web, marketing, and ops. I run SeaForth Strategies and build sites.
          </p>
        </motion.div>

        {/* Category grid - bento-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.id}
                id={category.id}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.15)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -2 }}
              >
                <div className="p-6 md:p-7 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center text-cyan-400 shrink-0 ring-1 ring-cyan-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display text-xl font-semibold text-white">
                        {category.title}
                      </h2>
                      <p className="text-sm text-zinc-500 mt-0.5 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/60 min-w-0">
                    {category.skills.map((skill, i) => (
                      <ToolBadge key={i} name={skill} />
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAndTools;
