import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FlaskConical, BookOpen, ExternalLink, Microscope, GraduationCap } from 'lucide-react';

interface ResearchLabProps {
  setActiveSection: (section: string) => void;
}

export default function ResearchLab({ setActiveSection }: ResearchLabProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      icon: BookOpen,
      title: "Farmakologi Kafein",
      description: "Mekanisme molekular kafein sebagai antagonis reseptor adenosin A1 dan A2A di sistem saraf pusat",
      source: "PubMed Central",
      color: "bg-blue-500",
      link: "#"
    },
    {
      icon: Microscope,
      title: "Genetika & Metabolisme",
      description: "Peran polimorfisme gen CYP1A2 dalam variasi individual metabolisme kafein",
      source: "Nature Genetics",
      color: "bg-purple-500",
      link: "#"
    },
    {
      icon: GraduationCap,
      title: "Efek Kardiovaskular",
      description: "Dampak konsumsi kafein jangka pendek dan panjang terhadap sistem kardiovaskular",
      source: "Journal of the American College of Cardiology",
      color: "bg-red-500",
      link: "#"
    }
  ];

  const medicalTerms = [
    {
      term: "Adenosin",
      definition: "Nukleosida yang berfungsi sebagai neuromodulator, menyebabkan rasa kantuk dengan mengikat reseptor A1 dan A2A"
    },
    {
      term: "CYP1A2",
      definition: "Enzim sitokrom P450 di hati yang bertanggung jawab metabolisme ~95% kafein yang dikonsumsi"
    },
    {
      term: "Waktu Paruh",
      definition: "Waktu yang dibutuhkan tubuh untuk mengeliminasi setengah dari dosis kafein, rata-rata 3-5 jam pada dewasa sehat"
    },
    {
      term: "Toleransi",
      definition: "Penurunan respons terhadap kafein akibat upregulasi reseptor adenosin setelah konsumsi kronis"
    }
  ];

  return (
    <section id="research" ref={sectionRef} className="relative min-h-screen py-24 px-6 bg-linear-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <FlaskConical className="w-16 h-16 text-amber-700 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Laboratorium & Riset
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pelajari lebih dalam dengan sumber-sumber ilmiah dan istilah medis
          </p>
        </motion.div>

        {/* Research Papers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-amber-600" />
            Sumber Riset Terpercaya
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className={`${resource.color} p-6 text-white`}>
                  <resource.icon className="w-10 h-10 mb-3" />
                  <h4 className="font-bold text-lg">{resource.title}</h4>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.source}</span>
                    <ExternalLink className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Medical Glossary */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Microscope className="w-6 h-6 text-amber-600" />
            Glosarium Istilah Medis
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {medicalTerms.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <span className="text-amber-700 font-bold text-sm">i</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      {item.term}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
