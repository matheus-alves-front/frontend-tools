import { AsideBar } from '@/components/AsideBar'
import './globals.scss'
import type { Metadata } from 'next'
import { CardCssContextProvider } from '@/contexts/CardCssContext'
import { Caveat } from 'next/font/google'

const CaveatFont = Caveat({subsets: [
  'latin'
]})

export const metadata: Metadata = {
  title: 'Front-end Tools',
  description: 'Created by Matheus Alves @matheus-alves-front (github)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CardCssContextProvider>
      <html lang="en">
        <body className={CaveatFont.className}>
          <AsideBar />
          <main>
            {children}
          </main>
        </body>
      </html>
    </CardCssContextProvider>
  )
}
