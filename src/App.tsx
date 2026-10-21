import React, { useCallback, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Gallery } from './components/Gallery';
import { LocationMap } from './components/LocationMap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceGalleryPage } from './pages/ServiceGalleryPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { CategoryId, isCategory } from './data/projects';

export type PageType = 'home' | 'aboutus' | CategoryId;

interface Route {
  page: PageType;
  projectId?: string;
  /** Sekcija na naslovnoj (npr. "kontakt") na koju treba skrolovati. */
  anchor?: string;
}

/**
 * Jednostavno rutiranje preko hash-a, da rade dugme "Nazad" u pregledniku
 * i linkovi koji se mogu poslati (npr. #/kuhinje/01-kuhinja-siva-hrast).
 */
function parseHash(hash: string): Route {
  const value = decodeURIComponent(hash.replace(/^#/, ''));
  if (!value.startsWith('/')) {
    return { page: 'home', anchor: value || undefined };
  }
  const [first, second] = value.split('/').filter(Boolean);
  if (first === 'o-nama') return { page: 'aboutus' };
  if (first && isCategory(first)) return { page: first, projectId: second };
  return { page: 'home' };
}

function buildHash(page: PageType, projectId?: string) {
  if (page === 'home') return '#/';
  if (page === 'aboutus') return '#/o-nama';
  return projectId ? `#/${page}/${encodeURIComponent(projectId)}` : `#/${page}`;
}

const scrollToSection = (id: string) => {
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

export function App() {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHash(window.location.hash);
      setRoute(next);
      if (next.anchor) {
        scrollToSection(next.anchor);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    // Ako se sajt otvori direktno na sekciji (npr. /#kontakt)
    if (route.anchor) scrollToSection(route.anchor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateTo = useCallback((page: PageType, projectId?: string) => {
    const hash = buildHash(page, projectId);
    if (window.location.hash === hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = hash;
    }
  }, []);

  const goHome = useCallback(() => navigateTo('home'), [navigateTo]);

  const goToSection = useCallback(
    (id: string) => {
      if (route.page !== 'home') {
        setRoute({ page: 'home' });
        window.history.pushState(null, '', '#/');
      }
      scrollToSection(id);
    },
    [route.page]
  );

  const goToContact = useCallback(() => goToSection('kontakt'), [goToSection]);
  const goToGallery = useCallback(() => goToSection('galerija'), [goToSection]);

  const openProject = useCallback(
    (category: CategoryId, projectId: string) => navigateTo(category, projectId),
    [navigateTo]
  );

  const { page } = route;

  return (
    <div className="min-h-screen bg-white font-['Montserrat',sans-serif] text-gray-900 selection:bg-[#C41E3A] selection:text-white">
      <Header onNavigate={navigateTo} currentPage={page} />
      <main>
        {page === 'home' ? (
          <>
            <Hero />
            <Services onNavigate={navigateTo} />
            <WhyUs />
            <Process />
            <Gallery onOpenProject={openProject} onOpenCategory={(category) => navigateTo(category)} />
            <LocationMap />
            <Contact />
          </>
        ) : page === 'aboutus' ? (
          <AboutUsPage onBack={goHome} onContact={goToContact} onNavigateGallery={goToGallery} />
        ) : (
          <ServiceGalleryPage
            key={page}
            serviceType={page}
            projectId={route.projectId}
            onOpenProject={(id) => navigateTo(page, id)}
            onCloseProject={() => navigateTo(page)}
            onBack={goHome}
            onContact={goToContact}
          />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
