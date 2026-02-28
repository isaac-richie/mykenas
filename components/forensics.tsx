"use client"

import { Zap, Radar, Shield, AlertTriangle } from "lucide-react"

const forensicsServices = [
  {
    icon: Zap,
    title: "Hacking Forensics",
    description:
      "Deep forensic analysis of compromised accounts, smart contracts, and exchanges. We identify attack vectors, trace exploit paths, and establish liability chains for recovery claims.",
  },
  {
    icon: Radar,
    title: "Asset Tracking",
    description:
      "Cross-chain forensic tracing of misappropriated or stolen digital assets with full evidence packaging for legal proceedings.",
  },
  {
    icon: Shield,
    title: "Phishing Scam Forensics",
    description:
      "Comprehensive investigation of phishing attacks and social engineering exploits. We trace transaction flows, identify perpetrators, and recover stolen assets through advanced blockchain forensics.",
  },
  {
    icon: AlertTriangle,
    title: "Crypto Theft and Fraud",
    description:
      "Investigation and recovery of stolen cryptocurrency and fraudulent transactions. We identify suspicious patterns, track movement across wallets and exchanges, and work with law enforcement to prosecute perpetrators.",
  },
]

export function Forensics() {
  return (
    <section id="forensics" className="relative py-24 lg:py-32 border-t border-glass-border">
      {/* Subtle depth gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(37, 99, 235, 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-brand-primary" />
            <span className="text-xs font-semibold tracking-widest text-brand-light uppercase">
              Forensic Investigation
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
            Advanced Blockchain Forensics
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our investigative team specializes in uncovering the truth behind complex on-chain incidents. We combine cryptographic analysis with legal expertise to recover assets and hold perpetrators accountable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {forensicsServices.map((service) => (
            <a
              key={service.title}
              href="#case-inquiry"
              className="group relative flex flex-col rounded-xl border border-glass-border bg-glass p-8 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary/30 hover:bg-card/80 hover:shadow-[0_0_25px_rgba(37,99,235,0.12)] cursor-pointer select-none no-underline"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-brand-light/20 bg-brand-primary/10 transition-colors group-hover:border-brand-light/40 group-hover:bg-brand-primary/20">
                <service.icon className="h-6 w-6 text-brand-light" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                {service.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-brand-light opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Click to inquire →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
