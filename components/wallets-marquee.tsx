const wallets = [
  { name: "MetaMask", domain: "metamask.io" },
  { name: "Coinbase Wallet", domain: "coinbase.com" },
  { name: "Trust Wallet", domain: "trustwallet.com" },
  { name: "Ledger", domain: "ledger.com" },
  { name: "Trezor", domain: "trezor.io" },
  { name: "Phantom", domain: "phantom.app" },
  { name: "Rainbow", domain: "rainbow.me" },
  { name: "Exodus", domain: "exodus.com" },
  { name: "Atomic Wallet", domain: "atomicwallet.io" },
  { name: "Electrum", domain: "electrum.org" },
  { name: "Rabby Wallet", domain: "rabby.io" },
  { name: "Jupiter", domain: "jup.ag" },
  { name: "Bitget Wallet", domain: "bitget.com" },
]

export function WalletsMarquee() {
  return (
    <section className="border-y border-glass-border bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Wallets We Support
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max gap-12" style={{ animation: "marquee 35s linear infinite" }}>
          {[...wallets, ...wallets].map((wallet, i) => (
            <div
              key={`${wallet.name}-${i}`}
              className="group flex items-center gap-3 opacity-55 transition-opacity hover:opacity-100"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-glass-border bg-glass">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${wallet.domain}&sz=128`}
                  alt={`${wallet.name} logo`}
                  className="h-6 w-6 object-contain"
                />
              </div>
              <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-muted-foreground transition-colors group-hover:text-white">
                {wallet.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
