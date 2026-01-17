import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export default function MetricsCounter({ value, label, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-outfit font-extrabold text-white mb-2 flex items-center transition-all duration-300 hover:scale-110">
        {count}
        <span className="text-solar-gold ml-1">{suffix}</span>
      </div>
      <p className="text-slate-400 font-inter text-sm md:text-base font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
