import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import defaultHeadshot from "@/assets/abigail-headshot.jpg";
const candidateHeadshots: string[] = [
  "/headshot.jpg",
  "/headshot.jpeg",
  "/headshot.png",
  "/headshot.JPG",
  "/headshot.JPEG",
  "/headshot.PNG",
];

const TypingText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-mono text-portfolio-primary dark:text-portfolio-secondary"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.03, duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 bg-portfolio-primary ml-1 align-middle"
      />
    </motion.span>
  );
};

const Hero = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 animate-blob"
          style={{ background: "var(--gradient-secondary)" }}
        />
      </div>

      {/* Background Gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 via-background to-portfolio-secondary/5" />

      {/* Content */}
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="text-portfolio-neutral">Abigail</span>{" "}
                <span className="text-gradient-primary">Lehr</span>
              </h1>

              <motion.div
                className="flex flex-wrap justify-center gap-2 text-portfolio-muted text-lg"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {[
                  "Software Engineer",
                  "•",
                  "UI/UX Designer",
                  "•",
                  "Vibe Coder",
                ].map((item, idx) => (
                  <motion.span
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.p
              className="text-xl leading-relaxed max-w-2xl mx-auto mb-8 h-20"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <TypingText text="Building high-performance, aesthetically pleasing web applications with a focus on modern frameworks and AI-assisted build." />
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                View My Work
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
              <div className="h-px bg-gradient-to-r from-portfolio-primary to-transparent flex-1" />
              <span className="text-portfolio-muted text-sm">California</span>
            </div>
          </motion.div>

          {/* Headshot / Visual */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <div className="relative w-[18rem] sm:w-[20rem] lg:w-[24rem] aspect-[3/4] overflow-hidden rounded-[2rem]">
              <div
                className="absolute -inset-2 rounded-[2rem] opacity-30 blur-2xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <ImgWithFallback
                alt="Abigail Lehr headshot"
                className="relative w-full h-full object-cover object-top shadow-[var(--shadow-medium)] border border-portfolio-primary/10 rounded-[2rem] bg-portfolio-light"
              />
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full blur-2xl opacity-30"
                style={{ background: "var(--gradient-secondary)" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-portfolio-primary" />
          </button>
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
