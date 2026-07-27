import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
}

const VARIANT_CLASSES: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-[image:var(--gradient-primary)] text-white shadow-sm hover:brightness-110',
  secondary: 'bg-surface border border-border text-text hover:bg-surface-hover',
  ghost: 'bg-transparent text-text-secondary hover:text-text hover:bg-surface-hover',
};

export function Button({ children, variant = 'secondary', icon, className = '', ...props }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </motion.button>
  );
}

export function ViewAllLink({ label = 'Ver todos', onClick }: { label?: string; onClick?: () => void }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="text-xs font-medium px-3 py-1.5 rounded-lg border border-border text-text-secondary hover:text-text hover:bg-surface-hover transition-colors shrink-0"
    >
      {label}
    </motion.button>
  );
}
