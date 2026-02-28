export const verifiedPartners = [
    {
        name: "Mistrack",
        domain: "misttrack.io",
        description: "Anti-money laundering tracing and compliance platform by SlowMist."
    },
    {
        name: "Blockchain.com",
        domain: "blockchain.com",
        description: "Global trusted cryptocurrency platform and block explorer data provider.",
        hueRotate: true
    },
    {
        name: "Chainalysis",
        domain: "chainalysis.com",
        description: "Government-grade blockchain analytics, investigation tools, and compliance solutions."
    },
    {
        name: "AssureDeFi",
        domain: "assuredefi.com",
        description: "Gold standard KYC verification, fraud prevention, and smart contract auditing."
    },
    {
        name: "Scam Sniffer",
        domain: "scamsniffer.io",
        description: "Real-time Web3 anti-scam, malicious URL detection, and phishing protection."
    },
]

export function OfficialPartners() {
    return (
        <section id="partners" className="relative border-t border-glass-border bg-background py-20 lg:py-32">
            {/* Subtle depth gradient */}
            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)",
                }}
            />
            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mb-16 flex flex-col items-center justify-center text-center">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="h-px w-8 bg-brand-primary" />
                        <span className="text-xs font-semibold tracking-widest text-brand-light uppercase">
                            Official Intelligence Partners
                        </span>
                        <div className="h-px w-8 bg-brand-primary" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-5xl text-balance">
                        Verified by Industry Leaders
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                        We collaborate with the foremost authorities in blockchain security to ensure the highest standard of asset recovery operations.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {verifiedPartners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group flex flex-col items-center rounded-xl border border-glass-border bg-glass p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-primary/30 hover:bg-card/80 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(37,99,235,0.12)]"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-glass-border bg-background transition-colors group-hover:border-brand-primary/30 group-hover:bg-brand-primary/10">
                                <img
                                    src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`}
                                    alt={`${partner.name} logo`}
                                    className={`h-8 w-8 object-contain grayscale transition-all duration-300 group-hover:grayscale-0 ${partner.hueRotate ? "group-hover:hue-rotate-[240deg]" : ""}`}
                                />
                            </div>
                            <h3 className="mb-3 font-serif text-xl font-semibold text-white">
                                {partner.name}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                {partner.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
