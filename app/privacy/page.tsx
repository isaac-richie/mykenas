import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Privacy() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-32 pb-20 lg:pt-44 lg:pb-32">
                <div className="mx-auto max-w-3xl px-6">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="h-px w-8 bg-brand-primary" />
                        <span className="text-xs font-semibold tracking-widest text-brand-light uppercase">
                            Privacy Policy
                        </span>
                    </div>
                    <h1 className="font-serif text-3xl font-bold tracking-tight text-white md:text-5xl mb-8">
                        Privacy Policy
                    </h1>
                    <div className="space-y-6 text-foreground/80 leading-relaxed text-sm">
                        <p>
                            <strong>1. Information Collection</strong>
                            <br />
                            Mykenas collects the minimum amount of operational data necessary to execute forensic and recovery assignments. This includes, but is not limited to, email addresses, public wallet addresses, transaction hashes, and technical context provided voluntarily during the intake process.
                        </p>
                        <p>
                            <strong>2. Data Usage and Processing</strong>
                            <br />
                            The information we collect is strictly used for the purpose of identifying attack vectors, tracing digital assets, restoring wallet access, and communicating with you securely. We do not sell, rent, or lease your personal data to third parties.
                        </p>
                        <p>
                            <strong>3. Information Security</strong>
                            <br />
                            We implement military-grade encryption and enterprise-level security protocols to maintain the safety of your personal information. Communication and operational documents are subject to strict internal access controls and stored securely off-chain.
                        </p>
                        <p>
                            <strong>4. Compliance with Law Enforcement</strong>
                            <br />
                            Mykenas may disclose your personal information only if highly necessitated by law or subpoena or if we believe that such action is necessary to conform to the edicts of the law and protect the safety and rights of our clients.
                        </p>
                        <p>
                            <em>Last Updated: {new Date().toLocaleDateString()}</em>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
