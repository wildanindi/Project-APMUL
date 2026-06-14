import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users, Heart, Coffee, CheckCircle, XCircle, Baby, Zap,
  Moon, AlertTriangle, Activity, Thermometer, Brain, Stethoscope
} from 'lucide-react';


const cases = [
  {
    icon: Users,
    title: "Variasi Genetik",
    category: "Farmakogenetik",
    categoryColor: "bg-blue-100 text-blue-700",
    color: "from-blue-500 to-blue-700",
    badgeColor: "bg-blue-500",
    patient: "Sarah (25 th) vs. David (25 th)",
    location: "Jakarta",
    story: "Sarah bisa minum 4 cangkir kopi sehari tanpa masalah tidur, sementara David tidak bisa tidur setelah secangkir kopi di siang hari. Keduanya sama-sama aktif berolahraga dan tidur cukup.",
    question: "Apa yang menyebabkan perbedaan toleransi kafein antara Sarah dan David?",
    options: [
      "Sarah lebih sering berolahraga",
      "Variasi genetik pada gen CYP1A2 yang mengatur metabolisme kafein",
      "David memiliki penyakit jantung",
      "Sarah minum lebih banyak air putih"
    ],
    correctAnswer: 1,
    explanation: "Gen CYP1A2 mengkode enzim yang memecah kafein di hati. Orang dengan varian 'metabolizer cepat' dapat memproses kafein 4× lebih cepat daripada 'metabolizer lambat'. Ini adalah faktor genetik yang diturunkan — bukan soal kebiasaan hidup.",
    tags: ["Genetik", "Metabolisme", "CYP1A2"]
  },
  {
    icon: Heart,
    title: "Kopi Susu Kekinian",
    category: "Konsumsi Berlebih",
    categoryColor: "bg-red-100 text-red-700",
    color: "from-red-500 to-rose-700",
    badgeColor: "bg-red-500",
    patient: "Aldi (19 th) — Mahasiswa Baru, Bandung",
    location: "Bandung",
    story: "Aldi terbiasa minum 2–3 gelas kopi susu kekinian (Kopi Kenangan, Janji Jiwa) setiap hari karena harganya terjangkau. Suatu malam menjelang UTS, ia minum 4 gelas dalam 3 jam. Jantungnya tiba-tiba berdebar kencang, tangan gemetar, dan merasa sangat cemas.",
    question: "Apa yang terjadi pada Aldi dan mengapa kopi susu kekinian berisiko?",
    options: [
      "Aldi alergi terhadap susu dalam kopinya",
      "Overdosis kafein dari akumulasi kafein tinggi + gula yang mempercepat absorpsi",
      "Gula dalam kopi menyebabkan diabetes instan",
      "Aldi kelelahan karena belajar terlalu keras"
    ],
    correctAnswer: 1,
    explanation: "Kopi susu kekinian mengandung 100–200 mg kafein per gelas, ditambah gula tinggi yang mempercepat absorpsi kafein. Konsumsi 4 gelas = 400–800 mg kafein dalam waktu singkat. Ini melampaui batas aman harian (400 mg) dan memicu overstimulasi sistem saraf simpatik: jantung berdebar, gemetar, dan kecemasan.",
    tags: ["Kafein Berlebih", "Kopi Kekinian", "Sistem Saraf"]
  },
  {
    icon: Baby,
    title: "Ibu Hamil & Kopi",
    category: "Kehamilan",
    categoryColor: "bg-pink-100 text-pink-700",
    color: "from-pink-500 to-rose-600",
    badgeColor: "bg-pink-500",
    patient: "Bu Rini (28 th) — Hamil 5 bulan, Surabaya",
    location: "Surabaya",
    story: "Bu Rini terbiasa minum kopi hitam setiap pagi sebelum hamil. Dokternya menyarankan mengurangi kafein, tapi Bu Rini merasa secangkir kecil per hari tidak masalah. Ia bertanya kepada dokter: bolehkah tetap minum sedikit kopi?",
    question: "Apa rekomendasi medis yang tepat untuk Bu Rini?",
    options: [
      "Harus berhenti total, kafein adalah racun bagi janin",
      "Boleh hingga 200 mg kafein/hari (≈1–2 cangkir kecil), namun tetap waspada",
      "Boleh minum sebanyak sebelum hamil karena kafein tidak menembus plasenta",
      "Ganti dengan kopi decaf yang bebas kafein sepenuhnya"
    ],
    correctAnswer: 1,
    explanation: "WHO dan POGI merekomendasikan batas kafein ibu hamil maksimal 200 mg/hari. Kafein menembus plasenta, namun janin belum bisa memetabolismenya secara efisien. Konsumsi berlebih dikaitkan dengan berat badan lahir rendah dan risiko keguguran. Satu cangkir kopi hitam (~100 mg) masih tergolong aman jika tidak berlebihan.",
    tags: ["Kehamilan", "Plasenta", "WHO Guidelines"]
  },
  {
    icon: Stethoscope,
    title: "Maag & Kopi Hitam",
    category: "Gastrointestinal",
    categoryColor: "bg-orange-100 text-orange-700",
    color: "from-orange-500 to-amber-600",
    badgeColor: "bg-orange-500",
    patient: "Pak Budi (35 th) — Pegawai Kantoran, Yogyakarta",
    location: "Yogyakarta",
    story: "Pak Budi menderita gastritis (maag kronis) namun tetap minum kopi tubruk pekat setiap pagi dengan perut kosong karena sudah menjadi ritual. Ia sering merasakan nyeri ulu hati dan mual setelah minum, tapi mengabaikannya.",
    question: "Mengapa kopi memperparah maag Pak Budi, dan apa saran yang tepat?",
    options: [
      "Kopi mengandung kafein yang membunuh bakteri H. pylori sehingga tidak ada masalah",
      "Kafein merangsang produksi asam lambung berlebih; minum setelah makan dan hindari kopi pekat",
      "Maag Pak Budi tidak ada hubungannya dengan kopi",
      "Pak Budi harus berhenti minum kopi selamanya tanpa pengecualian"
    ],
    correctAnswer: 1,
    explanation: "Kafein dan senyawa asam dalam kopi (chlorogenic acid) merangsang sel parietal lambung memproduksi HCl berlebih. Minum kopi dengan perut kosong memperparah iritasi mukosa lambung. Saran: minum kopi setelah makan, pilih kopi dengan kandungan asam lebih rendah (cold brew, kopi arabika light roast), dan konsultasikan dengan dokter untuk pengelolaan gastritis.",
    tags: ["Maag", "Asam Lambung", "GERD"]
  },
  {
    icon: Moon,
    title: "Pekerja Shift Malam",
    category: "Gangguan Tidur",
    categoryColor: "bg-indigo-100 text-indigo-700",
    color: "from-indigo-500 to-violet-600",
    badgeColor: "bg-indigo-500",
    patient: "Dewi (30 th) — Perawat ICU, RS Cipto Mangunkusumo Jakarta",
    location: "Jakarta",
    story: "Dewi bekerja shift malam 3 kali seminggu di ICU. Untuk tetap terjaga, ia minum kopi pada pukul 01.00–03.00 pagi. Setelah shift selesai pukul 07.00, ia sulit tidur meski sangat kelelahan, dan tidurnya sering tidak berkualitas.",
    question: "Mengapa Dewi sulit tidur setelah shift malam meski kelelahan?",
    options: [
      "Dewi terlalu stres dengan pekerjaan di ICU",
      "Kafein yang diminum pukul 01.00–03.00 masih aktif saat ia mencoba tidur pukul 08.00",
      "Tubuh perawat memang terbiasa tidak tidur",
      "Dewi kekurangan melatonin karena cahaya matahari pagi"
    ],
    correctAnswer: 1,
    explanation: "Waktu paruh kafein adalah 5–7 jam. Kopi yang diminum pukul 03.00 masih memiliki 50% konsentrasi kafein di tubuh hingga pukul 08.00–10.00. Kafein memblokir reseptor adenosin yang memicu kantuk, sehingga meski Dewi kelelahan fisik, otaknya tetap terstimulasi. Solusi: hentikan konsumsi kafein minimal 6 jam sebelum waktu tidur yang direncanakan.",
    tags: ["Shift Malam", "Insomnia", "Waktu Paruh Kafein"]
  },
  {
    icon: Coffee,
    title: "Toleransi Kopi Rutin",
    category: "Toleransi & Adiksi",
    categoryColor: "bg-amber-100 text-amber-700",
    color: "from-amber-500 to-orange-600",
    badgeColor: "bg-amber-500",
    patient: "Bu Siti (45 th) — Peminum Kopi 10 Tahun, Medan",
    location: "Medan",
    story: "Bu Siti sudah minum kopi Sidikalang setiap pagi selama 10 tahun. Dulu satu cangkir cukup untuk membuatnya segar sepanjang hari. Kini ia butuh 3 cangkir untuk merasakan efek yang sama. Jika tidak minum kopi, ia sakit kepala dan mudah tersinggung.",
    question: "Mengapa Bu Siti membutuhkan lebih banyak kafein sekarang?",
    options: [
      "Kualitas kopi Sidikalang menurun",
      "Bu Siti semakin tua sehingga metabolisme melambat",
      "Toleransi kafein: otak membuat lebih banyak reseptor adenosin untuk mengompensasi",
      "Bu Siti kurang tidur sehingga butuh lebih banyak stimulan"
    ],
    correctAnswer: 2,
    explanation: "Konsumsi kafein kronis mendorong otak memproduksi lebih banyak reseptor adenosin sebagai mekanisme adaptasi. Akibatnya dosis yang sama menjadi kurang efektif (toleransi). Gejala sakit kepala dan iritabilitas saat tidak minum kopi adalah tanda withdrawal kafein — terjadi dalam 12–24 jam setelah dosis terakhir. Ini adalah bentuk ketergantungan fisik ringan yang diakui secara medis.",
    tags: ["Toleransi", "Withdrawal", "Reseptor Adenosin"]
  },
  {
    icon: AlertTriangle,
    title: "Energy Drink + Kopi",
    category: "Overdosis Kafein",
    categoryColor: "bg-yellow-100 text-yellow-700",
    color: "from-yellow-500 to-orange-500",
    badgeColor: "bg-yellow-500",
    patient: "Rizky (17 th) — Pelajar SMA, Semarang",
    location: "Semarang",
    story: "Rizky sedang persiapan UTBK dan mengonsumsi 1 kaleng minuman energi (Redbull, ~80 mg kafein) + 2 sachet kopi instan (masing-masing ~65 mg kafein) dalam satu malam belajar. Total kafein: ~210 mg dalam 2 jam. Ia kemudian mengalami mual, jantung berdebar, dan tangan gemetar hebat.",
    question: "Apa yang paling tepat dilakukan Rizky saat mengalami gejala ini?",
    options: [
      "Minum kopi lagi untuk mengatasi rasa tidak enak badan",
      "Berbaring, minum banyak air putih, dan istirahat; jika gejala berat segera ke IGD",
      "Minum antasida karena itu hanya masalah lambung",
      "Berolahraga agar kafein cepat keluar dari tubuh"
    ],
    correctAnswer: 1,
    explanation: "Gejala Rizky adalah tanda toksisitas kafein ringan-sedang. Tidak ada antidot spesifik; penanganannya suportif: hidrasi, istirahat, dan hindari aktivitas berat (meningkatkan risiko aritmia). Jika muncul nyeri dada, detak jantung >180 bpm, atau pingsan, segera ke IGD. Di Indonesia, kasus seperti ini meningkat di kalangan pelajar menjelang SNBT/UTBK.",
    tags: ["Toksisitas Kafein", "Remaja", "Energy Drink"]
  },
  {
    icon: Activity,
    title: "Hipertensi & Kopi",
    category: "Kardiovaskular",
    categoryColor: "bg-red-100 text-red-700",
    color: "from-red-600 to-rose-800",
    badgeColor: "bg-red-600",
    patient: "Pak Hendra (52 th) — Penderita Hipertensi, Makassar",
    location: "Makassar",
    story: "Pak Hendra didiagnosis hipertensi (tekanan darah 150/95) oleh dokternya 6 bulan lalu dan mendapat obat antihipertensi. Namun ia tetap minum kopi hitam kental 2 cangkir setiap pagi karena menganggap kopi membantunya beraktivitas. Saat kontrol, tekanan darahnya susah turun.",
    question: "Bagaimana kafein berinteraksi dengan kondisi hipertensi Pak Hendra?",
    options: [
      "Kafein tidak berpengaruh pada hipertensi karena obat sudah cukup mengatasinya",
      "Kafein menyebabkan vasokonstriksi sementara dan meningkatkan tekanan darah; bisa menghambat efek obat",
      "Kopi hitam kental justru membantu menurunkan tekanan darah",
      "Hipertensi Pak Hendra disebabkan oleh faktor lain, bukan kopi"
    ],
    correctAnswer: 1,
    explanation: "Kafein memblokir reseptor adenosin di pembuluh darah, menyebabkan vasokonstriksi, dan meningkatkan pelepasan epinefrin — keduanya meningkatkan tekanan darah sementara (30–120 menit). Pada penderita hipertensi, efek ini dapat menghambat kerja obat antihipertensi. Penelitian menunjukkan konsumsi kafein dapat meningkatkan tekanan darah sistolik 3–14 mmHg. PERKI merekomendasikan penderita hipertensi membatasi kafein <200 mg/hari.",
    tags: ["Hipertensi", "Vasokonstriksi", "Interaksi Obat"]
  },
  {
    icon: Brain,
    title: "Kopi & Pelajar Autoimun",
    category: "Autoimun",
    categoryColor: "bg-purple-100 text-purple-700",
    color: "from-purple-500 to-violet-700",
    badgeColor: "bg-purple-500",
    patient: "Nisa (22 th) — Penderita Lupus, Bandung",
    location: "Bandung",
    story: "Nisa menderita Lupus Eritematosus Sistemik (LES) dan sedang dalam pengobatan dengan kortikosteroid. Ia gemar minum kopi untuk mengatasi kelelahan kronis akibat penyakitnya. Dokter reumatologinya memperingatkan bahwa pola ini berisiko.",
    question: "Mengapa konsumsi kafein perlu ekstra hati-hati pada penderita lupus yang mengonsumsi kortikosteroid?",
    options: [
      "Kafein membunuh sel imun sehingga lupus membaik",
      "Kafein + kortikosteroid meningkatkan risiko gangguan tidur, osteoporosis, dan tekanan darah",
      "Kopi dapat menggantikan kortikosteroid sebagai anti-inflamasi alami",
      "Tidak ada interaksi antara kafein dan kortikosteroid"
    ],
    correctAnswer: 1,
    explanation: "Kortikosteroid sudah menyebabkan insomnia, peningkatan tekanan darah, dan penurunan densitas tulang. Kafein memperburuk ketiganya: mengganggu tidur lebih lanjut, meningkatkan tekanan darah, dan menghambat absorpsi kalsium (memperparah risiko osteoporosis). Kelelahan pada lupus lebih baik diatasi dengan tidur teratur dan manajemen penyakit, bukan stimulan kafein. Pasien lupus di Indonesia cukup banyak (prevalensi ~0,5% populasi) sehingga edukasi ini penting.",
    tags: ["Lupus", "Kortikosteroid", "Interaksi Obat"]
  },
  {
    icon: Thermometer,
    title: "Kopi & Dehidrasi Saat Puasa",
    category: "Konteks Budaya",
    categoryColor: "bg-green-100 text-green-700",
    color: "from-green-500 to-emerald-700",
    badgeColor: "bg-green-500",
    patient: "Ahmad (28 th) — Berpuasa Ramadan, Palembang",
    location: "Palembang",
    story: "Selama Ramadan, Ahmad terbiasa minum 2 cangkir kopi kental saat sahur untuk tetap terjaga di tempat kerja. Menjelang siang, ia sering merasakan sakit kepala, mulut kering, dan sulit konsentrasi meski sudah sahur dengan cukup.",
    question: "Mengapa kebiasaan minum kopi pekat saat sahur bermasalah selama puasa?",
    options: [
      "Kopi saat sahur dilarang secara agama",
      "Kafein bersifat diuretik ringan; minum kopi pekat saat sahur mempercepat kehilangan cairan selama puasa",
      "Kopi mengandung kalori tinggi yang membuat tubuh cepat lelah",
      "Sakit kepala Ahmad disebabkan kurang tidur, bukan kopi"
    ],
    correctAnswer: 1,
    explanation: "Kafein memiliki efek diuretik ringan — meningkatkan produksi urin sehingga mempercepat kehilangan cairan. Saat berpuasa (tidak ada asupan cairan 12–14 jam), memulai hari dengan kopi pekat memperbesar defisit cairan. Sakit kepala bisa akibat dehidrasi atau withdrawal kafein di siang hari. Saran: kurangi atau ganti dengan kopi encer, tambah asupan air yang cukup saat sahur, dan pertimbangkan konsumsi kafein saat berbuka saja.",
    tags: ["Ramadan", "Diuretik", "Dehidrasi"]
  },
  {
    icon: Zap,
    title: "Kopi Arabika vs Robusta",
    category: "Farmasi Kopi",
    categoryColor: "bg-teal-100 text-teal-700",
    color: "from-teal-500 to-cyan-600",
    badgeColor: "bg-teal-500",
    patient: "Pak Joko (40 th) — Petani Kopi, Toraja",
    location: "Toraja, Sulawesi",
    story: "Pak Joko, petani kopi di Toraja, meminum kopi hasil panennya sendiri — robusta lokal — setiap pagi. Tamu dari kota membawa kopi arabika dan berkata kafeinnya lebih ringan. Pak Joko heran, bukankah rasanya lebih kuat (pahit)?",
    question: "Mana yang benar tentang perbandingan kafein Arabika vs Robusta?",
    options: [
      "Arabika lebih pahit sehingga kafeinnya lebih tinggi",
      "Robusta mengandung kafein hampir 2× lebih tinggi dari Arabika, meski rasanya berbeda",
      "Keduanya memiliki kandungan kafein yang sama",
      "Rasa pahit selalu berkorelasi langsung dengan kadar kafein"
    ],
    correctAnswer: 1,
    explanation: "Arabika mengandung kafein ~1,2–1,5%, sedangkan Robusta ~2,2–2,7% — hampir 2× lebih tinggi. Namun Robusta justru sering terasa kurang pahit secara rasa karena kandungan asam klorogenat-nya berbeda. Indonesia adalah produsen Robusta terbesar kedua di dunia; petani lokal seperti di Toraja, Lampung, dan Flores menghasilkan biji kopi yang secara farmakologis memiliki kadar kafein tinggi.",
    tags: ["Arabika", "Robusta", "Kadar Kafein"]
  },
  {
    icon: Users,
    title: "Kopi & Lansia",
    category: "Geriatri",
    categoryColor: "bg-slate-100 text-slate-700",
    color: "from-slate-500 to-gray-700",
    badgeColor: "bg-slate-500",
    patient: "Mbah Sumi (70 th) — Pensiunan, Solo",
    location: "Solo, Jawa Tengah",
    story: "Mbah Sumi sudah minum kopi jahe setiap pagi sejak muda. Kini di usia 70 tahun ia masih rutin minum satu cangkir. Cucunya khawatir dan memintanya berhenti, tapi Mbah Sumi merasa itu yang menjaga kesehatannya. Dokter Puskesmas pun dimintai pendapat.",
    question: "Apa pendekatan yang paling tepat untuk konsumsi kafein pada lansia sehat seperti Mbah Sumi?",
    options: [
      "Harus berhenti total karena kafein berbahaya bagi lansia",
      "Satu cangkir sehari umumnya aman; awasi tanda osteoporosis, aritmia, dan gangguan tidur",
      "Boleh minum sebanyak yang diinginkan karena sudah lanjut usia",
      "Kafein pada kopi jahe tidak memiliki efek farmakologis"
    ],
    correctAnswer: 1,
    explanation: "Pada lansia sehat tanpa kontraindikasi (aritmia, osteoporosis berat, insomnia parah), konsumsi kafein moderat (≤1–2 cangkir/hari) umumnya dapat ditoleransi. Studi bahkan menunjukkan konsumsi kafein jangka panjang dikaitkan dengan penurunan risiko Alzheimer dan Parkinson. Namun lansia memproses kafein lebih lambat (metabolisme menurun), sehingga perlu pemantauan tekanan darah dan kualitas tidur. Kopi jahe juga memiliki manfaat antiinflamasi dari jahe.",
    tags: ["Lansia", "Alzheimer", "Konsumsi Moderat"]
  }
];

