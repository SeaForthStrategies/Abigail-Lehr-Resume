import Navbar from "@/components/portfolio/Navbar";
import AboutComponent from "@/components/portfolio/About";
import Footer from "../components/portfolio/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <AboutComponent />
      </main>
      <Footer />
    </div>
  );
};

export default About;
