/**
 * Automatsko učitavanje slika projekata iz foldera `projekti/` (u korijenu projekta).
 *
 * Struktura:  projekti/<kategorija>/<folder-projekta>/<slike + projekat.json>
 *
 * Originalne slike se NE šalju na sajt u punoj veličini: vite-imagetools ih pri
 * buildu smanjuje i pretvara u WebP (velika verzija za pregled projekta i
 * manja za kartice), tako da sajt ostaje brz i sa slikama direktno sa telefona.
 *
 * Napomena: Vite zahtijeva da opcije u import.meta.glob budu napisane direktno
 * (bez varijabli i funkcija), zato su ponovljene u oba poziva.
 */

/** Velike slike (stranica projekta i pregled preko cijelog ekrana). */
export const largeImages = import.meta.glob(
  '/projekti/*/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  {
    eager: true,
    import: 'default',
    query: { w: '1920', format: 'webp', quality: '80', withoutEnlargement: 'true' }
  }
) as Record<string, string>;

/** Manje slike za kartice i galeriju. */
export const thumbImages = import.meta.glob(
  '/projekti/*/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  {
    eager: true,
    import: 'default',
    query: { w: '900', format: 'webp', quality: '80', withoutEnlargement: 'true' }
  }
) as Record<string, string>;

/** Opcioni opis projekta: projekti/<kategorija>/<projekat>/projekat.json */
export const projectMeta = import.meta.glob('/projekti/*/*/projekat.json', {
  eager: true,
  import: 'default'
}) as Record<string, unknown>;
