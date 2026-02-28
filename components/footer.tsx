export function Footer() {
  return (
    <footer id="contact" className="border-t border-glass-border bg-secondary/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold tracking-wider text-white">
                Mykenas
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The world&apos;s premier digital asset recovery and blockchain
              forensics agency. Operating under strict NDA with military-grade
              security protocols.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
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
          <div id="marketing" className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-widest text-white uppercase">
              Confidential Inquiry
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              All communications are end-to-end encrypted and protected under
              NDA.
            </p>
            <a
              href="#case-inquiry"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all hover:bg-brand-light hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]"
            >
              Contact Us Securely
            </a>
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
