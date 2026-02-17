import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * Terms of Service Page
 */

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Terms of Service"
        description="Terms of service for CustomerAutomation.com. Review the terms governing use of our AI-powered customer automation services."
        path="/terms"
      />
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link href="/">
              <a className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to Home
              </a>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-sans font-extrabold uppercase mb-4">
              Terms of Service
            </h1>
            <p className="font-mono text-sm text-muted-foreground mb-12">
              Last updated: February 14, 2026
            </p>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 font-mono text-sm text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing or using CustomerAutomation.com services, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">2. Description of Services</h2>
                  <p>
                    CustomerAutomation.com provides AI-powered customer engagement infrastructure, including voice, email, 
                    and chat automation managed by Certified Automation Architects. Services include automation audits, 
                    system setup, ongoing optimization, and strategic oversight.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">3. Service Levels and Guarantees</h2>
                  <p>
                    While we strive for optimal performance, we do not guarantee specific conversion rate improvements. 
                    Results depend on multiple factors including lead quality, offer strength, and market conditions. 
                    Case studies represent actual client results but are not guarantees of future performance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">4. Client Responsibilities</h2>
                  <p>Clients agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Provide accurate information during the audit process</li>
                    <li>Grant necessary access to CRM and communication systems</li>
                    <li>Respond to Architect recommendations in a timely manner</li>
                    <li>Maintain compliance with applicable laws and regulations</li>
                    <li>Not use the service for illegal or unethical purposes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">5. Payment Terms</h2>
                  <p>
                    Payment terms vary by engagement model (Done-For-You, Workshop, or Hybrid). Monthly retainers are billed 
                    in advance. One-time fees are due upon agreement signing. Late payments may result in service suspension. 
                    Refund policies are outlined in individual service agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">6. Intellectual Property</h2>
                  <p>
                    All automation systems, scripts, and methodologies remain the intellectual property of CustomerAutomation.com. 
                    Clients receive a license to use these systems for their own business operations but may not resell, 
                    redistribute, or reverse-engineer our technology.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">7. Confidentiality</h2>
                  <p>
                    Both parties agree to maintain confidentiality of proprietary information shared during the engagement. 
                    This includes client data, business processes, and our automation methodologies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                  <p>
                    CustomerAutomation.com shall not be liable for indirect, incidental, special, or consequential damages 
                    arising from use of our services. Our total liability shall not exceed the amount paid by the client 
                    in the preceding 12 months.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">9. Termination</h2>
                  <p>
                    Either party may terminate services with 30 days written notice. Clients remain responsible for payment 
                    of services rendered through the termination date. We reserve the right to immediately terminate services 
                    for violation of these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">10. Changes to Terms</h2>
                  <p>
                    We may modify these Terms of Service at any time. Continued use of our services after changes constitutes 
                    acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">11. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
                    CustomerAutomation.com operates, without regard to conflict of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">12. Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, contact us at:
                    <br />
                    <a href="mailto:legal@customerautomation.com" className="text-primary hover:underline">
                      legal@customerautomation.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
