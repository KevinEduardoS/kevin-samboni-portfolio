import { motion } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { useContent } from "../hooks/useContent";

function Stat({ value, suffix, label, delay }) {
  const { ref, value: count } = useCountUp(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const { ui } = useContent();
  return (
    <div className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto">
      {ui.about.stats.map((s, i) => (
        <Stat key={i} {...s} delay={i * 0.12} />
      ))}
    </div>
  );
}
