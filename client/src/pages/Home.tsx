import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Infinity, Building2, Code, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Link } from "wouter";

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
      <Navigation />
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center blueprint-grid overflow-hidden">
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
            <p className="text-xl md:text-2xl font-mono text-primary mb-16 max-w-3xl mx-auto">
              AI Speed. Human Strategy. Zero Bottlenecks.
            </p>

            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan-hover text-lg font-mono font-bold uppercase tracking-wider px-12 py-6"
            >
              Schedule Your Ai Automation Audit <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section: The Three Broken Models */}
      <section id="about" className="py-32 bg-card diagonal-top">
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
                The infrastructure that combines <span className="bg-foreground text-background px-2">AI-powered engagement</span> with <span className="bg-foreground text-background px-2">human strategic oversight</span> to accelerate the customer lifecycle from lead to advocate.
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

      {/* How It Works Section */}
      <section className="py-32 bg-card diagonal-top">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6 text-center">How It Works</h2>
            <p className="text-xl font-mono text-muted-foreground mb-20 text-center border-l-4 border-primary pl-6 max-w-3xl mx-auto">
              From audit to launch in 14 days. No long ramp. No technical complexity.
            </p>
            
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary hidden md:block" />
              
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-background border-2 border-primary p-8 inline-block glow-cyan">
                      <h3 className="text-3xl mb-4">Step 1: Audit</h3>
                      <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-4">
                        Days 1-3
                      </p>
                      <ul className="space-y-3 font-mono text-muted-foreground text-left">
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Map your customer journey
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Analyze current conversion data
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Identify bottlenecks & leaks
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Define automation scope
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center text-3xl font-sans font-extrabold">
                      01
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center md:justify-end order-2 md:order-1">
                    <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center text-3xl font-sans font-extrabold">
                      02
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="bg-background border-2 border-primary p-8 inline-block glow-cyan">
                      <h3 className="text-3xl mb-4">Step 2: Setup</h3>
                      <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-4">
                        Days 4-10
                      </p>
                      <ul className="space-y-3 font-mono text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Configure Voice, Email, Chat channels
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Train AI on your sales scripts
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Integrate with your CRM
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Assign Certified Architect
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="bg-background border-2 border-primary p-8 inline-block glow-cyan">
                      <h3 className="text-3xl mb-4">Step 3: Launch</h3>
                      <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-4">
                        Days 11-14
                      </p>
                      <ul className="space-y-3 font-mono text-muted-foreground text-left">
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Run pilot with 10% of leads
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Monitor & optimize performance
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Scale to 100% traffic
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-3">&gt;</span>
                          Continuous improvement loop
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center text-3xl font-sans font-extrabold">
                      03
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section: The Lifecycle Engine */}
      <section id="features" className="py-32 bg-card diagonal-top relative">
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

      {/* Managed by Architects Section */}
      <section id="architects" className="py-32 bg-background blueprint-grid diagonal-top relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6">Managed by Architects</h2>
            <p className="text-xl font-mono text-muted-foreground mb-20 border-l-4 border-primary pl-6">
              Automation without oversight is dangerous. That's why we include the human.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="relative">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/MWpnGEc8HE8fN3j6yv8Ezu/sandbox/VHiHP46nUQuZ7coy4IB62W-img-3_1771016208000_na1fn_Y2EtaHVtYW4tYXJjaGl0ZWN0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTVdwbkdFYzhIRThmTjNqNnl2OEV6dS9zYW5kYm94L1ZIaUhQNDZuVVF1Wjdjb3k0SUI2MlctaW1nLTNfMTc3MTAxNjIwODAwMF9uYTFmbl9ZMkV0YUhWdFlXNHRZWEpqYUdsMFpXTjAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QkmZ1QJnXlPmK9cuwd94jqzERauXOcGZ6PS4tWNmZ5LbXDHldH1KcBgUijD435rI4AdpvpC5EUMyqwWNimP9ADEmuY2OIlcceXI~E6LCKkkeH~t1mzeBHovkOkO2knBXESQizwsOn3NRWVO-WKb2gh1EzW~SISaqol2Q1AZv5T6fL7ach4V3WP91H8awErWAOft3uSWWxWgySTcgRkb-hEZisxtaobqZjcoF3PaMusDhfac~HTONTSIa8lEGwfwWxzleshqwsBzGo-RX-IxyUnIPNsttPqXG-NCpug3nLmqcl8kBrofOibp-b6zmCC9Ty4OPioXEh~oB8yvyDqr1Qw__"
                  alt="Certified Automation Architect"
                  className="w-full h-auto border-2 border-primary glow-cyan"
                />
              </div>
              
              {/* Right: Role Card + Duties */}
              <div className="space-y-8">
                {/* Role Card */}
                <div className="bg-card border-2 border-primary p-8 glow-cyan">
                  <h3 className="text-4xl mb-4 text-primary">Certified<br/>Automation<br/>Architect</h3>
                  <p className="font-mono text-foreground leading-relaxed">
                    Not a support rep. Not a VA. A strategic partner trained to design, monitor, and optimize your Lifecycle Engine.
                  </p>
                </div>
                
                {/* Duties */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-sans font-extrabold uppercase mb-2">System Design</h4>
                      <p className="font-mono text-muted-foreground">
                        They map your customer journey and configure the AI to mirror your best sales processes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-sans font-extrabold uppercase mb-2">Active Oversight</h4>
                      <p className="font-mono text-muted-foreground">
                        They monitor AI conversations daily, intervening if quality drops or complexity spikes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-sans font-extrabold uppercase mb-2">Continuous Optimization</h4>
                      <p className="font-mono text-muted-foreground">
                        They analyze conversion data to tweak scripts, prompts, and timing for better results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="results" className="py-32 bg-card diagonal-top">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6">Real Results</h2>
            <p className="text-xl font-mono text-muted-foreground mb-20 border-l-4 border-primary pl-6">
              From revenue leaks to revenue engines.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Case Study 1: The AI Gatekeeper */}
              <div className="bg-background border border-border p-8 relative flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                
                {/* Icon */}
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                
                <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-4 inline-block bg-primary/10 px-3 py-1 rounded-full">
                  Local Business
                </p>
                
                <h3 className="text-2xl font-bold mb-4">The AI Gatekeeper</h3>
                
                <p className="text-lg font-bold text-primary mb-3">
                  How a Local Business Reclaimed Their Phone Line
                </p>
                
                <p className="font-mono text-sm text-muted-foreground mb-6 flex-grow">
                  A local business owner was drowning in phone calls. Not good calls—a flood of interruptions that pulled them away from...
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full font-mono font-bold uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Contact for Workflow →
                </Button>
              </div>
              
              {/* Case Study 2: The Sleeping Database */}
              <div className="bg-background border border-border p-8 relative flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                
                {/* Icon */}
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                
                <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-4 inline-block bg-primary/10 px-3 py-1 rounded-full">
                  Healthcare & Wellness
                </p>
                
                <h3 className="text-2xl font-bold mb-4">The Sleeping Database</h3>
                
                <p className="text-lg font-bold text-primary mb-3">
                  How a Med Spa Reactivated Past Clients
                </p>
                
                <p className="font-mono text-sm text-muted-foreground mb-6 flex-grow">
                  A local med spa had a problem hiding in plain sight: a database full of past customers they weren't talking to.
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full font-mono font-bold uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Contact for Workflow →
                </Button>
              </div>
              
              {/* Case Study 3: The 5-Minute Window */}
              <div className="bg-background border border-border p-8 relative flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <p className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-4 inline-block bg-primary/10 px-3 py-1 rounded-full">
                  Sales & Lead Generation
                </p>
                
                <h3 className="text-2xl font-bold mb-4">The 5-Minute Window</h3>
                
                <p className="text-lg font-bold text-primary mb-3">
                  How AI Stopped Leads From Going Cold
                </p>
                
                <p className="font-mono text-sm text-muted-foreground mb-6 flex-grow">
                  A business owner had a good problem: too many inbound leads. Their marketing was working. Forms were being filled out. Phone...
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full font-mono font-bold uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Contact for Workflow →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-card diagonal-top">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6 text-center">Frequently Asked Questions</h2>
            <p className="text-xl font-mono text-muted-foreground mb-20 text-center border-l-4 border-primary pl-6 max-w-3xl mx-auto">
              The answers to the questions you're already thinking.
            </p>
            
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-background blueprint-grid diagonal-top relative">
        {/* Corner Brackets */}
        <div className="absolute top-16 left-16 w-16 h-16 border-l-2 border-t-2 border-secondary" />
        <div className="absolute bottom-16 right-16 w-16 h-16 border-r-2 border-b-2 border-secondary" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-8">Stop Buying Tools.</h2>
              <p className="text-4xl md:text-5xl font-sans font-extrabold text-primary uppercase">
                Start Building Your Engine.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
