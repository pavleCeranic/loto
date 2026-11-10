import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import type { PageType } from '../App';
interface HeaderProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}
export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const goToSection = (href: string) => {
    if (currentPage !== 'home') {
      // App prepoznaje "#sekcija" kao naslovnu i skroluje do sekcije
      window.location.hash = href;
    } else {
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    goToSection(href);
  };
  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    goToSection('#kontakt');
  };
  const handleAboutClick = () => {
    setIsMobileMenuOpen(false);
    onNavigate('aboutus');
  };
  const isSolid = isScrolled || currentPage !== 'home';
  const navLinks = [
  {
    name: 'О нама',
    href: '#o-nama',
    isPage: true
  },
  {
    name: 'Услуге',
    href: '#usluge'
  },
  {
    name: 'Процес',
    href: '#proces'
  },
  {
    name: 'Галерија',
    href: '#galerija'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-md py-2 lg:py-3' : 'bg-white/90 backdrop-blur-sm py-2 lg:bg-transparent lg:backdrop-blur-none lg:py-6'}`}>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <a
            href="#"
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}>

            <img
              src="/logo_jocin.svg"
              alt="ЛОТО"
              className="h-12 md:h-14 lg:h-20" />
          </a>


          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                if ('isPage' in link && link.isPage) {
                  handleAboutClick();
                } else {
                  handleNavClick(link.href);
                }
              }}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-[#C41E3A] ${isScrolled || currentPage !== 'home' ? 'text-gray-800' : 'text-gray-900'} ${currentPage === 'aboutus' && link.name === 'О нама' ? 'text-[#C41E3A]' : ''}`}>

                {link.name}
              </a>
            )}
            <Button size="sm" onClick={handleContactClick}>
              <Phone className="w-4 h-4 mr-2" />
              Бесплатна консултација
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#C41E3A] text-white shadow-md shadow-[#C41E3A]/30 transition-transform active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Затвори мени' : 'Отвори мени'}
            aria-expanded={isMobileMenuOpen}>

            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="lg:hidden bg-white border-t border-gray-100 overflow-hidden">

            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className={`text-base font-semibold py-3 border-b border-gray-100 ${currentPage === 'aboutus' && link.name === 'О нама' ? 'text-[#C41E3A]' : 'text-gray-800'}`}
              onClick={(e) => {
                e.preventDefault();
                if ('isPage' in link && link.isPage) {
                  handleAboutClick();
                } else {
                  handleNavClick(link.href);
                }
              }}>

                  {link.name}
                </a>
            )}
              <Button className="w-full mt-4" onClick={handleContactClick}>
                <Phone className="w-4 h-4 mr-2" />
                Бесплатна консултација
              </Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}