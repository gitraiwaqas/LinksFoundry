import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";
import PricingCard from "../components/common/PricingCard";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useState } from "react";
import Button from "../components/ui/Button";

const pricingTiers = [
  {
    tier: "Starter Bundle",
    price: "$1,500",
    description: "Perfect for small businesses starting their SEO journey.",
    features: [
      "5 High-Quality Backlinks",
      "DR 30+ Guarantee",
      "Niche-Relevant Outreach",
      "Monthly Growth Report",
      "3 Business Day Support"
    ]
  },
  {
    tier: "Growth Authority",
    price: "$3,500",
    description: "Fuel your expansion with aggressive link building.",
    popular: true,
    features: [
      "15 Premium Backlinks",
      "DR 50+ Guarantee",
      "Digital PR Mention (1/mo)",
      "Competitor Gap Analysis",
      "Dedicated Strategist",
      "Priority Fulfillment"
    ]
  },
  {
    tier: "Enterprise Scale",
    price: "Custom",
    description: "Full-service authority building at global scale.",
    features: [
      "Unlimited Link Volume",
      "DR 70+ Targeted Outreach",
      "Full Digital PR Campaigns",
      "White-Label Options",
      "24/7 Priority Support",
      "API & Custom Reporting"
    ]
  }
];

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "SEO is a long-term game. While indexation typically occurs within 2-4 weeks, the full impact on rankings usually manifests between 3 to 6 months of consistent link building."
  },
  {
    q: "Is your link building safe for my brand?",
    a: "Absolutely. We strictly follow white-hat principles, securing placements in genuine editorial content. We never use PBNs, automated spam, or low-quality directories."
  },
  {
    q: "Can I choose the anchor text for my links?",
    a: "We provide recommendations based on your current anchor profile to ensure natural growth. However, we collaborate with you to ensure high-value keywords are prioritized safely."
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "We guarantee the quality and delivery of every link. If a placement doesn't meet the agreed-upon metrics (DR, niche, etc.), we will replace it or refund that specific link's cost."
  },
  {
    q: "Are the links permanent?",
    a: "Yes. We secure editorial placements that are intended to be permanent. We monitor all links for 12 months and will replace any that go offline during that period for free."
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className={`text-lg font-outfit font-bold transition-colors ${isOpen ? "text-solar-gold" : "text-foundry-navy group-hover:text-foundry-slate"}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-solar-gold" : "text-slate-300"}`}>
          {isOpen ? <HiMinus size={20} /> : <HiPlus size={20} />}
        </div>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-foundry-slate font-inter leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="pt-24 bg-foundry-light min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="Investment"
            title="Clear, Transparent Pricing for Serious Brands"
            description="No hidden fees. No long-term contracts. Just high-impact link building delivered with precision."
          />

          <div className="grid lg:grid-cols-3 gap-8 mb-32 items-stretch">
            {pricingTiers.map((tier, i) => (
              <PricingCard key={i} {...tier} index={i} />
            ))}
          </div>

          <div className="max-w-3xl mx-auto py-20 bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-xl shadow-foundry-navy/5">
             <SectionHeading 
               align="left"
               subtitle="Support"
               title="Frequently Asked Questions"
               className="mb-8"
             />
             <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.q} answer={faq.a} />
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Area */}
      <section className="py-32 bg-foundry-navy text-white text-center">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center">
               <div className="w-20 h-20 bg-solar-gold/10 text-solar-gold rounded-full flex items-center justify-center mb-8">
                  <HiPlus size={40} className="rotate-45" />
               </div>
               <h2 className="text-3xl md:text-5xl font-outfit font-black mb-6 italic">The LinksFoundry Guarantee</h2>
               <p className="text-xl text-slate-400 font-inter max-w-2xl mb-12">
                 We stand by our work. Every link is vetted for quality, relevance, and longevity. If it doesn't meet our standards (or yours), we fix it. Period.
               </p>
               <Button variant="primary" size="lg" className="px-12 py-5 text-xl">
                  Ready to Start? Talk to an Expert
               </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
