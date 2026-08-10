import { useState } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import Projects from "@/components/portfolio/Projects";
import MyWork from "@/components/portfolio/MyWork";
import { PageMeta } from "@/components/PageMeta";
import { PageCTA } from "@/components/portfolio/PageCTA";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "design">("projects");

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

        {activeTab === "projects" && <Projects />}
        {activeTab === "design" && <MyWork />}
        <PageCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
