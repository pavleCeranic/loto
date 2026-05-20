import React, { lazy } from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { MapPinIcon, ClockIcon, EyeIcon, RulerIcon } from 'lucide-react';
import { Button } from './ui/Button';
export function LocationMap() {
  return (
    <Section background="light">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Map */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="relative order-2 lg:order-1">
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.5!2d17.19!3d44.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ2JzEzLjIiTiAxN8KwMTEnMjQuMCJF!5e0!3m2!1sen!2sba!4v1234567890"
              width="100%"
              height="100%"
              style={{
                border: 0
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Лото намјештај локација" />
            
          </div>

          {/* Decorative accents */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#C41E3A]/10 rounded-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-white rounded-2xl -z-10 shadow-lg" />
        </motion.div>

        {/* Right side - Showroom Info */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="order-1 lg:order-2">
          
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#C41E3A]/10 text-[#C41E3A] text-sm font-semibold mb-4">
            <MapPinIcon className="w-3 h-3 mr-2" />
            Пиланска улица, Бањалука
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Посјетите нашу радионицу
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Дођите и видите како настаје ваш намјештај. Прегледајте узорке
            материјала, опипајте квалитет обраде, и разговарајте директно са
            мајсторима који ће радити на вашем пројекту.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 10
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
              className="bg-white p-5 rounded-xl shadow-sm">
              
              <div className="w-10 h-10 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center mb-3">
                <EyeIcon className="w-5 h-5 text-[#C41E3A]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Узорци материјала
              </h3>
              <p className="text-sm text-gray-600">
                Видите и додирните све доступне материјале и завршне обраде
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 10
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
              className="bg-white p-5 rounded-xl shadow-sm">
              
              <div className="w-10 h-10 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center mb-3">
                <RulerIcon className="w-5 h-5 text-[#C41E3A]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Бесплатна консултација
              </h3>
              <p className="text-sm text-gray-600">
                Разговор са нашим дизајнерима и мајсторима без обавеза
              </p>
            </motion.div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-3">
              <ClockIcon className="w-5 h-5 text-[#C41E3A]" />
              <h3 className="font-bold text-gray-900">Радно вријеме</h3>
            </div>
            <div className="space-y-1 text-gray-600">
              <p>
                Понедјељак - Петак:{' '}
                <span className="font-semibold text-gray-900">
                  08:00 - 16:00
                </span>
              </p>
              <p>
                Субота:{' '}
                <span className="font-semibold text-gray-900">
                  09:00 - 13:00
                </span>
              </p>
              <p className="text-sm text-gray-500 mt-2">Недјеља: Затворено</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              size="lg"
              onClick={() =>
              window.open(
                'https://www.google.com/maps/search/?api=1&query=Pilanska+ulica+Banja+Luka',
                '_blank'
              )
              }>
              
              Упутства за долазак
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
              document.getElementById('kontakt')?.scrollIntoView({
                behavior: 'smooth'
              })
              }>
              
              Закажите посјету
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>);

}