import { KeyRound, Shield, ShieldAlert, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20">
      {/* Static texture background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          alt="Secure Server Background"
          className="h-full w-full object-cover opacity-35 mix-blend-luminosity"
        />
      </div>

      {/* Heavy readability overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,9,15,0.95) 0%, rgba(11,15,25,0.85) 50%, rgba(6,9,15,0.98) 100%)",
        }}
      />

      {/* Subtle structural grid */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col px-6 lg:px-12">
        <main className="flex flex-1 flex-col items-center justify-between gap-16 pb-20 pt-10 lg:flex-row">
          {/* LEFT COLUMN */}
          <div className="w-full pt-10 lg:w-[50%]">
            <div className="hero-enter mb-8 inline-flex items-center gap-2 rounded-md border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-blue-400 uppercase [animation-delay:120ms]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Elite Digital Recovery
            </div>

            <h1 className="hero-enter mb-6 font-serif text-5xl leading-[1.05] font-bold tracking-tight text-white lg:text-7xl [animation-delay:220ms]">
              Digital Asset <br />
              Recovery <br />
              <span className="text-blue-500">Without Exposure.</span>
            </h1>

            <p className="hero-enter mb-10 max-w-md text-lg leading-relaxed text-gray-400 [animation-delay:320ms]">
              Our specialists combine hardened cryptography, on-chain intelligence,
              and forensic methodologies to recover compromised wallets and trace
              stolen digital assets—securely, discreetly, and law-ready.
            </p>

            <div className="hero-enter flex flex-wrap items-center gap-4 [animation-delay:420ms]">
              <a
                href="#case-inquiry"
                className="group inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
              >
                Contact Team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="rounded-lg border border-glass-border bg-glass px-6 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Services
              </a>
            </div>

            <div className="hero-enter mt-10 grid max-w-md grid-cols-3 gap-6 [animation-delay:520ms]">
              <div>
                <p className="text-4xl leading-none font-bold text-white">$1M+</p>
                <p className="mt-2 text-sm text-gray-400">Assets Recovered</p>
              </div>
              <div>
                <p className="text-4xl leading-none font-bold text-white">50+</p>
                <p className="mt-2 text-sm text-gray-400">Cases Resolved</p>
              </div>
              <div>
                <p className="text-4xl leading-none font-bold text-white">99.2%</p>
                <p className="mt-2 text-sm text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative hidden h-[500px] w-full lg:block lg:w-[50%]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

            {/* Card 1 */}
            <div
              className="absolute left-[4%] top-[6%] z-20 w-[332px]"
              style={{ animation: "float-1 6s ease-in-out infinite" }}
            >
              <div className="rounded-xl border border-glass-border bg-glass p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors hover:border-gray-500/30">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-gray-800">
                  <KeyRound className="h-5 w-5 text-gray-300" />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-white">Password Recovery</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Military-grade decryption protocols and AI brute-forcing.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="absolute right-[0%] top-[39%] z-30 w-[336px]"
              style={{ animation: "float-2 8s ease-in-out infinite 1.2s" }}
            >
              <div className="rounded-xl border border-glass-border bg-glass p-6 shadow-2xl backdrop-blur-xl transition-colors hover:border-gray-500/30">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-700/50 bg-blue-900/50">
                  <Shield className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-white">Asset Tracking</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Cross-chain forensic analysis to isolate and freeze stolen funds.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="absolute bottom-[2%] left-[12%] z-10 w-[320px]"
              style={{ animation: "float-1 6s ease-in-out infinite 0.8s" }}
            >
              <div className="rounded-xl border border-glass-border bg-glass p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors hover:border-gray-500/30">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-gray-800">
                  <ShieldAlert className="h-5 w-5 text-gray-300" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-white">Phishing Defense</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  Proactive threat neutralization & exploit prevention.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
