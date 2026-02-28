"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ArrowRight } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

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

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [fullName, setFullName] = useState("")
  const [country, setCountry] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [summary, setSummary] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true))
      })
    } else {
      setVisible(false)
    }
  }, [isOpen])

  const handleTransitionEnd = useCallback(() => {
    if (!visible && !isOpen) {
      setMounted(false)
      setSubmitted(false)
    }
  }, [visible, isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (fullName.trim() && email.trim()) {
      setSubmitted(true)
      setFullName("")
      setCountry("")
      setEmail("")
      setPhone("")
      setSummary("")
      setTimeout(() => {
        setSubmitted(false)
        onClose()
      }, 2500)
    }
  }

  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 flex min-h-screen items-center justify-center px-4 transition-all duration-300 ease-out"
      style={{
        backgroundColor: visible ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
        backdropFilter: visible ? "blur(8px)" : "blur(0px)",
      }}
      onClick={onClose}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className="relative w-full max-w-lg rounded-xl border border-glass-border bg-card p-8 shadow-2xl transition-all duration-300 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(12px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground transition-colors hover:text-white"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Content */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8 text-center animate-in fade-in duration-300">
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
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-bold text-brand-light uppercase tracking-wider">
                Case Inquiry
              </h2>
              <p className="mt-2 text-sm text-foreground/80">
                All submissions are encrypted and protected under NDA.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name */}
              <div className="group">
                <label className="mb-1.5 block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full border-b border-glass-border bg-transparent px-0 py-2.5 text-sm text-white placeholder-muted-foreground/50 transition-colors focus:border-brand-primary focus:outline-none"
                />
              </div>

              {/* Country of Residence */}
              <div className="group">
                <label className="mb-1.5 block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Country of Residence *
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className="w-full appearance-none border-b border-glass-border bg-transparent px-0 py-2.5 text-sm text-white transition-colors focus:border-brand-primary focus:outline-none [&>option]:bg-card [&>option]:text-white"
                >
                  <option value="" disabled>Select your country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Email Address */}
              <div className="group">
                <label className="mb-1.5 block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-b border-glass-border bg-transparent px-0 py-2.5 text-sm text-white placeholder-muted-foreground/50 transition-colors focus:border-brand-primary focus:outline-none"
                />
              </div>

              {/* Phone Number */}
              <div className="group">
                <label className="mb-1.5 block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-b border-glass-border bg-transparent px-0 py-2.5 text-sm text-white placeholder-muted-foreground/50 transition-colors focus:border-brand-primary focus:outline-none"
                />
              </div>

              {/* Summary */}
              <div className="group">
                <label className="mb-1.5 block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Summary of the request, including transaction hashes and a description of the incident *
                </label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-glass-border bg-background/30 px-4 py-3 text-sm text-white placeholder-muted-foreground/50 transition-colors focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary/50"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-8 py-3 font-semibold uppercase tracking-[0.08em] text-slate-950 transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/25 active:opacity-95"
                >
                  Send
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            <p className="mt-4 text-[10px] text-muted-foreground/60">
              All communications are end-to-end encrypted and protected under mutual NDA.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
