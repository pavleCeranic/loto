import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { UserCheck, MonitorCheck, Grid2x2Check, ArrowRight } from 'lucide-react';
import heroKitchen from '../assets/hero/hero-kuhinja.jpg?w=1400&format=webp&quality=88&imagetools';
import heroTvWall from '../assets/hero/hero-tv-zid.jpg?w=900&format=webp&quality=88&imagetools';
import heroDarkKitchen from '../assets/hero/hero-tamna-kuhinja.jpg?w=1600&format=webp&quality=88&imagetools';
export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FBF8F5]">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5E6D3] hidden lg:block" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}>

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#C41E3A]/10 text-[#C41E3A] text-sm font-bold mb-6">
              <span className="ml-2 w-2 h-2 rounded-full bg-[#C41E3A] mr-2"></span>
              5000+ реализованих пројеката
              <span className="ml-3 w-2 h-2 rounded-full bg-[#C41E3A] mr-2"></span>
              30+ година искуства
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Ентеријери Лото намјештај
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            Преко 30 година искуства у производњи намјештаја по мјери — комплетна реализација од идеје до уградње.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById('kontakt')?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }>

                  Затражите понуду
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document.getElementById('galerija')?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }>

Погледајте наше радове
              </Button>
            </div>

            <div className="mt-24 flex flex-wrap items-center text-lg md:text-xl text-gray-500 font-medium mb-8 max-w-lg leading-relaxed space-y-5">
              <div className="flex items-center gap-2">
                <Grid2x2Check className="ml-2 w-6 h-6 text-[#C41E3A]" />
                Широк избор материјала и декора
              </div>
              <div className="flex items-center gap-2">
              <MonitorCheck className="ml-2 w-6 h-6 text-[#C41E3A]" />
                Рјешења прилагођена вашем буџету
              </div>
              <div className="flex items-center gap-2">
              <UserCheck className="ml-2 w-6 h-6 text-[#C41E3A]" />
                Гаранција и подршка након уградње
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeOut'
            }}
            className="relative">

            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              {/* Kolaž stvarnih radova (slike su obrađene za naslovnu: src/assets/hero) */}
              <div className="grid h-full w-full grid-cols-[3fr_2fr] grid-rows-2 gap-2 bg-white">
                <img
                  src={heroKitchen}
                  alt="Кухиња по мјери са витринама у плавој и храсту"
                  className="row-span-2 h-full w-full object-cover" />
                <img
                  src={heroTvWall}
                  alt="ТВ зид у храсту са LED освјетљењем"
                  className="h-full w-full object-cover" />
                <img
                  src={heroDarkKitchen}
                  alt="Тамна кухиња са острвом у храсту"
                  className="h-full w-full object-cover" />
              </div>


              {/* Floating Badge */}
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0
                }}
                animate={{
                  y: 0,
                  opacity: 1
                }}
                transition={{
                  delay: 0.6
                }}
                className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-[280px] md:max-w-xs">

                <p className="text-[#C41E3A] font-extrabold text-3xl md:text-4xl mb-1">
                  30+
                </p>
                <p className="text-gray-600 text-xs md:text-sm font-medium">
                  Година искуства у производњи намјештаја врхунске квалитете
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}