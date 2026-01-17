import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";
import CaseStudyCard from "../components/common/CaseStudyCard";
import Button from "../components/ui/Button";

const categories = ["All", "E-commerce", "SaaS", "Local Business", "B2B"];

import { caseStudies } from "../data/content";
const caseStudyData = caseStudies;

export default function CaseStudiesPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = activeTab === "All" 
    ? caseStudyData 
    : caseStudyData.filter(cs => cs.industry === activeTab);

  return (
    <div className="pt-24 min-h-screen bg-foundry-light">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="Our Impact"
            title="Proven Results That Speak for Themselves"
            description="We've helped hundreds of brands dominate their search landscape through data-driven, creative link building campaigns. Here's a look at some of our favorites."
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-full font-outfit font-bold text-sm transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-foundry-navy text-white shadow-xl shadow-foundry-navy/20"
                    : "bg-white text-foundry-navy hover:bg-solar-gold/10 border border-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredData.map((cs, i) => (
                <motion.div
                  key={cs.client}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <CaseStudyCard {...cs} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-20 text-foundry-slate font-inter">
              No case studies found for this category yet. We're constantly adding new results!
            </div>
          )}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
           <div className="max-w-4xl mx-auto">
              <span className="text-solar-gold text-5xl font-outfit font-black mb-8 block opacity-20">"</span>
              <p className="text-3xl md:text-4xl font-outfit font-bold text-foundry-navy leading-tight mb-12">
                "LinksFoundry doesn't just deliver reports; they deliver tangible, bankable growth. Their ability to secure placements on high-tier publications is unmatched in the industry."
              </p>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 bg-foundry-navy rounded-full mb-4 flex items-center justify-center text-white font-bold">MK</div>
                 <h4 className="font-outfit font-bold text-xl text-foundry-navy">Michael K.</h4>
                 <p className="text-foundry-slate">Head of Growth, NexGen Digital</p>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-foundry-navy text-white rounded-t-[5rem]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeading 
            light
            subtitle="Your Turn"
            title="Ready to be our next success story?"
            description="Let's build a custom link building roadmap tailored to your specific goals and industry."
            className="mb-12"
          />
          <Button size="lg" className="px-12 py-6 text-xl">
             Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
}
