import { BarChart3, Code2, FileText, Megaphone, PenTool, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { ToolBadge } from "@/components/portfolio/ToolBadge";

const CAPABILITIES = [
  {
    icon: Megaphone,
    title: "Growth Strategy, GTM & Funnels",
    summary: "I turn a business goal into an acquisition system: audience, offer, funnel, channel mix, launch plan, follow-up, and measurement.",
    proof: ["47% lift in online voter engagement", "Webinar funnel analysis across registration, attendance, spend, and follow-up", "Partner, paid, organic, lifecycle, and campaign strategy"],
    tools: ["Growth Strategy", "GTM Execution", "Acquisition Funnels", "Paid Media", "Lifecycle Marketing", "Partner Marketing", "Launch Strategy"],
  },
  {
    icon: Code2,
    title: "Software, Web & Product Builds",
    summary: "I can move from idea to shipped website or product plan, including UX, CMS architecture, frontend development, integrations, QA, launch, and iteration.",
    proof: ["Campaign site scaled to 25,000 monthly visitors", "Next.js + WordPress/ACF platform work", "Consumer product concepts and MVP planning through SeaForth Strategies"],
    tools: ["Next.js", "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "WordPress", "ACF", "REST APIs", "Vercel", "GitHub", "Cloudflare"],
  },
  {
    icon: BarChart3,
    title: "Analytics, CRO & Marketing Technology",
    summary: "I connect websites, forms, campaigns, CRMs, and reporting so performance can actually be diagnosed and improved.",
    proof: ["8% campaign site conversion rate", "A/B tests that improved email opens by 12%", "CRM visibility improved by 20% at 1031 Capital Solutions"],
    tools: ["GA4", "Google Tag Manager", "Search Console", "Meta Pixel", "Microsoft Clarity", "HubSpot", "LeadConnector", "UTM Tracking", "A/B Testing", "Funnel Analysis"],
  },
  {
    icon: Workflow,
    title: "AI, Automation & Workflow Systems",
    summary: "I use AI and automation as systems, not shortcuts: grounded agents, workflow design, CRM automation, research, analysis, and repeatable operating processes.",
    proof: ["Claude-based SEO/AEO agent experiment", "Automated outreach and scheduling that saved 10+ hours per week", "Marketing workflows across HubSpot, GoHighLevel/LeadConnector, and Zapier"],
    tools: ["AI-Assisted Development", "Claude", "AI Agents", "Prompt Engineering", "Knowledge Grounding", "Workflow Automation", "HubSpot Workflows", "Zapier"],
  },
  {
    icon: PenTool,
    title: "SEO/AEO, Brand & Content Architecture",
    summary: "I structure content so people and search systems can understand it: technical SEO, AEO, keyword strategy, page architecture, messaging, and content planning.",
    proof: ["SEO/AEO planning for service and geographic-area restructuring", "150+ campaign assets and social posts", "32% increase in social shares"],
    tools: ["Technical SEO", "On-Page SEO", "SEO Architecture", "Keyword Strategy", "Schema Strategy", "AEO", "Content Planning", "Brand Messaging"],
  },
  {
    icon: FileText,
    title: "Product, Community & Stakeholder Execution",
    summary: "I translate messy goals into product direction, briefs, roadmaps, launch plans, partner programs, and next steps people can act on.",
    proof: ["Consumer product concepts in development", "Community and experiential brand strategy", "Cross-functional coordination across vendors, teams, leadership, and partners"],
    tools: ["Product Strategy", "MVP Planning", "Community Growth", "Partner Marketing", "Stakeholder Coordination", "Technical Copywriting", "Client Relations"],
  },
];

const PROCESS = [
  "Idea",
  "Strategy",
  "UX",
  "Development",
  "Integrations",
  "Analytics",
  "Launch",
  "Marketing",
  "Optimization",
];

const ExpertiseAndTools = () => {
  return (
    <section className="py-16 md:py-24 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-cyan-400/80 text-sm font-medium uppercase tracking-wider mb-2">Skills</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            What I Do
          </h1>
          <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
            I work across the full lifecycle of a digital product or growth initiative: idea, strategy, UX, development, integrations, analytics, launch, marketing, and optimization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,320px] gap-6 md:gap-8 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.article
                  key={capability.title}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-sm p-5 md:p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.16)] min-w-0"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 ring-1 ring-cyan-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display text-lg font-semibold text-white break-words">{capability.title}</h2>
                      <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{capability.summary}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">Proof</p>
                    <ul className="space-y-1.5 text-sm text-zinc-400">
                      {capability.proof.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-cyan-400 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/70">
                    {capability.tools.map((tool) => (
                      <ToolBadge key={tool} name={tool} />
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm p-5 md:p-6 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-cyan-400/80 text-xs font-medium uppercase tracking-wider mb-2">How I Work</p>
            <h2 className="font-display text-xl font-bold text-white mb-4">Lifecycle I cover</h2>
            <ol className="space-y-2.5">
              {PROCESS.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-zinc-400">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-semibold shrink-0">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 pt-5 border-t border-zinc-800/70">
              <p className="text-sm text-zinc-400 leading-relaxed">
                The through-line: I can connect software, AI, product, and growth without treating them as separate lanes.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAndTools;
