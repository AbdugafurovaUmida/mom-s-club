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
    keywords: ["Mom's club"],
  openGraph: {
    images: 'https://instagram.ftas1-2.fna.fbcdn.net/v/t51.2885-19/294526509_609037777199284_8972031799962014639_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftas1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=4tupSbp6pH4AX_V3p30&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBeaLdD81dhWJAnGhj3VxalCYYG3HUmttsF3kc7dc5zgA&oe=65BA6016&_nc_sid=b41fef',
    title: "Mom's club",
    description: "Mom's club - Первый курс по уходу за новорождёнными для мам в Узбекистане",
    url: 'https://mom-s-club-uz.vercel.app/',
    siteName: "Mom's club",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${open_sans.variable} ${alexandra.variable}`}>{children}</body>
    </html>
  );
}
