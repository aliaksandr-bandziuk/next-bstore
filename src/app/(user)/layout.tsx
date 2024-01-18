import type { Metadata } from 'next'
import '../../styles/globals.css'
import "slick-carousel/slick/slick.css";
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Online Super Store',
  description: 'Super online store for all your needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-display'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
