import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CheckCircle } from "lucide-react";

export default function BookingConfirmed() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Booking Confirmed"
        description="Your automation audit has been booked. We look forward to speaking with you."
        path="/confirmed"
        noindex
      />

      <section className="pt-24 pb-16 bg-background blueprint-grid">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-sans font-extrabold uppercase mb-6">
              You're All <span className="text-primary">Set</span>
            </h1>

            <p className="text-xl font-mono text-muted-foreground border-l-4 border-primary pl-6 text-left max-w-2xl mx-auto">
              Your automation audit is booked. Check your email for the confirmation details. In the meantime, see how Customer Automation is already driving results.
            </p>
          </div>
        </div>
      </section>

      <CaseStudies />

      <Footer />
    </div>
  );
}
