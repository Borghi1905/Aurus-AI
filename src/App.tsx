import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import DashboardLayout from '@/layouts/DashboardLayout';
import OverviewPage from '@/pages/OverviewPage';
import PatientProfilePage from '@/pages/PatientProfilePage';
import PlaceholderPage from '@/pages/PlaceholderPage';

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/paciente" element={<PatientProfilePage />} />
            <Route path="/alertas" element={<PlaceholderPage title="Alertas" />} />
            <Route path="/relatorios" element={<PlaceholderPage title="Relatórios" />} />
            <Route path="/analises" element={<PlaceholderPage title="Análises Avançadas" />} />
            <Route path="/comparativos" element={<PlaceholderPage title="Comparativos" />} />
            <Route path="/configuracoes" element={<PlaceholderPage title="Configurações" />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
