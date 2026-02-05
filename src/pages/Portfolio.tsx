import Navbar from "@/components/portfolio/Navbar";
import Projects from "@/components/portfolio/Projects";
import MyWork from "@/components/portfolio/MyWork";
import Footer from "@/components/portfolio/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Projects />
        <MyWork />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
