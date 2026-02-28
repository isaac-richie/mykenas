"use client"

import { KeyRound, Lock, Database, Radar, Shield, AlertTriangle } from "lucide-react"

const services = [
  {
    icon: KeyRound,
    title: "Wallet Recovery",
    description:
      "Complete recovery of inaccessible wallets across all major blockchains. Our proprietary tools restore access regardless of the failure point.",
  },
  {
    icon: Database,
    title: "Seed Phrase Restoration",
    description:
      "Partial or corrupted seed phrase recovery using sophisticated entropy analysis and brute-force optimization algorithms.",
  },
  {
    icon: Lock,
    title: "Lost Password Extraction",
    description:
      "Advanced cryptographic techniques to recover lost passwords, PINs, and multi-factor authentication tokens with zero data compromise.",
  },
  {
    icon: Radar,
    title: "Asset Tracking",
    description:
      "Cross-chain forensic tracing of misappropriated or stolen digital assets with full evidence packaging for legal proceedings.",
  },
  {
    icon: Shield,
    title: "Phishing Defense",
    description:
      "Comprehensive investigation of phishing attacks and social engineering exploits. We trace transaction flows, identify perpetrators, and recover stolen assets.",
  },
  {
    icon: AlertTriangle,
    title: "Crypto Theft Recovery",
    description:
      "Investigation and recovery of stolen cryptocurrency and fraudulent transactions. We track movement across wallets and exchanges and work with law enforcement.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Subtle depth gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-brand-primary" />
            <span className="text-xs font-semibold tracking-widest text-brand-light uppercase">
              What We Do
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
            Comprehensive Digital Asset Recovery
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From lost passwords to stolen funds, our forensic team operates at
            the intersection of cybersecurity and blockchain intelligence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-glass-border bg-glass p-8 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary/30 hover:bg-card/80 hover:shadow-[0_0_25px_rgba(37,99,235,0.12)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-brand-light/20 bg-brand-primary/10 transition-colors group-hover:border-brand-light/40 group-hover:bg-brand-primary/20">
                <service.icon className="h-6 w-6 text-brand-light" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
