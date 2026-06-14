import { Coffee, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Navigation({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    
    if (mobileMenuOpen) {
      // Mobile: Close menu first, then scroll after transition finishes
      setMobileMenuOpen(false);
      setTimeout(() => {
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      // Desktop: Scroll instantly
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'how-it-works', label: 'Cara Kerja' },
    { id: 'body-map', label: 'Peta Tubuh' },
    { id: 'cases', label: 'Studi Kasus' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="w-6 sm:w-8 h-6 sm:h-8 text-amber-700" />
          <span className="font-semibold text-sm sm:text-base text-amber-900">The Human Manual</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm transition-colors ${
                activeSection === item.id
                  ? 'text-amber-700 font-semibold'
                  : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 cursor-pointer relative z-50"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-amber-700" />
          ) : (
            <Menu className="w-6 h-6 text-amber-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-amber-100 text-amber-700 font-semibold'
                      : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
