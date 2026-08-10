import { Code2, PenTool, BarChart3, Workflow, MessageSquare, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { ToolBadge } from "@/components/portfolio/ToolBadge";

const EXPERTISE_CATEGORIES = [
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Brand & Content",
    description: "Messaging, visuals, social content, and campaign assets.",
    skills: ["Brand Messaging", "Content Planning", "Social Media Strategy", "Figma", "Canva", "Adobe Creative Suite", "Graphic Design"],
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Software & Web",
    description: "Full-stack product builds, websites, and launch workflows.",
    skills: ["Python", "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "WordPress", "Vercel", "Netlify", "Git", "GitHub"],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Growth Marketing",
    description: "Strategy, funnels, lifecycle, paid media, and conversion.",
    skills: ["Growth Strategy", "GTM Execution", "Acquisition Funnels", "CRO", "Lifecycle Marketing", "Paid Media", "Performance Media", "SEO/AEO"],
  },
  {
    icon: <CalendarDays className="w-5 h-5" />,
    title: "Events & Webinars",
    description: "Campaign events, community moments, and vendor coordination.",
    skills: ["Large-Scale Event Planning", "Event Promotion", "Community Engagement", "Vendor Management", "Calendly", "Zoom"],
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Operations",
    description: "CRM, automation, reporting, and repeatable systems.",
    skills: ["CRM Strategy", "Marketing Automation", "Airtable", "HubSpot", "Mailchimp", "GA4", "Funnel Analysis", "A/B Testing"],
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Communication",
    description: "Clear writing and coordination across teams and stakeholders.",
    skills: ["Technical Copywriting", "Client Relations", "Stakeholder Coordination", "Cross-Functional Leadership", "Public Messaging"],
  },
];

const Services = () => {
  return (
    <section id="expertise" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Expertise & Skills</h2>
          <p className="text-zinc-400 max-w-2xl">
            A practical mix of marketing, software, analytics, automation, and content work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-6 border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 80 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                {category.icon}
              </div>
              <h3 className="font-semibold text-white mb-1">{category.title}</h3>
              <p className="text-sm text-zinc-500 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <ToolBadge key={i} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
