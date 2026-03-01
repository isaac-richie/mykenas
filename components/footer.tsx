export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-glass-border bg-background/80 py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-brand-light/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-brand-primary/45 bg-brand-primary/15">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
              </span>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                Mykenas
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The world&apos;s premier digital asset recovery and blockchain
              forensics agency. Operating under strict NDA with military-grade
              security protocols.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-glass-border bg-glass px-3 py-1 text-[11px] font-semibold text-foreground/75">
                Encrypted Intake
              </span>
              <span className="rounded-full border border-glass-border bg-glass px-3 py-1 text-[11px] font-semibold text-foreground/75">
                NDA First
              </span>
              <span className="rounded-full border border-glass-border bg-glass px-3 py-1 text-[11px] font-semibold text-foreground/75">
                24/7 Response
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:pt-1">
            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-widest text-white uppercase">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#services" className="text-sm text-foreground/80 transition-colors hover:text-white">
                    Wallet Recovery
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-foreground/80 transition-colors hover:text-white">
                    Asset Tracking
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-foreground/80 transition-colors hover:text-white">
                    Seed Phrase
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-foreground/80 transition-colors hover:text-white">
                    Web3 PR
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-widest text-white uppercase">
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="text-sm text-foreground/80 transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <span
                    aria-disabled="true"
                    title="Currently inactive"
                    className="inline-flex cursor-not-allowed items-center text-sm text-foreground/40"
                  >
                    Careers
                  </span>
                </li>
                <li>
                  <a href="/legal" className="text-sm text-foreground/80 transition-colors hover:text-white">
                    Legal
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-sm text-foreground/80 transition-colors hover:text-white">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div id="marketing" className="flex flex-col gap-4 md:pt-1">
            <h4 className="text-xs font-semibold tracking-widest text-white uppercase">
              Confidential Inquiry
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              All communications are end-to-end encrypted and protected under
              NDA.
            </p>
            <a
              href="#case-inquiry"
              className="inline-flex w-fit items-center justify-center rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/25 active:opacity-95"
            >
              Contact Us Securely
            </a>
            <p className="text-[11px] text-muted-foreground/80">
              Typical first response within 24 hours.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-glass-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Mykenas. All rights reserved.`}
          </p>
          <p className="text-xs text-muted-foreground">
            Secured by military-grade encryption
          </p>
        </div>
      </div>
    </footer>
  )
}
