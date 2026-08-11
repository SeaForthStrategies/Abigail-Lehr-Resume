import { ArrowDown, ArrowRight, Braces, Cpu, Mail, Radio, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HERO_LINE =
  "I connect growth strategy, web builds, SEO/AEO, analytics, automation, and AI workflows into systems that ship and improve.";

const systemSteps = [
  "strategy.input",
  "site.build",
  "ai.workflow",
  "analytics.loop",
  "growth.ship",
];

const signalCards = [
  { label: "Web", value: "Next.js + CMS" },
  { label: "AI", value: "Agents + automations" },
  { label: "Growth", value: "SEO/AEO + funnels" },
];

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
    }, 18);
    return () => clearInterval(id);
  }, [text]);

  return (
    <span className={className}>
      {display}
      {!done && <span className="animate-cursor-blink text-cyan-300 ml-0.5">|</span>}
    </span>
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
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
    <section className="relative min-h-screen overflow-hidden border-b border-zinc-900/80 bg-zinc-950">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34, 211, 238, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.22) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-x-0 top-16 h-px bg-cyan-300/50"
        animate={{ opacity: [0.15, 0.8, 0.15], x: ["-18%", "18%", "-18%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(180deg,rgba(24,24,27,0)_0%,rgba(9,9,11,0.92)_92%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 pb-20 pt-28 sm:px-6 md:px-10">
        <div className="hero-system-layout flex w-full flex-col items-stretch gap-10">
          <motion.div className="max-w-3xl flex-1" variants={container} initial="hidden" animate="visible">
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-200"
            >
              <Radio className="h-4 w-4" />
              Abigail Lehr / Marketing Engineer
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl font-bold leading-[1.04] text-white sm:text-6xl lg:text-7xl"
            >
              I build the systems behind growth.
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              <Typewriter text={HERO_LINE} />
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.button
                onClick={() => handleNav("projects")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Builds
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              <motion.button
                onClick={() => handleNav("contact")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950/60 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-4 w-4" />
                Start a Conversation
              </motion.button>
            </motion.div>

            <motion.div variants={item} className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {signalCards.map((card) => (
                <div key={card.label} className="rounded-xl border border-zinc-800/90 bg-zinc-900/55 p-3">
                  <p className="font-mono text-xs text-cyan-300">{card.label}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">{card.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:shrink-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7, type: "spring", stiffness: 80 }}
          >
            <SystemVisual />
          </motion.div>
        </div>

        <motion.button
          onClick={() => handleNav("about")}
          className="absolute bottom-8 left-1/2 rounded-full p-2 text-zinc-500 transition-colors hover:text-zinc-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ opacity: { delay: 0.8 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
};

function SystemVisual() {
  return (
    <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-950/85 p-4 shadow-[0_24px_80px_-40px_rgba(34,211,238,0.55)] backdrop-blur">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-800/90 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <Terminal className="h-3.5 w-3.5" />
          growth-system.tsx
        </div>
      </div>

      <div className="grid gap-4">
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/70 p-4 font-mono text-sm">
          <div className="flex items-center gap-2 text-zinc-500">
            <Braces className="h-4 w-4 text-cyan-300" />
            deploy_pipeline
          </div>
          <div className="mt-4 space-y-2">
            {systemSteps.map((step, index) => (
              <motion.div
                key={step}
                className="flex items-center gap-3 rounded-lg border border-zinc-800/80 bg-zinc-950/70 px-3 py-2"
                animate={{ borderColor: ["rgba(39,39,42,0.8)", "rgba(34,211,238,0.45)", "rgba(39,39,42,0.8)"] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-cyan-300"
                  animate={{ scale: [1, 1.55, 1], opacity: [0.55, 1, 0.55] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
                />
                <span className="text-zinc-300">{step}</span>
                <span className="ml-auto text-emerald-300">ok</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative min-h-[160px] flex-1 overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-4">
            <motion.div
              className="absolute inset-x-0 top-0 h-px bg-cyan-300/80"
              animate={{ y: [0, 154, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <div className="relative h-full">
              <Node className="left-[8%] top-[14%]" delay={0} label="SEO" />
              <Node className="right-[10%] top-[20%]" delay={0.4} label="CMS" />
              <Node className="left-[36%] top-[44%]" delay={0.8} label="AI" active />
              <Node className="bottom-[10%] left-[14%]" delay={1.1} label="CRM" />
              <Node className="bottom-[18%] right-[8%]" delay={1.4} label="DATA" />
              <div className="absolute left-[18%] top-[25%] h-px w-[58%] rotate-[12deg] bg-zinc-700/80" />
              <div className="absolute left-[42%] top-[34%] h-[66px] w-px rotate-[-22deg] bg-zinc-700/80" />
              <div className="absolute bottom-[30%] left-[30%] h-px w-[46%] rotate-[-8deg] bg-zinc-700/80" />
            </div>
          </div>

          <div className="grid w-24 shrink-0 gap-3">
            <Metric icon={<Cpu className="h-4 w-4" />} label="stack" value="live" />
            <Metric icon={<Radio className="h-4 w-4" />} label="signal" value="clean" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Node({ className, delay, label, active = false }: { className: string; delay: number; label: string; active?: boolean }) {
  return (
    <motion.div
      className={`absolute z-10 flex h-12 w-12 items-center justify-center rounded-xl border text-[11px] font-semibold ${active ? "border-cyan-300 bg-cyan-300 text-zinc-950" : "border-zinc-700 bg-zinc-950 text-zinc-300"} ${className}`}
      animate={{ y: [0, -5, 0], boxShadow: active ? ["0 0 0 rgba(34,211,238,0)", "0 0 28px rgba(34,211,238,0.35)", "0 0 0 rgba(34,211,238,0)"] : undefined }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      {label}
    </motion.div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/70 p-3">
      <div className="mb-3 text-cyan-300">{icon}</div>
      <p className="font-mono text-xs text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

export default Hero;
