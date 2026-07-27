import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import type { RadarAxis } from '@/types/dashboard';

interface RadarProfileProps {
  data: RadarAxis[];
}

export default function RadarProfile({ data }: RadarProfileProps) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data} outerRadius="70%">
        <PolarGrid stroke="var(--color-border)" />
        <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: 'var(--color-text-secondary)' }} />
        <PolarRadiusAxis tick={false} axisLine={false} tickCount={4} />
        <Radar
          name="Paciente"
          dataKey="patient"
          stroke="var(--color-primary)"
          fill="var(--color-primary)"
          fillOpacity={0.35}
          strokeWidth={2}
          isAnimationActive
          animationDuration={900}
        />
        <Radar
          name="Média da população"
          dataKey="population"
          stroke="var(--color-text-secondary)"
          fill="transparent"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          isAnimationActive
          animationDuration={900}
        />
        <Tooltip
          contentStyle={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 12,
            fontSize: 12,
          }}
        />
        <Legend wrapperStyle={{ fontSize: 11, color: 'var(--color-text-secondary)' }} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
