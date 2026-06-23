import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Award,
  BadgeCheck,
  Compass,
  Handshake,
  Lightbulb,
  Medal,
  PhoneIcon,
  Presentation,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench
} from 'lucide-react';
import { Button } from '../components/ui/Button';

interface AboutUsPageProps {
  onBack: () => void;
  onContact: () => void;
  onNavigateGallery?: () => void;
}

const timeline = [
  {
    period: 'Почетак',
    title: 'Занат као темељ',
    text: 'Почели смо као мала радионица са једноставном идејом: направити намјештај који је прецизан, трајан и поштен према човјеку који га наручује.'
  },
  {
    period: 'Раст',
    title: 'Од појединачног комада до цијелог ентеријера',
    text: 'Искуство, препоруке и повјерење клијената проширили су наш посао. Почели смо преузимати сложеније просторе и комплетна рјешења по мјери.'
  },
  {
    period: 'Нови корак',
    title: 'Технологија у рукама мајстора',
    text: 'У производњу смо уводили савремене машине, нове материјале и прецизније процесе, без губитка онога што нас је изградило — ока, руке и одговорности мајстора.'
  },
  {
    period: 'Данас',
    title: 'Више од 30 година знања',
    text: 'Данас спајамо искуство више генерација, пројектовање, производњу и монтажу. И даље сваком простору приступамо као да је први који носи наше име.'
  }
];

const capabilities = [
  {
    icon: Compass,
    number: '01',
    title: 'Разумијемо простор',
    text: 'Слушамо како живите и радите, прецизно мјеримо и тражимо рјешење које користи сваки центиметар.'
  },
  {
    icon: Ruler,
    number: '02',
    title: 'Пројектујемо по мјери',
    text: 'Од прве скице до избора декора, материјала, окова и опреме — све одлуке имају јасан разлог.'
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Производимо и монтирамо',
    text: 'Сопствена израда и стручна монтажа дају нам контролу над квалитетом, роком и завршним детаљем.'
  }
];

const recognitions = [
  {
    icon: Lightbulb,
    title: 'Иновативна рјешења',
    text: 'Признања за идеје које спајају функционалност, нове материјале и прецизну изведбу.'
  },
  {
    icon: Presentation,
    title: 'Присутни пред публиком',
    text: 'Своја рјешења представљамо на сајмовима и јавним изложбама — тамо гдје се знање упоређује и напредак види.'
  },
  {
    icon: Medal,
    title: 'Препознат квалитет',
    text: 'Посебна признања струке за иновативност за нас су потврда рада, али и обавеза да наставимо даље.'
  }
];

