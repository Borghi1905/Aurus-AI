import { ArrowUp, ArrowDown } from 'lucide-react';
import type { ComparisonRow } from '@/types/dashboard';

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-sm min-w-[520px]">
        <thead>
          <tr className="text-left text-text-secondary text-xs border-b border-border">
            <th className="font-medium py-2.5 px-1">Indicador</th>
            <th className="font-medium py-2.5 px-1">Paciente</th>
            <th className="font-medium py-2.5 px-1">Média da População</th>
            <th className="font-medium py-2.5 px-1">Diferença</th>
            <th className="font-medium py-2.5 px-1">Percentil</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.indicator}
              className="border-b border-border/60 last:border-0 hover:bg-surface-hover transition-colors"
            >
              <td className="py-3 px-1 font-medium text-text">{row.indicator}</td>
              <td className="py-3 px-1 text-text-secondary">{row.patient}</td>
              <td className="py-3 px-1 text-text-secondary">{row.population}</td>
              <td
                className={`py-3 px-1 font-medium flex items-center gap-1 ${
                  row.direction === 'up' ? 'text-danger' : 'text-success'
                }`}
              >
                {row.direction === 'up' ? (
                  <ArrowUp className="w-3.5 h-3.5" />
                ) : (
                  <ArrowDown className="w-3.5 h-3.5" />
                )}
                {row.diff}
              </td>
              <td className="py-3 px-1 text-text-secondary">{row.percentile}°</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
