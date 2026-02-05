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
      title: "CRM / Marketing / Client Tools",
      icon: <Mail className="w-5 h-5" />,
      items: ["HubSpot", "Mailchimp", "Klaviyo", "Meta Business Suite", "Google Analytics 4 (GA4)", "Google Tag Manager", "Google Search Console", "Canva", "Hootsuite / Buffer", "Stripe"]
    },
    {
      title: "Web & Development",
      icon: <Code2 className="w-5 h-5" />,
      items: ["GitHub", "Vercel", "Next.js", "React", "Tailwind CSS", "HTML5 / CSS3", "JavaScript", "Node.js", "WordPress", "REST APIs", "Supabase", "Continuing to learn new languages"]
    },
    {
      title: "AI / Productivity / Dev Assistants",
      icon: <Brain className="w-5 h-5" />,
      items: ["ChatGPT", "Cursor", "Claude", "GitHub Copilot", "Figma (AI features)"]
    },
    {
      title: "Design / UX",
      icon: <PenTool className="w-5 h-5" />,
      items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"]
    },
    {
      title: "Project Management / Collaboration",
      icon: <Layers className="w-5 h-5" />,
      items: ["Notion", "Trello", "Slack", "Google Workspace", "Zoom"]
    },
    {
      title: "Deployment / Hosting / Tech Stack",
      icon: <Server className="w-5 h-5" />,
      items: ["Vercel", "Netlify", "DNS Management (GoDaddy / Cloudflare)", "Environment Variables & Production Workflows"]
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
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral mb-6">
              Platforms & Tools
            </h2>
            <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
              A comprehensive list of the technologies and platforms I use to build, 
              deploy, and manage modern digital products.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-portfolio-primary/5 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-portfolio-primary/20 to-portfolio-secondary/20 rounded-xl flex items-center justify-center text-portfolio-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-neutral">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx}
                      className="px-3 py-1 bg-portfolio-light/50 text-portfolio-muted text-sm rounded-full border border-portfolio-primary/5"
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
