import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

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

export const viewport = {
  themeColor: '#43B581',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <div className='wrapper'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}