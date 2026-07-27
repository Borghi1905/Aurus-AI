import { useMemo, useState } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from 'recharts';
import { ChevronDown } from 'lucide-react';
import type { OverviewData } from '@/types/dashboard';

interface ScatterCorrelationProps {
  correlation: OverviewData['correlation'];
}

function linearRegression(points: { x: number; y: number }[]) {
  const n = points.length;
  const sumX = points.reduce((a, p) => a + p.x, 0);
  const sumY = points.reduce((a, p) => a + p.y, 0);
  const sumXY = points.reduce((a, p) => a + p.x * p.y, 0);
  const sumXX = points.reduce((a, p) => a + p.x * p.x, 0);
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  return { slope, intercept };
}

export default function ScatterCorrelation({ correlation }: ScatterCorrelationProps) {
  const [xAxis, setXAxis] = useState(correlation.xAxisOptions[0]);
  const [yAxis, setYAxis] = useState(correlation.yAxisOptions[0]);

  const { slope, intercept } = useMemo(() => linearRegression(correlation.points), [correlation.points]);

  const xValues = correlation.points.map((p) => p.x);
  const minX = Math.min(...xValues);
  const maxX = Math.max(...xValues);
  const trendLine = [
    { x: minX, y: slope * minX + intercept },
    { x: maxX, y: slope * maxX + intercept },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-6">
      <div>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart margin={{ top: 8, right: 12, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="x"
              name={xAxis}
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 10]}
              label={{
                value: `Nível de ${xAxis}`,
                position: 'insideBottom',
                offset: -4,
                fontSize: 11,
                fill: 'var(--color-text-secondary)',
              }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name={yAxis}
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 10]}
              label={{
                value: `Nível de ${yAxis}`,
                angle: -90,
                position: 'insideLeft',
                fontSize: 11,
                fill: 'var(--color-text-secondary)',
              }}
            />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 12,
                fontSize: 12,
              }}
            />
            <Scatter data={correlation.points} fill="var(--color-accent)" fillOpacity={0.55} isAnimationActive animationDuration={900} />
            <Line
              data={trendLine}
              dataKey="y"
              stroke="var(--color-primary)"
              strokeWidth={2.5}
              dot={false}
              activeDot={false}
              isAnimationActive
              animationDuration={900}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col gap-4">
        <AxisSelect label="Eixo X" value={xAxis} options={correlation.xAxisOptions} onChange={setXAxis} />
        <AxisSelect label="Eixo Y" value={yAxis} options={correlation.yAxisOptions} onChange={setYAxis} />
        <div className="rounded-xl border border-border bg-background/40 p-4 text-center mt-1">
          <p className="text-2xl font-bold text-primary">{correlation.coefficient.toFixed(2).replace('.', ',')}</p>
          <p className="text-[11px] text-text-secondary mt-1">{correlation.coefficientLabel}</p>
        </div>
      </div>
    </div>
  );
}

function AxisSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-xs text-text-secondary mb-1.5">{label}</p>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-surface border border-border rounded-xl px-3.5 py-2.5 text-sm text-text pr-9 cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-text-secondary absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}
