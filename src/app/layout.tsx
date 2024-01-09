import { AsideBar } from '@/components/AsideBar'
import './globals.scss'
import type { Metadata } from 'next'
import { CardCssContextProvider } from '@/contexts/CardCssContext'

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
        <body>
          <AsideBar />
          <main>
            {children}
          </main>
        </body>
      </html>
    </CardCssContextProvider>
  )
}
