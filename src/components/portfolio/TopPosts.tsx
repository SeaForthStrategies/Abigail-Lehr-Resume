import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe } from "lucide-react";
import { X_PROFILE_URL, TOP_POST_IDS } from "@/data/topPosts";

const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIAL_LINKS = [
  { href: "mailto:ajlehr123@gmail.com", label: "Email", icon: Mail },
  { href: "https://linkedin.com/in/abigaillehr", label: "LinkedIn", icon: Linkedin },
  { href: X_PROFILE_URL, label: "𝕏", icon: XIcon },
  { href: "https://github.com/SeaForthStrategies", label: "GitHub", icon: Github },
  { href: "https://seaforthstrategies.com", label: "SeaForth", icon: Globe },
];

declare global {
  interface Window {
    twttr?: { widgets: { load: () => void } };
  }
}

const TopPosts = () => {
  useEffect(() => {
    if (TOP_POST_IDS.length === 0) return;
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => window.twttr?.widgets?.load();
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="top-posts" className="py-14 md:py-20 px-4 sm:px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400/80 text-sm font-medium uppercase tracking-wider mb-2">Connect</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
            Follow & Connect
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }, i) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800/80 border border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-zinc-800 transition-colors text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {TOP_POST_IDS.length === 0 ? (
            <motion.div
              className="md:col-span-2 lg:col-span-3 p-10 md:p-12 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-xl font-semibold text-white mb-6">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map(({ href, label, icon: Icon }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 hover:text-cyan-400 hover:bg-zinc-700 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ) : (
            TOP_POST_IDS.map((id, index) => (
              <motion.div
                key={id}
                className="flex justify-center min-w-0 overflow-hidden [&_.twitter-tweet]:!max-w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <blockquote
                  className="twitter-tweet"
                  data-theme="dark"
                  data-dnt="true"
                >
                  <a href={`https://x.com/abbyjlehr/status/${id}`} />
                </blockquote>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TopPosts;
