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
    <section className="relative min-h-screen py-24 px-6 bg-linear-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <Lightbulb className="w-16 h-16 text-amber-600 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Tips Konsumsi Kafein yang Sehat
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Panduan praktis untuk menikmati kopi dengan aman dan optimal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Do's */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500 p-3 rounded-xl">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Yang Harus Dilakukan</h3>
            </div>

            <ul className="space-y-4">
              {dosList.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Don'ts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-500 p-3 rounded-xl">
                <XCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Yang Harus Dihindari</h3>
            </div>

            <ul className="space-y-4">
              {dontsList.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
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
          className="bg-linear-to-r from-orange-50 to-amber-50 border-2 border-amber-300 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
            <h3 className="text-2xl font-bold text-gray-900">Peringatan Khusus</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {warnings.map((warning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white/70 p-4 rounded-lg"
              >
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                <span className="text-gray-700">{warning}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6"
        >
          <h4 className="font-semibold text-blue-900 mb-2">💡 Catatan Penting untuk Mahasiswa Kesehatan</h4>
          <p className="text-blue-800 text-sm">
            Informasi ini dapat digunakan sebagai dasar edukasi pasien tentang konsumsi kafein yang aman.
            Selalu pertimbangkan kondisi medis individual, interaksi obat, dan faktor genetik saat memberikan
            rekomendasi klinis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
