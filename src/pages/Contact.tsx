import Navbar from "@/components/portfolio/Navbar";
import ContactComponent from "@/components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import { PageMeta } from "@/components/PageMeta";

const Contact = () => (
  <div className="min-h-screen bg-background relative overflow-x-hidden">
    <PageMeta title="Contact" description="Reach out. Collaboration, questions, or projects." />
    <Navbar />
    <main id="main-content" className="pt-20">
      <ContactComponent />
    </main>
    <Footer />
  </div>
);

export default Contact;
