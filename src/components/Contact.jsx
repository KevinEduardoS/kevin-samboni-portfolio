import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from "react-icons/fi";
import { useContent } from "../hooks/useContent";

export default function Contact() {
  const { ui, profile } = useContent();

  const socials = [
    { name: "GitHub", handle: profile.github.replace("https://github.com/", ""), url: profile.github, icon: FiGithub },
    { name: "LinkedIn", handle: "Kevin Eduardo Samboni", url: profile.linkedin, icon: FiLinkedin },
  ];

  return (
    <section id="contacto" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500 mb-2">
            {ui.contact.kicker}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
            {ui.contact.heading[0]} <br /> {ui.contact.heading[1]}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">{ui.contact.desc}</p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3.5 rounded-full font-semibold hover:-translate-y-0.5 transition"
          >
            <FiMail /> {ui.contact.emailBtn}
          </a>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-4">
            {ui.contact.alsoFindMe}
          </p>
          <div className="space-y-3">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between card-surface p-4 hover:border-brand-500/40 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-700 dark:text-gray-200">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block font-semibold text-gray-900 dark:text-white">{s.name}</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">{s.handle}</span>
                    </span>
                  </span>
                  <FiArrowUpRight className="text-gray-400 group-hover:text-brand-500 transition-colors" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
