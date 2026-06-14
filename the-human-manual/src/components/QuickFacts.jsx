import { motion } from 'motion/react';
import { Coffee, Users, Globe, TrendingUp } from 'lucide-react';

export default function QuickFacts() {
  const facts = [
    {
      icon: Coffee,
      number: '2.25 Miliar',
      label: 'Cangkir kopi diminum per hari di dunia',
      color: 'bg-amber-500'
    },
    {
      icon: Users,
      number: '64%',
      label: 'Orang dewasa Amerika minum kopi setiap hari',
      color: 'bg-orange-500'
    },
    {
      icon: TrendingUp,
      number: '400mg',
      label: 'Batas aman konsumsi kafein per hari',
      color: 'bg-red-500'
    },
    {
      icon: Globe,
      number: '#2',
      label: 'Komoditas paling banyak diperdagangkan (setelah minyak)',
      color: 'bg-amber-700'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-6">
      {facts.map((fact, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center"
        >
          <div className={`${fact.color} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
            <fact.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{fact.number}</div>
          <div className="text-xs sm:text-sm text-gray-600">{fact.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
