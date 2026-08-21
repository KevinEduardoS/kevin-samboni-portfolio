import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "es";
    return window.localStorage.getItem("lang") || "es";
  });

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLanguage: () => setLang((l) => (l === "es" ? "en" : "es")) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
