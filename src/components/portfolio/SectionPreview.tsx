import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type SectionPreviewProps = {
  id?: string;
  title: string;
  to: string;
  linkLabel: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  bgClass?: string;
};

const SectionPreview = ({
  id,
  title,
  to,
  linkLabel,
  icon,
  children,
  bgClass = "bg-background",
}: SectionPreviewProps) => (
  <Link to={to} id={id} className="block group h-full">
    <motion.div
      className="h-full min-h-[100px] sm:min-h-[120px] rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm p-4 sm:p-5 md:p-6 hover:border-cyan-500/30 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.12)] transition-all duration-300 flex flex-col min-w-0"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-4 min-w-0">
        {icon && (
          <motion.div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 flex items-center justify-center text-cyan-400 shrink-0 ring-1 ring-cyan-500/10"
            whileHover={{ scale: 1.15, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.div>
        )}
        <h2 className="font-display text-sm sm:text-base font-bold text-white break-words line-clamp-2">{title}</h2>
      </div>
      {children}
      <span className="inline-flex items-center gap-2 text-cyan-400/90 font-medium text-sm group-hover:gap-3 transition-all mt-auto">
        {linkLabel}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform inline-block" />
      </span>
    </motion.div>
  </Link>
);

export default SectionPreview;