export function AboutUsPage({ onBack, onContact, onNavigateGallery }: AboutUsPageProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#F7F4EF]">
      <section className="relative min-h-[88vh] overflow-hidden bg-[#211510] text-white">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2200"
          alt="Ентеријер израђен по мјери"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211510]/95 via-[#211510]/70 to-[#211510]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211510]/90 via-transparent to-black/20" />

        <div className="relative container mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-between px-4 pb-12 pt-28 md:px-6 md:pb-16 md:pt-32">
          <motion.button
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" /> Назад на почетну
          </motion.button>

          <div className="max-w-5xl">
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#E4B37B]">
              Лото намјештај · Бањалука
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-5xl font-black leading-[0.98] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Три деценије рада.<br />Име иза којег стојимо.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              Више од 30 година претварамо мјере, материјале и идеје у просторе који трају. Наш највећи капитал нису машине — већ искуство, људи и повјерење које се преноси.
            </motion.p>
          </div>

          <div className="mt-14 grid max-w-3xl grid-cols-3 border-t border-white/20 pt-6">
            <div><strong className="block text-3xl md:text-5xl">30+</strong><span className="text-xs text-white/55 md:text-sm">година искуства</span></div>
            <div><strong className="block text-3xl md:text-5xl">5000+</strong><span className="text-xs text-white/55 md:text-sm">реализованих пројеката</span></div>
            <div><strong className="block text-3xl md:text-5xl">1</strong><span className="text-xs text-white/55 md:text-sm">име иза сваког рада</span></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-6 md:py-32">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#C41E3A]">Ко смо ми</p>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">Поносни на оно што је иза нас. Радознали за оно што долази.</h2>
        </div>
        <div className="md:pt-10">
          <p className="text-2xl font-medium leading-relaxed text-gray-800">Ми смо породична прича израсла из заната, дисциплине и дате ријечи.</p>
          <p className="mt-7 text-lg leading-relaxed text-gray-600">Наше искуство се не мјери само годинама, него хиљадама простора, ријешених проблема и клијената који су нам се вратили. Знамо када треба слиједити провјерено, а када треба направити нешто што до тада није постојало.</p>
          <div className="mt-10 flex items-center gap-4 border-l-2 border-[#C41E3A] pl-6">
            <BadgeCheck className="h-9 w-9 shrink-0 text-[#C41E3A]" />
            <p className="font-semibold text-gray-900">Од првог мјерења до посљедњег подешавања — одговорност остаје наша.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#2C1810] py-20 text-white md:py-28">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#E4B37B]">Наш пут</p>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Напредак који није прескочио ниједан корак.</h2>
          </div>
          <div className="relative grid gap-0 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-4 hidden h-px bg-white/20 md:block" />
            {timeline.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative border-l border-white/20 pb-12 pl-8 md:border-l-0 md:border-t-0 md:pb-0 md:pl-0 md:pr-8">
                <div className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full border-4 border-[#2C1810] bg-[#E4B37B] md:left-0 md:top-2" />
                <p className="mb-8 text-sm font-bold uppercase tracking-[0.18em] text-[#E4B37B] md:mt-10">{item.period}</p>
                <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-white/60">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#C41E3A]">Шта радимо</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">Комплетан пут од празног простора до готовог ентеријера.</h2>
          </div>
          <Button variant="outline" onClick={onNavigateGallery ?? onBack}>Погледајте радове <ArrowRightIcon className="ml-2 h-4 w-4" /></Button>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl bg-black/10 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, number, title, text }) => (
            <article key={title} className="bg-white p-8 md:p-10">
              <div className="mb-16 flex items-start justify-between"><Icon className="h-8 w-8 text-[#C41E3A]" /><span className="text-sm font-bold text-gray-300">{number}</span></div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>
              <p className="leading-relaxed text-gray-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:px-6">
          <div className="relative min-h-[560px] overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=85&w=1400" alt="Савремени ентеријер и иновативна израда" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-5 bottom-5 rounded-xl bg-white/95 p-6 backdrop-blur md:inset-x-8 md:bottom-8">
              <Sparkles className="mb-3 h-6 w-6 text-[#C41E3A]" />
              <p className="text-lg font-bold text-gray-900">Традиција нам даје сигурност. Иновација нам не дозвољава да станемо.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#C41E3A]">Иновација и признања</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">Наш рад показујемо јавно — и поносно стојимо иза њега.</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">Сајмови, изложбе и сусрети са струком за нас су мјесто размјене знања. Ту представљамо нова рјешења, провјеравамо идеје и показујемо колико далеко занат може стићи када прихвати технологију.</p>
            <div className="mt-10 space-y-7">
              {recognitions.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-5 border-t border-gray-200 pt-6">
                  <Icon className="h-7 w-7 shrink-0 text-[#C41E3A]" />
                  <div><h3 className="mb-1 font-bold text-gray-900">{title}</h3><p className="text-sm leading-relaxed text-gray-600">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="rounded-3xl bg-[#C41E3A] px-6 py-12 text-white md:px-14 md:py-16">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <Handshake className="mb-7 h-10 w-10 text-white/70" />
              <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Лојалност није програм. То је начин на који радимо.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Дугорочна сарадња се гради тако што се јавимо, поправимо, прилагодимо и останемо доступни и након монтаже. Највеће признање нам је када се клијент врати — или нас препоручи некоме до кога му је стало.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-5"><ShieldCheck className="mb-4 h-7 w-7" /><strong className="block text-lg">Одговорност</strong><span className="text-sm text-white/65">иза сваке изведбе</span></div>
              <div className="rounded-2xl bg-white/10 p-5"><Award className="mb-4 h-7 w-7" /><strong className="block text-lg">Повјерење</strong><span className="text-sm text-white/65">грађено деценијама</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#211510] py-20 text-white md:py-28">
        <div className="container mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-4 md:flex-row md:items-end md:px-6">
          <div className="max-w-3xl"><p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#E4B37B]">Сљедеће поглавље</p><h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Историја нам даје тежину. Ваш пројекат нам даје нови разлог.</h2></div>
          <Button variant="secondary" size="lg" onClick={onContact}><PhoneIcon className="mr-2 h-5 w-5" /> Разговарајмо</Button>
        </div>
      </section>
    </motion.div>
  );
}
