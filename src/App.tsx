import React, { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Gallery } from './components/Gallery';
import { LocationMap } from './components/LocationMap';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceGalleryPage } from './pages/ServiceGalleryPage';
import { AboutUsPage } from './pages/AboutUsPage';
type PageType = 'home' | 'kuhinje' | 'ormari' | 'namjestaj' | 'aboutus';
export function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const navigateTo = useCallback((page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const goHome = useCallback(() => {
    navigateTo('home');
  }, [navigateTo]);
  const goToContact = useCallback(() => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById('kontakt')?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    } else {
      document.getElementById('kontakt')?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [currentPage]);
  const goToGallery = useCallback(() => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById('galerija')?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    } else {
      document.getElementById('galerija')?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [currentPage]);
  return (
    <div className="min-h-screen bg-white font-['Montserrat',sans-serif] text-gray-900 selection:bg-[#C41E3A] selection:text-white">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Services onNavigate={navigateTo} />
            <WhyUs />
            <Process />
            <Gallery />
            <LocationMap />
            <Contact />
          </>
        ) : currentPage === 'aboutus' ? (
          <AboutUsPage
            onBack={goHome}
            onContact={goToContact}
            onNavigateGallery={goToGallery}
          />
        ) : (
          <ServiceGalleryPage
            serviceType={currentPage}
            onBack={goHome}
            onContact={goToContact}
          />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>);

}