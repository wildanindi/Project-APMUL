import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import CoffeeAnimation from './CoffeeAnimation';
import CoffeeMolecule from './CoffeeMolecule';

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-96 sm:h-96 bg-amber-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-96 sm:h-96 bg-orange-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-6 sm:mb-8 inline-block"
        >
          <div className="relative flex items-center justify-center gap-4 sm:gap-8 flex-wrap justify-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24">
              <CoffeeAnimation />
            </div>
            <div className="w-16 h-16 sm:w-32 sm:h-32">
              <CoffeeMolecule />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-amber-900 mb-4 sm:mb-6"
        >
          The Human Manual
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-2xl md:text-3xl text-amber-800 mb-3 sm:mb-4"
        >
          Apa yang Terjadi Saat Kita Minum Kopi?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto"
        >
          Jelajahi perjalanan kafein di dalam tubuh Anda dengan cara yang interaktif dan menyenangkan.
          Dari secangkir kopi hingga setiap sel di tubuh Anda.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToNext}
          className="bg-amber-700 text-white px-6 sm:px-8 py-2.5 sm:py-4 rounded-full font-semibold shadow-lg hover:bg-amber-800 transition-colors text-sm sm:text-base"
        >
          Mulai Eksplorasi
        </motion.button>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-4 sm:bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />
        </motion.div>
      </div>
    </section>
  );
}
