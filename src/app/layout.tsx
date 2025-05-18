import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Valeria Osadchuk - Portafolio',
  description: 'Ilustraciones y arte digital',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
<body className="
  bg-crema 
  text-black 
  dark:bg-fondo dark:text-crema 
  transition-colors duration-300 
  bg-[url('/textures/texture1.jpg')] 
  bg-cover bg-fixed bg-center 
  dark:bg-none
">
  {children}

</body>




    </html>
  )
}
