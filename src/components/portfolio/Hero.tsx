import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import defaultHeadshot from "@/assets/abigail-headshot.jpg";
import { useNavigate } from "react-router-dom";

const BIO_TEXT =
  "Marketing strategist and web developer with a founder mindset. Curious, self-directed, and motivated by learning how things work end to end. Open to roles across marketing, content, social, growth, events, and web.";

function Typewriter({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i++;
      } else {
        setDone(true);
        clearInterval(id);
      }
    }, 30);
    return () => clearInterval(id);
  }, [text]);

  return (
    <span className={className}>
      {display}
      {!done && <span className="animate-cursor-blink text-cyan-400 ml-0.5">|</span>}
    </span>
  );
}

const candidateHeadshots: string[] = [
  "/headshot.jpg",
  "/headshot.jpeg",
  "/headshot.png",
  "/headshot.JPG",
  "/headshot.JPEG",
  "/headshot.PNG",
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const navigate = useNavigate();

  const handleNav = (sectionId: string) => {
    if (sectionId === "about") {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
      else navigate("/about");
    } else if (sectionId === "contact") navigate("/contact");
    else if (sectionId === "projects") navigate("/portfolio");
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,280px] gap-6 lg:gap-20 items-start">
          <motion.div
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Mobile/tablet: image + name aligned in one row */}
            <div className="flex flex-row items-center gap-4 sm:gap-5 lg:contents">
              <motion.div
                className="shrink-0 lg:hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 80 }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-800 animate-pulse-glow shrink-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ImgWithFallback alt="Abigail Lehr" className="w-full h-full object-cover object-top" />
                </motion.div>
              </motion.div>
              <div className="space-y-1 sm:space-y-2">
                <motion.p variants={item} className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Carlsbad, CA</motion.p>
                <motion.h1 variants={item} className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                  Abigail Lehr
                </motion.h1>
                <motion.p variants={item} className="text-xl text-cyan-400/90 font-medium">
                  Growth Marketing Strategist and web developer
                </motion.p>
              </div>
            </div>
            <motion.p variants={item} className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
              <Typewriter text={BIO_TEXT} />
            </motion.p>
            <motion.div variants={item} className="flex gap-4">
              <motion.button
                onClick={() => handleNav("contact")}
                className="px-6 py-3 rounded-lg bg-cyan-500 text-zinc-950 font-semibold hover:bg-cyan-400 transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.button>
              <motion.button
                onClick={() => handleNav("projects")}
                className="px-6 py-3 rounded-lg border border-zinc-600 text-zinc-300 font-medium hover:border-zinc-500 hover:text-white transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 80 }}
          >
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full lg:w-56 lg:h-auto lg:aspect-[3/4] lg:rounded-2xl overflow-hidden border-2 border-zinc-800 animate-pulse-glow shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImgWithFallback alt="Abigail Lehr" className="w-full h-full object-cover object-top" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => handleNav("about")}
            className="p-2 rounded-full text-zinc-500 hover:text-zinc-300 transition-colors"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

type ImgWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

function ImgWithFallback(props: ImgWithFallbackProps) {
  const [index, setIndex] = useState(0);
  const src =
    index < candidateHeadshots.length
      ? candidateHeadshots[index]
      : defaultHeadshot;
  return (
    <img
      {...props}
      src={src}
      loading="eager"
      decoding="async"
      onError={() => setIndex((prev) => prev + 1)}
    />
  );
}
