import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from 'recharts';
import type { BarDatum } from '@/types/dashboard';

interface CustomBarChartProps {
  data: BarDatum[];
  unit?: string;
  height?: number;
  colorFrom?: string;
  colorTo?: string;
}

export default function CustomBarChart({
  data,
  unit = '%',
  height = 240,
  colorFrom = '#60a5fa',
  colorTo = '#2563eb',
}: CustomBarChartProps) {
  const gradientId = 'bar-gradient-' + colorFrom.replace('#', '');

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 24, right: 8, left: -20, bottom: 0 }} barCategoryGap="28%">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          interval={0}
        />
        <YAxis
          tick={{ fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: number) => `${v}${unit === '%' ? '%' : ''}`}
        />
        <Tooltip
          cursor={{ fill: 'var(--color-surface-hover)' }}
          contentStyle={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 12,
            fontSize: 12,
            color: 'var(--color-text)',
          }}
          formatter={(value: number) => [`${value}${unit}`, '']}
          labelStyle={{ color: 'var(--color-text-secondary)' }}
        />
        <Bar dataKey="value" radius={[6, 6, 0, 0]} isAnimationActive animationDuration={900}>
          {data.map((_, i) => (
            <Cell key={i} fill={`url(#${gradientId})`} />
          ))}
          <LabelList
            dataKey="value"
            position="top"
            formatter={(v: number) => `${v}${unit}`}
            style={{ fill: 'var(--color-text)', fontSize: 11, fontWeight: 600 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
