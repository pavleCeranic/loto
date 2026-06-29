import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowUpRightIcon, PhoneIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProjectDetailPage } from './ProjectDetailPage';
import { serviceProjectAssets } from '../data/projectAssets';

interface ServiceData {
  title: string;
  description: string;
  longDescription: string;
}

const serviceData: Record<'kuhinje' | 'ormari' | 'namjestaj' | 'spavace', ServiceData> = {
  kuhinje: {
    title: 'Кухиње по мјери',
    description: 'Од једноставних до сложених архитектонских пројеката. Радимо са иверицом, МДФ-ом, компакт плочама, судоперима и ручкицама по вашем избору.',
    longDescription: 'Сваку кухињу израђујемо према вашим потребама и жељама. Ви бирате материјале и произвођача — од економичних рјешења до премиум завршних обрада. Радимо са свим врстама плочастих материјала: иверица, МДФ, компакт плоче, као и судопери, славине и ручкице водећих произвођача. Било да имате готов архитектонски пројекат или само идеју — ми ћемо је претворити у стварност.'
  },
  ormari: {
    title: 'Уградбени ормари',
    description: 'Максимално искористите сваки центиметар простора. Клизни системи, walk-in ормари и организатори.',
    longDescription: 'Уградбени ормари су наша специјалност. Сваки орман пројектујемо тако да максимално искористи ваш простор — укључујући косине, нише и нестандардне димензије. Ви бирате материјале, боје, врсту отварања (клизна или класична врата) и унутрашњу организацију. Прилагођавамо се вашем буџету — од економичних до премиум рјешења. И након уградње, ту смо за накнадне измјене.'
  },
  namjestaj: {
    title: 'Намјештај за дом',
    description: 'Комоде, регали, купаонски намјештај и спаваће собе. Комбинујемо више врста материјала према вашој жељи.',
    longDescription: 'Израђујемо све врсте намјештаја за ваш дом — од комода и регала до купаонских гарнитура и комплетних спаваћих соба. Комбинујемо различите материјале (иверицу, МДФ, компакт плоче) према вашој жељи и буџету. Ви бирате произвођача материјала. Доступни смо и након уградње — ако је потребна измјена, поправка или додатак, ту смо за вас.'
  },
  spavace: {
    title: 'Кухиње по мјери',
    description: 'Од једноставних до сложених архитектонских пројеката. Радимо са иверицом, МДФ-ом, компакт плочама, судоперима и ручкицама по вашем избору.',
    longDescription: 'Сваку кухињу израђујемо према вашим потребама и жељама. Ви бирате материјале и произвођача — од економичних рјешења до премиум завршних обрада. Радимо са свим врстама плочастих материјала: иверица, МДФ, компакт плоче, као и судопери, славине и ручкице водећих произвођача. Било да имате готов архитектонски пројекат или само идеју — ми ћемо је претворити у стварност.'
  },
};

interface ServiceGalleryPageProps {
  serviceType: 'kuhinje' | 'ormari' | 'namjestaj' | 'spavace';
  onBack: () => void;
  onContact: () => void;
}

export function ServiceGalleryPage({ serviceType, onBack, onContact }: ServiceGalleryPageProps) {
  const data = serviceData[serviceType];
  const assets = serviceProjectAssets[serviceType];
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const showProject = (index: number) => {
    setSelectedProject(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedProject !== null) {
    const projectImages = [...assets.images.slice(selectedProject), ...assets.images.slice(0, selectedProject)].slice(0, 4);

    return (
      <ProjectDetailPage
        projectTitle={assets.images[selectedProject].title}
        serviceTitle={data.title}
        images={projectImages}
        onBack={() => {
          setSelectedProject(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onContact={onContact}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF8F5]">
      <div className="relative h-[50vh] overflow-hidden md:h-[60vh]">
        <img src={assets.heroImage} alt={data.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto max-w-7xl px-4 pb-12 md:px-6 md:pb-16">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={onBack}
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Назад на почетну
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl text-lg text-white/80 md:text-xl"
            >
              {data.description}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">{data.longDescription}</p>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 pb-20 md:px-6 md:pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl"
        >
          Галерија пројеката
        </motion.h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {assets.images.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => showProject(index)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl text-left shadow-sm focus:outline-none focus:ring-4 focus:ring-[#C41E3A]/30"
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/10 to-transparent p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Отвори пројекат</p>
                    <h3 className="text-lg font-bold text-white">{image.title}</h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#C41E3A] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="bg-[#C41E3A]">
        <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-8 md:flex-row"
          >
            <div>
              <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Имате идеју? Јавите нам се.
              </h2>
              <p className="max-w-xl text-lg text-white/80">
                Бесплатна консултација и измјера. Прилагођавамо се вашем буџету и жељама.
              </p>
            </div>
            <div className="flex flex-shrink-0 gap-4">
              <Button variant="secondary" size="lg" onClick={onContact}>
                <PhoneIcon className="mr-2 h-5 w-5" />
                Контактирајте нас
              </Button>
              <Button variant="outline" size="lg" onClick={onBack} className="border-white text-white hover:bg-white/10">
                Назад
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
