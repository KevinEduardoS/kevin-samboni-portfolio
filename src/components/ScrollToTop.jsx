import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/30 flex items-center justify-center transition-colors"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
