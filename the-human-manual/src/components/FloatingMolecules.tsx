import { motion } from 'motion/react';

export default function FloatingMolecules() {
  const molecules = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {molecules.map((molecule) => (
        <motion.div
          key={molecule.id}
          className="absolute"
          style={{
            left: `${molecule.x}%`,
            top: `${molecule.y}%`,
            width: molecule.size,
            height: molecule.size,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 25, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: molecule.duration,
            delay: molecule.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 40 40" className="w-full h-full">
            {/* Central atom */}
            <circle cx="20" cy="20" r="8" fill="#D97706" opacity="0.6" />

            {/* Orbiting atoms */}
            <circle cx="20" cy="5" r="4" fill="#F59E0B" opacity="0.6" />
            <circle cx="35" cy="20" r="4" fill="#FBBF24" opacity="0.6" />
            <circle cx="20" cy="35" r="4" fill="#F59E0B" opacity="0.6" />
            <circle cx="5" cy="20" r="4" fill="#FBBF24" opacity="0.6" />

            {/* Bonds */}
            <line x1="20" y1="20" x2="20" y2="5" stroke="#D97706" strokeWidth="1" opacity="0.4" />
            <line x1="20" y1="20" x2="35" y2="20" stroke="#D97706" strokeWidth="1" opacity="0.4" />
            <line x1="20" y1="20" x2="20" y2="35" stroke="#D97706" strokeWidth="1" opacity="0.4" />
            <line x1="20" y1="20" x2="5" y2="20" stroke="#D97706" strokeWidth="1" opacity="0.4" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
