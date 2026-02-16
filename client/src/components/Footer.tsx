import { Link } from "wouter";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

/**
 * Footer Component
 * Professional footer with navigation, legal links, and social media
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t-2 border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-mono font-bold text-primary uppercase tracking-widest text-sm mb-4">
              CustomerAutomation.com
            </h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
              The infrastructure layer for modern customer engagement. AI Speed. Human Strategy. Zero Bottlenecks.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="mailto:hello@customerautomation.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-mono font-bold text-foreground uppercase tracking-wider text-xs mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                  Lifecycle Engine
                </Link>
              </li>
              <li>
                <Link href="/#architects" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                  Certified Architects
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/#results" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-mono font-bold text-foreground uppercase tracking-wider text-xs mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link href="/#contact" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-mono font-bold text-foreground uppercase tracking-wider text-xs mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-muted-foreground">
              © {currentYear} CustomerAutomation.com. All rights reserved.
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Built with AI Speed. Managed with Human Strategy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
