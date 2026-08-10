import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
  { href: "/about", label: "Profile" },
  { href: "/skills", label: "Stack" },
  { href: "/portfolio", label: "Builds" },
  { href: "/contact", label: "Connect" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between gap-2">
        <Link to="/" className="flex items-center gap-2.5 text-white hover:text-cyan-400 transition-colors truncate min-w-0">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-zinc-950/70 shadow-[0_0_18px_-10px_rgba(34,211,238,0.8)] backdrop-blur-sm">
            <img src="/favicon.png" alt="" className="h-7 w-7 object-contain" aria-hidden="true" />
          </span>
          <span className="font-display font-semibold text-base sm:text-lg truncate">Abigail Lehr</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <motion.div key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href ? "text-cyan-400" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: links.length * 0.05 }}>
            <Link to="/contact">
              <motion.span
                className="inline-block px-4 py-2 rounded-lg bg-cyan-500 text-zinc-950 text-sm font-semibold hover:bg-cyan-400 transition-colors"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                Contact
              </motion.span>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-zinc-950 border-zinc-800/80 rounded-l-2xl">
              <SheetHeader>
                <SheetTitle className="text-left text-white font-semibold">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === link.href ? "text-cyan-400 bg-cyan-500/10" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setOpen(false)} className="mt-4">
                  <span className="block w-full text-center py-3 rounded-xl bg-cyan-500 text-zinc-950 font-semibold text-sm">
                    Contact
                  </span>
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
