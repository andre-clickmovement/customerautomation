import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

/**
 * Contact/Demo Request Form Component
 * Captures lead information for automation audit requests
 */

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    monthlyLeads: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Request Submitted!", {
      description: "We'll contact you within 24 hours to schedule your automation audit.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      monthlyLeads: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border-2 border-primary p-8 md:p-12 glow-cyan">
      <h3 className="text-3xl md:text-4xl font-sans font-extrabold uppercase mb-8 text-center">
        Schedule Your Automation Audit
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="name" className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-2 block">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-background border-border text-foreground font-mono h-12"
            placeholder="John Smith"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-2 block">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-background border-border text-foreground font-mono h-12"
            placeholder="john@company.com"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="company" className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-2 block">
            Company *
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
            className="bg-background border-border text-foreground font-mono h-12"
            placeholder="Acme Corp"
          />
        </div>
        
        <div>
          <Label htmlFor="phone" className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-2 block">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="bg-background border-border text-foreground font-mono h-12"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <Label htmlFor="monthlyLeads" className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-2 block">
          Monthly Inbound Leads (Approx.)
        </Label>
        <Input
          id="monthlyLeads"
          name="monthlyLeads"
          type="text"
          value={formData.monthlyLeads}
          onChange={handleChange}
          className="bg-background border-border text-foreground font-mono h-12"
          placeholder="500"
        />
      </div>
      
      <div className="mb-8">
        <Label htmlFor="message" className="text-sm font-mono font-bold text-primary uppercase tracking-wider mb-2 block">
          Tell Us About Your Biggest Challenge
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-background border-border text-foreground font-mono min-h-32"
          placeholder="We're losing leads because our follow-up is too slow..."
        />
      </div>
      
      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan-hover text-lg font-mono font-bold uppercase tracking-wider h-14"
      >
        {isSubmitting ? "Submitting..." : "Request Your Audit"}
      </Button>
      
      <p className="text-xs font-mono text-muted-foreground text-center mt-6">
        * We'll respond within 24 hours to schedule your free automation audit
      </p>
    </form>
  );
}
