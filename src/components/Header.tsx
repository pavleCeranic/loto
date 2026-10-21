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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}>

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
              className="h-15 md:h-20" />
          </a>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
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
            className="md:hidden p-2 text-[#C41E3A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Отвори мени">

            {isMobileMenuOpen ? <X /> : <Menu />}
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
          className="md:hidden bg-white border-t border-gray-100 overflow-hidden">

            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-gray-800 py-2 border-b border-gray-50"
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
              <Button className="w-full mt-2" onClick={handleContactClick}>
                Бесплатна консултација
              </Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}