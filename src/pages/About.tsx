import Navbar from "@/components/portfolio/Navbar";
import AboutComponent from "@/components/portfolio/About";
import Footer from "../components/portfolio/Footer";
import { PageMeta } from "@/components/PageMeta";
import { PageCTA } from "@/components/portfolio/PageCTA";

const About = () => (
  <div className="min-h-screen bg-background relative overflow-x-hidden">
    <PageMeta title="About" description="Marketing engineer with experience across growth strategy, web builds, analytics, automation, AI workflows, content, events, and shipped digital systems." />
    <Navbar />
    <main id="main-content" className="pt-20">
      <AboutComponent />
      <PageCTA />
    </main>
    <Footer />
  </div>
);

export default About;
