import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

import type { PageType } from '../App';
import { categories, categoryOrder, getProjectsByCategory } from '../data/projects';
import { mapsSearchUrl, siteInfo } from '../data/siteInfo';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

const linkClass = 'text-gray-400 hover:text-white transition-colors';

// "#sekcija" linkovi rade sa svake stranice: App ih prepoznaje i vraća na naslovnu
const quickLinks = [
  { label: 'Услуге', href: '#usluge' },
  { label: 'Процес рада', href: '#proces' },
  { label: 'Галерија радова', href: '#galerija' },
  { label: 'Локација и радно вријеме', href: '#lokacija' },
  { label: 'Контакт', href: '#kontakt' }
];

// Prikazuju se samo kategorije koje imaju bar jedan projekat
const serviceLinks = categoryOrder.filter((id) => getProjectsByCategory(id).length > 0);

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#2C1810] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a
              href="#/"
              className="mb-6 block"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('home');
              }}>
              <img
                src="/logo_jocin.svg"
                alt="ЛОТО"
                className="h-10" />

            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              30 година традиције у изради намјештаја по мјери, са преко 5000 завршених пројеката.
            </p>
            <div className="flex gap-4">
              <a
                href={siteInfo.social.facebook}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteInfo.social.instagram}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Брзи линкови</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#/o-nama"
                  className={linkClass}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('aboutus');
                  }}>
                  О нама
                </a>
              </li>
              {quickLinks.map((link) =>
              <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Услуге</h3>
            <ul className="space-y-4">
              {serviceLinks.map((id) =>
              <li key={id}>
                  <a
                    href={`#/${id}`}
                    className={linkClass}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.(id);
                    }}>
                    {categories[id].title}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Контакт</h3>
            <ul className="space-y-4">
              <li>
                <a href={mapsSearchUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {siteInfo.address.street}
                  <br />
                  {siteInfo.address.city}, БиХ
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                {siteInfo.hours.map((h) =>
                <span key={h.days} className="block">
                    {h.days}: <span className="text-gray-300">{h.time}</span>
                  </span>
                )}
              </li>
              <li>
                <a href={`tel:${siteInfo.phone.tel}`} className={linkClass}>
                  {siteInfo.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteInfo.email}`} className={linkClass}>
                  {siteInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Лото Намјештај. Сва права задржана.
          </p>
          <p className="text-gray-500 text-sm">
            Пројектовање, производња и монтажа намјештаја по мјери · Бањалука
          </p>
        </div>
      </div>
    </footer>);

}
