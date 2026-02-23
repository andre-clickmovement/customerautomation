import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Widget } from "@typeform/embed-react";

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title="Get Started"
        description="Start your AI automation journey. Fill out a quick form and we'll build your personalized Customer Automation roadmap."
        path="/get-started"
      />

      <div className="flex-1">
        <Widget
          id="HKkzveby"
          className="w-full h-full min-h-[calc(100vh-5rem)]"
        />
      </div>

      <Footer />
    </div>
  );
}
