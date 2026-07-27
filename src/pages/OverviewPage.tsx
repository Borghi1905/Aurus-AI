import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import StatCard from '@/components/StatCard/StatCard';
import ChartCard from '@/components/ChartCard/ChartCard';
import { ViewAllLink } from '@/components/Buttons/Button';
import CustomBarChart from '@/components/Graphs/CustomBarChart';
import ScatterCorrelation from '@/components/Graphs/ScatterCorrelation';
import MedicationTable from '@/components/Tables/MedicationTable';
import { useDashboardData } from '@/hooks/useDashboardData';
import { getOverviewData, getAppInfo } from '@/services/dashboardService';

export default function OverviewPage() {
  const { data: overview } = useDashboardData(getOverviewData);
  const { data: app } = useDashboardData(getAppInfo);

  if (!overview || !app) {
    return <PageSkeleton />;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Header
        title="Dashboard de Saúde da População"
        subtitle="Visão geral da saúde e hábitos dos pacientes"
        lastUpdated={app.lastUpdated}
      />

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        {overview.stats.map((stat, i) => (
          <StatCard key={stat.id} stat={stat} index={i} />
        ))}
      </div>

      {/* Row: Medication usage / Age distribution */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Uso de Medicamentos / Substâncias"
          description="% de pacientes que utilizam cada substância"
          action={<ViewAllLink />}
          delay={0.1}
        >
          <CustomBarChart data={overview.medicationUsage} unit="%" colorFrom="#60a5fa" colorTo="#1d4ed8" />
        </ChartCard>

        <ChartCard
          title="Distribuição de Idade"
          description="Distribuição dos pacientes por faixa etária"
          action={<ViewAllLink />}
          delay={0.15}
        >
          <CustomBarChart data={overview.ageDistribution} unit="" colorFrom="#3b82f6" colorTo="#1d4ed8" />
        </ChartCard>
      </div>

      {/* Row: Heart rate / Health index histograms */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <ChartCard
          title="Distribuição da Frequência Cardíaca"
          description="Histograma de frequência cardíaca (bpm)"
          action={<ViewAllLink />}
          delay={0.2}
        >
          <CustomBarChart data={overview.heartRateHistogram} unit="" colorFrom="#60a5fa" colorTo="#2563eb" />
        </ChartCard>

        <ChartCard
          title="Distribuição do Índice de Saúde"
          description="Histograma do índice de saúde"
          action={<ViewAllLink />}
          delay={0.25}
        >
          <CustomBarChart data={overview.healthIndexHistogram} unit="" colorFrom="#38bdf8" colorTo="#0ea5e9" />
        </ChartCard>
      </div>

      {/* Row: Correlation / Medication summary */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ChartCard
          title="Correlação entre Variáveis"
          description="Relação entre ansiedade e sonolência"
          delay={0.3}
        >
          <ScatterCorrelation correlation={overview.correlation} />
        </ChartCard>

        <ChartCard
          title="Resumo de Medicamentos / Substâncias"
          description="Resumo geral de uso e doses"
          action={<ViewAllLink />}
          delay={0.35}
        >
          <MedicationTable rows={overview.medicationSummary} />
        </ChartCard>
      </div>
    </motion.div>
  );
}

function PageSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 w-72 bg-surface rounded-lg mb-2" />
      <div className="h-4 w-96 bg-surface rounded-lg mb-6" />
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-32 bg-surface rounded-2xl" />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-72 bg-surface rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
