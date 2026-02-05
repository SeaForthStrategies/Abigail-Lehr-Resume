import { Code, Megaphone, PenTool, BarChart3, Globe, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Engineering",
      description: "Building scalable web systems with React, Next.js, and modern cloud infrastructure.",
      features: ["Full-Stack Architecture", "Type-Safe Codebases"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing professional interfaces that bridge the gap between engineering and user experience.",
      features: ["Figma Prototyping", "Design Systems"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Assisted Dev",
      description: "Accelerating the development lifecycle with sophisticated AI-powered workflows.",
      features: ["Cursor & Claude", "Rapid Prototyping"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Systems Architecture",
      description: "Designing high-fidelity technical infrastructure for automated business workflows.",
      features: ["CRM Integration", "GA4/GTM Pipelines"]
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
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-neutral dark:text-white mb-6">
              Expertise & Skills
            </h2>
            <p className="text-xl text-portfolio-muted max-w-3xl mx-auto">
              Bridging technical expertise with professional design to architect 
              sophisticated digital systems and exceptional user experiences.
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
                className="group relative bg-white dark:bg-zinc-950 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent"
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ padding: 1 }}>
                  <div className="h-full w-full rounded-3xl" style={{ background: 'linear-gradient(145deg, rgba(59,130,246,0.25), rgba(34,211,238,0.25))' }} />
                </div>
                <div className="absolute inset-[1px] rounded-3xl bg-white dark:bg-zinc-950" />
                {/* Icon */}
                <div className="mb-6">
                  <motion.div className="w-16 h-16 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-2xl flex items-center justify-center text-white" whileHover={{ scale: 1.08 }}>
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative space-y-5">
                  <h3 className="text-xl font-semibold text-portfolio-neutral dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-portfolio-muted dark:text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted dark:text-zinc-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;