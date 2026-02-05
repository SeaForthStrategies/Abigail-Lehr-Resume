import { motion } from "framer-motion";
import { 
  Database, 
  Layout, 
  Cpu, 
  Brain, 
  PenTool, 
  Layers, 
  Globe, 
  Box, 
  Workflow, 
  Smartphone, 
  Mail, 
  BarChart, 
  Search, 
  CreditCard, 
  Code2, 
  Server, 
  Figma as FigmaIcon, 
  Trello as TrelloIcon, 
  Slack as SlackIcon, 
  Github, 
  Zap
} from "lucide-react";

const Platforms = () => {
  const categories = [
    {
      title: "Web & Development",
      icon: <Code2 className="w-5 h-5" />,
      items: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "GitHub", "Vercel"]
    },
    {
      title: "Marketing Tech",
      icon: <Mail className="w-5 h-5" />,
      items: ["GA4", "GTM", "HubSpot", "Zapier", "Stripe", "Search Console"]
    },
    {
      title: "AI & Tools",
      icon: <Brain className="w-5 h-5" />,
      items: ["Cursor", "Claude", "Figma", "Notion", "Slack"]
    }
  ];

  return (
    <section id="platforms" className="py-20 bg-portfolio-light/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral dark:text-white mb-6">
              Platforms & Tools
            </h2>
            <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
              A professional suite of technologies and platforms I utilize to architect, 
              engineer, and manage high-fidelity digital products.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-zinc-950 rounded-[2rem] p-8 shadow-sm border border-portfolio-primary/5 dark:border-white/10 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-portfolio-primary/20 to-portfolio-secondary/20 rounded-xl flex items-center justify-center text-portfolio-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-neutral dark:text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx}
                      className="px-3 py-1 bg-portfolio-light/50 dark:bg-zinc-900 text-portfolio-muted dark:text-zinc-400 text-sm rounded-full border border-portfolio-primary/5 dark:border-white/10"
                    >
                      {item}
                    </span>
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
