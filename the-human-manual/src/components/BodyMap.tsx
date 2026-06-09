import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Heart, Utensils, X, Sparkles } from 'lucide-react';

interface BodyMapProps {
  setActiveSection: (section: string) => void;
}

export default function BodyMap({ setActiveSection }: BodyMapProps) {
  const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null);
  const [hoveredOrgan, setHoveredOrgan] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const organs = {
    brain: {
      icon: Brain,
      name: "Otak",
      position: "top-[12%] left-1/2 -translate-x-1/2",
      color: "from-purple-500 to-purple-700",
      glowColor: "shadow-purple-500/50",
      bgColor: "bg-purple-500",
      effects: [
        "Meningkatkan kewaspadaan dan konsentrasi",
        "Menghambat reseptor adenosin (molekul pembawa kantuk)",
        "Meningkatkan produksi dopamin dan serotonin",
        "Memperbaiki suasana hati dan fungsi kognitif"
      ],
      warning: "Konsumsi berlebihan dapat menyebabkan kecemasan dan insomnia",
      scientificName: "Sistem Saraf Pusat"
    },
    heart: {
      icon: Heart,
      name: "Jantung",
      position: "top-[38%] left-1/2 -translate-x-1/2",
      color: "from-red-500 to-red-700",
      glowColor: "shadow-red-500/50",
      bgColor: "bg-red-500",
      effects: [
        "Meningkatkan detak jantung sementara",
        "Meningkatkan tekanan darah ringan",
        "Merangsang pelepasan adrenalin",
        "Meningkatkan aliran darah ke otot"
      ],
      warning: "Penderita hipertensi harus membatasi konsumsi kafein",
      scientificName: "Sistem Kardiovaskular"
    },
    stomach: {
      icon: Utensils,
      name: "Pencernaan",
      position: "top-[60%] left-1/2 -translate-x-1/2",
      color: "from-orange-500 to-orange-700",
      glowColor: "shadow-orange-500/50",
      bgColor: "bg-orange-500",
      effects: [
        "Kafein diserap di usus halus dalam 45 menit",
        "Merangsang produksi asam lambung",
        "Meningkatkan motilitas usus",
        "Dapat bersifat diuretik (meningkatkan buang air kecil)"
      ],
      warning: "Konsumsi saat perut kosong dapat menyebabkan iritasi lambung",
      scientificName: "Sistem Pencernaan"
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
    <section id="body-map" ref={sectionRef} className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-white to-amber-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <Sparkles className="w-12 h-12 text-amber-600 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Peta Tubuh Interaktif
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Klik pada organ untuk melihat bagaimana kafein mempengaruhi tubuh Anda
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Body Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative h-[700px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl p-8 overflow-hidden">
                {/* Grid background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                {/* Detailed Human Body SVG */}
                <svg viewBox="0 0 200 500" className="w-full h-full relative z-10">
                  <defs>
                    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
                      <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="70%" stopColor="#2563EB" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="muscleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="innerShadow">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                      <feOffset dx="0" dy="1" result="offsetblur"/>
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.5"/>
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Head with facial features */}
                  <g>
                    {/* Cranium */}
                    <ellipse cx="100" cy="35" rx="30" ry="32" fill="url(#bodyGradient)" stroke="#60A5FA" strokeWidth="2" opacity="0.7" />
                    {/* Face/Jaw */}
                    <path d="M 70 45 Q 75 60 100 65 Q 125 60 130 45" fill="url(#bodyGradient)" stroke="#60A5FA" strokeWidth="2" opacity="0.7" />
                    {/* Ears */}
                    <ellipse cx="68" cy="40" rx="4" ry="8" fill="#3B82F6" opacity="0.4" />
                    <ellipse cx="132" cy="40" rx="4" ry="8" fill="#3B82F6" opacity="0.4" />
                  </g>

                  {/* Neck with Adam's apple */}
                  <g>
                    <path d="M 88 65 L 85 85 Q 87 90 100 92 Q 113 90 115 85 L 112 65"
                          fill="url(#muscleGradient)" stroke="#60A5FA" strokeWidth="1.5" opacity="0.6" />
                    {/* Trapezius muscles */}
                    <path d="M 85 85 Q 70 88 65 95" stroke="#60A5FA" strokeWidth="3" fill="none" opacity="0.4" />
                    <path d="M 115 85 Q 130 88 135 95" stroke="#60A5FA" strokeWidth="3" fill="none" opacity="0.4" />
                  </g>

                  {/* Shoulders and Clavicle */}
                  <g>
                    {/* Clavicle bones */}
                    <path d="M 100 92 Q 80 94 65 98" stroke="#93C5FD" strokeWidth="2" opacity="0.5" />
                    <path d="M 100 92 Q 120 94 135 98" stroke="#93C5FD" strokeWidth="2" opacity="0.5" />
                    {/* Deltoid muscles */}
                    <ellipse cx="65" cy="105" rx="12" ry="18" fill="url(#muscleGradient)" stroke="#60A5FA" strokeWidth="1.5" opacity="0.5" />
                    <ellipse cx="135" cy="105" rx="12" ry="18" fill="url(#muscleGradient)" stroke="#60A5FA" strokeWidth="1.5" opacity="0.5" />
                  </g>

                  {/* Torso - Upper body */}
                  <g>
                    {/* Rib cage */}
                    <path d="M 65 98 Q 60 120 62 145 L 65 165 Q 70 175 100 178 Q 130 175 135 165 L 138 145 Q 140 120 135 98 Z"
                          fill="url(#bodyGradient)" stroke="#60A5FA" strokeWidth="2" opacity="0.7" filter="url(#innerShadow)" />

                    {/* Pectoral muscles */}
                    <path d="M 75 105 Q 85 115 95 118 Q 90 125 85 128" fill="#3B82F6" opacity="0.2" />
                    <path d="M 125 105 Q 115 115 105 118 Q 110 125 115 128" fill="#3B82F6" opacity="0.2" />

                    {/* Ribs definition */}
                    <path d="M 75 115 Q 100 117 125 115" stroke="#60A5FA" strokeWidth="0.5" opacity="0.3" />
                    <path d="M 73 125 Q 100 127 127 125" stroke="#60A5FA" strokeWidth="0.5" opacity="0.3" />
                    <path d="M 71 135 Q 100 137 129 135" stroke="#60A5FA" strokeWidth="0.5" opacity="0.3" />
                    <path d="M 70 145 Q 100 147 130 145" stroke="#60A5FA" strokeWidth="0.5" opacity="0.3" />
                    <path d="M 70 155 Q 100 157 130 155" stroke="#60A5FA" strokeWidth="0.5" opacity="0.3" />

                    {/* Abs definition */}
                    <line x1="100" y1="120" x2="100" y2="175" stroke="#60A5FA" strokeWidth="1" opacity="0.3" />
                  </g>

                  {/* Torso - Lower abdomen */}
                  <g>
                    <path d="M 65 175 Q 62 190 65 205 L 70 220 Q 75 228 100 230 Q 125 228 130 220 L 135 205 Q 138 190 135 175 Z"
                          fill="url(#bodyGradient)" stroke="#60A5FA" strokeWidth="2" opacity="0.7" />
                    {/* Obliques */}
                    <path d="M 68 180 Q 72 195 68 205" stroke="#60A5FA" strokeWidth="1" opacity="0.3" />
                    <path d="M 132 180 Q 128 195 132 205" stroke="#60A5FA" strokeWidth="1" opacity="0.3" />
                  </g>

                  {/* Arms - Left */}
                  <g>
                    {/* Upper arm (bicep/tricep) */}
                    <path d="M 65 105 Q 52 115 48 130 Q 46 145 48 160"
                          stroke="#60A5FA" strokeWidth="13" fill="none" strokeLinecap="round" opacity="0.6" />
                    <path d="M 65 105 Q 52 115 48 130"
                          stroke="#3B82F6" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.3" />

                    {/* Elbow joint */}
                    <circle cx="48" cy="160" r="6" fill="#3B82F6" opacity="0.4" />

                    {/* Forearm */}
                    <path d="M 48 160 Q 46 175 45 190 Q 44 200 45 210"
                          stroke="#60A5FA" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.6" />

                    {/* Hand */}
                    <ellipse cx="45" cy="218" rx="7" ry="10" fill="url(#muscleGradient)" stroke="#60A5FA" strokeWidth="1" opacity="0.6" />
                  </g>

                  {/* Arms - Right */}
                  <g>
                    {/* Upper arm */}
                    <path d="M 135 105 Q 148 115 152 130 Q 154 145 152 160"
                          stroke="#60A5FA" strokeWidth="13" fill="none" strokeLinecap="round" opacity="0.6" />
                    <path d="M 135 105 Q 148 115 152 130"
                          stroke="#3B82F6" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.3" />

                    {/* Elbow joint */}
                    <circle cx="152" cy="160" r="6" fill="#3B82F6" opacity="0.4" />

                    {/* Forearm */}
                    <path d="M 152 160 Q 154 175 155 190 Q 156 200 155 210"
                          stroke="#60A5FA" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.6" />

                    {/* Hand */}
                    <ellipse cx="155" cy="218" rx="7" ry="10" fill="url(#muscleGradient)" stroke="#60A5FA" strokeWidth="1" opacity="0.6" />
                  </g>

                  {/* Pelvis and Hips */}
                  <g>
                    <path d="M 70 230 Q 65 240 68 250 L 75 260 Q 85 265 100 265 Q 115 265 125 260 L 132 250 Q 135 240 130 230 Z"
                          fill="url(#bodyGradient)" stroke="#60A5FA" strokeWidth="2" opacity="0.7" />
                    {/* Hip bones */}
                    <ellipse cx="75" cy="245" rx="8" ry="12" fill="#3B82F6" opacity="0.3" />
                    <ellipse cx="125" cy="245" rx="8" ry="12" fill="#3B82F6" opacity="0.3" />
                  </g>

                  {/* Legs - Left */}
                  <g>
                    {/* Thigh (quadriceps) */}
                    <path d="M 75 265 Q 72 285 70 305 Q 68 325 70 345"
                          stroke="#60A5FA" strokeWidth="18" fill="none" strokeLinecap="round" opacity="0.6" />
                    <path d="M 75 265 Q 72 285 70 305"
                          stroke="#3B82F6" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.3" />

                    {/* Knee */}
                    <ellipse cx="70" cy="350" rx="9" ry="11" fill="#3B82F6" opacity="0.5" />

                    {/* Calf */}
                    <path d="M 70 355 Q 68 370 70 385 Q 71 398 72 410"
                          stroke="#60A5FA" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.6" />
                    <ellipse cx="70" cy="385" rx="8" ry="15" fill="#3B82F6" opacity="0.2" />

                    {/* Ankle and Foot */}
                    <ellipse cx="72" cy="418" rx="6" ry="8" fill="#3B82F6" opacity="0.5" />
                    <ellipse cx="72" cy="430" rx="10" ry="14" fill="url(#muscleGradient)" stroke="#60A5FA" strokeWidth="1" opacity="0.6" />
                  </g>

                  {/* Legs - Right */}
                  <g>
                    {/* Thigh */}
                    <path d="M 125 265 Q 128 285 130 305 Q 132 325 130 345"
                          stroke="#60A5FA" strokeWidth="18" fill="none" strokeLinecap="round" opacity="0.6" />
                    <path d="M 125 265 Q 128 285 130 305"
                          stroke="#3B82F6" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.3" />

                    {/* Knee */}
                    <ellipse cx="130" cy="350" rx="9" ry="11" fill="#3B82F6" opacity="0.5" />

                    {/* Calf */}
                    <path d="M 130 355 Q 132 370 130 385 Q 129 398 128 410"
                          stroke="#60A5FA" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.6" />
                    <ellipse cx="130" cy="385" rx="8" ry="15" fill="#3B82F6" opacity="0.2" />

                    {/* Ankle and Foot */}
                    <ellipse cx="128" cy="418" rx="6" ry="8" fill="#3B82F6" opacity="0.5" />
                    <ellipse cx="128" cy="430" rx="10" ry="14" fill="url(#muscleGradient)" stroke="#60A5FA" strokeWidth="1" opacity="0.6" />
                  </g>

                  {/* Spine */}
                  <path d="M 100 70 L 100 230" stroke="#93C5FD" strokeWidth="2" opacity="0.3" strokeDasharray="3,2" />

                  {/* Anatomical organ highlights */}
                  <g>
                    {/* Brain area */}
                    <circle cx="100" cy="35" r="26" fill="none" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.4" strokeDasharray="4,3">
                      <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* Heart area */}
                    <circle cx="95" cy="135" r="20" fill="none" stroke="#EF4444" strokeWidth="1.5" opacity="0.4" strokeDasharray="4,3">
                      <animate attributeName="opacity" values="0.3;0.5;0.3" dur="1.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Stomach/Digestive area */}
                    <ellipse cx="100" cy="185" rx="22" ry="18" fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.4" strokeDasharray="4,3">
                      <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2.5s" repeatCount="indefinite" />
                    </ellipse>
                  </g>
                </svg>

                {/* Clickable organ buttons */}
                {Object.entries(organs).map(([key, organ]) => (
                  <div key={key}>
                    <motion.button
                      onClick={() => setSelectedOrgan(key)}
                      onMouseEnter={() => setHoveredOrgan(key)}
                      onMouseLeave={() => setHoveredOrgan(null)}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className={`absolute ${organ.position} z-20`}
                    >
                      <motion.div
                        className={`relative bg-gradient-to-br ${organ.color} p-5 rounded-2xl shadow-2xl ${organ.glowColor} cursor-pointer`}
                        animate={
                          selectedOrgan === key || hoveredOrgan === key
                            ? {
                                boxShadow: [
                                  '0 0 20px rgba(255,255,255,0.3)',
                                  '0 0 40px rgba(255,255,255,0.5)',
                                  '0 0 20px rgba(255,255,255,0.3)'
                                ]
                              }
                            : {}
                        }
                        transition={{ duration: 1, repeat: (selectedOrgan === key || hoveredOrgan === key) ? Infinity : 0 }}
                      >
                        <organ.icon className="w-10 h-10 text-white" />

                        {/* Pulse rings */}
                        <AnimatePresence>
                          {(selectedOrgan === key || hoveredOrgan === key) && (
                            <>
                              <motion.div
                                initial={{ scale: 1, opacity: 0.6 }}
                                animate={{ scale: 2.5, opacity: 0 }}
                                exit={{ scale: 1, opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className={`absolute inset-0 ${organ.bgColor} rounded-2xl`}
                              />
                              <motion.div
                                initial={{ scale: 1, opacity: 0.4 }}
                                animate={{ scale: 2, opacity: 0 }}
                                exit={{ scale: 1, opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                className={`absolute inset-0 ${organ.bgColor} rounded-2xl`}
                              />
                            </>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Label */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: hoveredOrgan === key ? 1 : 0, y: hoveredOrgan === key ? 0 : 10 }}
                        className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap"
                      >
                        <p className="text-sm font-semibold text-gray-900">{organ.name}</p>
                      </motion.div>
                    </motion.button>

                    {/* Connecting line to info panel */}
                    <AnimatePresence>
                      {selectedOrgan === key && (
                        <motion.div
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.3 }}
                          exit={{ pathLength: 0, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        >
                          <svg className="w-full h-full absolute inset-0">
                            <motion.path
                              d="M 50% 50% L 100% 50%"
                              stroke={organ.bgColor.replace('bg-', '#')}
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="5,5"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Scan line effect */}
                <motion.div
                  animate={{ y: [0, 700, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 pointer-events-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:min-h-[700px]"
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
                        <div className={`bg-gradient-to-br ${organs[selectedOrgan as keyof typeof organs].color} p-4 rounded-2xl shadow-lg`}>
                          {(() => {
                            const Icon = organs[selectedOrgan as keyof typeof organs].icon;
                            return <Icon className="w-10 h-10 text-white" />;
                          })()}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {organs[selectedOrgan as keyof typeof organs].name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {organs[selectedOrgan as keyof typeof organs].scientificName}
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
                      {organs[selectedOrgan as keyof typeof organs].effects.map((effect, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 bg-gradient-to-r from-amber-50 to-transparent p-4 rounded-xl border-l-4 border-amber-400"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center mt-0.5">
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
                    className={`bg-gradient-to-br ${organs[selectedOrgan as keyof typeof organs].color} p-6 rounded-2xl text-white shadow-xl`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 text-2xl">⚠️</div>
                      <div>
                        <p className="font-bold mb-2 text-lg">Perhatian Penting</p>
                        <p className="text-white/90 leading-relaxed">
                          {organs[selectedOrgan as keyof typeof organs].warning}
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
                  className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-3xl shadow-2xl p-12 h-full flex items-center justify-center text-center border-2 border-dashed border-gray-300"
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
                          className={`bg-gradient-to-r ${organ.color} text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-lg`}
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
