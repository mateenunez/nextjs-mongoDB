import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CRUD NextJS-MongoDB',
  description: 'Practicando MongoDB',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">  
      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
