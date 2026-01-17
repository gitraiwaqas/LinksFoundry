import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  light = false,
  className,
}) {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn("flex flex-col mb-12", alignments[align], className)}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "text-xs font-outfit font-extrabold uppercase tracking-[0.2em] mb-4 inline-block px-3 py-1 rounded-full",
            light ? "bg-white/10 text-solar-gold" : "bg-solar-gold/10 text-solar-gold"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-outfit font-bold mb-6 tracking-tight leading-tight",
          light ? "text-white" : "text-foundry-navy"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "max-w-2xl text-lg md:text-xl font-inter",
            light ? "text-slate-300" : "text-foundry-slate"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
