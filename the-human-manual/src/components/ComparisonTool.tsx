import { useState } from 'react';
import { motion } from 'motion/react';
import { Coffee, Droplet, Wine, Leaf } from 'lucide-react';

export default function ComparisonTool() {
  const [selectedDrinks, setSelectedDrinks] = useState<string[]>(['espresso', 'teh-hijau']);

  const drinks = {
    'espresso': {
      name: 'Espresso',
      icon: Coffee,
      caffeine: 63,
      serving: '30ml (1 shot)',
      color: 'bg-amber-900',
      pros: 'Konsentrasi tinggi, cepat terasa',
      cons: 'Volume kecil, rasa pahit kuat'
    },
    'kopi-filter': {
      name: 'Kopi Filter',
      icon: Coffee,
      caffeine: 95,
      serving: '240ml (1 cup)',
      color: 'bg-amber-700',
      pros: 'Standar, mudah didapat',
      cons: 'Kafein tinggi, asam lambung'
    },
    'americano': {
      name: 'Americano',
      icon: Coffee,
      caffeine: 77,
      serving: '240ml',
      color: 'bg-amber-600',
      pros: 'Rasa smooth, volume besar',
      cons: 'Lebih encer dari espresso'
    },
    'latte': {
      name: 'Latte',
      icon: Coffee,
      caffeine: 63,
      serving: '360ml',
      color: 'bg-amber-500',
      pros: 'Creamy, lebih lembut di lambung',
      cons: 'Kalori tinggi karena susu'
    },
    'cappuccino': {
      name: 'Cappuccino',
      icon: Coffee,
      caffeine: 63,
      serving: '180ml',
      color: 'bg-amber-600',
      pros: 'Seimbang antara kopi dan susu',
      cons: 'Foam dapat membuat kembung'
    },
    'teh-hitam': {
      name: 'Teh Hitam',
      icon: Leaf,
      caffeine: 47,
      serving: '240ml',
      color: 'bg-orange-800',
      pros: 'Kafein moderat, kaya antioksidan',
      cons: 'Dapat menodai gigi'
    },
    'teh-hijau': {
      name: 'Teh Hijau',
      icon: Leaf,
      caffeine: 28,
      serving: '240ml',
      color: 'bg-green-600',
      pros: 'L-theanine (calming), antioksidan tinggi',
      cons: 'Kafein rendah untuk boost energi'
    },
    'matcha': {
      name: 'Matcha',
      icon: Leaf,
      caffeine: 70,
      serving: '240ml',
      color: 'bg-green-500',
      pros: 'Kafein sustained, nutrisi lengkap',
      cons: 'Harga mahal, rasa strong'
    },
    'cola': {
      name: 'Cola',
      icon: Droplet,
      caffeine: 34,
      serving: '355ml',
      color: 'bg-gray-700',
      pros: 'Mudah didapat, dingin menyegarkan',
      cons: 'Gula tinggi, tidak ada nutrisi'
    },
    'energy-drink': {
      name: 'Energy Drink',
      icon: Wine,
      caffeine: 80,
      serving: '250ml',
      color: 'bg-blue-600',
      pros: 'Efek cepat, tambahan vitamin B',
      cons: 'Gula tinggi, efek samping jantung'
    },
    'decaf': {
      name: 'Kopi Decaf',
      icon: Coffee,
      caffeine: 3,
      serving: '240ml',
      color: 'bg-amber-300',
      pros: 'Hampir no kafein, rasa kopi tetap',
      cons: 'Tidak ada efek stimulan'
    },
  };

  const toggleDrink = (drinkId: string) => {
    if (selectedDrinks.includes(drinkId)) {
      if (selectedDrinks.length > 1) {
        setSelectedDrinks(selectedDrinks.filter(d => d !== drinkId));
      }
    } else {
      if (selectedDrinks.length < 4) {
        setSelectedDrinks([...selectedDrinks, drinkId]);
      }
    }
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Perbandingan Kandungan Kafein
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Bandingkan kadar kafein berbagai minuman populer
          </p>
          <p className="text-sm text-gray-500">
            Pilih hingga 4 minuman untuk dibandingkan
          </p>
        </motion.div>

        {/* Drink Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
          {Object.entries(drinks).map(([id, drink]) => (
            <motion.button
              key={id}
              onClick={() => toggleDrink(id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedDrinks.includes(id)
                  ? `${drink.color} text-white border-transparent shadow-lg`
                  : 'bg-white text-gray-700 border-gray-200 hover:border-amber-400'
              }`}
            >
              <drink.icon className="w-6 h-6 mx-auto mb-2" />
              <p className="text-xs font-semibold text-center">{drink.name}</p>
            </motion.button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Minuman</th>
                  <th className="px-6 py-4 text-center font-semibold">Kafein (mg)</th>
                  <th className="px-6 py-4 text-center font-semibold">Porsi</th>
                  <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">Kelebihan</th>
                  <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">Kekurangan</th>
                </tr>
              </thead>
              <tbody>
                {selectedDrinks.map((drinkId, index) => {
                  const drink = drinks[drinkId as keyof typeof drinks];
                  return (
                    <motion.tr
                      key={drinkId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-100 hover:bg-amber-50 transition-colors"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`${drink.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                            <drink.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">{drink.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="inline-block">
                          <div className="text-2xl font-bold text-amber-700">{drink.caffeine}</div>
                          <div className="text-xs text-gray-500">mg</div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center text-sm text-gray-600">
                        {drink.serving}
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 hidden md:table-cell">
                        <span className="text-green-600">✓</span> {drink.pros}
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-600 hidden md:table-cell">
                        <span className="text-red-600">✗</span> {drink.cons}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Visual Comparison */}
          <div className="p-6 bg-gray-50">
            <h4 className="font-semibold text-gray-900 mb-4 text-center">Perbandingan Visual</h4>
            <div className="flex items-end justify-around gap-4 h-48">
              {selectedDrinks.map(drinkId => {
                const drink = drinks[drinkId as keyof typeof drinks];
                const maxCaffeine = Math.max(...selectedDrinks.map(id => drinks[id as keyof typeof drinks].caffeine));
                const height = (drink.caffeine / maxCaffeine) * 100;

                return (
                  <div key={drinkId} className="flex-1 flex flex-col items-center">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`w-full ${drink.color} rounded-t-lg relative min-h-[20px]`}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-sm font-bold text-gray-900 whitespace-nowrap">
                        {drink.caffeine}mg
                      </div>
                    </motion.div>
                    <p className="text-xs font-semibold text-gray-700 mt-2 text-center">{drink.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6"
        >
          <h4 className="font-semibold text-blue-900 mb-2">💡 Catatan Penting</h4>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Kandungan kafein dapat bervariasi tergantung metode penyeduhan dan merek</li>
            <li>• Nilai yang ditampilkan adalah rata-rata umum</li>
            <li>• Batas aman konsumsi kafein: 400mg/hari untuk dewasa sehat</li>
            <li>• Ibu hamil disarankan maksimal 200mg/hari</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
