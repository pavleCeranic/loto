export type ProjectAsset = {
  src: string;
  title: string;
};

export type ServiceProjectAssets = {
  heroImage: string;
  images: ProjectAsset[];
};

const assetRoot = '/assets/projects';

const makeAsset = (path: string) => `${assetRoot}/${path}`;

export const serviceProjectAssets: Record<'kuhinje' | 'ormari' | 'namjestaj' | 'spavace', ServiceProjectAssets> = {
  kuhinje: {
    heroImage: makeAsset('kuhinje/hero.jpg'),
    images: [
      { src: makeAsset('kuhinje/01.jpg'), title: 'Модерна бијела кухиња' },
      { src: makeAsset('kuhinje/02.jpg'), title: 'Рустикална кухиња' },
      { src: makeAsset('kuhinje/03.jpg'), title: 'Кухиња са острвом' },
      { src: makeAsset('kuhinje/04.jpg'), title: 'Минималистичка кухиња' },
      { src: makeAsset('kuhinje/05.jpg'), title: 'Кухиња у тамним тоновима' },
      { src: makeAsset('kuhinje/06.jpg'), title: 'Кухиња отвореног плана' },
      { src: makeAsset('kuhinje/07.jpg'), title: 'Класична елегантна кухиња' },
      { src: makeAsset('kuhinje/08.jpg'), title: 'Компактна кухиња за стан' }
    ]
  },
  ormari: {
    heroImage: makeAsset('ormari/hero.jpg'),
    images: [
      { src: makeAsset('ormari/01.jpg'), title: 'Уградбени ормар са огледалом' },
      { src: makeAsset('ormari/02.jpg'), title: 'Walk-in гардероба' },
      { src: makeAsset('ormari/03.jpg'), title: 'Клизни ормар у спаваћој соби' },
      { src: makeAsset('ormari/04.jpg'), title: 'Ормар са унутрашњом организацијом' },
      { src: makeAsset('ormari/05.jpg'), title: 'Уградбени ормар у ходнику' },
      { src: makeAsset('ormari/06.jpg'), title: 'Гардеробер по мјери' }
    ]
  },
  namjestaj: {
    heroImage: makeAsset('namjestaj/hero.jpg'),
    images: [
      { src: makeAsset('namjestaj/01.jpg'), title: 'Елегантно рјешење за спаваћу собу' },
      { src: makeAsset('namjestaj/02.jpg'), title: 'Купаонски блок по мјери' },
      { src: makeAsset('namjestaj/03.jpg'), title: 'Дневни боравак' },
      { src: makeAsset('namjestaj/04.jpg'), title: 'Комода за спаваћу собу' },
      { src: makeAsset('namjestaj/05.jpg'), title: 'Полице и регали' },
      { src: makeAsset('namjestaj/06.jpg'), title: 'Радни кутак по мјери' },
      { src: makeAsset('namjestaj/07.jpg'), title: 'Купаонски ормарић' }
    ]
  },
  spavace: {
    heroImage: makeAsset('kuhinje/hero.jpg'),
    images: [
      { src: makeAsset('spavace/01.png'), title: 'Модерна бијела кухиња' },
      { src: makeAsset('kuhinje/02.jpg'), title: 'Рустикална кухиња' },
      { src: makeAsset('kuhinje/03.jpg'), title: 'Кухиња са острвом' },
      { src: makeAsset('kuhinje/04.jpg'), title: 'Минималистичка кухиња' },
      { src: makeAsset('kuhinje/05.jpg'), title: 'Кухиња у тамним тоновима' },
      { src: makeAsset('kuhinje/06.jpg'), title: 'Кухиња отвореног плана' },
      { src: makeAsset('kuhinje/07.jpg'), title: 'Класична елегантна кухиња' },
      { src: makeAsset('kuhinje/08.jpg'), title: 'Компактна кухиња за стан' }
    ]
  },
};
