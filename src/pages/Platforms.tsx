import Navbar from "@/components/portfolio/Navbar";
import PlatformsComponent from "@/components/portfolio/Platforms";
import Footer from "../components/portfolio/Footer";

const Platforms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <PlatformsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Platforms;
