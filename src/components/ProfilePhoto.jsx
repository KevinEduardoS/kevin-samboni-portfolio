import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import profileImg from "../assets/kevin-profile.jpg";

export default function ProfilePhoto() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="relative mx-auto md:mx-0 w-full max-w-sm [perspective:1000px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="absolute -inset-8 rounded-[2rem] bg-brand-500/15 blur-3xl -z-10" />

      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden border-2 border-brand-500/60 rounded-sm shadow-2xl shadow-black/30 dark:shadow-brand-500/10"
      >
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
            boxShadow: "inset 0 0 0 2px rgba(245,158,11,0.6)",
          }}
        />
        <div
          className="overflow-hidden"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
          }}
        >
          <img
            src={profileImg}
            alt="Foto de perfil de Kevin Samboni"
            className="w-full aspect-[4/5] object-cover object-[center_15%]"
          />
        </div>
      </motion.div>

      <motion.span
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", delay: 0.8, stiffness: 200 }}
        className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-brand-500 text-black font-extrabold text-xs flex items-center justify-center text-center leading-tight shadow-lg shadow-brand-500/40"
      >
        QA
        <br />+ DEV
      </motion.span>
    </motion.div>
  );
}
