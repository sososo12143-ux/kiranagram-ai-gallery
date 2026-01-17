import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function HeroCard() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 dark:from-pink-900/40 dark:via-purple-900/40 dark:to-blue-900/40 p-6 mb-6"
    >
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-foreground">The </span>
          <span className="text-purple-600 dark:text-purple-400">Cyber Renaissance</span>
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          <span className="text-foreground">Has </span>
          <span className="text-pink-500 dark:text-pink-400">Arrived</span>
        </h2>
        <p className="text-sm text-muted-foreground mb-5 max-w-[280px]">
          Unlock exclusive AI-generated assets, and collaborative tools designed for the next generation
        </p>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 bg-background text-foreground px-4 py-2 rounded-full text-sm font-medium border border-border hover:bg-secondary transition-colors"
        >
          Explore
          <ArrowRight size={16} />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-foreground w-4"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-400/30 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400/30 to-transparent rounded-full blur-2xl" />
    </motion.div>
  );
}
