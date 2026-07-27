import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-surface border border-border shadow-card text-sm font-medium text-text"
    >
      {isLight ? <Sun className="w-4 h-4 text-warning" /> : <Moon className="w-4 h-4 text-accent" />}
      <span className="hidden sm:inline">{isLight ? 'Modo Claro' : 'Modo Escuro'}</span>
      <span
        className="relative w-9 h-5 rounded-full flex items-center px-0.5"
        style={{ background: isLight ? 'var(--color-primary)' : 'var(--color-border)' }}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 32 }}
          className="w-4 h-4 rounded-full bg-white shadow"
          style={{ marginLeft: isLight ? 'auto' : 0 }}
        />
      </span>
    </button>
  );
}
