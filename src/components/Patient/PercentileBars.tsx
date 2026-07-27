import { motion } from 'framer-motion';
import type { PercentileRow } from '@/types/dashboard';

interface PercentileBarsProps {
  rows: PercentileRow[];
}

export default function PercentileBars({ rows }: PercentileBarsProps) {
  return (
    <div className="flex flex-col gap-5">
      {rows.map((row, i) => (
        <div key={row.label}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm text-text-secondary">{row.label}</span>
            <span className="text-sm font-semibold text-text">{row.value}°</span>
          </div>
          <div className="relative h-2 rounded-full bg-border overflow-visible">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${row.value}%` }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: 'easeOut' }}
              className="h-full rounded-full bg-[image:var(--gradient-primary)] relative"
            >
              <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary border-2 border-surface shadow" />
            </motion.div>
          </div>
        </div>
      ))}
      <div className="flex justify-between text-[11px] text-text-secondary pt-1">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
  );
}
