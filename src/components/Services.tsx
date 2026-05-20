import React from 'react';
import { Section } from './ui/Section';
import { CookingPot, Ruler, ArrowRight, BedDouble, Bath, Lamp, Columns3, LampDesk,  } from 'lucide-react';
import { motion } from 'framer-motion';
interface ServicesProps {
  onNavigate: (page: 'kuhinje' | 'ormari' | 'namjestaj') => void;
}
export function Services({ onNavigate }: ServicesProps) {
  return (
    <Section id="usluge" background="white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Намјештај по мјери за сваки простор
        </h2>
        <p className="text-gray-600 text-lg">
          Једноставно или сложено, економично или премиум — прилагођавамо се
          вашим потребама и стварамо намјештај који савршено одговара вашем
          простору.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Кухиње по мјери */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0
          }}
          className="group cursor-pointer"
          onClick={() => onNavigate('kuhinje')}>

          <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1000"
              alt="Кухиње по мјери"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg z-20">
              <CookingPot className="w-6 h-6 text-[#C41E3A]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C41E3A] transition-colors">
            Кухиње
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Кухиње прилагођене вашем простору, потребама и стилу. Радимо са материјалима и опремом по вашем избору.
          </p>
          <div className="flex items-center text-[#C41E3A] font-semibold text-sm group-hover:translate-x-1 transition-transform">
            Погледајте пројекте <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </motion.div>

        {/* Дневне собе */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.1
          }}
          className="group cursor-pointer"
          onClick={() => onNavigate('ormari')}>

          <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <img
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000"
              alt="Уградбени ормари"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg z-20">
              <Lamp className="w-6 h-6 text-[#C41E3A]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C41E3A] transition-colors">
            Дневне собе
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
Комоде, ТВ зидови, полице и намјештај за функционалан и уређен дневни боравак.
          </p>
          <div className="flex items-center text-[#C41E3A] font-semibold text-sm group-hover:translate-x-1 transition-transform">
            Погледајте пројекте <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </motion.div>

        {/* Плакари и ходници */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.2
          }}
          className="group cursor-pointer"
          onClick={() => onNavigate('namjestaj')}>

          <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000"
              alt="Намјештај за дом"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg z-20">
              <Columns3 className="w-6 h-6 text-[#C41E3A]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C41E3A] transition-colors">
            Плакари и ходници
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
Клизни плакари, ходници и организација простора по мјери. Максимално искориштен сваки центиметар.
          </p>
          <div className="flex items-center text-[#C41E3A] font-semibold text-sm group-hover:translate-x-1 transition-transform">
            Погледајте пројекте <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </motion.div>

        {/* Купатила */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.2
          }}
          className="group cursor-pointer"
          onClick={() => onNavigate('namjestaj')}>

          <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000"
              alt="Намјештај за дом"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg z-20">
              <Bath className="w-6 h-6 text-[#C41E3A]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C41E3A] transition-colors">
          Купатила
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Купатилски намјештај израђен по мјери и прилагођен вашем простору и стилу.
          </p>
          <div className="flex items-center text-[#C41E3A] font-semibold text-sm group-hover:translate-x-1 transition-transform">
            Погледајте пројекте <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </motion.div>


        {/* Спаваће собе */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.2
          }}
          className="group cursor-pointer"
          onClick={() => onNavigate('namjestaj')}>

          <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000"
              alt="Намјештај за дом"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg z-20">
              <BedDouble className="w-6 h-6 text-[#C41E3A]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C41E3A] transition-colors">
          Спаваће собе
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
           Ормари, комоде и остали намјештај за удобно и практично уређење спаваће собе.
          </p>
          <div className="flex items-center text-[#C41E3A] font-semibold text-sm group-hover:translate-x-1 transition-transform">
            Погледајте пројекте <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </motion.div>

        {/* Пословни простори */}
          <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.2
          }}
          className="group cursor-pointer"
          onClick={() => onNavigate('namjestaj')}>

          <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1000"
              alt="Намјештај за дом"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg z-20">
              <LampDesk className="w-6 h-6 text-[#C41E3A]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C41E3A] transition-colors">
          Пословни простори
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Намјештај за канцеларије, локале и друге пословне просторе, прилагођен намјени и простору.
          </p>
          <div className="flex items-center text-[#C41E3A] font-semibold text-sm group-hover:translate-x-1 transition-transform">
            Погледајте пројекте <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </motion.div>

      </div>
    </Section>);

}