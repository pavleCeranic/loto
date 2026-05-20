import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
const images = [
{
  src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1000',
  category: 'Кухиња',
  title: 'Модерна бијела кухиња'
},
{
  src: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=1000',
  category: 'Спаваћа соба',
  title: 'Уградбени ормар са огледалом'
},
{
  src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1000',
  category: 'Купаоница',
  title: 'Купаонски блок по мјери'
},
{
  src: 'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80&w=1000',
  category: 'Кухиња',
  title: 'Рустикална кухиња'
},
{
  src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=1000',
  category: 'Дневни боравак',
  title: 'ТВ регал и полица'
},
{
  src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000',
  category: 'Спаваћа соба',
  title: 'Walk-in гардероба'
}];

export function Gallery() {
  return (
    <Section id="galerija" background="white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Наши недавни пројекти
          </h2>
          <p className="text-gray-600 text-lg">
            Погледајте галерију наших радова. Сваки пројекат је прича за себе,
            дизајниран с пажњом и израђен с прецизношћу.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) =>
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: index * 0.1
          }}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer">
          
            <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-[#F5E6D3] text-sm font-semibold mb-1">
                {image.category}
              </span>
              <h3 className="text-white text-xl font-bold">{image.title}</h3>
            </div>
          </motion.div>
        )}
      </div>
    </Section>);

}