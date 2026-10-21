import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, Maximize2Icon, PhoneIcon, XIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import type { Project } from '../data/projects';

interface ProjectDetailPageProps {
  project: Project;
  serviceTitle: string;
  nextProject?: Project;
  onOpenProject: (projectId: string) => void;
  onBack: () => void;
  onContact: () => void;
}

const defaultDescription =
  'Простор по мјери, обликован као тиха цјелина у којој функција, материјали и свакодневни ритам природно припадају једни другима.';

export function ProjectDetailPage({ project, serviceTitle, nextProject, onOpenProject, onBack, onContact }: ProjectDetailPageProps) {
  const { images, title } = project;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const facts = [
    { label: 'Тип', value: serviceTitle },
    project.location ? { label: 'Локација', value: project.location } : null,
    project.year ? { label: 'Година', value: project.year } : null,
    { label: 'Изведба', value: 'Пројектовање, израда и монтажа' }
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="min-h-screen bg-[#F7F4EF]">
      <header className="relative min-h-[78vh] overflow-hidden bg-[#2C1810]">
        <img src={images[0].src} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />
        <div className="relative container mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-32 md:px-6 md:pb-20">
          <motion.button initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} onClick={onBack} className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
            <ArrowLeftIcon className="h-4 w-4" /> Назад на пројекте
          </motion.button>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-white/70">{serviceTitle} · Пројекат</p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </motion.h1>
        </div>
      </header>

      <section className="container mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1fr_2fr] md:px-6 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C41E3A]">О пројекту</p>
        <div>
          <p className="max-w-3xl text-2xl font-medium leading-relaxed text-gray-900 md:text-3xl">{project.description ?? defaultDescription}</p>
          <div className="mt-10 grid gap-6 border-t border-black/10 pt-6 text-sm sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}><span className="block text-gray-500">{fact.label}</span><strong>{fact.value}</strong></div>
            ))}
          </div>
        </div>
      </section>

      {/* Fotografije u prirodnim proporcijama (bez sječenja), u dvije kolone */}
      <section className="container mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className={images.length > 1 ? 'gap-8 md:columns-2' : 'mx-auto max-w-4xl'}>
          {images.map((image, index) => (
            <motion.figure key={image.file} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }} className="mb-10 break-inside-avoid md:mb-14">
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative block w-full cursor-zoom-in overflow-hidden bg-gray-200 focus:outline-none focus:ring-4 focus:ring-[#C41E3A]/30"
                aria-label={`Отвори фотографију ${index + 1} преко цијелог екрана`}
              >
                <img
                  src={image.src}
                  alt={`${title} — фотографија ${index + 1}`}
                  loading={index ? 'lazy' : 'eager'}
                  className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 transition-opacity group-hover:opacity-100">
                  <Maximize2Icon className="h-4 w-4" />
                </span>
              </button>
              <figcaption className="mt-4 grid gap-3 border-t border-black/10 pt-3 md:grid-cols-[1fr_3fr]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C41E3A]">{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</p>
                {image.caption && <p className="max-w-2xl leading-relaxed text-gray-600">{image.caption}</p>}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {nextProject && (
        <section className="container mx-auto max-w-7xl px-4 pb-24 md:px-6">
          <button
            type="button"
            onClick={() => onOpenProject(nextProject.id)}
            className="group grid w-full items-center gap-6 border-t border-black/10 pt-8 text-left md:grid-cols-[1fr_auto]"
          >
            <div className="flex items-center gap-6">
              <img src={nextProject.cover.thumb} alt={nextProject.title} loading="lazy" className="h-24 w-32 shrink-0 rounded-lg object-cover md:h-28 md:w-40" />
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-gray-500">Сљедећи пројекат</p>
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 transition-colors group-hover:text-[#C41E3A] md:text-3xl">{nextProject.title}</h2>
              </div>
            </div>
            <span className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#C41E3A] text-white transition-transform group-hover:translate-x-1 md:flex">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </button>
        </section>
      )}

      <section className="bg-[#2C1810] text-white">
        <div className="container mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 md:flex-row md:items-center md:px-6 md:py-20">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/50">Ваш простор</p><h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">Желите слично рјешење по вашој мјери?</h2></div>
          <Button variant="secondary" size="lg" onClick={onContact}><PhoneIcon className="mr-2 h-5 w-5" /> Разговарајмо о пројекту</Button>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <img
              src={images[lightboxIndex].src}
              alt={`${title} — фотографија ${lightboxIndex + 1}`}
              className="max-h-[88vh] max-w-[92vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button type="button" onClick={closeLightbox} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Затвори">
              <XIcon className="h-5 w-5" />
            </button>

            {images.length > 1 && (
              <>
                <button type="button" onClick={(e) => { e.stopPropagation(); showPrev(); }} className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-6" aria-label="Претходна">
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button type="button" onClick={(e) => { e.stopPropagation(); showNext(); }} className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-6" aria-label="Сљедећа">
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </>
            )}

            <p className="absolute bottom-5 left-0 right-0 text-center text-sm font-semibold text-white/70">
              {lightboxIndex + 1} / {images.length}
              {images[lightboxIndex].caption ? ` · ${images[lightboxIndex].caption}` : ''}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
