import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

export default function PricingCard({ tier, price, description, features, popular = false, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full transition-all duration-500",
        popular 
          ? "bg-foundry-navy text-white shadow-2xl shadow-foundry-navy/20 scale-105 z-10" 
          : "bg-white text-foundry-navy border border-slate-100 hover:border-solar-gold/30"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-solar-gold text-foundry-navy text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-outfit font-bold mb-2 uppercase tracking-tight">{tier}</h3>
        <p className={cn("text-sm font-inter", popular ? "text-slate-400" : "text-foundry-slate")}>
          {description}
        </p>
      </div>

      <div className="mb-10 flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-outfit font-black">{price}</span>
        <span className={cn("text-sm font-inter", popular ? "text-slate-400" : "text-foundry-slate")}>/month</span>
      </div>

      <div className="space-y-4 mb-10 grow">
        {features.map((feature, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors",
              popular ? "bg-solar-gold text-foundry-navy" : "bg-solar-gold/10 text-solar-gold"
            )}>
              <HiCheck size={12} />
            </div>
            <span className={cn("text-sm font-inter", popular ? "text-slate-300" : "text-foundry-navy/80")}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button 
        variant={popular ? "primary" : "outline"} 
        className="w-full"
        size="lg"
      >
        Choose {tier}
      </Button>
    </motion.div>
  );
}
