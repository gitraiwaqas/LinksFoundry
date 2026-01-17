import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-foundry-navy flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-solar-gold/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-foundry-blue/10 blur-[120px] rounded-full" />
      
      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className="text-[12rem] md:text-[20rem] font-outfit font-black text-white/5 leading-none select-none">
            404
          </h1>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-outfit font-black text-white mb-6"
            >
              Lost in the <span className="text-solar-gold">Foundry?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg md:text-xl font-inter max-w-md mx-auto mb-12"
            >
              The page you are looking for has been forged into something else or never existed in this timeline.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/">
                <Button size="lg" className="px-12 py-6 text-xl shadow-2xl shadow-solar-gold/20">
                  Back to Reality
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-solar-gold/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}
    </div>
  );
}
