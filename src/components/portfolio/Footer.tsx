import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-portfolio-primary/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-portfolio-muted">
          © {new Date().getFullYear()} Abigail Lehr. Proudly working from California and beyond.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
