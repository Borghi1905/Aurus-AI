import { motion } from 'framer-motion';
import { Download, Calendar, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import { Button } from '@/components/Buttons/Button';

interface HeaderProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  backTo?: { label: string; to: string };
}

export default function Header({ title, subtitle, lastUpdated, backTo }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-text tracking-tight">{title}</h1>
        <p className="text-sm text-text-secondary mt-1">{subtitle}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <ThemeToggle />
        <Button variant="secondary" icon={<Download className="w-4 h-4" />}>
          Exportar Relatório
        </Button>

        {backTo ? (
          <Link to={backTo.to}>
            <Button variant="secondary" icon={<ArrowLeft className="w-4 h-4" />}>
              {backTo.label}
            </Button>
          </Link>
        ) : (
          lastUpdated && (
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-surface border border-border shadow-card text-xs">
              <Calendar className="w-4 h-4 text-text-secondary shrink-0" />
              <div className="leading-tight">
                <p className="text-text-secondary">Última atualização</p>
                <p className="font-semibold text-text">{lastUpdated}</p>
              </div>
              <SlidersHorizontal className="w-4 h-4 text-text-secondary ml-1" />
            </div>
          )
        )}
      </div>
    </motion.header>
  );
}
