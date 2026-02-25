import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function PageCTA() {
  return (
    <motion.div
      className="py-16 md:py-20 text-center px-4"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link to="/contact">
        <motion.span
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-zinc-950 font-semibold hover:bg-cyan-400 transition-colors shadow-[0_0_24px_-4px_rgba(34,211,238,0.3)]"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Mail className="w-5 h-5" />
          Get In Touch
        </motion.span>
      </Link>
    </motion.div>
  );
}
