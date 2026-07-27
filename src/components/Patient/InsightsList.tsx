import { motion } from 'framer-motion';
import { Heart, Brain, Moon, ShieldCheck, Coffee, type LucideIcon } from 'lucide-react';

const ICONS: LucideIcon[] = [Heart, Brain, Moon, ShieldCheck, Coffee];

interface InsightsListProps {
  insights: string[];
}

export default function InsightsList({ insights }: InsightsListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {insights.map((insight, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="flex items-start gap-3"
          >
            <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Icon className="w-3.5 h-3.5 text-primary" />
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">{insight}</p>
          </motion.li>
        );
      })}
    </ul>
  );
}
