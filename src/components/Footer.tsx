import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

type PageType = 'home' | 'kuhinje' | 'ormari' | 'namjestaj' | 'aboutus';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#2C1810] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#" className="mb-6 block">
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
                href="https://www.facebook.com/Enterijerilotonamjestaj/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-all"
                target="_blank">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/loto.namjestaj/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C41E3A] transition-all"
                target="_blank">
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
                  href="#o-nama"
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('aboutus');
                  }}>

                  О нама
                </a>
              </li>
              <li>
                <a
                  href="#usluge"
                  className="text-gray-400 hover:text-white transition-colors">

                  Услуге
                </a>
              </li>
              <li>
                <a
                  href="#galerija"
                  className="text-gray-400 hover:text-white transition-colors">

                  Галерија радова
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-gray-400 hover:text-white transition-colors">

                  Контакт
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Услуге</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">Кухиње по мјери</li>
              <li className="text-gray-400">Уградбени ормари</li>
              <li className="text-gray-400">Дневни боравци</li>
              <li className="text-gray-400">Канцеларијски намјештај</li>
              <li className="text-gray-400">Опремање апартмана</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Контакт</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">Пиланска улица</li>
              <li className="text-gray-400">78000 Бањалука, БиХ</li>
              <li className="text-gray-400 pt-2">+387 51 234 567</li>
              <li className="text-gray-400">info@loto-namjestaj.ba</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Лото Намјештај. Сва права задржана.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Приватност
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Услови коришћења
            </a>
          </div>
        </div>
      </div>
    </footer>);

}