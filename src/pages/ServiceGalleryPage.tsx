import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, PhoneIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
interface ServiceData {
  title: string;
  description: string;
  longDescription: string;
  heroImage: string;
  images: Array<{
    src: string;
    title: string;
  }>;
}
const serviceData: Record<'kuhinje' | 'ormari' | 'namjestaj', ServiceData> = {
  kuhinje: {
    title: 'Кухиње по мјери',
    description:
    'Од једноставних до сложених архитектонских пројеката. Радимо са иверицом, МДФ-ом, компакт плочама, судоперима и ручкицама по вашем избору.',
    longDescription:
    'Сваку кухињу израђујемо према вашим потребама и жељама. Ви бирате материјале и произвођача — од економичних рјешења до премиум завршних обрада. Радимо са свим врстама плочастих материјала: иверица, МДФ, компакт плоче, као и судопери, славине и ручкице водећих произвођача. Било да имате готов архитектонски пројекат или само идеју — ми ћемо је претворити у стварност.',
    heroImage:
    'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=2000',
    images: [
    {
      src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1000',
      title: 'Модерна бијела кухиња'
    },
    {
      src: 'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80&w=1000',
      title: 'Рустикална кухиња'
    },
    {
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1000',
      title: 'Кухиња са острвом'
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      title: 'Минималистичка кухиња'
    },
    {
      src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1000',
      title: 'Кухиња у тамним тоновима'
    },
    {
      src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&q=80&w=1000',
      title: 'Кухиња отвореног плана'
    },
    {
      src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000',
      title: 'Класична елегантна кухиња'
    },
    {
      src: 'https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?auto=format&fit=crop&q=80&w=1000',
      title: 'Компактна кухиња за стан'
    }]

  },
  ormari: {
    title: 'Уградбени ормари',
    description:
    'Максимално искористите сваки центиметар простора. Клизни системи, walk-in ормари и организатори.',
    longDescription:
    'Уградбени ормари су наша специјалност. Сваки орман пројектујемо тако да максимално искористи ваш простор — укључујући косине, нише и нестандардне димензије. Ви бирате материјале, боје, врсту отварања (клизна или класична врата) и унутрашњу организацију. Прилагођавамо се вашем буџету — од економичних до премиум рјешења. И након уградње, ту смо за накнадне измјене.',
    heroImage:
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=2000',
    images: [
    {
      src: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=1000',
      title: 'Уградбени ормар са огледалом'
    },
    {
      src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000',
      title: 'Walk-in гардероба'
    },
    {
      src: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=1000',
      title: 'Клизни ормар у спаваћој соби'
    },
    {
      src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=1000',
      title: 'Ормар са унутрашњом организацијом'
    },
    {
      src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1000',
      title: 'Уградбени ормар у ходнику'
    },
    {
      src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1000',
      title: 'Гардеробер по мјери'
    }]

  },
  namjestaj: {
    title: 'Намјештај за дом',
    description:
    'Комоде, регали, купаонски намјештај и спаваће собе. Комбинујемо више врста материјала према вашој жељи.',
    longDescription:
    'Израђујемо све врсте намјештаја за ваш дом — од комода и регала до купаонских гарнитура и комплетних спаваћих соба. Комбинујемо различите материјале (иверицу, МДФ, компакт плоче) према вашој жељи и буџету. Ви бирате произвођача материјала. Доступни смо и након уградње — ако је потребна измјена, поправка или додатак, ту смо за вас.',
    heroImage:
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2000',
    images: [
    {
      src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=1000',
      title: 'ТВ регал и полица'
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
      title: 'Купаонски блок по мјери'
    },
    {
      src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000',
      title: 'Дневни боравак'
    },
    {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000',
      title: 'Комода за спаваћу собу'
    },
    {
      src: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000',
      title: 'Полице и регали'
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1000',
      title: 'Радни кутак по мјери'
    },
    {
      src: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&q=80&w=1000',
      title: 'Купаонски ормарић'
    }]

  }
};
interface ServiceGalleryPageProps {
  serviceType: 'kuhinje' | 'ormari' | 'namjestaj';
  onBack: () => void;
  onContact: () => void;
}
export function ServiceGalleryPage({
  serviceType,
  onBack,
  onContact
}: ServiceGalleryPageProps) {
  const data = serviceData[serviceType];
  return (
    <div className="min-h-screen bg-[#FBF8F5]">
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={data.heroImage}
          alt={data.title}
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl pb-12 md:pb-16">
            <motion.button
              initial={{
                opacity: 0,
                x: -10
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.4
              }}
              onClick={onBack}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold mb-6 transition-colors">
              
              <ArrowLeftIcon className="w-4 h-4" />
              Назад на почетну
            </motion.button>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.1
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              
              {data.title}
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.2
              }}
              className="text-lg md:text-xl text-white/80 max-w-2xl">
              
              {data.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-20">
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
            duration: 0.6
          }}
          className="max-w-3xl">
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            {data.longDescription}
          </p>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl pb-20 md:pb-28">
        <motion.h2
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
            duration: 0.5
          }}
          className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 tracking-tight">
          
          Галерија пројеката
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.images.map((image, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '-40px'
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.07
            }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer">
            
              <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 className="text-white text-lg font-bold">{image.title}</h3>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#C41E3A]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-20">
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
              duration: 0.6
            }}
            className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                Имате идеју? Јавите нам се.
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Бесплатна консултација и измјера. Прилагођавамо се вашем буџету
                и жељама.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <Button variant="secondary" size="lg" onClick={onContact}>
                <PhoneIcon className="w-5 h-5 mr-2" />
                Контактирајте нас
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onBack}
                className="border-white text-white hover:bg-white/10">
                
                Назад
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}