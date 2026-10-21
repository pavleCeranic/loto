/// <reference types="vite/client" />

// Slike obrađene preko vite-imagetools (npr. 'slika.jpg?w=1100&format=webp&imagetools')
declare module '*&imagetools' {
  const src: string;
  export default src;
}
