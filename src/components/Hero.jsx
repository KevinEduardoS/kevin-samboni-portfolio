import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import ProfilePhoto from "./ProfilePhoto";
import AnimatedBackground from "./AnimatedBackground";
import { useContent } from "../hooks/useContent";

export default function Hero() {
  const { ui, profile } = useContent();
  const h = ui.hero;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center px-6 pt-32 pb-16 overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] transition-colors"
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="text-left">
          <motion.div
            key={h.availability}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-6 text-xs md:text-sm"
          >
            <span className="inline-flex items-center gap-2 border border-brand-500/40 bg-brand-500/10 text-brand-600 dark:text-brand-400 px-3 py-1.5 rounded-full font-semibold uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {h.availability}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95] tracking-tight"
          >
            <span className="block text-gray-900 dark:text-white">{profile.firstName}</span>
            <span className="block text-brand-500">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            key={h.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-semibold"
          >
            {h.tagline}
          </motion.p>

          <motion.p
            key={h.desc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            {h.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 px-6 py-3 rounded-lg text-black font-semibold shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
            >
              <FiDownload /> {h.downloadCv}
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-white/20 text-gray-800 dark:text-white hover:border-brand-500 hover:text-brand-500 px-6 py-3 rounded-lg font-semibold transition hover:-translate-y-0.5"
            >
              {h.contactMe}
            </a>
          </motion.div>
        </div>

        {/* Right: photo */}
        <ProfilePhoto />
      </div>
    </section>
  );
}
