import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in milliseconds before the animation starts. Useful for staggering. */
  delay?: number;
  /** Optional className passed to the wrapper element. */
  className?: string;
}

/**
 * Reveal animates its children with a fade + slide-up each time they
 * scroll into view. When the element leaves the viewport it resets,
 * so scrolling back triggers the animation again.
 */
const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.5, delay: delay / 1000 }}
  >
    {children}
  </motion.div>
);

export default Reveal;
