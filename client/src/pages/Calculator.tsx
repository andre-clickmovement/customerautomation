import Navigation from "@/components/Navigation";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * Calculator Page
 * Dedicated page for ROI calculation with enhanced context and CTA
 */

export default function Calculator() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="ROI Calculator"
        description="Calculate the revenue impact of Customer Automation on your business. See how much revenue you're losing to slow lead response and how much you could recover."
        path="/calculator"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background blueprint-grid">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/">
              <a className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to Home
              </a>
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-sans font-extrabold uppercase mb-6">
              Calculate Your
              <br />
              <span className="text-primary">Revenue Impact</span>
            </h1>
            
            <p className="text-xl font-mono text-muted-foreground border-l-4 border-primary pl-6 mb-8">
              See exactly how much revenue you're losing to slow lead response—and how much you could recover with Customer Automation.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-card diagonal-top">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 bg-background blueprint-grid diagonal-top">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold uppercase mb-8 text-center">
              Why These Numbers Matter
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border-2 border-border p-6">
                <div className="text-4xl font-sans font-extrabold text-primary mb-4">
                  5 Min
                </div>
                <p className="font-mono text-sm text-muted-foreground">
                  Leads contacted within 5 minutes are <strong className="text-foreground">21x more likely</strong> to convert than those contacted after 30 minutes.
                </p>
              </div>
              
              <div className="bg-card border-2 border-border p-6">
                <div className="text-4xl font-sans font-extrabold text-primary mb-4">
                  78%
                </div>
                <p className="font-mono text-sm text-muted-foreground">
                  Of leads go with the <strong className="text-foreground">first responder</strong>, not the best solution. Speed wins.
                </p>
              </div>
              
              <div className="bg-card border-2 border-border p-6">
                <div className="text-4xl font-sans font-extrabold text-primary mb-4">
                  60%
                </div>
                <p className="font-mono text-sm text-muted-foreground">
                  Of your CRM database is <strong className="text-foreground">dormant revenue</strong>—old leads that never got proper follow-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card diagonal-top">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold uppercase mb-6">
              Ready to Stop the Leak?
            </h2>
            <p className="text-xl font-mono text-muted-foreground mb-8">
              Schedule a free Automation Audit to see your exact revenue recovery potential.
            </p>
            <Link href="/#contact">
              <a className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan-hover text-lg font-mono font-bold uppercase tracking-wider px-12 py-4 transition-colors">
                Schedule Your Audit
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
