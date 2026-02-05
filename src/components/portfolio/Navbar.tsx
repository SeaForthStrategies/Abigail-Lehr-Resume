import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#platforms", label: "Platforms" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "backdrop-blur-md bg-white/70 border-b border-portfolio-primary/10" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-portfolio-neutral">Abigail <span className="text-gradient-primary">Lehr</span></a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-portfolio-muted hover:text-portfolio-neutral transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button size="sm" variant="primary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


