import { motion } from "framer-motion";
import { useContent } from "../hooks/useContent";
import Stats from "./Stats";

function highlightSummary(text, highlights) {
  if (!highlights?.length) return text;
  const pattern = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-brand-500 font-semibold">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const chips = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "MySQL",
  "QA Manual",
];

export default function About() {
  const { ui, profile } = useContent();

  return (
    <section
      id="sobre"
      className="flex flex-col items-center justify-center px-6 py-28 text-center bg-white dark:bg-[#0d0d0d] transition-colors"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-2">
        {ui.about.kicker}
      </p>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading text-gray-900 dark:text-white"
      >
        {ui.about.heading}
      </motion.h2>

      <div className="section-underline" />

      <motion.p
        key={profile.summary}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl"
      >
        {highlightSummary(profile.summary, profile.summaryHighlights)}
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="mt-8 flex flex-wrap justify-center gap-3 max-w-3xl"
      >
        {chips.map((tech, i) => (
          <motion.span
            key={i}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="bg-brand-500/10 text-brand-600 dark:text-brand-400 px-4 py-2 rounded-full text-sm md:text-base font-semibold transition hover:bg-brand-500/20 hover:scale-105 cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      <Stats />
    </section>
  );
}
