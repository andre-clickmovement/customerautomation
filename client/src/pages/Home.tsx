import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Infinity, Building2, Code, Users } from "lucide-react";

/**
 * Design Philosophy: Architectural Futurism
 * - Dark mode (#0A0A0A) with electric cyan (#00D4FF) accents
 * - Blueprint grid backgrounds
 * - Diagonal section dividers
 * - Corner brackets for framing
 * - Inter Extra Bold for headlines, Roboto Mono for body
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center blueprint-grid overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/MWpnGEc8HE8fN3j6yv8Ezu/sandbox/VHiHP46nUQuZ7coy4IB62W-img-1_1771016222000_na1fn_Y2EtaGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTVdwbkdFYzhIRThmTjNqNnl2OEV6dS9zYW5kYm94L1ZIaUhQNDZuVVF1Wjdjb3k0SUI2MlctaW1nLTFfMTc3MTAxNjIyMjAwMF9uYTFmbl9ZMkV0YUdWeWJ5MWlady5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jeDwxhz2nCMZhjDPzy~kzOqHs7oqkmUEJQdf62oJGXZd6lgUBOGVQvMVjlbhXULlTHQF4Ar~8l757If3JIA3qH29NNJz-PrWx30e~Rv52-kxl78cqx3wRRncbBetGQ7FyaI4wfHM-bZl0LS4qkLnEnMhWUbShJ8GbevaWvz~uT0pppz69KOjYamu0rW0oaSqzNC89osP0ii3PLbAHjvsndzzbLZSJ7UX4D0micYoQ7nPxMjB-AzDisXxR~Vsl-RDLmb13Wr2nsDeXnMm4ea6FWU-35eugE0BCh7C3Y-PBzcn0W2KTu3Y5JVOxdjrV4gGfZQAfrnyg9AXK0hKHn-ZAA__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Corner Brackets */}
        <div className="absolute top-16 left-16 w-16 h-16 border-l-2 border-t-2 border-secondary" />
        <div className="absolute bottom-16 right-16 w-16 h-16 border-r-2 border-b-2 border-secondary" />
        
        <div className="container relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="mb-8 text-shadow-glow">
              Customer<br />Automation
            </h1>
            <p className="text-2xl md:text-3xl font-mono font-bold text-primary uppercase tracking-widest mb-12">
              The New Category
            </p>
            <p className="text-xl md:text-2xl font-mono text-muted-foreground mb-16 max-w-3xl mx-auto">
              AI Speed. Human Strategy. Zero Bottlenecks.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan-hover text-lg font-mono font-bold uppercase tracking-wider px-12 py-6"
            >
              Schedule Your Automation Audit <ArrowRight className="ml-2" />
            </Button>
            <p className="mt-8 text-sm font-mono text-muted-foreground uppercase tracking-widest">
              CustomerAutomation.com
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section: The Three Broken Models */}
      <section className="py-32 bg-card diagonal-top">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6">The Three Broken Models</h2>
            <p className="text-xl font-mono text-muted-foreground mb-20 border-l-4 border-primary pl-6">
              You are caught between expensive agencies, disconnected tools, and the slow pace of hiring.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Agency Model */}
              <div className="bg-background border border-border p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                <Building2 className="w-12 h-12 text-muted-foreground mb-6" />
                <h3 className="text-2xl mb-2">The Agency</h3>
                <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-6">
                  The Black Box
                </p>
                <ul className="space-y-4 font-mono text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    High monthly retainers
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    Opaque reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    Zero control over process
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    Slow communication loops
                  </li>
                </ul>
              </div>

              {/* Software Model */}
              <div className="bg-background border border-border p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                <Code className="w-12 h-12 text-muted-foreground mb-6" />
                <h3 className="text-2xl mb-2">The Software</h3>
                <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-6">
                  The DIY Trap
                </p>
                <ul className="space-y-4 font-mono text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    Disconnected tools
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    Requires manual management
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    Leads still go cold
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    No strategy included
                  </li>
                </ul>
              </div>

              {/* Hiring Model */}
              <div className="bg-background border border-border p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                <Users className="w-12 h-12 text-muted-foreground mb-6" />
                <h3 className="text-2xl mb-2">The Hiring</h3>
                <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-6">
                  The Scale Wall
                </p>
                <ul className="space-y-4 font-mono text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    Slow ramp (3-6 months)
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    High fixed costs (Salaries)
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    Inconsistent performance
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-3">✕</span>
                    Human capacity limits
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section: Defining Customer Automation */}
      <section className="py-32 bg-background blueprint-grid diagonal-top">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6">Defining Customer Automation</h2>
            <p className="text-xl font-mono text-muted-foreground mb-20 border-l-4 border-primary pl-6">
              It's not a tool. It's not a service. It's infrastructure.
            </p>
            
            {/* Definition Box */}
            <div className="bg-card border-l-8 border-primary p-12 mb-20">
              <p className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-widest mb-6">
                The Definition
              </p>
              <p className="text-3xl md:text-4xl font-sans font-extrabold leading-tight">
                The infrastructure that combines <span className="bg-foreground text-background px-2">AI-powered engagement</span> with <span className="bg-foreground text-background px-2">human strategic oversight</span> to accelerate the customer lifecycle—from lead to advocate.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-3">AI Speed</h3>
                  <p className="font-mono text-muted-foreground">
                    Instant execution across Voice, Email, and Chat — 24/7.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Brain className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-3">Human Strategy</h3>
                  <p className="font-mono text-muted-foreground">
                    Managed by Certified Automation Architects.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Infinity className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-3">Lifecycle Scope</h3>
                  <p className="font-mono text-muted-foreground">
                    Automation across Acquisition, Conversion, Retention, Reactivation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section: The Lifecycle Engine */}
      <section className="py-32 bg-card diagonal-top relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/MWpnGEc8HE8fN3j6yv8Ezu/sandbox/VHiHP46nUQuZ7coy4IB62W-img-2_1771016213000_na1fn_Y2EtYXV0b21hdGlvbi1lbmdpbmU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTVdwbkdFYzhIRThmTjNqNnl2OEV6dS9zYW5kYm94L1ZIaUhQNDZuVVF1Wjdjb3k0SUI2MlctaW1nLTJfMTc3MTAxNjIxMzAwMF9uYTFmbl9ZMkV0WVhWMGIyMWhkR2x2YmkxbGJtZHBibVUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=g3b~HhdSjpFbaEHE9RoaCBRHkspoDtosbDcNNzshrci-iGb7M1bwKEs1BSE0dwEC6rBEkt92XNytV-s8gNz8AnbdbgJih9sjrxxy2iOZJ6dJccMtl9PC65M1jg~CflXBkiGc6iluIou0ICotYpGGLEHp2ZgyxUfrF5rY76NAbvNMxuQ74BUM-9ZXCiOnMbcIEAVdOIphiqi1e0cX8TuSD0jKd5nN-XWosnqCLs2yYO3aVlbwaxiTEw035S9fnuA1jEwQO489e3YCVXhg~kfrjPmJgW~kO4AFjV4gqPjViU84vyzNoBvf6KovozKPH2XH3LkNZlYl-WaPhpiDdxYF9g__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6">The Lifecycle Engine</h2>
            <p className="text-xl font-mono text-muted-foreground mb-20 border-l-4 border-primary pl-6">
              One unified system. Three distinct phases. Zero revenue leaks.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Acquisition Engine */}
              <div className="bg-background border border-border p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                <div className="w-16 h-16 bg-card border-2 border-primary flex items-center justify-center mb-6 glow-cyan">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl mb-2">Acquisition Engine</h3>
                <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-6">
                  Stop the Revenue Leak
                </p>
                <ul className="space-y-3 font-mono text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Instant Speed-to-Lead
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Multi-Channel Outreach
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    24/7 Qualification
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Auto-Booking
                  </li>
                </ul>
              </div>

              {/* Scalability Engine */}
              <div className="bg-background border border-border p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                <div className="w-16 h-16 bg-card border-2 border-primary flex items-center justify-center mb-6 glow-cyan">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl mb-2">Scalability Engine</h3>
                <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-6">
                  Clone Your Best Closer
                </p>
                <ul className="space-y-3 font-mono text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Process Replication
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Objection Handling
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Perfect Follow-Up
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Human Handoff
                  </li>
                </ul>
              </div>

              {/* Reactivation Engine */}
              <div className="bg-background border border-border p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
                <div className="w-16 h-16 bg-card border-2 border-primary flex items-center justify-center mb-6 glow-cyan">
                  <Infinity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl mb-2">Reactivation Engine</h3>
                <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-6">
                  Mine Your CRM
                </p>
                <ul className="space-y-3 font-mono text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Database Segmentation
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Dormant Lead Wake-Up
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Long-Term Nurture
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">&gt;</span>
                    Revenue Recovery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background blueprint-grid diagonal-top relative">
        {/* Corner Brackets */}
        <div className="absolute top-16 left-16 w-16 h-16 border-l-2 border-t-2 border-secondary" />
        <div className="absolute bottom-16 right-16 w-16 h-16 border-r-2 border-b-2 border-secondary" />
        
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Stop Buying Tools.</h2>
            <p className="text-4xl md:text-5xl font-sans font-extrabold text-primary uppercase mb-16">
              Start Building Your Engine.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan-hover text-lg font-mono font-bold uppercase tracking-wider px-12 py-6 mb-12"
            >
              Schedule Your Automation Audit
            </Button>
            <div className="border-t border-secondary pt-8 max-w-md mx-auto">
              <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                CustomerAutomation.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
