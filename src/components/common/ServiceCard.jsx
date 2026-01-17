import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export default function ServiceCard({ title, description, icon: Icon, slug, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-solar-gold/5 transition-all duration-500 flex flex-col items-start"
    >
      <div className="w-16 h-16 bg-foundry-light rounded-2xl flex items-center justify-center text-foundry-navy mb-8 group-hover:bg-foundry-navy group-hover:text-solar-gold transition-all duration-500">
        <Icon size={32} />
      </div>
      <h3 className="font-outfit text-2xl font-bold text-foundry-navy mb-4">{title}</h3>
      <p className="text-foundry-slate font-inter leading-relaxed mb-8 grow line-clamp-3">
        {description}
      </p>
      <Link
        to={`/services/${slug}`}
        className="inline-flex items-center gap-2 font-outfit font-black text-sm uppercase tracking-widest text-foundry-navy group-hover:text-solar-gold transition-colors border-b-2 border-transparent group-hover:border-solar-gold pb-1"
      >
        Learn More <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
