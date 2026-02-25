import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14 md:py-20 px-4 sm:px-6 md:px-10 bg-zinc-950/20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400/80 text-sm font-medium uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            What People Say
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={i}
              className="rounded-2xl p-5 md:p-6 bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm hover:border-cyan-500/20 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.08)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 80, damping: 15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.99 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Quote className="w-8 h-8 text-cyan-500/25" />
              </motion.div>
              <p className="text-zinc-300 text-sm sm:text-[15px] leading-relaxed mb-5 break-words">"{t.quote}"</p>
              <footer className="text-zinc-500 text-sm">
                <cite className="not-italic font-medium text-white">{t.author}</cite>
                <span className="text-zinc-600"> · </span>
                <span>{t.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
