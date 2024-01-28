// import { Inter } from "next/font/google";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
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
    keywords: ["Mom's club"],
  openGraph: {
     images: [
            {
              url: '/images/logo.png',
              width: 63,
              height: 65,
            },
          ],
    title: "Mom's club",
    description: "Mom's club - Первый курс по уходу за новорождёнными для мам в Узбекистане",
    url: 'https://mom-s-club-uz.vercel.app/',
    siteName: "Mom's club",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${open_sans.variable} ${alexandra.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
