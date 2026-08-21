import { motion } from "framer-motion";
import {
  FiHash,
  FiLayers,
  FiCheckCircle,
  FiCpu,
  FiClipboard,
  FiZap,
  FiGlobe,
} from "react-icons/fi";
import { useContent } from "../hooks/useContent";

const icons = {
  languages: FiHash,
  frameworks: FiLayers,
  qa: FiCheckCircle,
  architecture: FiZap,
  pm: FiClipboard,
  ai: FiCpu,
  spoken: FiGlobe,
};

export default function Skills() {
  const { ui, skillCategories } = useContent();

  return (
    <section
      id="habilidades"
      className="relative py-24 bg-gray-50 dark:bg-black/20 border-y border-black/5 dark:border-white/5 px-6 transition-colors overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-60" />

      <div className="relative max-w-6xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-2">
          {ui.skills.kicker}
        </p>
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-heading text-gray-900 dark:text-white"
        >
          {ui.skills.heading}
        </motion.h2>
        <div className="section-underline" />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {skillCategories.map((group, gi) => {
            const Icon = icons[group.id] || FiHash;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.06 }}
                className="group card-surface p-6 break-inside-avoid"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-brand-500/10 text-brand-500 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-sm uppercase tracking-widest text-brand-500 font-bold">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-brand-500/10 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-lg text-sm border border-brand-500/10 hover:border-brand-500/40 hover:bg-brand-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
