import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { useContent } from "../hooks/useContent";

export default function EducationTimeline() {
  const { ui, education } = useContent();

  return (
    <section
      id="educacion"
      className="py-24 bg-gray-50 dark:bg-black/20 border-y border-black/5 dark:border-white/5 px-6 transition-colors"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-2">
          {ui.education.kicker}
        </p>
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-heading text-gray-900 dark:text-white"
        >
          {ui.education.heading}
        </motion.h2>
        <div className="section-underline mx-auto" />

        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-surface p-8 md:p-10 text-left flex flex-col sm:flex-row gap-6 items-start"
          >
            <span className="shrink-0 w-14 h-14 rounded-2xl bg-brand-500 text-black flex items-center justify-center shadow-lg shadow-brand-500/30">
              <FiAward size={26} />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  {item.year}
                </span>
              </div>
              <p className="text-brand-500 font-semibold mb-3">{item.place}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
