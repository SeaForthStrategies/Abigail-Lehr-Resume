import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/platforms", label: "Platforms" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled 
        ? "backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-portfolio-primary/10" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-portfolio-neutral dark:text-white">
          Abigail <span className="text-gradient-primary">Lehr</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-portfolio-primary dark:text-portfolio-secondary font-bold"
                  : "text-portfolio-muted dark:text-zinc-400 hover:text-portfolio-primary dark:hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button
              variant="primary"
              size="sm"
            >
              Let's Talk
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


