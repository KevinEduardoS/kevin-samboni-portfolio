import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { useContent } from "../hooks/useContent";

export default function Experience() {
  const { ui, experience } = useContent();

  return (
    <section id="experiencia" className="py-24 max-w-6xl mx-auto px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-2">
        {ui.experience.kicker}
      </p>
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading text-gray-900 dark:text-white"
      >
        {ui.experience.heading}
      </motion.h2>
      <p className="text-gray-500 dark:text-gray-400 mb-12">{ui.experience.subtext}</p>

      <div className="space-y-6">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`card-surface p-6 hover:shadow-lg hover:shadow-brand-500/10 transition-shadow ${
              exp.current ? "border-brand-500/40" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                  exp.current ? "bg-brand-500 text-black" : "bg-brand-500/10 text-brand-500"
                }`}
              >
                <FiBriefcase size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    {exp.period}
                  </span>
                </div>
                <p className="text-brand-500 mt-0.5 font-semibold">{exp.place}</p>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-600 dark:text-gray-300">
                      <span className="text-brand-500 mt-1 shrink-0">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
