import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PhoneIcon,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Ruler,
  Palette,
  Hammer
} from 'lucide-react';
import { Button } from '../components/ui/Button';

interface AboutUsPageProps {
  onBack: () => void;
  onContact: () => void;
  onNavigateGallery?: () => void;
}

const testimonials = [
  {
    name: 'Ана Ковачевић',
    role: 'Бањалука',
    text: 'Наручили смо кухињу по мјери и одушевљени смо резултатом. Професионалност од првог састанка до монтаже. Све је стигло на вријеме, а квалитет је изнад очекивања.',
    rating: 5
  },
  {
    name: 'Марко Петровић',
    role: 'Приједор',
    text: 'Лото нам је радио уградбене ормаре у цијелом стану. Искористили су сваки кутак простора који је био незгодан. Монтажери су били брзи и уредни. Препорука!',
    rating: 5
  },
  {
    name: 'Ивана и Петар',
    role: 'Градишка',
    text: 'Тражили смо специфичан дизајн за дневни боравак који нисмо могли наћи у салонима. Лото тим је нашу идеју претворио у стварност. Хвала вам на стрпљењу и савјетима.',
    rating: 5
  }
];

const values = [
  {
    icon: Ruler,
    title: 'Мјерење и планирање',
    description:
      'Сваки пројекат почињемо прецизним мјерењем простора и детаљним планом — да сваки комад намјештаја савршено одговара вашем дому.'
  },
  {
    icon: Palette,
    title: 'Материјали по избору',
    description:
      'Бирајте из широког асортимана иверице, МДФ-а, декора, ручкица и опреме — прилагођено вашем стилу и буџету.'
  },
  {
    icon: Hammer,
    title: 'Израда и уградња',
    description:
      'Сопствена производња, контрола квалитета и стручна монтажа — комплетно рјешење на једном мјесту.'
  }
];

