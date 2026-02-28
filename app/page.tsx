import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { Services } from "@/components/services"
import { Forensics } from "@/components/forensics"
import { WalletsMarquee } from "@/components/wallets-marquee"
import { OfficialPartners } from "@/components/official-partners"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="page-gradient-motion pointer-events-none fixed inset-0 z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Partners />
        <Services />
        <WalletsMarquee />
        <Forensics />
        <OfficialPartners />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}
