import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FlaskConical, BookOpen, ExternalLink, Microscope, GraduationCap, Beaker, FileText, Link as LinkIcon, Volume2, VolumeX, Search, X, Download } from 'lucide-react';

const medicalTerms = [
  {
    term: "Adenosin",
    definition: "Nukleosida yang berfungsi sebagai neuromodulator, menyebabkan rasa kantuk dengan mengikat reseptor A1 dan A2A.",
    audioFile: "adenosin.mp3"
  },
  {
    term: "CYP1A2",
    definition: "Enzim sitokrom P450 di hati yang bertanggung jawab atas metabolisme sekitar 95% kafein yang dikonsumsi.",
    audioFile: "cyp1a2.mp3"
  },
  {
    term: "Waktu Paruh",
    definition: "Waktu yang dibutuhkan tubuh untuk mengeliminasi setengah dari dosis obat/zat (kafein), rata-rata 3-5 jam pada dewasa sehat.",
    audioFile: "waktu-paruh.mp3"
  },
  {
    term: "Toleransi",
    definition: "Penurunan respons tubuh terhadap dosis kafein yang sama akibat upregulasi (penambahan) jumlah reseptor adenosin di otak.",
    audioFile: "toleransi.mp3"
  },
  {
    term: "Dopamin",
    definition: "Neurotransmiter di otak yang mengatur motivasi, rasa senang, dan fungsi motorik; kadarnya ditingkatkan secara tidak langsung oleh kafein.",
    audioFile: "dopamin.mp3"
  },
  {
    term: "L-Theanine",
    definition: "Asam amino dalam teh hijau yang memberikan efek relaksasi dan menenangkan tanpa menyebabkan kantuk, menyeimbangkan efek stimulasi kafein.",
    audioFile: "l-theanine.mp3"
  },
  {
    term: "Withdrawal",
    definition: "Gejala putus zat (seperti sakit kepala, lesu, cemas) ketika konsumsi kafein rutin dihentikan secara tiba-tiba.",
    audioFile: "withdrawal.mp3"
  },
  {
    term: "Diuretik",
    definition: "Zat atau efek yang memicu peningkatan produksi urin oleh ginjal, menyebabkan peningkatan frekuensi buang air kecil.",
    audioFile: "diuretik.mp3"
  },
  {
    term: "Gastritis",
    definition: "Peradangan pada selaput lendir lambung (maag) yang dapat diperparah oleh kafein karena merangsang produksi asam lambung (HCl) berlebih.",
    audioFile: "gastritis.mp3"
  },
  {
    term: "Vasokonstriksi",
    definition: "Penyempitan diameter pembuluh darah akibat kontraksi otot dindingnya, menyebabkan kenaikan tekanan darah sementara saat mengonsumsi kafein.",
    audioFile: "vasokonstriksi.mp3"
  },
  {
    term: "Aritmia",
    definition: "Gangguan pada irama detak jantung (terlalu cepat, lambat, atau tidak teratur) yang dapat dipicu oleh konsumsi kafein dalam dosis berlebih.",
    audioFile: "aritmia.mp3"
  }
];

