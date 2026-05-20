import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  RulerIcon,
  LightbulbIcon,
  HammerIcon,
  WrenchIcon } from
'lucide-react';
export function Process() {
  return (
    <Section id="proces" background="light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Како до савршеног намјештаја?
        </h2>
        <p className="text-gray-600 text-lg">
          Једноставан и транспарентан процес у пет корака — од првог позива до
          готовог простора.
        </p>
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#C41E3A]/20"
          aria-hidden="true" />
        

        {/* Step 1 — Контактирање */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.5,
            delay: 0
          }}
          className="relative flex items-start gap-6 md:gap-8 pb-12">
          
          <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#C41E3A] flex items-center justify-center shadow-lg shadow-[#C41E3A]/20">
            <PhoneIcon className="w-5 h-5 md:w-7 md:h-7 text-white" />
            <span className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
              1
            </span>
          </div>
          <div className="pt-1 md:pt-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Контактирање
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Јавите нам се телефоном, поруком или путем форме на страници.
              Разговарамо о вашим жељама, простору и оквирном буџету.
            </p>
          </div>
        </motion.div>

        {/* Step 2 — Мјерење простора */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.5,
            delay: 0.1
          }}
          className="relative flex items-start gap-6 md:gap-8 pb-12">
          
          <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#C41E3A] flex items-center justify-center shadow-lg shadow-[#C41E3A]/20">
            <RulerIcon className="w-5 h-5 md:w-7 md:h-7 text-white" />
            <span className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
              2
            </span>
          </div>
          <div className="pt-1 md:pt-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Мјерење простора
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Долазимо на лице мјеста и прецизно мјеримо ваш простор. Сваки
              центиметар је битан за савршен резултат.
            </p>
          </div>
        </motion.div>

        {/* Step 3 — Прављење идејног рјешења */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
          className="relative flex items-start gap-6 md:gap-8 pb-12">
          
          <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#C41E3A] flex items-center justify-center shadow-lg shadow-[#C41E3A]/20">
            <LightbulbIcon className="w-5 h-5 md:w-7 md:h-7 text-white" />
            <span className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
              3
            </span>
          </div>
          <div className="pt-1 md:pt-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Прављење идејног рјешења
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Креирамо 3D визуализацију и детаљне нацрте. Заједно бирамо
              материјале, боје и завршне детаље док не будете потпуно задовољни.
            </p>
          </div>
        </motion.div>

        {/* Step 4 — Производња */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
          className="relative flex items-start gap-6 md:gap-8 pb-12">
          
          <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#C41E3A] flex items-center justify-center shadow-lg shadow-[#C41E3A]/20">
            <HammerIcon className="w-5 h-5 md:w-7 md:h-7 text-white" />
            <span className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
              4
            </span>
          </div>
          <div className="pt-1 md:pt-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Производња
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ваш намјештај се израђује у нашој радионици користећи врхунске
              материјале и модерне технике. Квалитет је на првом мјесту.
            </p>
          </div>
        </motion.div>

        {/* Step 5 — Монтирање */}
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true,
            margin: '-50px'
          }}
          transition={{
            duration: 0.5,
            delay: 0.4
          }}
          className="relative flex items-start gap-6 md:gap-8 pb-0">
          
          <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#C41E3A] flex items-center justify-center shadow-lg shadow-[#C41E3A]/20">
            <WrenchIcon className="w-5 h-5 md:w-7 md:h-7 text-white" />
            <span className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
              5
            </span>
          </div>
          <div className="pt-1 md:pt-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Монтирање
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Наш искусни тим професионално монтира намјештај у вашем простору —
              чисто, уредно и у договореном термину.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>);

}