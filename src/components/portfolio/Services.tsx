import { Code2, PenTool, BarChart3, Workflow, MessageSquare, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { ToolBadge } from "@/components/portfolio/ToolBadge";

const EXPERTISE_CATEGORIES = [
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Design",
    description: "Branding, UI/UX, and graphics for web and marketing.",
    skills: ["Visual Branding", "UI/UX Design", "Figma", "Framer", "Canva", "Adobe Express", "Behance", "Graphic Design"],
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Web & Tech",
    description: "Web dev, AI-assisted workflows, and deployment.",
    skills: ["Next.js", "Vercel", "Squarespace", "WordPress", "Lovable", "Framer", "Final Cut Pro", "Tailwind CSS", "SEO", "HTML/CSS", "Python", "JavaScript", "Git", "GitHub", "VSCode", "Cursor", "Claude", "ChatGPT", "GoDaddy", "Netlify", "AI-Assisted Development"],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Marketing",
    description: "Strategy, email, social, and analytics.",
    skills: ["Digital Strategy", "Growth Strategies", "Lead Generation", "HubSpot", "Mailchimp", "Google Analytics (GA4)", "Email Automation", "Buffer", "Hootsuite", "Meta", "Instagram", "LinkedIn", "A/B Testing", "Zapier"],
  },
  {
    icon: <CalendarDays className="w-5 h-5" />,
    title: "Events & Webinars",
    description: "Big events, webinars, vendor coordination.",
    skills: ["Large-Scale Event Planning (500+ guests)", "Eventbrite", "Zoom", "Calendly", "Vendor Management", "Webinar Hosting"],
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Operations",
    description: "Project management, POS, and workflow tools.",
    skills: ["Project Management", "Airtable", "Notion", "Asana", "Trello", "Square", "POS Systems", "Typeform"],
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Communication",
    description: "Copywriting, client relations, and process.",
    skills: ["Technical Copywriting", "Client Relations", "Process Improvement", "Public Messaging"],
  },
];

const Services = () => {
  return (
    <section id="expertise" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Expertise & Skills</h2>
          <p className="text-zinc-400 max-w-2xl">
            6+ years in design, web, marketing, and ops.
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