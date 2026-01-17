import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function CaseStudyCard({ client, industry, results, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl bg-foundry-navy aspect-4/5 md:aspect-3/4"
    >
      {/* Background Image Placeholder / Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-foundry-navy via-foundry-navy/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-[#1e293b] group-hover:scale-110 transition-transform duration-700">
        {/* Real image would go here */}
        <div className="w-full h-full flex items-center justify-center opacity-20">
           {/* placeholder for design */}
           <div className="w-20 h-20 border-2 border-dashed border-white rounded-full flex items-center justify-center">
             <span className="text-white text-xs">GFX</span>
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
        <span className="text-solar-gold text-xs font-outfit font-bold uppercase tracking-widest mb-3 block">
          {industry}
        </span>
        <h3 className="text-white text-2xl md:text-3xl font-outfit font-bold mb-6 group-hover:text-solar-gold transition-colors">
          {client}
        </h3>
        
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
          {results.map((res, i) => (
            <div key={i}>
              <div className="text-white font-outfit font-extrabold text-xl">{res.value}</div>
              <div className="text-slate-400 text-xs uppercase tracking-tighter">{res.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
