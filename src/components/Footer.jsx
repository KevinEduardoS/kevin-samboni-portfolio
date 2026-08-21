import { useContent } from "../hooks/useContent";

export default function Footer() {
  const { ui, profile } = useContent();
  return (
    <footer className="text-center py-6 bg-gray-100 dark:bg-black/40 border-t border-black/5 dark:border-white/10 text-gray-500 dark:text-gray-400 text-sm transition-colors">
      © {new Date().getFullYear()} {profile.firstName} {profile.lastName} — {ui.footer}
    </footer>
  );
}
