const partners = [
  { name: "Mistrack", domain: "misttrack.io" },
  { name: "Blockchain.com", domain: "blockchain.com", hueRotate: true },
  { name: "AssureDeFi", domain: "assuredefi.com" },
  { name: "Scam Sniffer", domain: "scamsniffer.io" },
  { name: "Binance", domain: "binance.com" },
  { name: "Chainalysis", domain: "chainalysis.com" },
  { name: "CertiK", domain: "certik.com" },
  { name: "Coinbase", domain: "coinbase.com" },
  { name: "Fireblocks", domain: "fireblocks.com" },
  { name: "Ledger", domain: "ledger.com" },
  { name: "Trezor", domain: "trezor.io" },
  { name: "Elliptic", domain: "elliptic.co" },
]

export function Partners() {
  return (
    <section className="border-y border-glass-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Forensic Data Aligned With
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex w-max gap-16"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="group flex items-center gap-3 text-muted-foreground/40 grayscale transition-all hover:grayscale-0 hover:text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md border border-glass-border bg-glass transition-colors group-hover:border-brand-primary/30 group-hover:bg-brand-primary/10">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=64`}
                  alt={`${partner.name} logo`}
                  className={`h-5 w-5 object-contain ${partner.hueRotate ? "group-hover:hue-rotate-[240deg]" : ""}`}
                />
              </div>
              <span className="whitespace-nowrap text-lg font-semibold tracking-wide">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
