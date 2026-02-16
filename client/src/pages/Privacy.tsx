import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * Privacy Policy Page
 */

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Privacy Policy"
        description="Privacy policy for CustomerAutomation.com. Learn how we collect, use, and protect your personal information."
        path="/privacy"
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
              Privacy Policy
            </h1>
            <p className="font-mono text-sm text-muted-foreground mb-12">
              Last updated: February 14, 2026
            </p>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 font-mono text-sm text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">1. Information We Collect</h2>
                  <p>
                    We collect information you provide directly to us when you request an automation audit, use our ROI calculator, 
                    or contact us. This includes your name, email address, company name, phone number, and information about your 
                    lead volume and sales processes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Conduct automation audits and calculate ROI projections</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Analyze usage patterns to improve our platform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">3. Information Sharing</h2>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Service providers who assist in our operations (under strict confidentiality agreements)</li>
                    <li>Professional advisors such as lawyers and accountants</li>
                    <li>Law enforcement when required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">4. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                    internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">5. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Request data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">6. Cookies and Tracking</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">7. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                    Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-sans font-bold text-foreground mb-4">8. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at:
                    <br />
                    <a href="mailto:privacy@customerautomation.com" className="text-primary hover:underline">
                      privacy@customerautomation.com
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
