import { largeImages, thumbImages, projectMeta } from './projectImages';

export type CategoryId =
  | 'kuhinje'
  | 'dnevne-sobe'
  | 'plakari-hodnici'
  | 'kupatila'
  | 'spavace-sobe'
  | 'poslovni-prostori';

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  longDescription: string;
  /** Slika koja se koristi dok kategorija nema nijedan stvarni projekat. */
  fallbackImage: string;
}

export interface ProjectImage {
  file: string;
  /** Velika verzija (do 1920px). */
  src: string;
  /** Manja verzija za kartice (do 900px). */
  thumb: string;
  caption?: string;
}

export interface Project {
  id: string;
  category: CategoryId;
  title: string;
  description?: string;
  location?: string;
  year?: string;
  featured: boolean;
  images: ProjectImage[];
  cover: ProjectImage;
}

export const categoryOrder: CategoryId[] = [
  'kuhinje',
  'dnevne-sobe',
  'plakari-hodnici',
  'kupatila',
  'spavace-sobe',
  'poslovni-prostori'
];

export const categories: Record<CategoryId, Category> = {
  kuhinje: {
    id: 'kuhinje',
    title: 'Кухиње по мјери',
    description: 'Од једноставних до сложених архитектонских пројеката. Радимо са иверицом, МДФ-ом, компакт плочама, судоперима и ручкицама по вашем избору.',
    longDescription: 'Сваку кухињу израђујемо према вашим потребама и жељама. Ви бирате материјале и произвођача — од економичних рјешења до премиум завршних обрада. Радимо са свим врстама плочастих материјала: иверица, МДФ, компакт плоче, као и судопери, славине, ручкице и уређаји водећих произвођача. Било да имате готов архитектонски пројекат или само идеју — ми ћемо је претворити у стварност.',
    fallbackImage: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=1600'
  },
  'dnevne-sobe': {
    id: 'dnevne-sobe',
    title: 'Дневне собе',
    description: 'Комоде, ТВ зидови, полице и намјештај за функционалан и уређен дневни боравак.',
    longDescription: 'Дневни боравак је простор у којем се највише живи. Израђујемо ТВ зидове, комоде, регале и полице по мјери, комбинујемо декоре, лак и индиректно LED освјетљење, тако да простор буде и практичан и топао. Ви бирате материјале и произвођача, а ми се бринемо да сваки детаљ буде на свом мјесту.',
    fallbackImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1600'
  },
  'plakari-hodnici': {
    id: 'plakari-hodnici',
    title: 'Плакари и ходници',
    description: 'Клизни плакари, ходници и организација простора по мјери. Максимално искориштен сваки центиметар.',
    longDescription: 'Уградбени плакари и ходници су наша специјалност. Сваки плакар пројектујемо тако да максимално искористи ваш простор — укључујући косине, нише и нестандардне димензије. Ви бирате материјале, боје, врсту отварања (клизна или класична врата) и унутрашњу организацију. Прилагођавамо се вашем буџету — од економичних до премиум рјешења.',
    fallbackImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1600'
  },
  kupatila: {
    id: 'kupatila',
    title: 'Купатила',
    description: 'Купатилски намјештај израђен по мјери и прилагођен вашем простору и стилу.',
    longDescription: 'Купатилски намјештај израђујемо од материјала отпорних на влагу, прецизно по мјерама вашег простора — од ормарића испод лавабоа до високих колона и огледала. Ви бирате декор, ручкице и опрему, а ми рјешење које ће трајати.',
    fallbackImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1600'
  },
  'spavace-sobe': {
    id: 'spavace-sobe',
    title: 'Спаваће собе',
    description: 'Ормари, комоде и остали намјештај за удобно и практично уређење спаваће собе.',
    longDescription: 'Спаваћу собу уређујемо као цјелину — уградни ормари, кревети, комоде и ноћни ормарићи израђени по мјери и усклађени по материјалима и бојама. Сва врата и ладице опремамо оковима са тихим, меким затварањем.',
    fallbackImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1600'
  },
  'poslovni-prostori': {
    id: 'poslovni-prostori',
    title: 'Пословни простори',
    description: 'Намјештај за канцеларије, локале и друге пословне просторе, прилагођен намјени и простору.',
    longDescription: 'Опремамо канцеларије, локале, апартмане и друге пословне просторе — радни столови, пултови, плакари и полице по мјери, прилагођени намјени простора и свакодневном интензивном коришћењу.',
    fallbackImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1600'
  }
};

