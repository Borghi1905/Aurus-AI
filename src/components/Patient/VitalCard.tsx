import { motion } from 'framer-motion';
import { Heart, Brain, Moon, ShieldCheck, Pill, type LucideIcon } from 'lucide-react';
import RadialGauge from './RadialGauge';
import MiniTrend from '@/components/StatCard/MiniTrend';
import type { PatientVital } from '@/types/dashboard';

const ICON_MAP: Record<PatientVital['icon'], LucideIcon> = {
  heart: Heart,
  brain: Brain,
  moon: Moon,
  shield: ShieldCheck,
  pill: Pill,
};

interface VitalCardProps {
  vital: PatientVital;
  index: number;
}

export default function VitalCard({ vital, index }: VitalCardProps) {
  const Icon = ICON_MAP[vital.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -3 }}
      className="bg-surface border border-border rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-[image:var(--gradient-icon)] flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-white" strokeWidth={2.2} />
        </div>
        <p className="text-xs text-text-secondary leading-tight">{vital.label}</p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-text text-2xl leading-none">
            {vital.value}
            {vital.unit && <span className="text-sm font-semibold ml-1 text-text-secondary">{vital.unit}</span>}
          </p>
          {vital.comparison && (
            <p className="text-[11px] text-text-secondary mt-2">
              {vital.comparison}{' '}
              <span className="font-semibold text-text">{vital.percentile}%</span>
              <br />
              dos pacientes
            </p>
          )}
        </div>
        {vital.comparison && <RadialGauge percentile={vital.percentile} />}
      </div>

      {vital.sparkline && (
        <div className="h-6 mt-3">
          <MiniTrend data={vital.sparkline} color="var(--color-accent)" />
        </div>
      )}
      {vital.barData && (
        <div className="h-6 mt-3 flex items-end gap-1">
          {vital.barData.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-[image:var(--gradient-primary)]"
              style={{ height: `${(v / Math.max(...vital.barData!)) * 100}%` }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
