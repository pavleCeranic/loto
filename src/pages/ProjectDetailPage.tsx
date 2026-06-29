import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, PhoneIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
// import f from '../../dist/dist/elegantaSpavacaSoba1.png'

interface ProjectImage {
  src: string;
  title: string;
}

interface ProjectDetailPageProps {
  projectTitle: string;
  serviceTitle: string;
  images: ProjectImage[];
  onBack: () => void;
  onContact: () => void;
}

const notes = [
  ['Концепт', 'Главни поглед открива мирну композицију сведену на јасне линије. Намјештај прати архитектуру и оставља довољно мјеста за природно кретање.'],
  ['Материјали', 'Топли тонови и пажљиво одабране текстуре дају простору дубину. Мат и природне површине остају пријатне на додир и једноставне за одржавање.'],
  ['Детаљ', 'Спојеви, рубови и окови ријешени су дискретно. Ови мали детаљи чине да намјештај дјелује цјеловито и задржи уредан изглед годинама.'],
  ['Свакодневица', 'Распоред је осмишљен око стварних навика корисника. Одлагање је надохват руке, док видљиве површине остају чисте и ненаметљиве.']
];

export function ProjectDetailPage({ projectTitle, serviceTitle, images, onBack, onContact }: ProjectDetailPageProps) {
  return (
    <article className="min-h-screen bg-[#F7F4EF]">
      <header className="relative min-h-[78vh] overflow-hidden bg-[#2C1810]">
        <img src={images[0].src} alt={projectTitle} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />
        <div className="relative container mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-32 md:px-6 md:pb-20">
          <motion.button initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} onClick={onBack} className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
            <ArrowLeftIcon className="h-4 w-4" /> Назад на пројекте
          </motion.button>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-white/70">{serviceTitle} · Пројекат</p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            {projectTitle}
          </motion.h1>
        </div>
      </header>

      <section className="container mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_2fr] md:px-6 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C41E3A]">О пројекту</p>
        <div>
          <p className="max-w-3xl text-2xl font-medium leading-relaxed text-gray-900 md:text-3xl">Простор по мјери, обликован као тиха цјелина у којој функција, материјали и свакодневни ритам природно припадају једни другима.</p>
          <div className="mt-10 grid gap-6 border-t border-black/10 pt-6 text-sm sm:grid-cols-3">
            <div><span className="block text-gray-500">Тип</span><strong>{serviceTitle}</strong></div>
            <div><span className="block text-gray-500">Изведба</span><strong>Намјештај по мјери</strong></div>
            <div><span className="block text-gray-500">Приступ</span><strong>Дизајн и монтажа</strong></div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl space-y-20 px-4 pb-24 md:space-y-28 md:px-6">
        {images.map((image, index) => {
          const [label, caption] = notes[index % notes.length];
          const wide = index === 0 || index === images.length - 1;
          return (
            <motion.figure key={`${image.src}-${index}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65 }} className={wide ? '' : index % 2 ? 'md:ml-[16.666%]' : 'md:mr-[16.666%]'}>
              <div className={`overflow-hidden bg-gray-200 ${wide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <img src={image.src} alt={`${projectTitle} — ${label.toLowerCase()}`} loading={index ? 'lazy' : 'eager'} className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-5 grid gap-3 border-t border-black/10 pt-4 md:grid-cols-[1fr_3fr]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C41E3A]">{String(index + 1).padStart(2, '0')} · {label}</p>
                <p className="max-w-2xl leading-relaxed text-gray-600">{caption}</p>
              </figcaption>
            </motion.figure>
          );
        })}
      </section>

      <section className="bg-[#2C1810] text-white">
        <div className="container mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 md:flex-row md:items-center md:px-6 md:py-20">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/50">Ваш простор</p><h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">Желите слично рјешење по вашој мјери?</h2></div>
          <Button variant="secondary" size="lg" onClick={onContact}><PhoneIcon className="mr-2 h-5 w-5" /> Разговарајмо о пројекту</Button>
        </div>
      </section>
    </article>
  );
}
