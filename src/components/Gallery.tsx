import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CategoryId, categories, categoryOrder, getHomeProjects, getProjectsByCategory } from '../data/projects';

interface GalleryProps {
  onOpenProject: (category: CategoryId, projectId: string) => void;
  onOpenCategory: (category: CategoryId) => void;
}

interface GalleryItem {
  src: string;
  category: string;
  title: string;
  open?: () => void;
}

/**
 * Privremene slike — prikazuju se samo dok u folderu `projekti/` nema
 * dovoljno stvarnih projekata (do 6 kartica). Nestaju automatski čim se
 * dodaju pravi projekti.
 */
const placeholderImages: GalleryItem[] = [
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

const MAX_ITEMS = 6;

export function Gallery({ onOpenProject, onOpenCategory }: GalleryProps) {
  const categoryLinks = categoryOrder
    .map((id) => ({ id, count: getProjectsByCategory(id).length }))
    .filter((c) => c.count > 0);

  const realItems: GalleryItem[] = getHomeProjects(MAX_ITEMS).map((project) => ({
    src: project.cover.thumb,
    category: categories[project.category].title,
    title: project.title,
    open: () => onOpenProject(project.category, project.id)
  }));
  const images = [...realItems, ...placeholderImages].slice(0, MAX_ITEMS);

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
          key={`${image.title}-${index}`}
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
          onClick={image.open}
          role={image.open ? 'button' : undefined}
          tabIndex={image.open ? 0 : undefined}
          onKeyDown={(e) => {
            if (image.open && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              image.open();
            }
          }}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer">

            <img
            src={image.src}
            alt={image.title}
            loading="lazy"
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

      {categoryLinks.length > 0 &&
      <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-gray-900">Погледајте све пројекте по категоријама:</p>
          <div className="flex flex-wrap gap-3">
            {categoryLinks.map(({ id, count }) =>
          <button
            key={id}
            type="button"
            onClick={() => onOpenCategory(id)}
            className="group inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:border-[#C41E3A] hover:bg-[#C41E3A] hover:text-white">
                {categories[id].title}
                <span className="text-gray-400 group-hover:text-white/80">{count}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
          )}
          </div>
        </div>
      }
    </Section>);

}
