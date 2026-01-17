import { motion } from "framer-motion";

const logos = [
  "Microsoft", "TechCrunch", "Forbes", "Adobe", "HubSpot", "The Verge", "Business Insider"
];

export default function LogoSlider() {
  return (
    <div className="bg-white py-12 border-y border-slate-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10" />
      
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex gap-24 items-center whitespace-nowrap min-w-max px-12"
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <span 
            key={i} 
            className="text-slate-300 font-outfit text-2xl md:text-3xl font-black uppercase tracking-tighter hover:text-foundry-slate transition-colors"
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