export default function ResearchLab({ setActiveSection }) {
  const [playingTerm, setPlayingTerm] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef(null);
  const audioRef = useRef(null);

  const filteredTerms = medicalTerms.filter(item =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const speak = (termName, audioFile) => {
    if (playingTerm === termName) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setPlayingTerm(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audioUrl = `/audio/${audioFile}`;
    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    setPlayingTerm(termName);

    audio.onended = () => {
      setPlayingTerm(null);
      audioRef.current = null;
    };

    audio.onerror = () => {
      console.error(`Failed to play audio: ${audioUrl}`);
      setPlayingTerm(null);
      audioRef.current = null;
    };

    audio.play().catch(err => {
      console.error("Audio play failed:", err);
      setPlayingTerm(null);
      audioRef.current = null;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('research');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [setActiveSection]);

  const resources = [
    {
      title: 'Farmakologi Kafein',
      description: 'Mekanisme kerja kafein sebagai antagonis reseptor adenosin dan efeknya pada sistem saraf pusat',
      icon: Beaker,
      color: 'from-blue-500 to-cyan-500',
      topics: ['Adenosin', 'Reseptor A1 & A2A', 'Dopamin', 'Norepinefrin'],
      url: 'https://pubmed.ncbi.nlm.nih.gov/20164566/'
    },
    {
      title: 'Metabolisme CYP1A2',
      description: 'Peran genetik dalam metabolisme kafein dan variasi individual dalam toleransi kafein',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
      topics: ['CYP1A2', 'Polimorfisme Genetik', 'Fast/Slow Metabolizer'],
      url: 'https://pubmed.ncbi.nlm.nih.gov/16522833/'
    },
    {
      title: 'Efek Kardiovaskular',
      description: 'Dampak konsumsi kafein pada sistem kardiovaskular termasuk tekanan darah dan detak jantung',
      icon: BookOpen,
      color: 'from-red-500 to-orange-500',
      topics: ['Tekanan Darah', 'Takikardia', 'Vasokonstriktor', 'Aritmia'],
      url: 'https://pubmed.ncbi.nlm.nih.gov/29727249/'
    },
    {
      title: 'Toleransi & Dependensi',
      description: 'Mekanisme neuroadaptasi yang menyebabkan toleransi kafein dan gejala withdrawal',
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      topics: ['Upregulasi Reseptor', 'Toleransi', 'Withdrawal', 'Dependensi'],
      url: 'https://pubmed.ncbi.nlm.nih.gov/30372764/'
    },
    {
      title: 'Farmakokinetik Kafein',
      description: 'Absorpsi, distribusi, metabolisme, dan ekskresi kafein dalam tubuh manusia',
      icon: LinkIcon,
      color: 'from-amber-500 to-yellow-500',
      topics: ['Absorpsi GI', 'Half-life', 'Distribusi', 'Metabolit'],
      url: 'https://pubmed.ncbi.nlm.nih.gov/29801541/'
    },
    {
      title: 'Dosis Aman & Toksisitas',
      description: 'Pedoman konsumsi kafein yang aman dan tanda-tanda overdosis kafein',
      icon: Beaker,
      color: 'from-indigo-500 to-purple-500',
      topics: ['LD50', 'Dosis Terapeutik', 'Toksisitas Akut', 'Batas Aman'],
      url: 'https://pubmed.ncbi.nlm.nih.gov/26522129/'
    }
  ];

  return (
    <section id="research" ref={sectionRef} className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 bg-linear-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4">
            <FlaskConical className="w-12 h-12 sm:w-16 sm:h-16 text-amber-700 mx-auto" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-3 sm:mb-4">
            Laboratorium & Riset
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Pelajari lebih dalam dengan sumber-sumber ilmiah dan istilah medis
          </p>
        </motion.div>

        {/* Research Papers */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
            Sumber Riset Terpercaya
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer group relative"
              >
                <div className={`bg-gradient-to-br ${resource.color} p-4 sm:p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                  }} />
                  <div className="relative z-10">
                    <resource.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-base sm:text-lg leading-tight">{resource.title}</h4>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-3 sm:mb-4 space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {resource.topics.map((topic, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-semibold border border-amber-200 hover:border-amber-400 transition-colors"
                        >
                          {topic}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500 font-medium">PubMed Central</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ExternalLink className="w-4 h-4 text-amber-600 group-hover:text-amber-700 transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Medical Glossary */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
              Glosarium Istilah Medis
            </h3>
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-xs shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari istilah medis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 focus:outline-none bg-white text-gray-800 transition-all text-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredTerms.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 bg-white rounded-xl shadow-lg border-2 border-dashed border-gray-200"
              >
                <span className="text-4xl mb-3 block">🔍</span>
                <p className="text-gray-500 text-sm">Tidak ada istilah medis yang cocok dengan "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-3 px-4 py-1.5 bg-amber-600 text-white rounded-lg text-xs font-semibold hover:bg-amber-700 transition-colors cursor-pointer"
                >
                  Reset Pencarian
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="results-grid"
                layout
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {filteredTerms.map((item) => {
                  return (
                    <motion.div
                      key={item.term}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 rounded-full p-2 mt-1 shrink-0">
                          <span className="text-amber-700 font-bold text-sm">i</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <h4 className="font-bold text-gray-900 text-lg truncate">
                                {item.term}
                              </h4>
                              {playingTerm === item.term && (
                                <div className="flex items-center gap-0.5 h-3 px-1 shrink-0">
                                  <motion.span className="w-0.5 bg-amber-600 rounded-full" animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.6 }} />
                                  <motion.span className="w-0.5 bg-amber-600 rounded-full" animate={{ height: [8, 4, 8] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }} />
                                  <motion.span className="w-0.5 bg-amber-600 rounded-full" animate={{ height: [6, 12, 6] }} transition={{ repeat: Infinity, duration: 0.7, delay: 0.2 }} />
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                onClick={() => speak(item.term, item.audioFile)}
                                className={`p-1.5 rounded-lg transition-all flex items-center justify-center cursor-pointer ${
                                  playingTerm === item.term
                                    ? 'bg-amber-600 text-white animate-pulse shadow-md shadow-amber-600/30'
                                    : 'bg-amber-50 hover:bg-amber-100 text-amber-700'
                                }`}
                                title={playingTerm === item.term ? "Hentikan Suara" : "Dengarkan Penjelasan"}
                              >
                                {playingTerm === item.term ? (
                                  <VolumeX className="w-4 h-4" />
                                ) : (
                                  <Volume2 className="w-4 h-4" />
                                )}
                              </button>
                              <a
                                href={`/audio/${item.audioFile}`}
                                download={item.audioFile}
                                className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 transition-all flex items-center justify-center cursor-pointer"
                                title="Unduh File MP3"
                              >
                                <Download className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.definition}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-linear-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200"
        >
          <h3 className="text-xl font-bold text-amber-900 mb-4">
            💡 Tips untuk Mahasiswa Kesehatan
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">•</span>
              <span>Integrasikan pembelajaran kafein dengan modul Farmakologi, Fisiologi Saraf, dan Kardiologi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">•</span>
              <span>Gunakan studi kasus untuk memahami variasi individual dalam respons obat</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">•</span>
              <span>Pahami konsep farmakokinetik (absorpsi, distribusi, metabolisme, ekskresi)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-1">•</span>
              <span>Terapkan pengetahuan ini untuk edukasi pasien tentang konsumsi kafein yang aman</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
