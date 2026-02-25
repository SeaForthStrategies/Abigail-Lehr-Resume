import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-1 flex items-center justify-center pt-24 px-6">
        <div className="text-center max-w-md">
          <h1 className="font-display text-8xl md:text-9xl font-bold text-zinc-800 mb-4">404</h1>
          <p className="text-xl text-zinc-400 mb-8">Page not found</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-zinc-950 font-semibold hover:bg-cyan-400 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
