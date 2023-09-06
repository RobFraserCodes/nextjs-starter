import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteDetails } from '@/lib/site-details'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteDetails.title,
  description: siteDetails.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-background'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
