import Banner from '@/components/banner'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import NewsletterCTA from '@/components/newsletter'
import Pricing from '@/components/pricing'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Hero />
      <CTA />
      <NewsletterCTA />
      <Pricing />
      <Footer />
    </main>
  )
}
``