// import { Inter } from "next/font/google";
import { Roboto, Open_Sans } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: "--roboto"
}
);

const open_sans = Open_Sans({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--open_sans"
})

const alexandra = localFont({ src: '../../public/fonts/Alexandra/alexandrazeferinoone.ttf', variable: "--alexandra" })

export const metadata = {
  title: "Mom's club",
  description: "Mom's club - Первый курс по уходу за новорождёнными для мам в Узбекистане",
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${open_sans.variable} ${alexandra.variable}`}>{children}</body>
    </html>
  );
}
