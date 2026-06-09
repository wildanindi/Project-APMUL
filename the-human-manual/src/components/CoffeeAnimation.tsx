import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';

export default function CoffeeAnimation() {
  return (
    <div className="relative w-32 h-32">
      {/* Coffee Cup */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10"
      >
        <Coffee className="w-32 h-32 text-amber-700" />
      </motion.div>

      {/* Steam */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-8 bg-gradient-to-t from-amber-300/60 to-transparent rounded-full blur-sm"
          animate={{
            y: [-20, -60],
            opacity: [0.6, 0],
            x: [0, i % 2 === 0 ? 10 : -10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-amber-500 rounded-full"
          style={{
            left: `${50 + (i - 2) * 15}%`,
            top: '50%',
          }}
          animate={{
            y: [0, -40, -80],
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}
