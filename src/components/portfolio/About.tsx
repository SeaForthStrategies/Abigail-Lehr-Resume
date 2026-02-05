import { CheckCircle, Zap, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications using React, Next.js, and Node.js with a focus on performance and SEO."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "UI/UX & Product Design",
      description: "Crafting intuitive user interfaces and premium experiences using Figma and Tailwind CSS."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Vibe Coding & AI",
      description: "Leveraging AI-assisted tools like Cursor and Claude to accelerate development and focus on creative problem-solving."
    }
  ];

  const skills = [
    "React", "Next.js", "TypeScript", 
    "Tailwind CSS", "Node.js", "Supabase",
    "Figma", "AI-Driven Development", "Vibe Coding"
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-light/30 dark:bg-zinc-950/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-xl text-portfolio-muted dark:text-zinc-400 max-w-2xl mx-auto">
              A technical founder and developer specializing in bridging the gap between
              sophisticated design and scalable web architecture.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Story */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-neutral dark:text-white">
                Work Experience
              </h3>
              <div className="space-y-6 text-portfolio-muted dark:text-zinc-400">
                <div>
                  <h4 className="font-bold text-portfolio-neutral dark:text-white">Technical Founder & Lead Developer — SeaForth Strategies</h4>
                  <p className="text-xs italic">Sept 2021–Present</p>
                  <p className="mt-2 text-sm">Architecting high-performance web applications and design systems for technical product execution.</p>
                </div>
                <div>
                  <h4 className="font-bold text-portfolio-neutral dark:text-white">Marketing Coordinator — 1031 Capital Solutions</h4>
                  <p className="text-xs italic">June 2024–June 2025</p>
                  <p className="mt-2 text-sm">Led digital initiatives and built automated outreach workflows to improve business development efficiency.</p>
                </div>
                <div>
                  <h4 className="font-bold text-portfolio-neutral dark:text-white">Marketing & Event Manager — Toothpicks Catering</h4>
                  <p className="text-xs italic">2015–Sept 2025</p>
                  <p className="mt-2 text-sm">Managed end-to-end digital presence and planned major events for 500+ guests.</p>
                </div>
              </div>
            </motion.div>

            {/* Highlights / Skills */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-neutral dark:text-white">
                Technical Mastery
              </h3>
                {[
                  { category: "Frontend", skills: "React, Next.js, TypeScript, Tailwind CSS" },
                  { category: "Backend", skills: "Node.js, PostgreSQL, Supabase, REST APIs" },
                  { category: "Tools", skills: "Git, Vercel, Figma, AI-Assisted Dev" },
                  { category: "Marketing Tech", skills: "GA4, GTM, HubSpot, Zapier" },
                ].map((item, index) => (
                  <motion.div key={index} className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-portfolio-primary/10 transition-colors" variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}>
                    <div className="font-bold text-portfolio-primary mb-1 text-xs uppercase tracking-wider">{item.category}</div>
                    <div className="text-portfolio-neutral dark:text-zinc-300 text-sm leading-relaxed">{item.skills}</div>
                  </motion.div>
                ))}

              <h3 className="text-2xl font-semibold text-portfolio-neutral dark:text-white pt-4">
                Certifications
              </h3>
              <ul className="space-y-2 text-portfolio-muted dark:text-zinc-400 text-sm">
                <li>• HubSpot Social Media Marketing (Feb 2023)</li>
                <li>• Google Digital Garage Digital Skills (Feb 2023)</li>
                <li>• AHLEI Guest Service Professional (Feb 2022)</li>
                <li>• TripAdvisor® Reputation Mgmt (Feb 2022)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;