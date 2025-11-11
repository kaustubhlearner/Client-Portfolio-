import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'


// ✅ Fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700','900'],
})

export const metadata: Metadata = {
  title: 'Wall Artist Portfolio',
  description: 'Creative Wall Painting Artist Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header playfair={playfair} />
        <div className="">{children}</div> {/* pt-24 taaki header overlap na kare */}
      </body>
    </html>
  )
}
