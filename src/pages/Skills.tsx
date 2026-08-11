import Navbar from "@/components/portfolio/Navbar";
import ExpertiseAndTools from "@/components/portfolio/ExpertiseAndTools";
import Footer from "@/components/portfolio/Footer";
import { PageMeta } from "@/components/PageMeta";
import { PageCTA } from "@/components/portfolio/PageCTA";

const Skills = () => (
  <div className="min-h-screen bg-background relative overflow-x-hidden">
    <PageMeta
      title="Stack"
      description="Marketing engineering stack across growth strategy, GTM, web development, analytics, automation, SEO/AEO, AI workflows, content, and events."
    />
    <Navbar />
    <main id="main-content" className="pt-20">
      <ExpertiseAndTools />
      <PageCTA />
    </main>
    <Footer />
  </div>
);

export default Skills;
