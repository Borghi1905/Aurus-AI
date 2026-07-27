import type { DashboardData, OverviewData, PatientProfile } from '@/types/dashboard';
import rawData from '@/data/dashboard.json';

/**
 * Camada de serviço de dados.
 *
 * Hoje os dados são lidos do arquivo JSON local (src/data/dashboard.json),
 * mas todas as funções são assíncronas de propósito: no futuro basta trocar
 * a implementação interna por chamadas `fetch('/api/...')` para uma API REST,
 * sem que nenhum componente visual precise ser alterado.
 */

const data = rawData as unknown as DashboardData;

const simulateNetwork = <T>(payload: T, delay = 0): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(payload), delay));

export async function getDashboardData(): Promise<DashboardData> {
  // Futuro: return fetch('/api/dashboard').then((res) => res.json());
  return simulateNetwork(data);
}

export async function getOverviewData(): Promise<OverviewData> {
  // Futuro: return fetch('/api/dashboard/overview').then((res) => res.json());
  return simulateNetwork(data.overview);
}

export async function getPatientProfile(patientId?: string): Promise<PatientProfile> {
  // Futuro: return fetch(`/api/patients/${patientId}`).then((res) => res.json());
  void patientId;
  return simulateNetwork(data.patient);
}

export async function getAppInfo() {
  return simulateNetwork(data.app);
}

export async function getAdminInfo() {
  return simulateNetwork(data.admin);
}
