import TopNavBar from '@/components/organism/TopNavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import SearchProvider from '@/context/SearchContext'

export const metadata = {
  title: 'MELI',
  description: 'MELI Search',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SearchProvider>
          <main>
            <TopNavBar />
            {children}
          </main>
        </SearchProvider>
      </body>
    </html>
  )
}
