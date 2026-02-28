"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Forensics", href: "#forensics" },
  { label: "Partners", href: "#partners" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-glass-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:grid md:grid-cols-[auto_1fr_auto] md:gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-lg font-bold tracking-wider text-white">
            Mykenas
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/85 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#case-inquiry"
          className="hidden rounded-lg bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.26)] transition-all hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/45 active:translate-y-px active:shadow-[0_4px_10px_rgba(0,0,0,0.22)] md:inline-flex"
        >
          Contact Team
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-glass-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground/85 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#case-inquiry"
              onClick={() => setMobileOpen(false)}
              className="mt-2 w-full rounded-lg bg-brand-primary px-5 py-2.5 text-center text-sm font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.26)] transition-all hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/45 active:translate-y-px active:shadow-[0_4px_10px_rgba(0,0,0,0.22)]"
            >
              Contact Team
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
