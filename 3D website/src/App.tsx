import { useState } from 'react';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { SlideDeckViewer } from './components/SlideDeckViewer';
import { DesignLab } from './components/DesignLab';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PortfolioItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [prefilledMsg, setPrefilledMsg] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleOpenContact = (prefill = '') => {
    if (prefill) setPrefilledMsg(prefill);
    const contactEl = document.getElementById('contact-form');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedCategory(serviceId);
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative bg-[#07090e] text-white selection:bg-cyan-500 selection:text-black">
      
      {/* Dynamic Interactive Three.js Background */}
      <ThreeCanvas />

      {/* Glassmorphism Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenContact={() => handleOpenContact()} />
        <Services onSelectService={handleSelectService} />
        <Gallery
          key={selectedCategory}
          selectedCategory={selectedCategory}
          onOpenProject={(item) => setSelectedProject(item)}
        />
        <SlideDeckViewer />
        <DesignLab />
        <Testimonials />
        <ContactForm prefilledMessage={prefilledMsg} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />

    </div>
  );
}
