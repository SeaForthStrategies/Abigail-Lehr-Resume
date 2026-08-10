import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { EXPERIENCE_ROLES } from "@/data/experience";
import { ToolBadge } from "@/components/portfolio/ToolBadge";

type CertCategory = "marketing" | "web" | "hospitality" | "professional";

const CERT_CATEGORY_STYLES: Record<CertCategory, { box: string; icon: string; badge: string }> = {
  marketing: {
    box: "border-l-4 border-l-blue-500 bg-blue-500/5 dark:bg-blue-500/10",
    icon: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    badge: "bg-blue-500/20 text-blue-700 dark:text-blue-300",
  },
  web: {
    box: "border-l-4 border-l-cyan-500 bg-cyan-500/5 dark:bg-cyan-500/10",
    icon: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300",
  },
  hospitality: {
    box: "border-l-4 border-l-amber-500 bg-amber-500/5 dark:bg-amber-500/10",
    icon: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
    badge: "bg-amber-500/20 text-amber-700 dark:text-amber-300",
  },
  professional: {
    box: "border-l-4 border-l-violet-500 bg-violet-500/5 dark:bg-violet-500/10",
    icon: "bg-violet-500/20 text-violet-600 dark:text-violet-400",
    badge: "bg-violet-500/20 text-violet-700 dark:text-violet-300",
  },
};

const CERTIFICATIONS: { provider: string; title: string; year: string | null; category: CertCategory }[] = [
  { provider: "UC Davis", title: "The Strategy of Content Marketing", year: "2024", category: "marketing" },
  { provider: "HubSpot", title: "Social Media Marketing Certification", year: "2023", category: "marketing" },
  { provider: "Google", title: "Digital Skills & Business Strategy Certification", year: null, category: "marketing" },
  { provider: "Codédex", title: "Foundations in Python, HTML, CSS, and JavaScript", year: null, category: "web" },
  { provider: "Gateway Technical College", title: "Business, Management, Marketing, and Related Support Services", year: "2020-2023", category: "professional" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-cyan-400/80 text-sm font-medium uppercase tracking-wider mb-2">About</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Marketing, product, and shipped work</h2>
          <p className="text-zinc-400 max-w-2xl text-lg mb-2">
            I am a full-stack marketer and AI software engineer with experience turning strategy into live campaigns, websites, automations, and measurable growth systems.
          </p>
          <p className="text-zinc-500 text-sm">
            <strong className="text-zinc-400">Plain version:</strong> I plan the work, build the assets, ship the site, watch the data, and keep improving what performs.
          </p>
        </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Work Experience */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Work Experience</h3>
                <p className="text-zinc-500 text-sm">Roles, promotions, and results · Most recent first</p>
              </div>
              <div className="relative pl-6 border-l-2 border-zinc-800 space-y-6">
                {EXPERIENCE_ROLES.map((role, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-6 top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-zinc-950" />
                    <div className="rounded-2xl p-5 md:p-6 bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm hover:border-zinc-700/80 transition-colors min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <h4 className="font-semibold text-white break-words">{role.title}</h4>
                        <span className="text-xs text-zinc-500 shrink-0">{role.periodShort}</span>
                      </div>
                      <p className="text-cyan-400/90 text-sm font-medium">{role.company}</p>
                      <p className="text-xs text-zinc-500 mt-0.5">{role.location}</p>
                      {role.roleTimeline && role.roleTimeline.length > 0 && (
                        <div className="mt-3 p-4 rounded-xl bg-zinc-800/50 border border-zinc-800/80">
                          <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-3">Promotion timeline</p>
                          <div className="space-y-2.5">
                            {role.roleTimeline.map((step, j) => (
                              <div key={j} className="flex flex-wrap items-center gap-2 text-sm">
                                {j > 0 && <span className="text-zinc-600 text-xs">→</span>}
                                <span className={`font-semibold ${step.promoted ? "text-cyan-400" : "text-zinc-300"}`}>
                                  {step.role}
                                </span>
                                <span className="text-zinc-500 text-xs">{step.period}</span>
                                {step.promoted && (
                                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                    Promoted
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{role.intro}</p>
                      <p className="mt-4 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Key results</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
                        {role.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="text-cyan-500 shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills & Certifications */}
            <motion.div
              className="space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            >
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  Skills & Tools
                </h3>
                <p className="text-zinc-500 text-sm">What I use day to day, by category</p>
              </div>
              <div className="space-y-4">
                {[
                  { category: "Growth & Strategy", skills: "Growth Strategy, GTM Execution, Acquisition Funnels, CRO, Lifecycle Marketing, Paid Media, Performance Media" },
                  { category: "Data & Operations", skills: "A/B Testing, Funnel Analysis, CRM Strategy, Marketing Automation, Analytics, AI-Augmented Workflows, Operational Efficiency" },
                  { category: "Platform Stack", skills: "GA4, WordPress, HubSpot, Mailchimp, Airtable, Figma, Adobe Creative Suite, GitHub, Cursor, ChatGPT, Claude" },
                  { category: "Web Development", skills: "Python, HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Vercel, Netlify, SEO/AEO" },
                  { category: "Events & Content", skills: "Social Media Strategy, Content Planning, Event Promotion, Community Engagement, Large-Scale Event Planning, Vendor Management" },
                  { category: "Communication", skills: "Brand Messaging, Technical Copywriting, Client Relations, Stakeholder Coordination, Cross-Functional Leadership" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 md:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm hover:border-cyan-500/20 transition-colors"
                    variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <div className="font-medium text-cyan-400 mb-1 text-xs uppercase tracking-wider">{item.category}</div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.split(", ").map((skill, i) => (
                        <ToolBadge key={i} name={skill} className="text-sm" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  Certifications
                </h3>
                <p className="text-zinc-500 text-sm mb-4">Courses and credentials</p>
              </div>
              <div className="grid gap-3">
                {CERTIFICATIONS.map((cert, index) => {
                  const styles = CERT_CATEGORY_STYLES[cert.category];
                  const categoryLabel = cert.category.charAt(0).toUpperCase() + cert.category.slice(1);
                  return (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-4 p-5 rounded-xl border ${styles.box}`}
                      variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${styles.icon}`}>
                        <Award className="w-6 h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-2 ${styles.badge}`}>
                          {categoryLabel}
                        </span>
                        <div className="font-semibold text-white">{cert.title}</div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
                          <span>{cert.provider}</span>
                          {cert.year && (
                            <>
                              <span>•</span>
                              <span>{cert.year}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default About;
