"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "How does the recovery process work?",
        answer:
            "Our process begins with a confidential evaluation of your case. Once retained, our forensic team performs deep blockchain analysis, identifies recovery vectors, and executes the recovery using proprietary tools. The entire process is conducted under strict NDA with military-grade operational security.",
    },
    {
        question: "What types of assets can you recover?",
        answer:
            "We recover assets across all major blockchains including Bitcoin, Ethereum, Solana, BNB Chain, Polygon, and more. This includes lost wallet access, stolen funds from hacks or phishing, inaccessible hardware wallets, corrupted seed phrases, and forgotten passwords.",
    },
    {
        question: "How long does recovery typically take?",
        answer:
            "Timelines vary based on complexity. Simple password recovery can take 24–72 hours, while complex cross-chain asset tracing and legal coordination may take 2–6 weeks. We provide an estimated timeline during your initial consultation.",
    },
    {
        question: "Is my information kept confidential?",
        answer:
            "Absolutely. All engagements are protected by mutual NDA. Communications are end-to-end encrypted, and our team operates under the strictest confidentiality protocols. We never disclose client identities, case details, or recovery amounts.",
    },
    {
        question: "What are your fees?",
        answer:
            "We operate on a success-based fee model for most recovery cases—you only pay when we successfully recover your assets. For forensic investigation and consulting services, we offer transparent fixed-fee and retainer arrangements discussed during your initial evaluation.",
    },
    {
        question: "Do you work with law enforcement?",
        answer:
            "Yes. We maintain professional relationships with law enforcement agencies worldwide. When appropriate, we provide court-admissible forensic reports and collaborate with authorities to freeze, seize, and return stolen assets through proper legal channels.",
    },
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="relative border-t border-glass-border py-24 lg:py-32">
            {/* Subtle depth gradient */}
            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)",
                }}
            />

            <div className="relative mx-auto max-w-3xl px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <div className="h-px w-8 bg-brand-primary" />
                        <span className="text-xs font-semibold tracking-widest text-brand-light uppercase">
                            Common Questions
                        </span>
                        <div className="h-px w-8 bg-brand-primary" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl text-balance">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        Everything you need to know about our recovery process and services.
                    </p>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div
                                key={i}
                                className={`rounded-xl border backdrop-blur-sm transition-all duration-300 ${isOpen
                                        ? "border-brand-primary/30 bg-card/80 shadow-[0_0_20px_rgba(37,99,235,0.08)]"
                                        : "border-glass-border bg-glass hover:border-brand-primary/20"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                                >
                                    <span className="pr-4 font-serif text-base font-semibold text-white">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`h-5 w-5 flex-shrink-0 text-brand-light transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"
                                        }`}
                                >
                                    <p className="px-6 text-sm leading-relaxed text-muted-foreground">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
