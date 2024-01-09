
import type { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'CSS Tools'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <CodeBlock />
    </>
  )
}
