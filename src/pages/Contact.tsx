import Navbar from "@/components/portfolio/Navbar";
import ContactComponent from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
