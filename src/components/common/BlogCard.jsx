import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogCard({ title, excerpt, date, category, slug, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500"
    >
      <Link to={`/blog/${slug}`} className="block">
        <div className="aspect-video bg-slate-100 overflow-hidden relative">
          <div className="absolute top-4 left-4 bg-foundry-navy text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full z-10">
            {category}
          </div>
          <div className="w-full h-full bg-[#334155] group-hover:scale-105 transition-transform duration-700 opacity-20" />
        </div>
      </Link>
      <div className="p-8">
        <div className="text-slate-400 text-xs font-inter mb-3">{date}</div>
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-outfit font-bold text-foundry-navy mb-4 group-hover:text-solar-gold transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-foundry-slate font-inter text-sm line-clamp-2 mb-6">
          {excerpt}
        </p>
        <Link
          to={`/blog/${slug}`}
          className="text-sm font-outfit font-extrabold text-foundry-navy uppercase tracking-widest border-b-2 border-solar-gold pb-1 hover:text-solar-gold transition-colors"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}
