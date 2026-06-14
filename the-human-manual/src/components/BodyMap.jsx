import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Heart, Utensils, X, Sparkles, Activity, Filter } from 'lucide-react';

export default function BodyMap({ setActiveSection }) {
  const [selectedOrgan, setSelectedOrgan] = useState(null);
  const [hoveredOrgan, setHoveredOrgan] = useState(null);
  const sectionRef = useRef(null);

  const organs = {
    brain: {
      icon: Brain,
      name: "Otak",
      position: "top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2",
      color: "from-purple-500 to-purple-700",
      glowColor: "shadow-purple-500/50",
      bgColor: "bg-purple-500",
      lineColor: "#8B5CF6",
      glowBg: "rgba(139, 92, 246, 0.2)",
      glowShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
      imagePath: "/otak.jpg",
      effects: [
        "Meningkatkan kewaspadaan dan konsentrasi",
        "Menghambat reseptor adenosin (molekul pembawa kantuk)",
        "Meningkatkan produksi dopamin dan serotonin",
        "Memperbaiki suasana hati dan fungsi kognitif"
      ],
      warning: "Konsumsi berlebihan dapat menyebabkan kecemasan dan insomnia",
      scientificName: "Sistem Saraf Pusat",
      zoneStyle: { top: '7%', left: '42%', width: '16%', height: '14%' },
      borderColor: 'border-purple-500/40',
      hoverBg: 'hover:bg-purple-500/10',
      selectedBg: 'bg-purple-500/15',
      activeBorder: 'border-purple-500/80',
      outlineGlow: 'hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]'
    },
    heart: {
      icon: Heart,
      name: "Jantung",
      position: "top-[31%] left-[50%] -translate-x-1/2 -translate-y-1/2",
      color: "from-red-500 to-red-700",
      glowColor: "shadow-red-500/50",
      bgColor: "bg-red-500",
      lineColor: "#EF4444",
      glowBg: "rgba(239, 68, 68, 0.2)",
      glowShadow: "0 0 20px rgba(239, 68, 68, 0.6)",
      imagePath: "/jantung.jpg",
      effects: [
        "Meningkatkan detak jantung sementara",
        "Meningkatkan tekanan darah ringan",
        "Merangsang pelepasan adrenalin",
        "Meningkatkan aliran darah ke otot"
      ],
      warning: "Penderita hipertensi harus membatasi konsumsi kafein",
      scientificName: "Sistem Kardiovaskular",
      zoneStyle: { top: '22%', left: '43%', width: '14%', height: '14%' },
      borderColor: 'border-red-500/40',
      hoverBg: 'hover:bg-red-500/10',
      selectedBg: 'bg-red-500/15',
      activeBorder: 'border-red-500/80',
      outlineGlow: 'hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]'
    },
    liver: {
      icon: Activity,
      name: "Hati",
      position: "top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2",
      color: "from-teal-500 to-teal-700",
      glowColor: "shadow-teal-500/50",
      bgColor: "bg-teal-500",
      lineColor: "#14B8A6",
      glowBg: "rgba(20, 184, 166, 0.2)",
      glowShadow: "0 0 20px rgba(20, 184, 166, 0.6)",
      imagePath: "/hati.jpg",
      effects: [
        "Tempat utama metabolisme kafein oleh enzim sitokrom P450 (CYP1A2)",
        "Konsumsi kopi secara teratur menurunkan risiko fibrosis dan sirosis hati",
        "Membantu mengurangi penumpukan lemak berlebih di hati (fatty liver)",
        "Kandungan antioksidan kafein mengurangi tingkat peradangan sel hati"
      ],
      warning: "Kerusakan hati kronis memperlambat pemrosesan kafein, memperpanjang efeknya",
      scientificName: "Sistem Hepatobilier (Hepar)",
      zoneStyle: { top: '36%', left: '41%', width: '8%', height: '8%' },
      borderColor: 'border-teal-500/40',
      hoverBg: 'hover:bg-teal-500/10',
      selectedBg: 'bg-teal-500/15',
      activeBorder: 'border-teal-500/80',
      outlineGlow: 'hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]'
    },
    kidneys: {
      icon: Filter,
      name: "Ginjal",
      position: "top-[46%] left-[54%] -translate-x-1/2 -translate-y-1/2",
      color: "from-blue-500 to-blue-700",
      glowColor: "shadow-blue-500/50",
      bgColor: "bg-blue-500",
      lineColor: "#3B82F6",
      glowBg: "rgba(59, 130, 246, 0.2)",
      glowShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
      imagePath: "/ginjal.jpg",
      effects: [
        "Menghambat reseptor adenosin di ginjal, memicu efek diuretik (sering buang air kecil)",
        "Meningkatkan laju filtrasi darah (GFR) di ginjal secara sementara",
        "Meningkatkan pembuangan kalsium dan magnesium melalui urine secara jangka pendek",
        "Pada konsumsi normal, efek diuretik tidak menyebabkan dehidrasi tubuh"
      ],
      warning: "Konsumsi berlebih (>400mg) tanpa air putih dapat meningkatkan risiko batu ginjal",
      scientificName: "Sistem Ekskresi (Renal)",
      zoneStyle: { top: '43%', left: '51%', width: '8%', height: '8%' },
      borderColor: 'border-blue-500/40',
      hoverBg: 'hover:bg-blue-500/10',
      selectedBg: 'bg-blue-500/15',
      activeBorder: 'border-blue-500/80',
      outlineGlow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
    },
    stomach: {
      icon: Utensils,
      name: "Pencernaan",
      position: "top-[51%] left-[50%] -translate-x-1/2 -translate-y-1/2",
      color: "from-orange-500 to-orange-700",
      glowColor: "shadow-orange-500/50",
      bgColor: "bg-orange-500",
      lineColor: "#F97316",
      glowBg: "rgba(249, 115, 22, 0.2)",
      glowShadow: "0 0 20px rgba(249, 115, 22, 0.6)",
      imagePath: "/sistem pencernaan.jpg",
      effects: [
        "Kafein diserap di usus halus dalam 45 menit",
        "Merangsang produksi asam lambung",
        "Meningkatkan motilitas usus",
        "Dapat bersifat diuretik (meningkatkan buang air kecil)"
      ],
      warning: "Konsumsi saat perut kosong dapat menyebabkan iritasi lambung",
      scientificName: "Sistem Pencernaan",
      zoneStyle: { top: '51%', left: '44%', width: '12%', height: '11%' },
      borderColor: 'border-orange-500/40',
      hoverBg: 'hover:bg-orange-500/10',
      selectedBg: 'bg-orange-500/15',
      activeBorder: 'border-orange-500/80',
      outlineGlow: 'hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]'
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('body-map');
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

  return (
    <section id="body-map" ref={sectionRef} className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 bg-linear-to-b from-white to-amber-50 overflow-hidden scroll-mt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-4">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 mx-auto" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-3 sm:mb-4">
            Peta Tubuh Interaktif
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Klik pada organ untuk melihat bagaimana kafein mempengaruhi tubuh Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Body Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-20 sm:top-24">
              <div className="relative h-[500px] sm:h-[650px] bg-slate-50 rounded-3xl shadow-2xl p-4 sm:p-6 overflow-hidden flex items-center justify-center border border-slate-100">
                {/* Grid background */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                {/* Aspect-locked container to hold image and buttons */}
                <div className="relative aspect-square h-full max-w-full mx-auto z-10">
                  {/* Human Body Image */}
                  <img
                    src="/tubuh.jpeg"
                    alt="Peta Tubuh Manusia"
                    className="w-full h-full object-cover rounded-2xl"
                  />

                   {/* Glowing Hotspots & Labels (Visual only, pointer-events-none) */}
                  {Object.entries(organs).map(([key, organ]) => (
                    <div
                      key={`visual-${key}`}
                      className={`absolute ${organ.position} z-20 pointer-events-none`}
                    >
                      {/* Glowing Circular Hotspot */}
                      <motion.div
                        className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 transition-all flex items-center justify-center"
                        style={{
                          borderColor: organ.lineColor,
                          backgroundColor: selectedOrgan === key || hoveredOrgan === key
                            ? organ.glowBg
                            : 'rgba(255, 255, 255, 0.1)',
                          boxShadow: selectedOrgan === key || hoveredOrgan === key
                            ? organ.glowShadow
                            : 'none'
                        }}
                      >
                        {/* Inner pulse point */}
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            backgroundColor: organ.lineColor
                          }}
                        />

                        {/* Pulse rings */}
                        <AnimatePresence>
                          {(selectedOrgan === key || hoveredOrgan === key) && (
                            <>
                              <motion.div
                                initial={{ scale: 1, opacity: 0.6 }}
                                animate={{ scale: 1.8, opacity: 0 }}
                                exit={{ scale: 1, opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute inset-0 rounded-full"
                                style={{
                                  border: `2px solid ${organ.lineColor}`
                                }}
                              />
                              <motion.div
                                initial={{ scale: 1, opacity: 0.4 }}
                                animate={{ scale: 1.5, opacity: 0 }}
                                exit={{ scale: 1, opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                className="absolute inset-0 rounded-full"
                                style={{
                                  border: `1px solid ${organ.lineColor}`
                                }}
                              />
                            </>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Label */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: selectedOrgan === key || hoveredOrgan === key ? 1 : 0, 
                          y: selectedOrgan === key || hoveredOrgan === key ? 0 : 10 
                        }}
                        className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur px-2.5 py-0.5 sm:py-1 rounded-lg shadow-lg border border-slate-100 whitespace-nowrap z-25"
                      >
                        <p className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{
                            backgroundColor: organ.lineColor
                          }} />
                          {organ.name}
                        </p>
                      </motion.div>
                    </div>
                  ))}

                  {/* Clickable Large Zones on the photo */}
                  {Object.entries(organs).map(([key, organ]) => (
                    <button
                      key={`zone-${key}`}
                      onClick={() => {
                        setSelectedOrgan(key);
                        if (window.innerWidth < 1024) {
                          setTimeout(() => {
                            const el = document.getElementById('organ-detail-panel');
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }
                          }, 100);
                        }
                      }}
                      onMouseEnter={() => setHoveredOrgan(key)}
                      onMouseLeave={() => setHoveredOrgan(null)}
                      style={organ.zoneStyle}
                      className={`absolute z-30 cursor-pointer rounded-2xl border transition-all duration-300
                        ${selectedOrgan === key 
                          ? `${organ.selectedBg} ${organ.activeBorder} shadow-lg scale-105` 
                          : `border-transparent ${organ.hoverBg} hover:${organ.borderColor} hover:border-dashed hover:scale-105 ${organ.outlineGlow}`
                        }
                      `}
                    />
                  ))}

                  {/* Connecting line to info panel */}
                  {Object.entries(organs).map(([key, organ]) => (
                    <AnimatePresence key={`line-${key}`}>
                      {selectedOrgan === key && (
                        <motion.div
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.3 }}
                          exit={{ pathLength: 0, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
                        >
                          <svg className="w-full h-full absolute inset-0">
                            <motion.path
                              d="M 50% 50% L 100% 50%"
                              stroke={organ.lineColor}
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="5,5"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ))}

                  {/* Scan line effect */}
                  <motion.div
                    animate={{ y: [0, 650, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent opacity-20 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:min-h-[650px]"
          >
            <AnimatePresence mode="wait">
              {selectedOrgan ? (
                <motion.div
                  key={selectedOrgan}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ type: "spring", damping: 20 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="relative shrink-0">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50">
                            <img 
                              src={organs[selectedOrgan].imagePath} 
                              alt={organs[selectedOrgan].name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Mini icon badge */}
                          <div className={`absolute -bottom-1 -right-1 bg-linear-to-br ${organs[selectedOrgan].color} p-1.5 rounded-lg shadow-md border border-white`}>
                            {(() => {
                              const Icon = organs[selectedOrgan].icon;
                              return <Icon className="w-3.5 h-3.5 text-white" />;
                            })()}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {organs[selectedOrgan].name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {organs[selectedOrgan].scientificName}
                          </p>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedOrgan(null)}
                      className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  </div>

                  {/* Effects */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 text-xl flex items-center gap-2">
                      <span className="text-2xl">⚡</span> Efek Kafein
                    </h4>
                    <div className="space-y-3">
                      {organs[selectedOrgan].effects.map((effect, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 bg-linear-to-r from-amber-50 to-transparent p-4 rounded-xl border-l-4 border-amber-400"
                        >
                          <div className="shrink-0 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center mt-0.5">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{effect}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Warning */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`bg-linear-to-br ${organs[selectedOrgan].color} p-6 rounded-2xl text-white shadow-xl`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 text-2xl">⚠️</div>
                      <div>
                        <p className="font-bold mb-2 text-lg">Perhatian Penting</p>
                        <p className="text-white/90 leading-relaxed">
                          {organs[selectedOrgan].warning}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Additional info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl"
                  >
                    <p className="text-sm text-blue-800">
                      💡 <strong>Tip:</strong> Klik organ lain untuk melihat dampak kafein pada bagian tubuh yang berbeda.
                    </p>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-linear-to-br from-gray-50 to-amber-50 rounded-3xl shadow-2xl p-12 h-full flex items-center justify-center text-center border-2 border-dashed border-gray-300"
                >
                  <div>
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-8xl mb-6"
                    >
                      👆
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Pilih Organ untuk Memulai
                    </h3>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">
                      Klik pada salah satu organ yang menyala di peta tubuh untuk melihat bagaimana kafein mempengaruhinya
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      {Object.entries(organs).map(([key, organ]) => (
                        <button
                          key={key}
                          onClick={() => setSelectedOrgan(key)}
                          className={`bg-linear-to-r ${organ.color} text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-lg`}
                        >
                          {organ.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
