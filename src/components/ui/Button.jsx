import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  ...props
}) {
  const variants = {
    primary: "bg-solar-gold text-foundry-navy hover:bg-solar-gold/90 shadow-md hover:shadow-solar-gold/20",
    secondary: "bg-foundry-navy text-white hover:bg-foundry-navy/90 shadow-md",
    outline: "bg-transparent border-2 border-slate-200 text-foundry-navy hover:border-solar-gold hover:text-solar-gold hover:bg-solar-gold/5",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100",
    dark: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      disabled={isLoading}
      className={cn(
        "relative rounded-full font-outfit font-bold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden",
        variants[variant],
        sizes[size],
        isLoading && "opacity-70 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </motion.button>
  );
}
