import localFont from 'next/font/local';
import { Inter, Instrument_Serif } from 'next/font/google';

export const osoitalic = localFont({
  src: './fonts/open-sauce.one-italic.ttf',
  display: 'swap',
});

export const osoregular = localFont({
  src: './fonts/open-sauce.one-regular.ttf',
  display: 'swap',
});

export const osolight = localFont({
  src: './fonts/open-sauce.one-light.ttf',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const f1 = osoregular; // Use the defined local font directly
export const italic = osoitalic
export const light = osolight
export const f2 = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: '400', // Ensure the weight is passed as a string, not an array
});

export const f3 = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: 'italic',
});
