import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Linkedin, Globe, Github } from "lucide-react";

const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const links = [
  { href: "mailto:ajlehr123@gmail.com", label: "Email", icon: Mail },
  { href: "https://linkedin.com/in/abigaillehr", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/abbyjlehr", label: "𝕏", icon: XIcon },
  { href: "https://seaforthstrategies.com", label: "SeaForth Strategies", icon: Globe },
  { href: "https://github.com/SeaForthStrategies", label: "GitHub", icon: Github },
];

const Footer = () => (
  <footer className="py-12 md:py-16 border-t border-zinc-800/80 bg-zinc-950/30 overflow-x-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
        <div className="min-w-0">
          <p className="font-semibold text-white">Abigail Lehr</p>
          <p className="text-sm text-zinc-500 mt-0.5 break-words">Growth Marketing Strategist and web developer</p>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {links.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
              whileHover={{ x: 4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </motion.a>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-zinc-500">
          <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link to="/skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
          <Link to="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </div>
      </div>
      <p className="mt-8 pt-8 border-t border-zinc-800 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Abigail Lehr
      </p>
    </div>
  </footer>
);

export default Footer;
