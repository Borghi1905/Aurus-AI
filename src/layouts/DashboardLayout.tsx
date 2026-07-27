import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Sidebar from '@/components/Sidebar/Sidebar';
import logo from '@/assets/logo.png';
import { useDashboardData } from '@/hooks/useDashboardData';
import { getDashboardData } from '@/services/dashboardService';

export default function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data } = useDashboardData(getDashboardData);

  return (
    <div className="flex min-h-screen bg-background">
      {data && <Sidebar admin={data.admin} patientBase={data.overview.patientBase} />}

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-surface border-b border-border">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Aurus AI" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-text text-sm">AURUS AI</span>
        </div>
        <button onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
          <Menu className="w-6 h-6 text-text" />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && data && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="fixed top-0 left-0 bottom-0 z-50 lg:hidden"
            >
              <div className="relative h-full">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="absolute top-4 -right-10 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center"
                  aria-label="Fechar menu"
                >
                  <X className="w-4 h-4 text-text" />
                </button>
                <div className="w-[260px] h-full">
                  <Sidebar admin={data.admin} patientBase={data.overview.patientBase} forceVisible />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 pt-20 lg:pt-6">
        <Outlet />
      </main>
    </div>
  );
}
