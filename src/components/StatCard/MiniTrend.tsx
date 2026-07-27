import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface MiniTrendProps {
  data: number[];
  color?: string;
}

export default function MiniTrend({ data, color = 'var(--color-primary)' }: MiniTrendProps) {
  const chartData = data.map((value, index) => ({ index, value }));
  const gradientId = `spark-${color.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={chartData} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.35} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fill={`url(#${gradientId})`}
          isAnimationActive
          animationDuration={900}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
