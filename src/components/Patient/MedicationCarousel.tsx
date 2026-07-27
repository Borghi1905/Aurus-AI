import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Wine, Syringe, Moon, Pill, ChevronRight, type LucideIcon } from 'lucide-react';
import type { MedicationChip } from '@/types/dashboard';

const ICON_MAP: Record<MedicationChip['icon'], LucideIcon> = {
  coffee: Coffee,
  wine: Wine,
  syringe: Syringe,
  moon: Moon,
  pill: Pill,
};

function statusColor(status: string) {
  if (status.toLowerCase().includes('acima')) return 'text-warning';
  if (status.toLowerCase().includes('não utiliza')) return 'text-text-secondary';
  return 'text-success';
}

interface MedicationCarouselProps {
  medications: MedicationChip[];
}

export default function MedicationCarousel({ medications }: MedicationCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 180, behavior: 'smooth' });
    setPage((p) => Math.min(Math.max(p + dir, 0), medications.length - 1));
  };

  return (
    <div className="relative">
      <div ref={scrollerRef} className="flex gap-3 overflow-x-auto scroll-smooth pb-1 no-scrollbar">
        {medications.map((med, i) => {
          const Icon = ICON_MAP[med.icon];
          return (
            <motion.div
              key={med.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="min-w-[150px] bg-background/50 border border-border rounded-2xl p-4 shrink-0"
            >
              <div className="w-9 h-9 rounded-full bg-[image:var(--gradient-icon)] flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm font-semibold text-text">{med.name}</p>
              <p className="text-xs text-text-secondary mt-0.5">{med.dose}</p>
              <p className={`text-[11px] font-medium mt-2 ${statusColor(med.status)}`}>{med.status}</p>
            </motion.div>
          );
        })}
      </div>

      <button
        onClick={() => scrollByCard(1)}
        className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface border border-border shadow-card flex items-center justify-center hover:bg-surface-hover"
        aria-label="Próximo"
      >
        <ChevronRight className="w-4 h-4 text-text-secondary" />
      </button>

      <div className="flex items-center justify-center gap-1.5 mt-3">
        {medications.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === page ? 'w-4 bg-primary' : 'w-1.5 bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
