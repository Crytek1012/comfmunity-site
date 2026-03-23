import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Comfmunity',
  description: 'Welcome to Comfmunity.',
  openGraph: {
    title: 'Comfmunity',
    description: 'An inter-server chat created by the Noelle Mains Armoured-Goddess Discord server.',
    url: 'https://comfmunity.com/',
    images: ['/noelle_comf.png'],
  },
  metadataBase: 'https://comfmunity.com/'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ThemeProvider attribute="class" enableSystem defaultTheme='system'>
          <div className='wrapper'>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