interface ProjectMetaFile {
  naslov?: string;
  opis?: string;
  lokacija?: string;
  godina?: string | number;
  istaknut?: boolean;
  /** Opisi pojedinačnih slika, npr. { "01.jpg": "Pogled sa ulaza" } */
  opisiSlika?: Record<string, string>;
}

const naturalCompare = (a: string, b: string) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });

/** "02-kuhinja-siva" -> "Kuhinja siva" (koristi se samo ako nema projekat.json) */
const titleFromFolder = (folder: string) => {
  const name = folder.replace(/^\d+[-_ ]*/, '').replace(/[-_]+/g, ' ').trim();
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : folder;
};

const isCategory = (value: string): value is CategoryId =>
  (categoryOrder as string[]).includes(value);

function buildProjects(): Project[] {
  const grouped = new Map<string, { category: CategoryId; folder: string; images: ProjectImage[] }>();

  for (const [path, src] of Object.entries(largeImages)) {
    // /projekti/<kategorija>/<projekat>/<slika>
    const [, , categoryId, folder, file] = path.split('/');
    if (!isCategory(categoryId)) {
      console.warn(`[projekti] Nepoznata kategorija "${categoryId}" (${path}). Dozvoljene: ${categoryOrder.join(', ')}`);
      continue;
    }
    const key = `${categoryId}/${folder}`;
    if (!grouped.has(key)) grouped.set(key, { category: categoryId, folder, images: [] });
    grouped.get(key)!.images.push({ file, src, thumb: thumbImages[path] ?? src });
  }

  const projects: Project[] = [];
  for (const [key, group] of grouped) {
    const meta = (projectMeta[`/projekti/${key}/projekat.json`] ?? {}) as ProjectMetaFile;
    const images = group.images
      .sort((a, b) => naturalCompare(a.file, b.file))
      .map((image) => ({ ...image, caption: meta.opisiSlika?.[image.file] }));

    projects.push({
      id: group.folder,
      category: group.category,
      title: meta.naslov?.trim() || titleFromFolder(group.folder),
      description: meta.opis?.trim() || undefined,
      location: meta.lokacija?.trim() || undefined,
      year: meta.godina !== undefined ? String(meta.godina) : undefined,
      featured: Boolean(meta.istaknut),
      images,
      cover: images[0]
    });
  }

  // Redoslijed: po kategoriji, pa po imenu foldera (01-, 02-, ...)
  return projects.sort(
    (a, b) =>
      categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category) ||
      naturalCompare(a.id, b.id)
  );
}

export const projects: Project[] = buildProjects();

export const getProjectsByCategory = (category: CategoryId) =>
  projects.filter((project) => project.category === category);

export const findProject = (category: CategoryId, id: string) =>
  projects.find((project) => project.category === category && project.id === id);

/** Naslovna slika kategorije: prvi stvarni projekat, inače privremena slika. */
export const getCategoryCover = (category: CategoryId, size: 'thumb' | 'src' = 'thumb') => {
  const first = getProjectsByCategory(category)[0];
  return first ? first.cover[size] : categories[category].fallbackImage;
};

/** Projekti za naslovnu: prvo istaknuti, zatim ostali. */
export const getHomeProjects = (limit = 6) =>
  [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)].slice(0, limit);

export { isCategory };
