export default function CaseStudies() {
  return (
    <section id="results" className="py-32 bg-card diagonal-top">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-6">AI Results</h2>
          <p className="text-xl font-mono text-muted-foreground mb-20 border-l-4 border-primary pl-6">
            From revenue leaks to revenue engines.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1: The AI Gatekeeper */}
            <div className="bg-background border border-border p-8 relative flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              
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
            </div>
            
            {/* Case Study 2: The Sleeping Database */}
            <div className="bg-background border border-border p-8 relative flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              
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
            </div>
            
            {/* Case Study 3: The 5-Minute Window */}
            <div className="bg-background border border-border p-8 relative flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
