"use client"

import { useState } from "react"
import { Quote, ArrowRight, LockKeyhole, ShieldCheck, Clock3 } from "lucide-react"

const testimonials = [
  {
    quote:
      "Mykenas recovered $185K in misappropriated assets tracing them across three chains. Their forensic rigor and complete discretion prevented a catastrophic market panic.",
    author: "Anonymous Client",
    role: "High-Net-Worth Individual",
    recovered: "$185K Recovered",
  },
  {
    quote:
      "After a complex social engineering exploit, we lost critical infrastructure keys. The Mykenas team not only secured our perimeter but orchestrated a full PR recovery. Invaluable.",
    author: "Founder & CEO",
    role: "Web3 Infrastructure Protocol",
    recovered: "Protocol Secured",
  },
  {
    quote:
      "Our multi-sig was compromised by a rogue vendor. Mykenas deployed military-grade tracking and worked directly with global authorities to freeze and return the $215K in digital assets.",
    author: "Anonymous Board Member",
    role: "Tier-1 Crypto Exchange",
    recovered: "$215K Recovered",
  },
]

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Switzerland",
  "Singapore",
  "United Arab Emirates",
  "Japan",
  "South Korea",
  "Netherlands",
  "Hong Kong",
  "Nigeria",
  "India",
  "Brazil",
  "Other",
]

export function Testimonials() {
  const [fullName, setFullName] = useState("")
  const [country, setCountry] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [summary, setSummary] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (fullName.trim() && email.trim()) {
      setSubmitted(true)
      setFullName("")
      setCountry("")
      setEmail("")
      setPhone("")
      setSummary("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="testimonials" className="border-t border-glass-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-brand-primary" />
            <span className="text-xs font-semibold tracking-widest text-brand-light uppercase">
              Client Testimonials
            </span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
            Trusted by Those Who Matter Most
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Every engagement is protected by strict NDA. These anonymized
            testimonials reflect the caliber of our clients and outcomes.
          </p>
        </div>

        {/* Two-column layout: Testimonials left, Form right */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: Testimonial Cards stacked */}
          <div className="flex flex-col gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="group flex flex-col justify-between rounded-xl border border-glass-border bg-glass p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-primary/30 hover:bg-card"
              >
                <div>
                  <Quote className="mb-3 h-5 w-5 text-brand-light/60" />
                  <blockquote className="text-sm leading-relaxed text-white/90 italic">
                    {`\"${t.quote}\"`}
                  </blockquote>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-glass-border pt-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t.author}
                    </p>
                    <p className="text-xs text-brand-light/80">{t.role}</p>
                  </div>
                  <span className="rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-light">
                    {t.recovered}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Case Inquiry Form */}
          <div id="case-inquiry" className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-2xl border border-brand-primary/35 bg-gradient-to-br from-brand-primary/15 via-card/70 to-background/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-brand-primary/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-brand-light/20 blur-3xl" />
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10">
                    <svg
                      className="h-6 w-6 text-brand-light"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white">
                      Case Inquiry Received
                    </h3>
                    <p className="mt-1 text-sm text-foreground/80">
                      Our recovery specialists will contact you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6 text-center">
                    <h3 className="font-serif text-2xl font-bold text-brand-light uppercase tracking-wider">
                      Case Inquiry
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Ready to recover your assets? Fill in the details below.
                    </p>
                  </div>

                  <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-light/25 bg-brand-light/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-brand-light uppercase">
                      <LockKeyhole className="h-3.5 w-3.5" />
                      Encrypted Intake
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-light/25 bg-brand-light/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-brand-light uppercase">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      NDA Protected
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-light/25 bg-brand-light/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-brand-light uppercase">
                      <Clock3 className="h-3.5 w-3.5" />
                      24h Response
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="mb-1.5 block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full rounded-lg border border-glass-border/80 bg-background/45 px-3 py-2.5 text-sm text-white transition-all duration-300 focus:border-brand-primary focus:bg-background/70 focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)]"
                      />
                    </div>

                    {/* Country of Residence */}
                    <div>
                      <label className="mb-1.5 block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                        Country of Residence *
                      </label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                        className="w-full appearance-none rounded-lg border border-glass-border/80 bg-background/45 px-3 py-2.5 text-sm text-white transition-all duration-300 focus:border-brand-primary focus:bg-background/70 focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)] [&>option]:bg-card [&>option]:text-white"
                      >
                        <option value="" disabled>Select your country</option>
                        {countries.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="mb-1.5 block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full rounded-lg border border-glass-border/80 bg-background/45 px-3 py-2.5 text-sm text-white transition-all duration-300 focus:border-brand-primary focus:bg-background/70 focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="mb-1.5 block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-lg border border-glass-border/80 bg-background/45 px-3 py-2.5 text-sm text-white transition-all duration-300 focus:border-brand-primary focus:bg-background/70 focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)]"
                      />
                    </div>

                    {/* Summary */}
                    <div>
                      <label className="mb-1.5 block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                        Summary of the incident *
                      </label>
                      <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        required
                        rows={4}
                        placeholder="Include transaction hashes and a description of the incident"
                        className="w-full resize-none rounded-lg border border-glass-border/80 bg-background/45 px-4 py-3 text-sm text-white placeholder-muted-foreground/40 transition-all duration-300 focus:border-brand-primary focus:bg-background/70 focus:outline-none focus:shadow-[0_0_0_3px_rgba(37,99,235,0.2)]"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-8 py-3 font-semibold uppercase tracking-[0.08em] text-slate-950 transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/25 active:opacity-95"
                      >
                        Send
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>

                  <p className="mt-4 text-center text-[10px] text-muted-foreground/60">
                    All communications are end-to-end encrypted and protected under mutual NDA.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
