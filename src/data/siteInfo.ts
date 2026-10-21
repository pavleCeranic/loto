/**
 * Svi kontakt podaci sajta na jednom mjestu.
 * Promijeni ovdje i promjena se vidi svuda (kontakt, mapa, footer).
 *
 * ⚠️ Telefon, mobilni i e-mail su još PRIMJER podaci — upiši prave prije objave.
 */
export const siteInfo = {
  phone: {
    display: '+387 51 234 567', // TODO: pravi fiksni telefon
    tel: '+38751234567'
  },
  /** Broj na kojem rade Viber i WhatsApp (mora biti mobilni). */
  mobile: {
    display: '+387 65 000 000', // TODO: pravi mobilni broj
    international: '38765000000'
  },
  email: 'info@loto-namjestaj.ba', // TODO: pravi e-mail

  address: {
    street: 'Пиланска улица',
    city: '78000 Бањалука',
    country: 'Босна и Херцеговина',
    /** Tekst po kojem Google Maps traži lokaciju (latinica radi bolje pretrage). */
    mapsQuery: 'Pilanska ulica, Banja Luka'
  },

  hours: [
    { days: 'Понедјељак – Петак', time: '08:00 – 16:00' },
    { days: 'Субота', time: '09:00 – 13:00' },
    { days: 'Недјеља', time: 'Затворено' }
  ],

  social: {
    facebook: 'https://www.facebook.com/Enterijerilotonamjestaj/',
    instagram: 'https://www.instagram.com/loto.namjestaj/'
  }
};

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.address.mapsQuery)}`;
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(siteInfo.address.mapsQuery)}&z=16&output=embed`;
