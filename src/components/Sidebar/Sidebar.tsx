import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Bell,
  FileText,
  Activity,
  BarChart3,
  Settings,
  ChevronDown,
} from 'lucide-react';
import logo from '@/assets/logo.png';
import MiniTrend from '@/components/StatCard/MiniTrend';
import type { Organization, PatientBaseSummary } from '@/types/dashboard';

interface NavItem {
  label: string;
  to: string;
  icon: React.ElementType;
  badge?: number;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Visão Geral', to: '/', icon: Home },
  { label: 'Perfil do Paciente', to: '/paciente', icon: User },
  { label: 'Alertas', to: '/alertas', icon: Bell, badge: 3 },
  { label: 'Relatórios', to: '/relatorios', icon: FileText },
  { label: 'Análises Avançadas', to: '/analises', icon: Activity },
  { label: 'Comparativos', to: '/comparativos', icon: BarChart3 },
  { label: 'Configurações', to: '/configuracoes', icon: Settings },
];

interface SidebarProps {
  admin: Organization;
  patientBase: PatientBaseSummary;
  forceVisible?: boolean;
}

export default function Sidebar({ admin, patientBase, forceVisible = false }: SidebarProps) {
  return (
    <aside
      className={`${
        forceVisible ? 'flex flex-col w-[260px]' : 'hidden lg:flex lg:flex-col lg:w-[260px]'
      } shrink-0 h-screen sticky top-0 bg-[image:var(--gradient-sidebar)] text-sidebar-text px-4 py-6 border-r border-border/40 overflow-y-auto`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-2 mb-8">
        <img src={logo} alt="Aurus AI" className="w-10 h-10 rounded-xl shadow-card" />
        <div className="leading-tight">
          <p className="font-bold text-white text-[15px] tracking-wide">AURUS AI</p>
          <p className="text-[10px] tracking-[0.15em] text-sidebar-text/70">HEALTH INTELLIGENCE</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col gap-1.5">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-primary/15 text-white'
                  : 'text-sidebar-text/85 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active-pill"
                    className="absolute inset-0 rounded-xl border border-primary/40 bg-primary/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <item.icon className="w-[18px] h-[18px] relative z-10" strokeWidth={2} />
                <span className="relative z-10 flex-1">{item.label}</span>
                {item.badge && (
                  <span className="relative z-10 bg-red-500 text-white text-[11px] font-semibold min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Patient base card */}
      <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4">
        <p className="text-[11px] font-semibold tracking-wide text-sidebar-text/70 mb-2">
          BASE DE PACIENTES
        </p>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-2xl font-bold text-white leading-none">
              {patientBase.total.toLocaleString('pt-BR')}
            </p>
            <p className="text-xs text-sidebar-text/70 mt-1">{patientBase.percentOfBase}% da base</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
            <User className="w-4 h-4 text-accent" />
          </div>
        </div>
        <div className="mt-3 h-10">
          <MiniTrend data={patientBase.trend} color="var(--color-accent)" />
        </div>
      </div>

      {/* Admin footer */}
      <button className="mt-4 flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-white/5 transition-colors">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
          {admin.initials}
        </div>
        <div className="text-left leading-tight flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">{admin.name}</p>
          <p className="text-[11px] text-sidebar-text/70 truncate">{admin.role}</p>
        </div>
        <ChevronDown className="w-4 h-4 text-sidebar-text/60" />
      </button>
    </aside>
  );
}
