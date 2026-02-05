import Navbar from "@/components/portfolio/Navbar";
import Services from "@/components/portfolio/Services";
import Footer from "../components/portfolio/Footer";

const Expertise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Expertise;
