export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle dot-grid texture */}
      <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      {/* Glow blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/25 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-brand-400/15 rounded-full blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-brand-300/15 rounded-full blur-3xl animate-blob [animation-delay:8s]" />

      {/* Soft vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-[#0a0a0a]" />
    </div>
  );
}