export default function CaseStudies({ setActiveSection }) {
  const [activeCase, setActiveCase] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [completedCases, setCompletedCases] = useState(new Set());
  const [filter, setFilter] = useState("Semua");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection('cases');
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [setActiveSection]);

  const categories = ["Semua", ...Array.from(new Set(cases.map(c => c.category)))];

  const filteredCases = filter === "Semua" ? cases : cases.filter(c => c.category === filter);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowResult(true);
    setCompletedCases(prev => new Set([...prev, activeCase]));
  };

  const switchCase = (index) => {
    setActiveCase(index);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const nextCase = () => {
    const currentFilteredIndex = filteredCases.indexOf(cases[activeCase]);
    if (currentFilteredIndex < filteredCases.length - 1) {
      const nextFilteredCase = filteredCases[currentFilteredIndex + 1];
      const nextIndex = cases.indexOf(nextFilteredCase);
      switchCase(nextIndex);
    }
  };

  const resetCase = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const currentCase = cases[activeCase];
  const currentFilteredIndex = filteredCases.indexOf(currentCase);

  return (
    <section id="cases" ref={sectionRef} className="relative py-16 sm:py-24 px-4 sm:px-6 bg-linear-to-b from-amber-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-amber-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 h-40 sm:w-80 sm:h-80 bg-orange-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Studi Kasus Klinis
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-3 sm:mb-4">
            Hub Studi Kasus
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            12 skenario medis nyata berdasarkan konteks Indonesia — pelajari dan uji pemahaman Anda
          </p>
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
            <span className="text-xs sm:text-sm text-gray-500">
              {completedCases.size}/{cases.length} kasus selesai
            </span>
            <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${(completedCases.size / cases.length) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === cat
                  ? "bg-amber-600 text-white shadow"
                  : "bg-white text-gray-600 hover:bg-amber-50 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Case List Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800 text-sm">
                  {filteredCases.length} Kasus
                </h3>
              </div>
              <div className="max-h-150 overflow-y-auto">
                {filteredCases.map((caseItem) => {
                  const idx = cases.indexOf(caseItem);
                  const isActive = activeCase === idx;
                  const isDone = completedCases.has(idx);
                  return (
                    <button
                      key={idx}
                      onClick={() => switchCase(idx)}
                      className={`w-full text-left p-4 border-b border-gray-50 transition-all hover:bg-amber-50/50 ${
                        isActive ? "bg-amber-50 border-l-4 border-l-amber-500" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-linear-to-br ${caseItem.color} shrink-0`}>
                          <caseItem.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-800 text-sm truncate">
                              {caseItem.title}
                            </span>
                            {isDone && (
                              <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                            )}
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${caseItem.categoryColor}`}>
                            {caseItem.category}
                          </span>
                          <p className="text-xs text-gray-400 mt-1 truncate">📍 {caseItem.location}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Case Detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-linear-to-r ${currentCase.color} p-8 text-white`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <currentCase.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-medium">
                          {currentCase.category}
                        </span>
                        {completedCases.has(activeCase) && (
                          <span className="text-xs bg-green-400/30 px-2 py-0.5 rounded-full font-medium">
                            ✓ Selesai
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold">{currentCase.title}</h3>
                      <p className="opacity-90 text-sm mt-1">{currentCase.patient}</p>
                      <p className="opacity-75 text-xs mt-0.5">📍 {currentCase.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {currentCase.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Story */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 text-xs flex items-center justify-center font-bold">📋</span>
                      Cerita Kasus
                    </h4>
                    <p className="text-gray-700 leading-relaxed bg-amber-50 p-5 rounded-xl border border-amber-100">
                      {currentCase.story}
                    </p>
                  </div>

                  {/* Question */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 text-base">
                      ❓ {currentCase.question}
                    </h4>
                    <div className="space-y-3">
                      {currentCase.options.map((option, index) => {
                        const isCorrect = index === currentCase.correctAnswer;
                        const isSelected = selectedAnswer === index;

                        let cls = "w-full text-left p-4 rounded-xl border-2 transition-all text-sm ";
                        if (!showResult) {
                          cls += isSelected
                            ? "border-amber-500 bg-amber-50"
                            : "border-gray-200 hover:border-amber-300 hover:bg-amber-50/50";
                        } else {
                          if (isCorrect) cls += "border-green-500 bg-green-50";
                          else if (isSelected) cls += "border-red-400 bg-red-50";
                          else cls += "border-gray-100 opacity-50";
                        }

                        return (
                          <button
                            key={index}
                            onClick={() => !showResult && handleAnswer(index)}
                            disabled={showResult}
                            className={cls}
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center text-xs font-bold ${
                                !showResult
                                  ? isSelected ? "border-amber-500 bg-amber-500 text-white" : "border-gray-300 text-gray-400"
                                  : isCorrect ? "border-green-500 bg-green-500 text-white"
                                  : isSelected ? "border-red-400 bg-red-400 text-white"
                                  : "border-gray-200 text-gray-300"
                              }`}>
                                {String.fromCharCode(65 + index)}
                              </span>
                              <span className="text-gray-800 flex-1">{option}</span>
                              {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />}
                              {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-400 shrink-0" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Result */}
                  <AnimatePresence>
                    {showResult && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className={`p-6 rounded-xl ${
                          selectedAnswer === currentCase.correctAnswer
                            ? "bg-green-50 border-2 border-green-400"
                            : "bg-orange-50 border-2 border-orange-400"
                        }`}>
                          <h4 className={`font-bold mb-3 text-base ${
                            selectedAnswer === currentCase.correctAnswer
                              ? "text-green-800" : "text-orange-800"
                          }`}>
                            {selectedAnswer === currentCase.correctAnswer
                              ? "✅ Jawaban Benar! Bagus sekali."
                              : "💡 Belum tepat — yuk pelajari penjelasannya:"}
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-sm mb-4">
                            {currentCase.explanation}
                          </p>
                          <div className="flex gap-3 flex-wrap">
                            {currentFilteredIndex < filteredCases.length - 1 && (
                              <button
                                onClick={nextCase}
                                className="bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
                              >
                                Kasus Berikutnya →
                              </button>
                            )}
                            <button
                              onClick={resetCase}
                              className="bg-white border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                            >
                              Coba Lagi
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
