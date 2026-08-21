import { useLanguage } from "../context/LanguageContext";
import content, { profileBase } from "../data/content";

/**
 * Returns all page content (text, data arrays) for the currently active language,
 * plus the language-independent profile basics (email, links, etc.).
 */
export function useContent() {
  const { lang } = useLanguage();
  const c = content[lang];
  return {
    lang,
    ui: c.ui,
    profile: { ...profileBase, ...c.profile },
    skillCategories: c.skillCategories,
    experience: c.experience,
    projects: c.projects,
    education: c.education,
  };
}
