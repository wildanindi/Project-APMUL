import { useState, useEffect } from 'react';

// Mengimpor semua komponen yang sudah kamu buat
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import HeroSection from './components/HeroSection';
import QuickFacts from './components/QuickFacts';
import ScrollTelling from './components/ScrollTelling';
import InteractiveTimeline from './components/InteractiveTimeline';
import BodyMap from './components/BodyMap';
import ComparisonTool from './components/ComparisonTool';
import CaseStudies from './components/CaseStudies';
import TipsSection from './components/TipsSection';
import InteractiveQuiz from './components/InteractiveQuiz';
import ResearchLab from './components/ResearchLab';
import FAQSection from './components/FAQSection';
import BackToTop from './components/BackToTop';

export default function App() {
  // State untuk mengatur Loading dan Menu Aktif di Navigasi
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Mengaktifkan efek smooth scrolling bawaan browser
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden">
      {/* Jika masih loading, tampilkan animasi kopi tumpah. Jika selesai, tampilkan webnya */}
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Komponen yang selalu menempel di layar */}
          <ScrollProgress />
          <Navigation activeSection={activeSection} />

          <main>
            {/* Urutan Cerita (The Scrollytelling Flow) */}
            <HeroSection />

            <div className="py-8 sm:py-12 bg-white relative z-10">
              <QuickFacts />
            </div>

            {/* Ini bagian Scrollytelling cara kerja kafein */}
            <ScrollTelling setActiveSection={setActiveSection} />

            <div className="bg-amber-50">
              <InteractiveTimeline />
            </div>

            {/* Peta Tubuh Interaktif */}
            <BodyMap setActiveSection={setActiveSection} />

            <ComparisonTool />

            {/* Hub Studi Kasus Utama */}
            <CaseStudies setActiveSection={setActiveSection} />

            <TipsSection />

            <InteractiveQuiz />

            <ResearchLab setActiveSection={setActiveSection} />

            <FAQSection />
          </main>

          {/* Tombol kembali ke atas */}
          <BackToTop />
        </>
      )}
    </div>
  );
}