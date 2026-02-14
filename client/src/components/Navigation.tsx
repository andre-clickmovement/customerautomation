import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

/**
 * Navigation Header Component
 * Sticky header with smooth scroll-to-section links
 */

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const [location] = useLocation();
  const isHome = location === "/";

  const navLinks = [
    { id: "about", label: "About", isSection: true },
    { id: "features", label: "Features", isSection: true },
    { id: "architects", label: "Architects", isSection: true },
    { id: "results", label: "Results", isSection: true },
    { id: "calculator", label: "Calculator", isSection: false, href: "/calculator" },
    { id: "contact", label: "Contact", isSection: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono font-bold text-primary uppercase tracking-widest text-sm md:text-base hover:text-primary/80 transition-colors"
          >
            CustomerAutomation.com
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isSection ? (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link key={link.id} href={link.href!}>
                  <a className="font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                link.isSection ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left px-4 py-2 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-background/50 transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link key={link.id} href={link.href!}>
                    <a className="block w-full text-left px-4 py-2 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-background/50 transition-colors">
                      {link.label}
                    </a>
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
