import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/noelle_comf.png" />
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