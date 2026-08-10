import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EXPERIENCE_ROLES } from "@/data/experience";
import { Briefcase, ArrowRight } from "lucide-react";

const AboutPreview = () => (
  <section id="about" className="py-14 md:py-20 px-4 sm:px-6 md:px-10 bg-zinc-950/20 overflow-x-hidden">
    <div className="max-w-6xl mx-auto">
      <Link to="/about" className="block group">
        <motion.div
          className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm p-5 sm:p-6 md:p-8 hover:border-cyan-500/30 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.15)] transition-all duration-300 min-w-0"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="min-w-0 lg:flex-1">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 flex items-center justify-center text-cyan-400 shrink-0 ring-1 ring-cyan-500/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Briefcase className="w-5 h-5" />
                </motion.div>
                <div>
                  <h2 className="font-display text-xl font-bold text-white">Quick Glance</h2>
                  <p className="text-zinc-500 text-sm mt-0.5">Marketing · Software · Growth</p>
                </div>
              </div>

              <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-3">Work history · Most recent first</p>
              <ul className="space-y-4 mb-6">
                {EXPERIENCE_ROLES.map((role, i) => (
                  <motion.li
                    key={i}
                    className="pb-4 border-b border-zinc-800/60 last:border-0 last:pb-0"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      <div className="min-w-0">
                        <span className="font-semibold text-white block">{role.title}</span>
                        <span className="text-zinc-500 text-sm">{role.company}</span>
                      </div>
                      <span className="text-zinc-500 text-xs sm:text-sm shrink-0 font-medium">{role.periodShort}</span>
                    </div>
                    {role.roleTimeline && role.roleTimeline.length > 0 && (
                      <div className="mt-3 pl-3 border-l-2 border-zinc-800 space-y-1.5">
                        <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">Promotion timeline</p>
                        {role.roleTimeline.map((step, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs">
                            <span className={`font-medium ${step.promoted ? "text-cyan-400" : "text-zinc-400"}`}>
                              {step.role}
                            </span>
                            <span className="text-zinc-600">{step.period}</span>
                            {step.promoted && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-cyan-500/20 text-cyan-400">
                                Promoted
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-cyan-400 font-medium text-sm group-hover:gap-3 transition-all mt-1">
                View full experience & skills
                <motion.span
                  className="inline-block"
                  initial={false}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </span>
            </div>

            <div className="hidden lg:block lg:w-[260px] lg:shrink-0 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950">
              <img
                src="/site-visuals/camera-coffee-portrait.jpg"
                alt=""
                aria-hidden="true"
                className="h-[360px] w-full object-cover object-[42%_center] opacity-90"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  </section>
);

export default AboutPreview;
