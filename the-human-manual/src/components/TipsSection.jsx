import { motion } from 'motion/react';
import { Lightbulb, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export default function TipsSection() {
  const dosList = [
    'Minum kopi di pagi hingga siang hari untuk menghindari gangguan tidur',
    'Batasi konsumsi maksimal 400mg kafein per hari (~4 cangkir)',
    'Minum air putih yang cukup karena kafein bersifat diuretik',
    'Konsumsi kopi setelah makan untuk mengurangi iritasi lambung',
    'Berikan jeda 3-4 jam antar konsumsi untuk metabolisme optimal',
  ];

  const dontsList = [
    'Jangan minum kopi saat perut kosong (dapat mengiritasi lambung)',
    'Hindari kopi 6 jam sebelum tidur',
    'Jangan menggantikan air putih dengan kopi',
    'Hindari konsumsi berlebihan saat sedang cemas atau stres',
    'Jangan mencampur dengan alkohol atau obat-obatan tertentu',
  ];

  const warnings = [
    'Ibu hamil sebaiknya membatasi kafein maksimal 200mg/hari',
    'Penderita hipertensi harus berkonsultasi dengan dokter',
    'Anak-anak dan remaja sebaiknya menghindari kafein',
    'Hentikan konsumsi jika mengalami jantung berdebar, tremor, atau insomnia',
  ];

  return (
    <section className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 bg-linear-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4">
            <Lightbulb className="w-12 h-12 sm:w-16 sm:h-16 text-amber-600 mx-auto" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-3 sm:mb-4">
            Tips Konsumsi Kafein yang Sehat
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Panduan praktis untuk menikmati kopi dengan aman dan optimal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Do's */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500 p-3 rounded-xl">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Yang Harus Dilakukan</h3>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {dosList.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Don'ts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-500 p-3 rounded-xl">
                <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Yang Harus Dihindari</h3>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {dontsList.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Warnings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-orange-50 to-amber-50 border-2 border-amber-300 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">Peringatan Khusus</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {warnings.map((warning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white/70 p-4 rounded-lg"
              >
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-700">{warning}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
