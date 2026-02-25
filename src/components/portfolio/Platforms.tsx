import { motion } from "framer-motion";
import { PenTool, Workflow, BarChart, Code2, CalendarDays } from "lucide-react";
import { ToolBadge } from "@/components/portfolio/ToolBadge";

const Platforms = () => {
  const categories = [
    {
      title: "Design",
      icon: <PenTool className="w-5 h-5" />,
      items: ["Visual Branding", "UI/UX Design", "Figma", "Framer", "Canva", "Adobe Express", "Behance", "Graphic Design"]
    },
    {
      title: "Web & Tech",
      icon: <Code2 className="w-5 h-5" />,
      items: ["Next.js", "Vercel", "Squarespace", "WordPress", "Lovable", "Framer", "Tailwind CSS", "SEO", "HTML/CSS", "Python", "JavaScript", "Git", "GitHub", "VSCode", "Cursor", "Claude", "ChatGPT", "GoDaddy", "Netlify", "AI-Assisted Dev"]
    },
    {
      title: "Marketing",
      icon: <BarChart className="w-5 h-5" />,
      items: ["Digital Strategy", "Lead Generation", "HubSpot", "Mailchimp", "GA4", "Email Automation", "Buffer", "Hootsuite", "Meta", "Instagram", "LinkedIn", "A/B Testing", "Zapier"]
    },
    {
      title: "Events & Webinars",
      icon: <CalendarDays className="w-5 h-5" />,
      items: ["Event Planning (500+)", "Eventbrite", "Zoom", "Calendly", "Vendor Management", "Large-Scale Events"]
    },
    {
      title: "Operations",
      icon: <Workflow className="w-5 h-5" />,
      items: ["Project Management", "Airtable", "Notion", "Asana", "Trello", "Square", "POS Systems", "Typeform"]
    }
  ];

  return (
    <section id="platforms" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Platforms & Tools
            </h2>
            <p className="text-zinc-400 max-w-2xl mb-16">
              Tools and platforms I use for design, web, marketing, and ops.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl p-6 border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, type: "spring", stiffness: 80 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-white mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <ToolBadge key={itemIdx} name={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
