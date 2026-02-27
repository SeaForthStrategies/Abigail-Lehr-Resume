import { motion } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import { PageMeta } from "@/components/PageMeta";
import Hero from "@/components/portfolio/Hero";
import AboutPreview from "@/components/portfolio/AboutPreview";
import SectionPreview from "@/components/portfolio/SectionPreview";
import { Testimonials } from "@/components/portfolio/Testimonials";
import TopPosts from "@/components/portfolio/TopPosts";
import Footer from "../components/portfolio/Footer";
import { Code2, FolderOpen, Quote, MessageCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <PageMeta title="Home" description="Abigail Lehr, Marketing strategist and web developer. I run SeaForth Strategies and build sites." />
      <Navbar />
      <main id="main-content">
        <Hero />
        <AboutPreview />
        <section className="py-12 md:py-16 px-4 sm:px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <motion.p
              className="text-cyan-400/80 text-sm font-medium uppercase tracking-wider mb-6"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Explore
            </motion.p>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={itemVariants}>
                <SectionPreview
                  id="skills"
                  title="Expertise & Tools"
                  to="/skills"
                  linkLabel="View all"
                  icon={<Code2 className="w-4 h-4" />}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <SectionPreview
                  id="portfolio"
                  title="Portfolio"
                  to="/portfolio"
                  linkLabel="View all"
                  icon={<FolderOpen className="w-4 h-4" />}
                />
              </motion.div>
              <motion.a
                href="#testimonials"
                className="block group h-full"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="h-full min-h-[100px] sm:min-h-[120px] rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm p-4 sm:p-5 md:p-6 hover:border-cyan-500/30 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.12)] transition-all duration-300 flex flex-col min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 flex items-center justify-center text-cyan-400 shrink-0 ring-1 ring-cyan-500/10">
                      <Quote className="w-4 h-4" />
                    </div>
                    <h2 className="font-display text-sm sm:text-base font-bold text-white">Testimonials</h2>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-cyan-400/90 font-medium text-xs mt-auto">
                    What people say
                  </span>
                </div>
              </motion.a>
              <motion.a
                href="#top-posts"
                className="block group h-full"
                variants={itemVariants}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="h-full min-h-[100px] sm:min-h-[120px] rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm p-4 sm:p-5 md:p-6 hover:border-cyan-500/30 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.12)] transition-all duration-300 flex flex-col min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 flex items-center justify-center text-cyan-400 shrink-0 ring-1 ring-cyan-500/10">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <h2 className="font-display text-sm sm:text-base font-bold text-white">Connect</h2>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-cyan-400/90 font-medium text-xs mt-auto">
                    Email • LinkedIn • 𝕏 • GitHub
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>
        <Testimonials />
        <TopPosts />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
