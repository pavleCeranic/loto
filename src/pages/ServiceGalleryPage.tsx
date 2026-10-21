import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowUpRightIcon, PhoneIcon, ImagesIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProjectDetailPage } from './ProjectDetailPage';
import { CategoryId, categories, getCategoryCover, getProjectsByCategory } from '../data/projects';

interface ServiceGalleryPageProps {
  serviceType: CategoryId;
  /** Otvoreni projekat (iz adrese, npr. #/kuhinje/01-kuhinja-siva-hrast) */
  projectId?: string;
  onOpenProject: (projectId: string) => void;
  onCloseProject: () => void;
  onBack: () => void;
  onContact: () => void;
}

const photoLabel = (count: number) => {
  const lastTwo = count % 100;
  const last = count % 10;
  if (last === 1 && lastTwo !== 11) return `${count} фотографија`;
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return `${count} фотографије`;
  return `${count} фотографија`;
};

export function ServiceGalleryPage({
  serviceType,
  projectId,
  onOpenProject,
  onCloseProject,
  onBack,
  onContact
}: ServiceGalleryPageProps) {
  const data = categories[serviceType];
  const categoryProjects = getProjectsByCategory(serviceType);
  const selectedIndex = projectId ? categoryProjects.findIndex((p) => p.id === projectId) : -1;

  if (selectedIndex !== -1) {
    const project = categoryProjects[selectedIndex];
    const nextProject =
      categoryProjects.length > 1 ? categoryProjects[(selectedIndex + 1) % categoryProjects.length] : undefined;

    return (
      <ProjectDetailPage
        key={project.id}
        project={project}
        serviceTitle={data.title}
        nextProject={nextProject}
        onOpenProject={onOpenProject}
        onBack={onCloseProject}
        onContact={onContact}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF8F5]">
      <div className="relative h-[50vh] overflow-hidden md:h-[60vh]">
        <img src={getCategoryCover(serviceType, 'src')} alt={data.title} className="h-full w-full object-cover" />
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

        {categoryProjects.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center">
            <ImagesIcon className="mx-auto mb-4 h-8 w-8 text-[#C41E3A]" />
            <h3 className="mb-2 text-lg font-bold text-gray-900">Галерија се ускоро допуњује</h3>
            <p className="mx-auto max-w-md text-gray-600">
              Фотографије завршених радова из ове категорије стижу ускоро. Јавите нам се — радо ћемо вам показати
              примјере у нашој канцеларији.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categoryProjects.map((project, index) => (
              <motion.button
                key={project.id}
                type="button"
                onClick={() => onOpenProject(project.id)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl text-left shadow-sm focus:outline-none focus:ring-4 focus:ring-[#C41E3A]/30"
              >
                <img
                  src={project.cover.thumb}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/10 to-transparent p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                        {photoLabel(project.images.length)}
                        {project.location ? ` · ${project.location}` : ''}
                      </p>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#C41E3A] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
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
