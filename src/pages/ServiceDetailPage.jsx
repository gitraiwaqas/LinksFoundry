import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { services } from "../data/content";
import Button from "../components/ui/Button";
import SectionHeading from "../components/common/SectionHeading";
import { HiArrowLeft, HiCheck, HiOutlineAdjustments, HiOutlineLightningBolt, HiOutlineShieldCheck } from "react-icons/hi";
import { useEffect } from "react";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    if (!service) {
      navigate("/404");
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="pt-24 bg-foundry-light min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-foundry-slate hover:text-solar-gold transition-colors mb-12 font-outfit font-bold"
          >
            <HiArrowLeft /> All Services
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Content */}
            <div className="flex-1">
              <div className="w-16 h-16 bg-foundry-navy text-solar-gold rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-xl shadow-solar-gold/10">
                <service.icon />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-outfit font-black text-foundry-navy mb-8 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-foundry-slate font-inter mb-12 leading-relaxed">
                {service.description}
              </p>

              <div className="prose prose-lg max-w-none font-inter text-foundry-slate mb-16">
                <div className="whitespace-pre-line">
                  {service.fullContent}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl mb-16">
                <h3 className="text-2xl font-outfit font-black text-foundry-navy mb-8">Service Advantages</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                        <HiCheck />
                      </div>
                      <span className="font-outfit font-bold text-foundry-navy">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar / CTA Card */}
            <aside className="w-full lg:w-[400px] sticky top-32">
              <div className="bg-foundry-navy p-10 rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-solar-gold/10 blur-3xl rounded-full" />
                
                <h4 className="text-sm font-outfit font-bold text-solar-gold uppercase tracking-widest mb-2">Pricing Details</h4>
                <div className="text-4xl font-outfit font-black mb-8">{service.price}</div>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <HiOutlineLightningBolt className="text-solar-gold shrink-0" /> Turnaround: 15-30 Days
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <HiOutlineShieldCheck className="text-solar-gold shrink-0" /> Quality Guarantee Included
                  </li>
                  <li className="flex items-center gap-3 text-slate-300 text-sm">
                    <HiOutlineAdjustments className="text-solar-gold shrink-0" /> Custom Anchor Strategy
                  </li>
                </ul>

                <Link to="/contact">
                  <Button size="lg" className="w-full py-6 text-lg shadow-xl shadow-solar-gold/20">
                    Get Started Now
                  </Button>
                </Link>
                
                <p className="text-center text-slate-500 text-xs mt-6 font-medium">
                  No hidden fees. 100% Transparency.
                </p>
              </div>

              <div className="mt-8 bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center">
                 <h4 className="font-outfit font-bold text-foundry-navy mb-4 text-lg">Need a custom plan?</h4>
                 <p className="text-sm text-foundry-slate mb-6">Scale your SEO impact with a tailored agency partnership.</p>
                 <Link to="/contact" className="text-foundry-navy font-bold border-b-2 border-solar-gold hover:text-solar-gold transition-colors">
                    Talk to an Expert →
                 </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            subtitle="The LinksFoundry Way"
            title="Our Four-Step Methodology"
            description="We follow a rigorous, quality-focused process for every link we build, ensuring maximum safety and return on investment."
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <div key={i} className="relative p-10 rounded-[2.5rem] bg-foundry-light border border-slate-50 group hover:border-solar-gold/30 transition-all">
                <div className="text-5xl font-outfit font-black text-solar-gold/20 mb-6 group-hover:text-solar-gold/40 transition-colors">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-outfit font-black text-foundry-navy mb-4">{step}</h4>
                <p className="text-sm text-foundry-slate line-clamp-3">
                  Comprehensive execution of {step.toLowerCase()} to ensure your link stays live and carries power.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
