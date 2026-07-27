export interface TrendStat {
  id: string;
  label: string;
  value: string;
  unit?: string;
  icon: 'users' | 'heart' | 'shield' | 'brain' | 'moon' | 'pill';
  delta?: string;
  deltaDirection?: 'up' | 'down' | 'neutral';
  deltaLabel?: string;
  sparkline?: number[];
}

export interface BarDatum {
  label: string;
  value: number;
}

export interface ScatterPoint {
  x: number;
  y: number;
}

export interface MedicationRow {
  substance: string;
  users: number;
  percentOfBase: number;
  avgDose: string;
  maxDose: string;
}

export interface AppInfo {
  name: string;
  tagline: string;
  lastUpdated: string;
}

export interface Organization {
  name: string;
  role: string;
  initials: string;
}

export interface PatientBaseSummary {
  total: number;
  percentOfBase: number;
  trend: number[];
}

export interface OverviewData {
  stats: TrendStat[];
  medicationUsage: BarDatum[];
  ageDistribution: BarDatum[];
  heartRateHistogram: BarDatum[];
  healthIndexHistogram: BarDatum[];
  correlation: {
    xAxisLabel: string;
    yAxisLabel: string;
    xAxisOptions: string[];
    yAxisOptions: string[];
    points: ScatterPoint[];
    coefficient: number;
    coefficientLabel: string;
  };
  medicationSummary: MedicationRow[];
  patientBase: PatientBaseSummary;
}

export interface PatientVital {
  id: string;
  label: string;
  value: string;
  unit?: string;
  icon: 'heart' | 'brain' | 'moon' | 'shield' | 'pill';
  comparison: string;
  percentile: number;
  sparkline?: number[];
  barData?: number[];
}

export interface ComparisonRow {
  indicator: string;
  icon: 'weight' | 'heart' | 'brain' | 'moon' | 'shield';
  patient: string;
  population: string;
  diff: string;
  direction: 'up' | 'down';
  percentile: number;
}

export interface MedicationChip {
  name: string;
  dose: string;
  status: string;
  icon: 'coffee' | 'wine' | 'syringe' | 'moon' | 'pill';
}

export interface PercentileRow {
  label: string;
  value: number;
}

export interface RadarAxis {
  metric: string;
  patient: number;
  population: number;
}

export interface PatientProfile {
  name: string;
  patientId: string;
  recordId: string;
  initials: string;
  consultationDate: string;
  age: number;
  weightKg: number;
  metabolism: string;
  sensitivity: string;
  baseHealthIndex: string;
  vitals: PatientVital[];
  comparisonTable: ComparisonRow[];
  medications: MedicationChip[];
  percentiles: PercentileRow[];
  radar: RadarAxis[];
  insights: string[];
}

export interface DashboardData {
  app: AppInfo;
  admin: Organization;
  overview: OverviewData;
  patient: PatientProfile;
}
