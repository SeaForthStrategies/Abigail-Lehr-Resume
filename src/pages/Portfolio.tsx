import { useState } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import Projects from "@/components/portfolio/Projects";
import MyWork from "@/components/portfolio/MyWork";
import { PageMeta } from "@/components/PageMeta";
import { PageCTA } from "@/components/portfolio/PageCTA";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "design">("projects");
  const siteVisuals = [
    {
      src: "/site-visuals/camera-coffee-portrait.jpg",
      alt: "Abigail with cameras and coffee",
      label: "Content Fieldwork",
    },
    {
      src: "/site-visuals/on-air-studio-portrait.jpg",
      alt: "Abigail holding an on-air sign in a studio",
      label: "Launch Energy",
    },
    {
      src: "/site-visuals/oceanside-beach-portrait.jpg",
      alt: "Abigail near the beach in Oceanside",
      label: "California Base",
    },
    {
      src: "/site-visuals/mirror-phone-portrait.jpg",
      alt: "Abigail in a mirror holding a phone",
      label: "Personal POV",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PageMeta title="Builds" description="Selected builds and systems across software, AI, growth, SEO/AEO, analytics, and product strategy." />
      <Navbar />
      <main id="main-content" className="pt-20">
        {/* Page header with tab switcher */}
        <div className="border-b border-zinc-800/80 sticky top-16 z-40 bg-zinc-950/95 backdrop-blur-md overflow-x-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-5">
              <div>
                <p className="text-cyan-400/80 text-xs font-medium uppercase tracking-wider mb-0.5">Work</p>
                <h1 className="text-xl md:text-2xl font-bold text-white">Digital products and growth systems</h1>
              </div>
              <div className="flex gap-1 p-1 rounded-xl bg-zinc-900/60 border border-zinc-800/80 w-fit shrink-0">
                <button
                  onClick={() => setActiveTab("projects")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === "projects" ? "bg-cyan-500 text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  Case Studies
                </button>
                <button
                  onClick={() => setActiveTab("design")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeTab === "design" ? "bg-cyan-500 text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  Work Samples
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="pt-8 md:pt-10 px-4 sm:px-6 md:px-10">
          <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950">
            <div className="relative min-h-[260px] md:min-h-[340px]">
              <img
                src="/portfolio-cinematic.jpg"
                alt="Abigail Lehr in a production studio hallway"
                className="absolute inset-0 w-full h-full object-cover object-[67%_center] opacity-95 brightness-125 contrast-110"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.94)_0%,rgba(9,9,11,0.82)_38%,rgba(9,9,11,0.36)_66%,rgba(9,9,11,0.14)_100%)]" />
              <div className="relative z-10 min-h-[260px] md:min-h-[340px] flex items-center px-5 sm:px-8 md:px-10 py-8">
                <div className="max-w-xl">
                  <p className="text-cyan-400/80 text-xs font-medium uppercase tracking-wider mb-3">Strategy In Motion</p>
                  <h2 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight mb-4">
                    I turn unclear ideas into working systems people can actually use.
                  </h2>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    The work below spans product builds, launch operations, analytics, content systems, and the hands-on execution that keeps digital work moving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-6 px-4 sm:px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {siteVisuals.map((visual, index) => (
                <div
                  key={visual.src}
                  className={`group relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 ${
                    index === 1 ? "md:-mt-4" : index === 2 ? "md:mt-5" : ""
                  }`}
                >
                  <div className="aspect-[4/5]">
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      className="w-full h-full object-cover object-center opacity-85 transition duration-300 group-hover:opacity-100 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 to-transparent p-3">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-300">{visual.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {activeTab === "projects" && <Projects />}
        {activeTab === "design" && <MyWork />}
        <PageCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
