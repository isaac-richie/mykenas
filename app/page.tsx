import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { Services } from "@/components/services"
import { Forensics } from "@/components/forensics"
import { WalletsMarquee } from "@/components/wallets-marquee"
import { OfficialPartners } from "@/components/official-partners"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="ambient-orb-cyan absolute -left-40 -top-40" />
        <div className="ambient-orb-gold absolute -bottom-24 -right-28" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Partners />
        <Services />
        <WalletsMarquee />
        <Forensics />
        <OfficialPartners />
        <Testimonials />
        <Footer />
      </div>
    </main>
  )
}
