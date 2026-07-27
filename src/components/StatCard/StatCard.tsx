import { motion } from 'framer-motion';
import { Users, Heart, ShieldCheck, Brain, Moon, Pill, type LucideIcon } from 'lucide-react';
import MiniTrend from './MiniTrend';
import type { TrendStat } from '@/types/dashboard';

const ICON_MAP: Record<TrendStat['icon'], LucideIcon> = {
  users: Users,
  heart: Heart,
  shield: ShieldCheck,
  brain: Brain,
  moon: Moon,
  pill: Pill,
};

const DELTA_COLOR: Record<NonNullable<TrendStat['deltaDirection']>, string> = {
  up: 'text-success',
  down: 'text-danger',
  neutral: 'text-text-secondary',
};

interface StatCardProps {
  stat: TrendStat;
  index: number;
}

export default function StatCard({ stat, index }: StatCardProps) {
  const Icon = ICON_MAP[stat.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -3 }}
      className="relative overflow-hidden bg-surface border border-border rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-[image:var(--gradient-icon)] flex items-center justify-center shrink-0 shadow-sm">
          <Icon className="w-[18px] h-[18px] text-white" strokeWidth={2.2} />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-text-secondary leading-tight">{stat.label}</p>
          <p className="mt-1.5 font-bold text-text text-[22px] leading-none">
            {stat.value}
            {stat.unit && <span className="text-sm font-semibold ml-1 text-text-secondary">{stat.unit}</span>}
          </p>
        </div>
      </div>

      {stat.delta && (
        <p className={`mt-2 text-[11px] font-medium ${DELTA_COLOR[stat.deltaDirection ?? 'neutral']}`}>
          {stat.delta}
        </p>
      )}

      {stat.sparkline && (
        <div className="h-8 mt-1 -mx-1">
          <MiniTrend data={stat.sparkline} color="var(--color-accent)" />
        </div>
      )}
    </motion.div>
  );
}
