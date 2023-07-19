import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naftali Lubin (@maniator)',
  description: `Naftali Lubin is a Software Engineer in New York
who builds scalable full stack web applications
with over a decade of experience

Father of three amazing boys`,
  alternates: {
    canonical: 'https://naftali.lubin.dev',
  },
  manifest: '/manifest.json'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
