import { ArrowRight } from 'lucide-react';
import type { MedicationRow } from '@/types/dashboard';

interface MedicationTableProps {
  rows: MedicationRow[];
  onViewAll?: () => void;
}

export default function MedicationTable({ rows, onViewAll }: MedicationTableProps) {
  return (
    <div>
      <div className="overflow-x-auto -mx-1">
        <table className="w-full text-sm min-w-[480px]">
          <thead>
            <tr className="text-left text-text-secondary text-xs border-b border-border">
              <th className="font-medium py-2.5 px-1">Substância</th>
              <th className="font-medium py-2.5 px-1">Usuários</th>
              <th className="font-medium py-2.5 px-1">% da Base</th>
              <th className="font-medium py-2.5 px-1">Dose Média</th>
              <th className="font-medium py-2.5 px-1">Dose Máxima</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.substance}
                className="border-b border-border/60 last:border-0 hover:bg-surface-hover transition-colors"
              >
                <td className="py-3 px-1 font-medium text-text">{row.substance}</td>
                <td className="py-3 px-1 text-text-secondary">{row.users.toLocaleString('pt-BR')}</td>
                <td className="py-3 px-1 text-text-secondary">{row.percentOfBase}%</td>
                <td className="py-3 px-1 text-text-secondary">{row.avgDose}</td>
                <td className="py-3 px-1 text-text-secondary">{row.maxDose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={onViewAll}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
      >
        Ver todos os medicamentos
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
