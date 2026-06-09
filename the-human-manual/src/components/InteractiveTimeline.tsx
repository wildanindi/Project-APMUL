import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Coffee, Brain, Activity, Moon, Play, X } from 'lucide-react';

export default function InteractiveTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);

  const timeline = [
    {
      time: '0 menit',
      icon: Coffee,
      title: 'Konsumsi Kopi',
      description: 'Kafein mulai diserap di lambung dan usus halus',
      color: 'bg-amber-500',
      effects: ['Molekul kafein masuk ke saluran pencernaan', 'Penyerapan dimulai'],
      illustration: 'drinking'
    },
    {
      time: '15-45 menit',
      icon: Activity,
      title: 'Masuk Aliran Darah',
      description: 'Kafein mencapai puncak konsentrasi dalam darah',
      color: 'bg-red-500',
      effects: ['Kafein beredar ke seluruh tubuh', 'Efek mulai terasa'],
      illustration: 'bloodstream'
    },
    {
      time: '30-60 menit',
      icon: Brain,
      title: 'Efek Puncak',
      description: 'Konsentrasi dan kewaspadaan maksimal',
      color: 'bg-purple-500',
      effects: ['Blokade reseptor adenosin maksimal', 'Peningkatan dopamin dan norepinefrin'],
      illustration: 'brain'
    },
    {
      time: '3-5 jam',
      icon: Clock,
      title: 'Waktu Paruh',
      description: '50% kafein telah dimetabolisme',
      color: 'bg-blue-500',
      effects: ['Enzim CYP1A2 memecah kafein di hati', 'Efek mulai berkurang'],
      illustration: 'metabolism'
    },
    {
      time: '6-8 jam',
      icon: Moon,
      title: 'Hampir Habis',
      description: 'Kafein hampir sepenuhnya dieliminasi',
      color: 'bg-indigo-500',
      effects: ['Tubuh kembali normal', 'Reseptor adenosin mulai bebas'],
      illustration: 'elimination'
    },
  ];

  const handlePlayVideo = (index: number) => {
    setSelectedVideo(index);
    setShowVideo(true);
  };

  const renderIllustration = (type: string) => {
    switch(type) {
      case 'drinking':
        return (
          <div className="relative w-full h-full bg-linear-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Person drinking coffee */}
              <g>
                {/* Head */}
                <circle cx="200" cy="120" r="50" fill="#FED7AA" />
                {/* Body */}
                <rect x="175" y="160" width="50" height="80" rx="25" fill="#60A5FA" />
                {/* Arm holding cup */}
                <path d="M 225 180 Q 260 200 270 220" stroke="#FED7AA" strokeWidth="15" fill="none" strokeLinecap="round" />

                {/* Coffee cup */}
                <g>
                  <rect x="260" y="210" width="40" height="50" rx="5" fill="#8B4513" stroke="#654321" strokeWidth="2" />
                  <ellipse cx="280" cy="210" rx="20" ry="8" fill="#6B3410" />
                  {/* Steam */}
                  {[0, 1, 2].map(i => (
                    <motion.path
                      key={i}
                      d={`M ${270 + i * 10} 200 Q ${272 + i * 10} 180 ${270 + i * 10} 160`}
                      stroke="#D1D5DB"
                      strokeWidth="2"
                      fill="none"
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </g>

                {/* Mouth */}
                <motion.ellipse
                  cx="200"
                  cy="135"
                  rx="8"
                  ry="12"
                  fill="#8B4513"
                  animate={{
                    ry: [12, 8, 12]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </g>

              {/* Caffeine molecules */}
              {[...Array(5)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={250 + Math.random() * 30}
                  cy={220 + i * 15}
                  r="4"
                  fill="#D97706"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: [-30, 0],
                    y: [0, 20]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4
                  }}
                />
              ))}
            </svg>
          </div>
        );

      case 'bloodstream':
        return (
          <div className="relative w-full h-full bg-linear-to-br from-red-100 to-pink-200 rounded-2xl flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Blood vessel */}
              <g>
                <path
                  d="M 50 200 Q 150 150 250 200 T 450 200"
                  stroke="#EF4444"
                  strokeWidth="60"
                  fill="none"
                  opacity="0.3"
                />
                <path
                  d="M 50 200 Q 150 150 250 200 T 450 200"
                  stroke="#DC2626"
                  strokeWidth="40"
                  fill="none"
                  opacity="0.5"
                />

                {/* Blood cells */}
                {[...Array(8)].map((_, i) => (
                  <motion.ellipse
                    key={`cell-${i}`}
                    cx={50 + i * 50}
                    cy={200}
                    rx="12"
                    ry="8"
                    fill="#F87171"
                    animate={{
                      x: [0, 400],
                      y: [0, Math.sin(i) * 30, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "linear"
                    }}
                  />
                ))}

                {/* Caffeine molecules in bloodstream */}
                {[...Array(6)].map((_, i) => (
                  <motion.g key={`caffeine-${i}`}>
                    <motion.circle
                      cx={80 + i * 60}
                      cy={200}
                      r="8"
                      fill="#D97706"
                      animate={{
                        x: [0, 400],
                        y: [0, Math.cos(i) * 40, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "linear"
                      }}
                    />
                    {/* Sparkle effect */}
                    <motion.circle
                      cx={80 + i * 60}
                      cy={200}
                      r="12"
                      fill="#FBBF24"
                      opacity="0.3"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3],
                        x: [0, 400],
                        y: [0, Math.cos(i) * 40, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "linear"
                      }}
                    />
                  </motion.g>
                ))}
              </g>

              {/* Heart icon */}
              <motion.g
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity
                }}
              >
                <path
                  d="M 350 80 L 365 95 L 350 110 L 335 95 Z"
                  fill="#DC2626"
                  transform="rotate(45 350 95)"
                />
                <circle cx="342" cy="87" r="10" fill="#DC2626" />
                <circle cx="358" cy="87" r="10" fill="#DC2626" />
              </motion.g>
            </svg>
          </div>
        );

      case 'brain':
        return (
          <div className="relative w-full h-full bg-linear-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Brain outline */}
              <g>
                <path
                  d="M 200 100 Q 250 90 280 120 Q 290 150 280 180 Q 270 210 240 230 Q 220 240 200 240 Q 180 240 160 230 Q 130 210 120 180 Q 110 150 120 120 Q 150 90 200 100 Z"
                  fill="#A78BFA"
                  opacity="0.6"
                  stroke="#7C3AED"
                  strokeWidth="3"
                />

                {/* Brain folds */}
                <path d="M 170 120 Q 180 130 170 140" stroke="#7C3AED" strokeWidth="2" fill="none" />
                <path d="M 190 115 Q 200 125 190 135" stroke="#7C3AED" strokeWidth="2" fill="none" />
                <path d="M 210 115 Q 220 125 210 135" stroke="#7C3AED" strokeWidth="2" fill="none" />
                <path d="M 230 120 Q 240 130 230 140" stroke="#7C3AED" strokeWidth="2" fill="none" />
                <path d="M 170 155 Q 180 165 170 175" stroke="#7C3AED" strokeWidth="2" fill="none" />
                <path d="M 230 155 Q 240 165 230 175" stroke="#7C3AED" strokeWidth="2" fill="none" />

                {/* Adenosine receptors (blocked) */}
                {[...Array(6)].map((_, i) => (
                  <g key={`receptor-${i}`}>
                    <motion.circle
                      cx={150 + (i % 3) * 50}
                      cy={140 + Math.floor(i / 3) * 50}
                      r="15"
                      fill="#E0E7FF"
                      stroke="#6366F1"
                      strokeWidth="2"
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                    {/* Caffeine molecule blocking */}
                    <motion.circle
                      cx={150 + (i % 3) * 50}
                      cy={140 + Math.floor(i / 3) * 50}
                      r="8"
                      fill="#D97706"
                      animate={{
                        y: [-20, 0],
                        opacity: [0, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  </g>
                ))}

                {/* Electric signals */}
                {[...Array(4)].map((_, i) => (
                  <motion.path
                    key={`signal-${i}`}
                    d={`M ${150 + i * 30} 180 L ${160 + i * 30} 200 L ${150 + i * 30} 220`}
                    stroke="#FBBF24"
                    strokeWidth="3"
                    fill="none"
                    animate={{
                      opacity: [0, 1, 0],
                      pathLength: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}

                {/* Sparkles for heightened awareness */}
                {[...Array(8)].map((_, i) => (
                  <motion.circle
                    key={`sparkle-${i}`}
                    cx={140 + Math.random() * 120}
                    cy={110 + Math.random() * 120}
                    r="3"
                    fill="#FCD34D"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25
                    }}
                  />
                ))}
              </g>

              {/* Text labels */}
              <text x="200" y="280" textAnchor="middle" fill="#7C3AED" fontSize="14" fontWeight="bold">
                Reseptor Adenosin Terblokir
              </text>
            </svg>
          </div>
        );

      case 'metabolism':
        return (
          <div className="relative w-full h-full bg-linear-to-br from-blue-100 to-cyan-200 rounded-2xl flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Liver */}
              <g>
                <path
                  d="M 150 150 Q 120 180 130 220 L 270 220 Q 280 180 250 150 Z"
                  fill="#DC2626"
                  opacity="0.6"
                  stroke="#991B1B"
                  strokeWidth="3"
                />

                {/* Enzyme CYP1A2 */}
                {[...Array(5)].map((_, i) => (
                  <motion.g key={`enzyme-${i}`}>
                    <motion.circle
                      cx={160 + i * 25}
                      cy={180}
                      r="12"
                      fill="#3B82F6"
                      animate={{
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                    <text
                      x={160 + i * 25}
                      y={185}
                      textAnchor="middle"
                      fill="white"
                      fontSize="8"
                      fontWeight="bold"
                    >
                      E
                    </text>
                  </motion.g>
                ))}

                {/* Caffeine molecules being broken down */}
                {[...Array(4)].map((_, i) => (
                  <motion.g key={`breakdown-${i}`}>
                    {/* Whole caffeine */}
                    <motion.circle
                      cx={170 + i * 30}
                      cy={150}
                      r="10"
                      fill="#D97706"
                      animate={{
                        scale: [1, 0.5],
                        opacity: [1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                    {/* Broken down pieces */}
                    <motion.circle
                      cx={165 + i * 30}
                      cy={210}
                      r="4"
                      fill="#FBBF24"
                      animate={{
                        scale: [0, 1],
                        opacity: [0, 1, 1, 0],
                        x: [-5, -10]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5 + 0.5
                      }}
                    />
                    <motion.circle
                      cx={175 + i * 30}
                      cy={210}
                      r="4"
                      fill="#FBBF24"
                      animate={{
                        scale: [0, 1],
                        opacity: [0, 1, 1, 0],
                        x: [5, 10]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5 + 0.5
                      }}
                    />
                  </motion.g>
                ))}
              </g>

              {/* Progress bar */}
              <g>
                <rect x="120" y="260" width="160" height="20" rx="10" fill="#E5E7EB" />
                <motion.rect
                  x="120"
                  y="260"
                  width="80"
                  height="20"
                  rx="10"
                  fill="#3B82F6"
                  animate={{
                    width: [0, 160, 160]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                />
                <text x="200" y="275" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                  50% Metabolized
                </text>
              </g>

              <text x="200" y="310" textAnchor="middle" fill="#1E40AF" fontSize="14" fontWeight="bold">
                Liver Metabolism
              </text>
            </svg>
          </div>
        );

      case 'elimination':
        return (
          <div className="relative w-full h-full bg-linear-to-br from-indigo-100 to-purple-200 rounded-2xl flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Person sleeping */}
              <g>
                {/* Head */}
                <ellipse cx="180" cy="200" rx="40" ry="35" fill="#FED7AA" />
                {/* Body */}
                <rect x="210" y="190" width="100" height="40" rx="20" fill="#6366F1" />
                {/* Pillow */}
                <ellipse cx="200" cy="220" rx="60" ry="25" fill="#E0E7FF" />

                {/* ZZZ */}
                {[...Array(3)].map((_, i) => (
                  <motion.text
                    key={`z-${i}`}
                    x={250 + i * 15}
                    y={150 - i * 20}
                    fill="#6366F1"
                    fontSize={24 - i * 4}
                    fontWeight="bold"
                    animate={{
                      opacity: [0, 1, 0],
                      y: [-5, -15]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  >
                    Z
                  </motion.text>
                ))}

                {/* Moon */}
                <g>
                  <circle cx="320" cy="100" r="30" fill="#FCD34D" />
                  <circle cx="330" cy="95" r="25" fill="#E0E7FF" />
                  {/* Stars */}
                  {[...Array(5)].map((_, i) => (
                    <motion.g
                      key={`star-${i}`}
                      animate={{
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                    >
                      <circle
                        cx={280 + Math.random() * 80}
                        cy={60 + Math.random() * 80}
                        r="2"
                        fill="#FCD34D"
                      />
                    </motion.g>
                  ))}
                </g>

                {/* Caffeine molecules leaving */}
                {[...Array(6)].map((_, i) => (
                  <motion.circle
                    key={`leaving-${i}`}
                    cx={200}
                    cy={230}
                    r="5"
                    fill="#D97706"
                    animate={{
                      opacity: [1, 0],
                      y: [0, 80],
                      x: [(i - 3) * 10, (i - 3) * 20]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />
                ))}
              </g>

              {/* Calm brain indicator */}
              <motion.g
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              >
                <circle cx="100" cy="120" r="40" fill="#A78BFA" opacity="0.3" />
                <text x="100" y="130" textAnchor="middle" fontSize="36">😴</text>
              </motion.g>

              <text x="200" y="320" textAnchor="middle" fill="#4C1D95" fontSize="14" fontWeight="bold">
                Tubuh Kembali Normal
              </text>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`bg-${i}`}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i === 0 ? 'rgba(217, 119, 6, 0.1)' : i === 1 ? 'rgba(99, 102, 241, 0.1)' : 'rgba(236, 72, 153, 0.1)'})`,
              left: `${i * 40}%`,
              top: `${i * 30}%`
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <h3 className="text-3xl font-bold text-center text-amber-900 mb-12 relative z-10">
        <motion.span
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{
            backgroundImage: 'linear-gradient(90deg, #b45309, #d97706, #b45309)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Perjalanan Kafein dalam Tubuh
        </motion.span>
      </h3>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto z-20">
        {/* Animated Line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block">
          <motion.div
            className="w-1 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent"
            animate={{
              boxShadow: [
                '0 0 20px rgba(217, 119, 6, 0.5)',
                '0 0 40px rgba(217, 119, 6, 0.8)',
                '0 0 20px rgba(217, 119, 6, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Animated particles along the line */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-3 h-3 bg-amber-400 rounded-full"
              style={{
                left: '50%',
                transform: 'translateX(-50%)'
              }}
              animate={{
                y: [0, 400],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.75
              }}
            />
          ))}
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {timeline.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <motion.button
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full rounded-2xl p-6 cursor-pointer transition-all relative overflow-hidden group ${
                    activeStep === index 
                      ? 'bg-white shadow-2xl ring-2 ring-amber-400' 
                      : 'bg-white shadow-lg hover:shadow-2xl'
                  }`}
                >
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <motion.span
                        animate={{
                          scale: activeStep === index ? [1, 1.05, 1] : 1,
                          boxShadow: activeStep === index 
                            ? ['0 0 10px currentColor', '0 0 20px currentColor', '0 0 10px currentColor']
                            : 'none'
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`${step.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-md`}
                      >
                        {step.time}
                      </motion.span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>

                    {/* Play button */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayVideo(index);
                      }}
                      whileHover={{ scale: 1.1, boxShadow: '0 10px 25px rgba(139, 92, 246, 0.4)' }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all relative overflow-hidden group/btn"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                      <Play className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Lihat Ilustrasi</span>
                    </motion.button>
                  </div>
                </motion.button>
              </div>

              {/* Icon with enhanced effects */}
              <div className="relative shrink-0 z-10">
                <motion.div
                  whileHover={{ scale: 1.25, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer relative group transition-all`}
                  onClick={() => handlePlayVideo(index)}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    boxShadow: `0 0 30px currentColor`
                  }} />
                  <step.icon className="w-8 h-8 text-white relative z-10" />
                  
                  {/* Ripple effect */}
                  {activeStep === index && (
                    <>
                      <motion.div
                        className="absolute inset-0 border-2 rounded-full border-current"
                        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        layoutId="active-ring"
                        className="absolute inset-0 border-4 border-amber-300 rounded-full shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.4 }}
                        transition={{ type: "spring", damping: 10 }}
                      />
                    </>
                  )}
                </motion.div>

                {/* Floating particles around icon */}
                {activeStep === index && [0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={`icon-particle-${i}`}
                    className="absolute w-2 h-2 bg-amber-400 rounded-full"
                    animate={{
                      x: Math.cos((i * Math.PI) / 2) * 40,
                      y: Math.sin((i * Math.PI) / 2) * 40,
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25
                    }}
                  />
                ))}
              </div>

              {/* Spacer for layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.4, type: "spring", damping: 20 }}
          className="mt-12 max-w-2xl mx-auto relative z-10"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 -z-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="rounded-3xl p-8 backdrop-blur-sm bg-white/80 shadow-2xl border border-amber-100 relative overflow-hidden">
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{
                opacity: [0, 0.5, 0],
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
              style={{
                pointerEvents: 'none'
              }}
            />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 mb-6 relative z-10"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    `0 0 20px rgba(${timeline[activeStep].color === 'bg-amber-500' ? '217,119,6' : timeline[activeStep].color === 'bg-red-500' ? '239,68,68' : '139,92,246'}, 0.5)`,
                    `0 0 40px rgba(${timeline[activeStep].color === 'bg-amber-500' ? '217,119,6' : timeline[activeStep].color === 'bg-red-500' ? '239,68,68' : '139,92,246'}, 0.8)`,
                    `0 0 20px rgba(${timeline[activeStep].color === 'bg-amber-500' ? '217,119,6' : timeline[activeStep].color === 'bg-red-500' ? '239,68,68' : '139,92,246'}, 0.5)`
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`${timeline[activeStep].color} p-4 rounded-2xl`}
              >
                {(() => {
                  const Icon = timeline[activeStep].icon;
                  return <Icon className="w-8 h-8 text-white" />;
                })()}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {timeline[activeStep].title}
                </h4>
                <p className="text-amber-700 font-bold text-sm">{timeline[activeStep].time}</p>
              </motion.div>
            </motion.div>

            <div className="space-y-3 relative z-10">
              <motion.h5
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="font-bold text-gray-900 text-lg"
              >
                Yang Terjadi di Tahap Ini:
              </motion.h5>
              {timeline[activeStep].effects.map((effect, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.12, duration: 0.4 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: 0.3 + idx * 0.12, duration: 0.6 }}
                    className="text-amber-500 font-bold mt-1 text-lg"
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-700 leading-relaxed font-medium">{effect}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with animated gradient */}
              <motion.div
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-8 text-white relative overflow-hidden"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                  }}
                />

                <div className="flex items-center justify-between relative z-10">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold mb-1">{timeline[selectedVideo].title}</h3>
                    <motion.p
                      className="text-purple-100 font-semibold"
                      animate={{
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {timeline[selectedVideo].time}
                    </motion.p>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowVideo(false)}
                    className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors backdrop-blur"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Illustration Area with frame effect */}
              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group"
                >
                  {/* Frame border glow */}
                  <div className="absolute inset-0 rounded-2xl border-4 border-gradient-to-r from-purple-400 via-pink-400 to-red-400 z-20 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity" />
                  
                  {renderIllustration(timeline[selectedVideo].illustration)}
                </motion.div>

                {/* Description with enhanced styling */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-amber-200 relative overflow-hidden"
                >
                  {/* Animated background shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0"
                    animate={{
                      opacity: [0, 0.5, 0],
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                    style={{
                      pointerEvents: 'none'
                    }}
                  />

                  <h4 className="font-bold text-gray-900 mb-4 text-xl relative z-10">📌 Penjelasan:</h4>
                  <motion.p
                    className="text-gray-700 leading-relaxed mb-4 relative z-10 text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {timeline[selectedVideo].description}
                  </motion.p>
                  <div className="space-y-3 relative z-10">
                    {timeline[selectedVideo].effects.map((effect, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + idx * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
                      >
                        <motion.span
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ delay: 0.6 + idx * 0.1, duration: 0.6 }}
                          className="text-amber-500 font-bold text-lg mt-0.5"
                        >
                          ⚡
                        </motion.span>
                        <span className="text-gray-700 leading-relaxed font-medium">{effect}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
