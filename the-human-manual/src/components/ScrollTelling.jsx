import { useEffect, useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { Brain, Zap, Activity, Clock } from 'lucide-react';

export default function ScrollTelling({ setActiveSection }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.2 && latest < 0.8) {
        setActiveSection('how-it-works');
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, setActiveSection]);

  const steps = [
    {
      icon: Brain,
      title: "Kafein Masuk ke Otak",
      description: "Kafein memiliki struktur kimia yang mirip dengan adenosin, molekul yang membuat kita mengantuk. Kafein 'menipu' otak dengan mengisi reseptor adenosin.",
      color: "bg-purple-500"
    },
    {
      icon: Zap,
      title: "Blokir Rasa Kantuk",
      description: "Ketika reseptor adenosin terblokir oleh kafein, otak tidak menerima sinyal kantuk. Inilah mengapa kopi membuat kita terjaga!",
      color: "bg-yellow-500"
    },
    {
      icon: Activity,
      title: "Meningkatkan Aktivitas",
      description: "Kafein merangsang pelepasan neurotransmitter seperti dopamin dan norepinefrin, meningkatkan fokus dan energi.",
      color: "bg-red-500"
    },
    {
      icon: Clock,
      title: "Efek Bertahan 3-5 Jam",
      description: "Waktu paruh kafein adalah 3-5 jam. Artinya, setengah dari kafein yang Anda konsumsi masih ada di tubuh setelah waktu tersebut.",
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-900 mb-3 sm:mb-4">
            Bagaimana Kafein Bekerja?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Mari kita ikuti perjalanan molekul kafein dari secangkir kopi hingga ke otak Anda
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-6 sm:gap-8 md:gap-12`}
            >
              {/* Icon */}
              <div className="shrink-0 w-full sm:w-auto flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${step.color} p-6 sm:p-8 rounded-3xl shadow-2xl`}
                >
                  <step.icon className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-amber-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
