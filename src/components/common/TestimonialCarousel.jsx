import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiArrowRight, HiStar } from "react-icons/hi";

const testimonials = [
  {
    name: "James Wilson",
    role: "Marketing Director at SaaSify",
    content: "LinksFoundry transformed our organic reach. Their white-hat approach is exactly what we needed for the UK market. We've seen a 250% increase in traffic in just 6 months.",
    photo: "JW"
  },
  {
    name: "Sarah Jenkins",
    role: "CEO of EcoLife US",
    content: "Professional, transparent, and results-driven. They don't just build links; they build authority. The quality of placements we received was far beyond our expectations.",
    photo: "SJ"
  },
  {
    name: "David Chen",
    role: "Growth Head at Fintech Flow",
    content: "The best link building agency we've worked with. Their reporting is detailed and their strategy is genuinely tailored to our niche. Absolute game chargers.",
    photo: "DC"
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-foundry-navy/5 border border-slate-100">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Quote Icon Background */}
        <div className="flex-1">
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <HiStar key={i} className="text-solar-gold" size={20} />
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-2xl md:text-3xl font-outfit font-bold text-foundry-navy leading-tight mb-10 italic">
                "{testimonials[current].content}"
              </p>
              <div>
                <h4 className="text-xl font-outfit font-bold text-foundry-navy">{testimonials[current].name}</h4>
                <p className="text-foundry-slate font-inter">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex md:flex-col gap-4">
          <button
            onClick={prev}
            className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-foundry-navy hover:text-white transition-all duration-300"
          >
            <HiArrowLeft size={24} />
          </button>
          <button
            onClick={next}
            className="w-14 h-14 rounded-full bg-solar-gold text-foundry-navy flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-solar-gold/20"
          >
            <HiArrowRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Dots */}
      <div className="flex gap-2 mt-12">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === current ? "w-8 bg-solar-gold" : "w-2 bg-slate-200"
            )}
          />
        ))}
      </div>
    </div>
  );
}

// Utility for cn if not globally available in this context
const cn = (...classes) => classes.filter(Boolean).join(" ");
