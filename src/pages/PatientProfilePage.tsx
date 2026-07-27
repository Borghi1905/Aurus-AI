import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import ChartCard from '@/components/ChartCard/ChartCard';
import { ViewAllLink } from '@/components/Buttons/Button';
import PatientHeaderCard from '@/components/Patient/PatientHeaderCard';
import VitalCard from '@/components/Patient/VitalCard';
import MedicationCarousel from '@/components/Patient/MedicationCarousel';
import ComparisonTable from '@/components/Tables/ComparisonTable';
import PercentileBars from '@/components/Patient/PercentileBars';
import RadarProfile from '@/components/Graphs/RadarProfile';
import InsightsList from '@/components/Patient/InsightsList';
import { useDashboardData } from '@/hooks/useDashboardData';
import { getPatientProfile } from '@/services/dashboardService';

export default function PatientProfilePage() {
  const { data: patient } = useDashboardData(getPatientProfile);

  if (!patient) return <PageSkeleton />;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Header
        title="Perfil do Paciente"
        subtitle="Análise detalhada e comparação com a população"
        backTo={{ label: 'Voltar para Visão Geral', to: '/' }}
      />

      <div className="mb-6">
        <PatientHeaderCard patient={patient} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
        {patient.vitals.map((vital, i) => (
          <VitalCard key={vital.id} vital={vital} index={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Comparação com a população" delay={0.1}>
          <ComparisonTable rows={patient.comparisonTable} />
        </ChartCard>

        <ChartCard
          title="Uso de Medicamentos / Substâncias"
          action={<ViewAllLink />}
          delay={0.15}
        >
          <MedicationCarousel medications={patient.medications} />
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <ChartCard
          title="Posição do paciente em relação à população"
          description="(percentis)"
          delay={0.2}
        >
          <PercentileBars rows={patient.percentiles} />
        </ChartCard>

        <ChartCard title="Perfil Geral" delay={0.25}>
          <RadarProfile data={patient.radar} />
        </ChartCard>

        <ChartCard title="Insights do Paciente" delay={0.3}>
          <InsightsList insights={patient.insights} />
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
      <div className="h-28 bg-surface rounded-2xl mb-6" />
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-40 bg-surface rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
