import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from "react-icons/fi";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useContent } from "../hooks/useContent";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { ui, profile } = useContent();
  const navLinks = ui.nav;
  const active = useActiveSection(navLinks.map((l) => l.id));
  const { dark, toggleTheme } = useTheme();
  const { lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <ScrollProgress />

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-brand-500 text-black font-bold text-sm flex items-center justify-center">
            {profile.initials}
          </span>
          <span className="hidden sm:block font-extrabold text-brand-600 dark:text-brand-400 tracking-tight">
            {profile.firstName} {profile.lastName}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-3 py-2 rounded-full transition-colors ${
                active === item.id
                  ? "text-brand-500"
                  : "text-gray-600 dark:text-gray-300 hover:text-brand-500"
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-brand-500/10 rounded-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </a>
          ))}

          <LanguageToggle lang={lang} toggleLanguage={toggleLanguage} />

          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-brand-500 hover:bg-brand-500/10 transition-colors"
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <a
            href={profile.cvPath}
            download
            className="ml-1 inline-flex items-center gap-2 border border-brand-500/50 text-brand-600 dark:text-brand-400 px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-500 hover:text-black hover:border-brand-500 transition-colors"
          >
            <FiDownload size={14} /> {ui.cvButton}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle lang={lang} toggleLanguage={toggleLanguage} compact />
          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="p-2 rounded-full text-gray-600 dark:text-gray-300"
          >
            {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-black/90 border-t border-black/5 dark:border-white/5"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-lg transition-colors ${
                    active === item.id ? "text-brand-500" : "text-gray-700 dark:text-gray-200"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function LanguageToggle({ lang, toggleLanguage, compact = false }) {
  return (
    <button
      onClick={toggleLanguage}
      aria-label="Cambiar idioma / Switch language"
      className={`relative flex items-center rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 p-0.5 font-mono text-[11px] font-bold ${
        compact ? "" : "ml-2"
      }`}
    >
      <span
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === "es" ? "bg-brand-500 text-black" : "text-gray-500 dark:text-gray-400"
        }`}
      >
        ES
      </span>
      <span
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === "en" ? "bg-brand-500 text-black" : "text-gray-500 dark:text-gray-400"
        }`}
      >
        EN
      </span>
    </button>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-500 to-brand-300 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
