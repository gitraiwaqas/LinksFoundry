import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiCheck, HiOutlineLightBulb, HiOutlineSearch, HiOutlineDocumentText, HiOutlineChatAlt2 } from "react-icons/hi";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/ui/Button";
import { cn } from "../lib/utils";

import { services } from "../data/content";

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-foundry-light">
      {/* Header */}
      <section className="py-20 animate-fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="The Foundry"
            title="Precision-Engineered Link Building"
            description="Our service suite is designed for one thing: building long-term, indestructible search engine authority through high-quality backlink acquisition."
          />
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-24">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "flex flex-col lg:flex-row gap-12 items-center",
                  i % 2 !== 0 && "lg:flex-row-reverse"
                )}
              >
                {/* Visual / Icon Side */}
                <Link to={`/services/${service.slug}`} className="flex-1 w-full bg-white rounded-[3rem] aspect-square lg:aspect-video flex items-center justify-center border border-slate-100 shadow-xl shadow-foundry-navy/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-solar-gold/5 group-hover:bg-solar-gold/10 transition-colors" />
                  <div className="w-24 h-24 bg-foundry-navy text-solar-gold rounded-full flex items-center justify-center text-5xl font-outfit font-black z-10 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                </Link>

                {/* Content Side */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-outfit font-black text-foundry-navy mb-6">{service.title}</h3>
                  <p className="text-lg text-foundry-slate font-inter mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.benefits.map((benefit, j) => (
                      <div key={j} className="flex gap-2 items-center">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                          <HiCheck size={12} />
                        </div>
                        <span className="text-sm font-medium text-foundry-navy">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-white rounded-2xl border border-slate-100 mb-8">
                     <div className="text-xs font-black uppercase text-solar-gold tracking-widest mb-4">Our Methodology</div>
                     <div className="flex justify-between items-center">
                        {service.process.map((step, k) => (
                          <div key={k} className="flex flex-col items-center gap-2 group/step text-center">
                             <div className="w-3 h-3 rounded-full bg-slate-200 group-hover/step:bg-solar-gold transition-colors" />
                             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{step}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="outline">Learn More</Button>
                    </Link>
                    <Button>Get Started</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-foundry-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            light
            subtitle="Comparison"
            title="Choose Your Impact"
            description="We offer flexible solutions for brands at different stages of growth. All packages include white-hat methodology as standard."
          />
          
          <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse border border-white/10 rounded-3xl overflow-hidden">
                <thead className="bg-white/5">
                   <tr>
                      <th className="p-6 font-outfit font-bold border-b border-white/10">Feature</th>
                      <th className="p-6 font-outfit font-bold border-b border-white/10 text-solar-gold">Basic</th>
                      <th className="p-6 font-outfit font-bold border-b border-white/10 text-solar-gold">Professional</th>
                      <th className="p-6 font-outfit font-bold border-b border-white/10 text-solar-gold">Enterprise</th>
                   </tr>
                </thead>
                <tbody className="font-inter">
                   {[
                     { name: "Monthly Links", b: "5-7", p: "15-20", e: "50+" },
                     { name: "Min. Domain Authority", b: "DR 30+", p: "DR 50+", e: "DR 70+" },
                     { name: "Niche-Relevant Content", b: "✓", p: "✓", e: "✓" },
                     { name: "Competitor Gap Analysis", b: "-", p: "✓", e: "✓" },
                     { name: "Dedicated Manager", b: "-", p: "✓", e: "✓" },
                     { name: "Real-time Reporting", b: "-", p: "-", e: "✓" },
                     { name: "Editorial Guarantee", b: "✓", p: "✓", e: "✓" },
                   ].map((row, i) => (
                     <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="p-6 border-b border-white/10 text-slate-300">{row.name}</td>
                        <td className="p-6 border-b border-white/10 font-bold">{row.b}</td>
                        <td className="p-6 border-b border-white/10 font-bold">{row.p}</td>
                        <td className="p-6 border-b border-white/10 font-bold">{row.e}</td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm font-outfit font-bold uppercase tracking-widest text-slate-400 mb-12">Certified & Recognized By</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple Icon Placeholders */}
             <div className="text-3xl font-black">GOOGLE</div>
             <div className="text-3xl font-black">HEDGETECH</div>
             <div className="text-3xl font-black">SEMRUSH</div>
             <div className="text-3xl font-black">AHREFS</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-foundry-light">
         <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-outfit font-black text-foundry-navy mb-8">Not sure which service is right for you?</h2>
            <p className="text-lg text-foundry-slate mb-12 max-w-xl mx-auto">Our strategy experts are available for a 15-minute consultation to analyze your current profile and recommend the best path forward.</p>
            <Button size="lg">Schedule Your Expert Audit</Button>
         </div>
      </section>
    </div>
  );
}
