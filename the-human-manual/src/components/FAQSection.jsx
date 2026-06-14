import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Berapa lama efek kafein bertahan dalam tubuh?',
      answer: 'Efek kafein biasanya mencapai puncaknya dalam 30-60 menit setelah konsumsi dan memiliki waktu paruh 3-5 jam. Ini berarti setengah dari kafein yang Anda konsumsi masih ada dalam tubuh setelah 3-5 jam. Untuk menghilangkan 90% kafein dari tubuh, diperlukan waktu sekitar 10-16 jam.'
    },
    {
      question: 'Mengapa beberapa orang lebih sensitif terhadap kafein?',
      answer: 'Sensitivitas kafein sangat dipengaruhi oleh faktor genetik, khususnya variasi gen CYP1A2 yang mengkode enzim pemecah kafein di hati. Orang dengan varian "metabolizer lambat" memproses kafein hingga 4x lebih lambat daripada "metabolizer cepat". Faktor lain termasuk usia, berat badan, toleransi, dan kondisi kesehatan.'
    },
    {
      question: 'Apakah kopi tanpa kafein (decaf) benar-benar tidak mengandung kafein?',
      answer: 'Tidak sepenuhnya. Kopi decaf masih mengandung kafein dalam jumlah kecil, sekitar 2-5mg per cangkir (dibandingkan dengan 95mg pada kopi biasa). Proses dekafeinasi menghilangkan 97-99% kafein, tetapi tidak 100%.'
    },
    {
      question: 'Bisakah tubuh menjadi "kebal" terhadap kafein?',
      answer: 'Ya, fenomena ini disebut toleransi. Konsumsi kafein rutin menyebabkan otak memproduksi lebih banyak reseptor adenosin untuk mengompensasi blokade kafein. Akibatnya, dosis yang sama menjadi kurang efektif. Toleransi dapat berkembang dalam 1-2 minggu dan dapat dikurangi dengan menghentikan konsumsi selama beberapa hari.'
    },
    {
      question: 'Apakah kafein menyebabkan dehidrasi?',
      answer: 'Mitos yang umum, tetapi tidak sepenuhnya benar. Meskipun kafein bersifat diuretik ringan (meningkatkan produksi urin), penelitian menunjukkan bahwa konsumsi kafein moderat (hingga 400mg/hari) tidak menyebabkan dehidrasi pada orang yang terbiasa mengonsumsi kafein. Namun, tetap penting untuk minum air putih yang cukup.'
    },
    {
      question: 'Mengapa kopi membuat beberapa orang mengantuk?',
      answer: 'Ada beberapa alasan: 1) Efek rebound - setelah efek kafein hilang, adenosin yang tertunda akan menumpuk dan menyebabkan rasa kantuk yang lebih kuat, 2) Toleransi tinggi membuat efek stimulan tidak terasa, 3) Dehidrasi ringan dapat menyebabkan kelelahan, 4) Gula dalam kopi dapat menyebabkan "crash" energi setelah lonjakan awal.'
    },
    {
      question: 'Apakah aman minum kopi setiap hari?',
      answer: 'Untuk sebagian besar orang dewasa sehat, konsumsi 3-4 cangkir kopi per hari (sekitar 300-400mg kafein) dianggap aman dan bahkan dapat memberikan manfaat kesehatan. Namun, individu dengan kondisi tertentu (hipertensi, aritmia, kecemasan, kehamilan) harus berkonsultasi dengan dokter. Kualitas tidur juga harus diperhatikan.'
    },
    {
      question: 'Kapan waktu terbaik untuk minum kopi?',
      answer: 'Waktu optimal adalah 1-2 jam setelah bangun tidur (sekitar 9:30-11:30 pagi), saat kadar kortisol mulai menurun. Hindari kopi langsung setelah bangun karena dapat mengganggu produksi kortisol alami. Hindari juga 6 jam sebelum tidur untuk mencegah gangguan tidur.'
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 bg-linear-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4">
            <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 text-amber-600 mx-auto" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-3 sm:mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Jawaban untuk pertanyaan umum seputar kafein dan kopi
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-amber-50 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base text-gray-900 pr-2 sm:pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-amber-600 shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-sm sm:text-base text-gray-700 leading-relaxed bg-amber-50/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
