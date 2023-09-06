import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}  
        </ThemeProvider>
      </body>
    </html>
  )
}
