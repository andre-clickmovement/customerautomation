import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * ROI Calculator Component
 * Calculates revenue impact of faster lead response using the Acquisition Engine
 */

export default function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(500);
  const [avgDealValue, setAvgDealValue] = useState<number>(5000);
  const [currentConversion, setCurrentConversion] = useState<number>(2);

  // Assumptions based on case studies
  const targetConversion = 8; // Realistic target with Acquisition Engine
  const currentRevenue = monthlyLeads * (currentConversion / 100) * avgDealValue;
  const projectedRevenue = monthlyLeads * (targetConversion / 100) * avgDealValue;
  const monthlyGain = projectedRevenue - currentRevenue;
  const annualGain = monthlyGain * 12;

  return (
    <div className="bg-card border-2 border-primary p-8 md:p-12 glow-cyan">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Inputs */}
        <div className="space-y-6">
          <div>
            <Label htmlFor="leads" className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-2 block">
              Monthly Inbound Leads
            </Label>
            <Input
              id="leads"
              type="number"
              value={monthlyLeads}
              onChange={(e) => setMonthlyLeads(Number(e.target.value))}
              className="bg-background border-border text-foreground font-mono text-lg h-12"
            />
          </div>
          
          <div>
            <Label htmlFor="deal" className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-2 block">
              Average Deal Value ($)
            </Label>
            <Input
              id="deal"
              type="number"
              value={avgDealValue}
              onChange={(e) => setAvgDealValue(Number(e.target.value))}
              className="bg-background border-border text-foreground font-mono text-lg h-12"
            />
          </div>
          
          <div>
            <Label htmlFor="conversion" className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-2 block">
              Current Conversion Rate (%)
            </Label>
            <Input
              id="conversion"
              type="number"
              value={currentConversion}
              onChange={(e) => setCurrentConversion(Number(e.target.value))}
              className="bg-background border-border text-foreground font-mono text-lg h-12"
            />
          </div>
          
          <p className="text-xs font-mono text-muted-foreground italic pt-4">
            * Based on real client results: 2% → 8% conversion improvement with the Acquisition Engine
          </p>
        </div>

        {/* Right: Results */}
        <div className="space-y-6">
          <div className="bg-background border border-border p-6">
            <p className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Current Monthly Revenue
            </p>
            <p className="text-4xl font-sans font-extrabold text-destructive">
              ${currentRevenue.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-background border border-border p-6">
            <p className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Projected Monthly Revenue
            </p>
            <p className="text-4xl font-sans font-extrabold text-primary">
              ${projectedRevenue.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-primary text-primary-foreground p-6">
            <p className="text-sm font-mono font-bold uppercase tracking-wider mb-2">
              Additional Revenue (Annual)
            </p>
            <p className="text-5xl font-sans font-extrabold">
              ${annualGain.toLocaleString()}
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="w-full bg-foreground text-background hover:bg-foreground/90 text-lg font-mono font-bold uppercase tracking-wider h-14"
          >
            Get Your Custom Audit
          </Button>
        </div>
      </div>
    </div>
  );
}
