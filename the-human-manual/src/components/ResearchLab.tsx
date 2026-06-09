import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { FlaskConical, BookOpen, ExternalLink, Microscope, GraduationCap, Beaker, FileText, Link as LinkIcon } from 'lucide-react';

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className={`bg-gradient-to-br ${resource.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                  }} />
                  <div className="relative z-10">
                    <resource.icon className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-lg leading-tight">{resource.title}</h4>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-4 space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {resource.topics.map((topic, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200 hover:border-amber-400 transition-colors"
                        >
                          {topic}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
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
