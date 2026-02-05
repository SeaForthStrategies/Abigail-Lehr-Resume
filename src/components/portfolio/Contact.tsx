import { Mail, MapPin, Globe, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "abby@seaforthstrategies.com",
      href: "mailto:abby@seaforthstrategies.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(262) 210-2921",
      href: "tel:+12622102921"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "www.seaforthstrategies.com",
      href: "https://www.seaforthstrategies.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Carlsbad, CA",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
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
              Get In Touch
            </h2>
            <p className="text-xl text-portfolio-muted max-w-2xl mx-auto">
              Interested in collaborating or have a question about my work?
              I'm always open to discussing new opportunities and technical challenges.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-semibold text-portfolio-neutral dark:text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-portfolio-muted leading-relaxed mb-8">
                  Whether you're looking to generate more qualified leads, increase your social media presence,
                  or optimize your technical workflows for better efficiency, I specialize in creating software
                  solutions that deliver measurable results.
                </p>
              </div>

              {/* Contact Details */}
              <motion.div
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div key={index} className="flex items-center gap-4 group" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-portfolio-muted">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-portfolio-neutral dark:text-zinc-300 font-medium hover:text-portfolio-primary transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-portfolio-neutral font-medium">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('mailto:abby@seaforthstrategies.com')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>

                <Button
                  variant="portfolio"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('https://www.seaforthstrategies.com', '_blank')}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Visit SeaForth Strategies
                </Button>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              {/* Background decoration */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl"
                style={{ background: 'var(--gradient-primary)' }}
              />

              {/* Main card */}
              <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-portfolio-primary/10">
                <div className="text-center space-y-6">
                  <motion.div className="w-20 h-20 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-full flex items-center justify-center text-white mx-auto" whileHover={{ scale: 1.05 }}>
                    <Linkedin className="w-10 h-10" />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-semibold text-portfolio-neutral dark:text-white mb-4">
                      Interested in Collaboration?
                    </h3>
                    <p className="text-portfolio-muted dark:text-zinc-400 leading-relaxed">
                      Let's connect to discuss potential roles, technical needs, or how my background
                      in both development and strategy can add value to your team.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm text-portfolio-muted">
                      <strong>What you can expect:</strong>
                    </div>
                    <div className="grid grid-cols-1 gap-3 text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted">Custom UI/UX Design</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted">Full-Stack Development (React/Next.js)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted">AI-Assisted Workflows</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-portfolio-primary rounded-full" />
                        <span className="text-sm text-portfolio-muted">Scalable Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;