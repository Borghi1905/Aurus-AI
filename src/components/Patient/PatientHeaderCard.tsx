import { motion } from 'framer-motion';
import { User, Weight, Zap, Link2, ShieldCheck, Calendar } from 'lucide-react';
import type { PatientProfile } from '@/types/dashboard';

interface PatientHeaderCardProps {
  patient: PatientProfile;
}

export default function PatientHeaderCard({ patient }: PatientHeaderCardProps) {
  const meta = [
    { icon: User, label: 'Idade', value: `${patient.age} anos` },
    { icon: Weight, label: 'Peso', value: `${patient.weightKg} kg` },
    { icon: Zap, label: 'Metabolismo', value: patient.metabolism },
    { icon: Link2, label: 'Sensibilidade', value: patient.sensitivity },
    { icon: ShieldCheck, label: 'Índice de Saúde Base', value: patient.baseHealthIndex },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-surface border border-border rounded-2xl p-5 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-5"
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[image:var(--gradient-primary)] flex items-center justify-center text-white text-xl font-bold shrink-0">
          {patient.initials}
        </div>
        <div>
          <h2 className="text-xl font-bold text-text">{patient.name}</h2>
          <p className="text-xs text-text-secondary mt-0.5">
            ID: {patient.patientId} &nbsp;•&nbsp; Prontuário: {patient.recordId}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3">
            {meta.map((m) => (
              <div key={m.label} className="flex items-center gap-1.5 text-xs">
                <m.icon className="w-3.5 h-3.5 text-text-secondary" />
                <span className="text-text-secondary">{m.label}</span>
                <span className="font-semibold text-text">{m.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-background/50 border border-border text-xs self-start md:self-center">
        <Calendar className="w-4 h-4 text-text-secondary shrink-0" />
        <div className="leading-tight">
          <p className="text-text-secondary">Data da consulta</p>
          <p className="font-semibold text-text">{patient.consultationDate}</p>
        </div>
      </div>
    </motion.section>
  );
}
