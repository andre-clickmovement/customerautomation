import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ Component
 * Addresses common objections and questions about Customer Automation
 */

const faqs = [
  {
    question: "Will AI sound robotic or impersonal?",
    answer: "No. Our AI is trained on your actual sales scripts and top performers' language patterns. It mirrors your brand voice, handles objections naturally, and knows when to escalate to a human. Prospects often don't realize they're engaging with AI until we tell them—and by then, they're already impressed by the responsiveness."
  },
  {
    question: "What if my industry is too complex for AI?",
    answer: "Complexity is exactly why you need automation. The more complex your sales process, the more critical it is to have consistent, accurate qualification happening 24/7. We've deployed Customer Automation in industries ranging from enterprise SaaS to professional services to healthcare—all with multi-step, high-touch sales cycles. The AI handles the repetitive qualification work; your Certified Architect ensures the nuance is preserved."
  },
  {
    question: "How much does this cost?",
    answer: "We offer three engagement models: (1) Done-For-You Monthly Retainer ($4,000-$7,000/mo depending on volume + performance bonuses), (2) Guided Implementation Workshop ($997-$1,997 one-time), or (3) Hybrid Approach (Workshop + Retainer). Most clients see 5-10x ROI within the first 90 days based on recovered revenue alone. Use the ROI Calculator above to estimate your specific return."
  },
  {
    question: "How long does implementation take?",
    answer: "14 days from audit to launch. We follow a structured 3-step process: Days 1-3 (Audit & Mapping), Days 4-10 (Setup & Training), Days 11-14 (Pilot & Launch). Unlike hiring or traditional agencies, there's no 3-6 month ramp. You start seeing results in Week 3."
  },
  {
    question: "What if the AI makes a mistake?",
    answer: "Your Certified Automation Architect monitors every conversation in real-time. If the AI encounters complexity beyond its training, it immediately escalates to a human. We also run a 10% pilot before scaling to 100% of your traffic, allowing us to catch and correct any edge cases. Plus, the system learns from every interaction—mistakes become training data."
  },
  {
    question: "Do I need to replace my current CRM or tools?",
    answer: "No. Customer Automation integrates with your existing tech stack (Salesforce, HubSpot, Pipedrive, etc.). We don't replace your tools—we automate the processes that connect them. Think of it as the infrastructure layer that sits on top of your current systems."
  },
  {
    question: "What happens to my sales team?",
    answer: "They get promoted. Instead of chasing cold leads and doing manual follow-up, they focus on high-value conversations with pre-qualified, engaged prospects. The AI handles the 90% of repetitive work; your team handles the 10% that requires human judgment, negotiation, and relationship-building. Most clients report higher team morale because reps are closing more deals with less grunt work."
  },
  {
    question: "Is this just a chatbot?",
    answer: "No. Chatbots are reactive tools that sit on your website waiting for visitors to type questions. Customer Automation is proactive infrastructure that engages leads across Voice, Email, and Chat—reaching out, following up, qualifying, and booking meetings automatically. It's the difference between a doorbell and a full sales team."
  },
  {
    question: "What if I don't have enough leads to justify automation?",
    answer: "If you're getting fewer than 50 leads per month, you might be right—manual follow-up could still work. But if you're above 100 leads/month and your conversion rate is below 5%, you're losing revenue every single day. The Reactivation Engine alone can recover thousands of dollars from your existing CRM database, often paying for the entire system."
  },
  {
    question: "How do I know this will work for my business?",
    answer: "That's exactly what the free Automation Audit is for. We analyze your current lead flow, conversion data, and sales process to identify specific bottlenecks and revenue leaks. Then we show you—with real numbers—how much additional revenue you'd capture with Customer Automation in place. No pressure, no obligation. Just data."
  }
];

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border-2 border-border data-[state=open]:border-primary transition-colors"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
              <span className="font-mono font-bold text-foreground group-hover:text-primary transition-colors pr-4">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <p className="font-mono text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
