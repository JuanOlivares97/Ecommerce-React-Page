import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

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
        <div>
        {children}
        </div>
        </body>
    </html>
  )
}
