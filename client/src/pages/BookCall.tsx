import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Cal from "@calcom/embed-react";

export default function BookCall() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="Book a Call"
        description="Schedule your free Customer Automation consultation. Pick a time that works for you and let's discuss how AI can accelerate your customer lifecycle."
        path="/book-call"
      />

      <div className="flex-1">
        <div className="container pt-12 pb-8 text-center">
          <h1 className="text-5xl md:text-7xl font-sans font-extrabold uppercase">
            Book Your <span className="text-primary">Audit</span> Today
          </h1>
        </div>
        <Cal
          calLink="levregai/customer-automation"
          config={{
            theme: "dark",
          }}
          style={{ width: "100%", height: "100%", minHeight: "calc(100vh - 5rem)", overflow: "scroll" }}
        />
      </div>

      <Footer />
    </div>
  );
}
