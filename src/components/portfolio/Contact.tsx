import { useState } from "react";
import { Mail, MapPin, Globe, Linkedin, Github } from "lucide-react";

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

/** Replace with your Formspree form ID from https://formspree.io */
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || "YOUR_FORM_ID";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setFormStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else setFormStatus("error");
    } catch {
      setFormStatus("error");
    }
  };
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ajlehr123@gmail.com",
      href: "mailto:ajlehr123@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/abigaillehr",
      href: "https://linkedin.com/in/abigaillehr"
    },
    {
      icon: <XIcon />,
      label: "𝕏",
      value: "x.com/abbyjlehr",
      href: "https://x.com/abbyjlehr"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Portfolio",
      value: "abigaillehr.com",
      href: "https://abigaillehr.com"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "seaforthstrategies.com",
      href: "https://seaforthstrategies.com"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/SeaForthStrategies",
      href: "https://github.com/SeaForthStrategies"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Oceanside, CA",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-cyan-400/80 text-sm font-medium uppercase tracking-wider mb-2">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Interested in collaborating? I'm always open to discussing new opportunities.
          </p>
        </motion.div>

          {/* Contact form */}
          {FORMSPREE_FORM_ID !== "YOUR_FORM_ID" && (
            <motion.form
              onSubmit={handleSubmit}
              className="mb-16 p-5 sm:p-8 md:p-10 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm min-w-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-xl font-bold text-white mb-6">Send a message</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Input name="name" placeholder="Your name" required className="bg-zinc-800/80 border-zinc-700 rounded-xl" />
                <Input name="email" type="email" placeholder="Your email" required className="bg-zinc-800/80 border-zinc-700 rounded-xl" />
              </div>
              <Textarea name="message" placeholder="Your message" required rows={4} className="mb-4 bg-zinc-800/80 border-zinc-700 rounded-xl resize-none" />
              <Button type="submit" variant="primary" disabled={formStatus === "submitting"} className="rounded-xl">
                {formStatus === "submitting" ? "Sending..." : formStatus === "success" ? "Sent!" : "Send message"}
              </Button>
              {formStatus === "error" && <p className="mt-2 text-sm text-red-400">Something went wrong. Please email directly.</p>}
            </motion.form>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-zinc-400 leading-relaxed">
                I work across marketing, software, content, and operations. I like roles where strategy has to become something real: a shipped site, a working funnel, a stronger campaign, or a cleaner system.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm hover:border-zinc-700/80 transition-colors min-w-0"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-zinc-300 font-medium hover:text-cyan-400 transition-colors break-all block"
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-zinc-300 font-medium">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="flex-1 rounded-lg bg-cyan-500 text-zinc-950 hover:bg-cyan-400"
                  onClick={() => window.open("mailto:ajlehr123@gmail.com")}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:flex-1 rounded-lg border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                  onClick={() => window.open("https://linkedin.com/in/abigaillehr", "_blank")}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:flex-1 rounded-lg border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                  onClick={() => window.open("https://x.com/abbyjlehr", "_blank")}
                >
                  <XIcon className="w-5 h-5 mr-2" />
                  Follow on 𝕏
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl p-6 sm:p-8 border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm min-w-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950">
                  <img
                    src="/site-visuals/oceanside-beach-portrait.jpg"
                    alt=""
                    aria-hidden="true"
                    className="h-56 w-full object-cover object-[48%_center] opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-3">
                    Interested in Collaboration?
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Open to marketing, software, growth, content, and strategy roles where hands-on execution matters.
                  </p>
                </div>
                <div className="w-full space-y-3 text-left">
                  {["Growth Strategy", "Full-Stack Web", "Content & Social", "Marketing Automation", "Analytics & CRO", "AI-Augmented Workflows"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="text-sm text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default Contact;
