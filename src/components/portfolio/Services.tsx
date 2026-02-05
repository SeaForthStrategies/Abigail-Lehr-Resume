import { Code, Megaphone, PenTool, BarChart3, Globe, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Web Development",
      description: "Building modern, responsive web applications using the latest frameworks and best practices for performance and scalability.",
      features: ["React & Next.js Implementation", "TypeScript & Type Safety", "Node.js & API Integration", "Supabase & Database Management"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "UI/UX & Product Design",
      description: "Designing beautiful, user-centric interfaces that elevate brand identity and ensure a premium digital experience.",
      features: ["Figma Prototyping", "Design Systems & Tokens", "Tailwind CSS Styling", "Micro-animations & Interaction"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Driven Development",
      description: "Utilizing cutting-edge AI tools to accelerate the development lifecycle and deliver high-quality results faster.",
      features: ["Cursor & Claude Workflows", "Prompt Engineering for Code", "GitHub Copilot Integration", "AI-Powered Productivity"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Marketing Technology",
      description: "Integrating technical solutions with marketing strategies to create powerful automation and tracking systems.",
      features: ["HubSpot & CRM Integration", "GA4 & Tag Management", "Stripe Payment Workflows", "Marketing Automation"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Performance & SEO",
      description: "Optimizing web applications for speed, accessibility, and search engine visibility from the ground up.",
      features: ["Core Web Vitals Optimization", "Technical SEO Audits", "Load Speed Performance", "Accessibility Standards"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Vibe Coding Strategy",
      description: "Applying a creative-first approach to software development, focusing on the 'look and feel' of digital products.",
      features: ["Rapid Prototyping", "Creative Tech Solutions", "Aesthetic Refinement", "Development-as-Design"]
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-background">
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
              Expertise & Skills
            </h2>
            <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
              Combining technical proficiency with creative design to build 
              modern web solutions that deliver exceptional user experiences.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ padding: 1 }}>
                  <div className="h-full w-full rounded-3xl" style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.25), rgba(34,211,238,0.25))' }} />
                </div>
                <div className="absolute inset-[1px] rounded-3xl bg-white" />
                {/* Icon */}
                <div className="mb-6">
                  <motion.div className="w-16 h-16 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-2xl flex items-center justify-center text-white" whileHover={{ scale: 1.08 }}>
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative space-y-5">
                  <h3 className="text-xl font-semibold text-portfolio-neutral">
                    {service.title}
                  </h3>

                  <p className="text-portfolio-muted leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-3xl p-12 text-white">
              <div className="absolute inset-0" style={{ background: 'var(--gradient-primary)' }} />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h3>
                <p className="text-xl mb-8 opacity-90">
                  Let's collaborate on your next technical project and bring your vision to life with high-quality code and design.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-portfolio-primary px-8 py-4 rounded-full font-semibold hover:bg-portfolio-light transition-colors duration-300 hover:scale-105 transform"
                >
                  Start Your Project
                </button>
              </div>
              <div className="absolute -inset-10 opacity-30 blur-3xl" style={{ background: 'var(--gradient-secondary)' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;