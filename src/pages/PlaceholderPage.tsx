import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center text-center h-[70vh] gap-3"
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Construction className="w-6 h-6 text-primary" />
      </div>
      <h2 className="text-xl font-bold text-text">{title}</h2>
      <p className="text-sm text-text-secondary max-w-sm">
        Esta seção ainda está em construção. Em breve você poderá acompanhar {title.toLowerCase()} por aqui.
      </p>
    </motion.div>
  );
}
