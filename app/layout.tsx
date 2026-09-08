import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
});

export const metadata: Metadata = {
  title: 'Rakesh Sankhala Art | Wall Artist & Mural Painter in Jaipur',
  description:
    'Professional wall murals, graffiti art, doodle art, portrait painting and canvas artwork by Rakesh Sankhala in Jaipur, Rajasthan.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header playfair={playfair} />
        <main>{children}</main>
      </body>
    </html>
  );
}
