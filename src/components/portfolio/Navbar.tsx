import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-portfolio-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-bold text-portfolio-neutral dark:text-white"
        >
          Abigail <span className="text-gradient-primary">Lehr</span>
        </Link>

        {/* Desktop Navigation */}
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
            <Button variant="primary" size="sm">
              Let's Talk
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-portfolio-neutral dark:text-white"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white dark:bg-zinc-950 border-portfolio-primary/10"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-portfolio-neutral dark:text-white">
                  Abigail <span className="text-gradient-primary">Lehr</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-12">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      location.pathname === link.href
                        ? "text-portfolio-primary dark:text-portfolio-secondary font-bold"
                        : "text-portfolio-muted dark:text-zinc-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <Button variant="primary" className="w-full mt-4">
                    Let's Talk
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
