import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lerka - Portafolio',
  description: 'Ilustraciones y arte digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="
        bg-crema 
        text-black 
        dark:bg-[url('/textures/texture2.png')] dark:text-crema 
        transition-colors duration-300 
        bg-[url('/textures/texture1.jpg')] 
        bg-cover bg-fixed bg-center
      ">
        {children}
      </body>
    </html>
  )
}
