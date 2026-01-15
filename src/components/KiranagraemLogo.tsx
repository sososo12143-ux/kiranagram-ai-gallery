import { motion } from "framer-motion";

interface KiranagraemLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "text-3xl",
  md: "text-5xl",
  lg: "text-6xl",
};

export const KiranagraemLogo = ({ size = "md", className = "" }: KiranagraemLogoProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`font-logo text-foreground ${sizeClasses[size]} ${className}`}
    >
      Kiranagraem
    </motion.h1>
  );
};
