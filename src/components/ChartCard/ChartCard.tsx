import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  delay?: number;
  headerExtra?: ReactNode;
}

export default function ChartCard({
  title,
  description,
  action,
  children,
  className = '',
  delay = 0,
  headerExtra,
}: ChartCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={`bg-surface border border-border rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-shadow duration-300 ${className}`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-semibold text-text text-[15px]">{title}</h3>
          {description && <p className="text-xs text-text-secondary mt-0.5">{description}</p>}
        </div>
        {action !== undefined ? (
          action
        ) : (
          headerExtra
        )}
      </div>
      {children}
    </motion.section>
  );
}
