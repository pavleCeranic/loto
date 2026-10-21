# Slike završenih projekata

Svaki projekat je **jedan folder** sa slikama. Sajt ih sam pronalazi — ne treba mijenjati kod.

```
projekti/
  kuhinje/
    01-kuhinja-siva-hrast/
      01.jpg
      02.jpg
      projekat.json      <- opciono (naslov, opis...)
    02-bijela-kuhinja-ostrvo/
      ...
  dnevne-sobe/
  plakari-hodnici/
  kupatila/
  spavace-sobe/
  poslovni-prostori/
```

## Dodavanje novog projekta

1. U folderu kategorije napravi novi folder, npr. `kuhinje/02-bijela-kuhinja/`.
   - Broj na početku određuje redoslijed (01, 02, 03...).
   - Koristi samo mala latinična slova, brojeve i crtice (bez razmaka i č/ć/š/ž/đ) — ime foldera se vidi u adresi stranice.
2. Ubaci **originalne slike** (jpg, png ili webp). Imena kao `01.jpg`, `02.jpg`... određuju redoslijed;
   prva slika je naslovna slika projekta.
   - Slike ne treba smanjivati ručno — pri `npm run build` se automatski smanjuju i pretvaraju u WebP.
   - iPhone `.heic` slike prvo pretvori u `.jpg`.
3. (Opciono) dodaj `projekat.json`:

```json
{
  "naslov": "Бијела кухиња са острвом",
  "opis": "Кратак опис пројекта који се приказује на страници пројекта.",
  "lokacija": "Бањалука",
  "godina": 2025,
  "istaknut": true,
  "opisiSlika": {
    "01.jpg": "Поглед са улаза",
    "03.jpg": "Детаљ ручкица"
  }
}
```

- `istaknut: true` — projekat se prikazuje u galeriji na naslovnoj (do 6 projekata).
- Bez `projekat.json` naslov se pravi iz imena foldera.

## Kategorije (imena foldera moraju biti tačno ovakva)

| Folder              | Na sajtu            |
|---------------------|---------------------|
| `kuhinje`           | Кухиње по мјери     |
| `dnevne-sobe`       | Дневне собе         |
| `plakari-hodnici`   | Плакари и ходници   |
| `kupatila`          | Купатила            |
| `spavace-sobe`      | Спаваће собе        |
| `poslovni-prostori` | Пословни простори   |

Kategorija bez projekata prikazuje poruku „Галерија се ускоро допуњује“, a dok nema
dovoljno pravih projekata naslovna galerija se popunjava privremenim slikama.
