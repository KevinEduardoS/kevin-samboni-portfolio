import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useContent } from "../hooks/useContent";

export default function Projects() {
  const { ui, projects, profile, lang } = useContent();

  return (
    <section id="proyectos" className="py-24 max-w-6xl mx-auto px-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-2">
        {ui.projects.kicker}
      </p>
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading text-gray-900 dark:text-white"
      >
        {ui.projects.heading}
      </motion.h2>
      <div className="section-underline" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group card-surface p-6 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{p.org}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-brand-500/10 text-brand-600 dark:text-brand-400 px-2 py-1 rounded-full text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-300 mt-3 flex-1">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {p.link && (
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
                >
                  <FiExternalLink size={16} />
                  {lang === "es" ? "Ver proyecto web" : "View project website"}
                </motion.a>
              )}
              {p.githubLink && (
                <motion.a
                  href={p.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-brand-500 transition-colors"
                >
                  <FiGithub size={16} />
                  {lang === "es" ? "Ver en GitHub" : "View on GitHub"}
                </motion.a>
              )}
            </div>
            <p className="text-brand-500 font-semibold mt-3 text-sm">{p.impact}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
