import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meniaz.cl',
  description: 'Una tienda Melipillana de Melipilla',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CL">
      <body className={inter.className}>
        <Header />
        <div className='mx-auto max-w-7xl p-8 pb-16'>
        {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