export function AboutUsPage({
  onBack,
  onContact,
  onNavigateGallery
}: AboutUsPageProps) {
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () =>
    setActiveReview((prev) => (prev + 1) % testimonials.length);
  const prevReview = () =>
    setActiveReview(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-[#FBF8F5]"
    >
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=2000"
          alt="Лото намјештај — ентеријер"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onBack}
          className="absolute top-28 left-4 md:left-8 z-20 inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Назад на почетну
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10"
        />
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl pb-16 md:pb-24 pt-32">
          <p className="text-[#F5E6D3] text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
            --------------------------------------------------------------
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] max-w-4xl">
            О нама
          </h1>
        </div>
      </section>

      {/* Story intro */}
      <section className="py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 md:px-6 max-w-7xl"
        >
          <p className="text-[#C41E3A] text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Прича о Лото намјештај
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-8 max-w-3xl">
            Алати који ослобађају вашу креативност
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl">
          Ентеријери Лото Намјештај је породична фирма основана у Бањалуци 1995. године. Више од три деценије бавимо се пројектовањем, производњом и монтажом плочастог намјештаја по мјери, са циљем да сваки простор прилагодимо потребама и жељама клијента.
          </p>
        </motion.div>
      </section>

      {/* Story + image */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Алати који ослобађају вашу креативност
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Кроз године смо расли уз стално усавршавање, пратећи нове трендове, савремене материјале и дизајн који људи заиста желе у свом дому. Од класичних рјешења до модерних ентеријера, наш приступ је увијек био исти — квалитетна израда, функционалност и пажња према сваком детаљу.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Током деценија рада реализовали смо преко{' '}
                <strong className="text-gray-900">5000 пројеката</strong> — од
                једноставних комада до комплетног опремања станова, кућа и
                пословних простора широм Републике Српске и региона.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1600"
                alt="Израда намјештаја по мјери"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 md:px-6 max-w-7xl"
        >
          <p className="text-[#C41E3A] text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Лото пут
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
            Омогућите себи да{' '}
            <span className="text-[#C41E3A]">уредите свој простор</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
              Појављивали смо се на салонима намјештаја у више градова са нашим аутентичним кухињама и рјешењима по мјери. Почетком 2000-их били смо међу првима у Бањалуци који су израђивали кухиње са стакленим фронтовима, доносећи савременији приступ дизајну ентеријера на локално тржиште.
              </p>
              <p>
                Данас нудимо комплетну услугу: од бесплатног мјерења и 3D
                визуализације, преко израде у сопственој радионици, до
                доставе и професионалне монтаже. Сваки пројекат водимо као
                јединствену причу — вашу причу.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=1600"
                alt="Радионица Лото намјештај"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <p className="mt-16 text-center text-xl md:text-2xl font-bold text-gray-900 max-w-4xl mx-auto leading-snug">
          Данас наш тим броји 5 запослених, а иза нас стоје године искуства, велики број реализованих пројеката и клијенти који нам указују повјерење већ деценијама.
          </p>
        </motion.div>
      </section>

      {/* Customization */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-[3/4]"
            >
              <img
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1600"
                alt="Намјештај по мјери"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.15em] uppercase mb-4">
                Намјештај по вашој мјери
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                Дизајн који одговара вашем стилу и простору
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Са нашим тимом дизајнера и техничара, планирање намјештаја који
                савршено одговара вашем стилу и простору још никада није било
                лакше. Бирајте димензије, материјале, боје и завршне обраде —
                да створите комад који је јединствено ваш.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Било да је у питању елегантна кухиња, уградни ормар или
                комплетно уређење дневне собе — сваки комад израђујемо тако
                да се беспрекорно уклопи у ваш простор.
              </p>
              <Button size="lg" onClick={onContact}>
                Затражите бесплатну консултацију
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* From idea */}
      <section className="bg-[#2C1810] text-white py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 md:px-6 max-w-7xl text-center"
        >
          <p className="text-[#F5E6D3] text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Од идеје до јединствених простора
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 max-w-2xl mx-auto">
            Започните свој пројекат данас
          </h2>
          <Button variant="secondary" size="lg" onClick={onContact}>
            Закажите састанак
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-[#C41E3A] text-sm font-bold tracking-[0.15em] uppercase mb-4">
              Наш приступ
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Од идеје до уградње — све на једном мјесту
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FBF8F5] rounded-2xl p-8 border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-14 h-14 rounded-xl bg-[#C41E3A]/10 flex items-center justify-center text-[#C41E3A] mb-6"
                >
                  <item.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team / reach */}
      <section className="py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 md:px-6 max-w-7xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C41E3A] text-sm font-bold tracking-[0.15em] uppercase mb-4">
                Намјештај за сваког, свугдје
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
                Упознајте наш тим
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                У Лото намјештај дизајнери, техничари и мајстори дијеле исту
                страст — намјештај који је тачно прилагођен вама. Заједно
                комбинујемо стручност и искуство како бисмо вам помогли да
                остварите простор из снова.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Од домаћинстава у Бањалуци и широм Републике Српске, Лото
                доноси намјештај по мјери у ваш дом. Са поузданом испоруком
                и монтажом, ваш јединствени дизајн је на само један корак
                удаљен.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
                alt="Уређен ентеријер"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials carousel */}
      <section className="bg-white py-20 md:py-28 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-[#C41E3A] text-sm font-bold tracking-[0.15em] uppercase mb-4">
              Клијенти који нам вјерују
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              Преко 5000 задовољних клијената
            </h2>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#C41E3A] text-[#C41E3A]"
                />
              ))}
              <span className="ml-2 text-gray-600 font-semibold">
                Оцјена: 5/5
              </span>
            </div>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-[#FBF8F5] rounded-2xl p-10 md:p-14 text-center relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[#C41E3A]/10" />
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic mb-8">
                  „{testimonials[activeReview].text}"
                </p>
                <p className="font-bold text-gray-900 text-lg">
                  {testimonials[activeReview].name}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {testimonials[activeReview].role}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mt-8"
            >
              <button
                onClick={prevReview}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors"
                aria-label="Претходна рецензија"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveReview(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === activeReview ? 'bg-[#C41E3A]' : 'bg-gray-300'
                    }`}
                    aria-label={`Рецензија ${i + 1}`}
                  />
                ))}
              </motion.div>
              <button
                onClick={nextReview}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors"
                aria-label="Сљедећа рецензија"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inspiration cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight text-center mb-12"
          >
            Инспирација
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Погледајте наше радове',
                image:
                  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800',
                action: onNavigateGallery ?? onBack
              },
              {
                title: 'Сазнајте више о услугама',
                image:
                  'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
                action: onBack
              },
              {
                title: 'Контактирајте нас',
                image:
                  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800',
                action: onContact
              }
            ].map((card, index) => (
              <motion.button
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                onClick={card.action}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] text-left"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={false}
                >
                  <p className="text-white font-bold text-lg mb-2">
                    {card.title}
                  </p>
                  <span className="inline-flex items-center text-white/80 text-sm font-semibold group-hover:text-white transition-colors">
                    Сазнај више
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </span>
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C41E3A]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
                Имате идеју? Јавите нам се.
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Бесплатна консултација и договор око вашег будућег простора.
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Button variant="secondary" size="lg" onClick={onContact}>
                <PhoneIcon className="w-5 h-5 mr-2" />
                Контактирајте нас
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onBack}
                className="border-white text-white hover:bg-white/10"
              >
                Назад на почетну
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
