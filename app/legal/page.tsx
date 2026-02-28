import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Legal() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-32 pb-20 lg:pt-44 lg:pb-32">
                <div className="mx-auto max-w-3xl px-6">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="h-px w-8 bg-brand-primary" />
                        <span className="text-xs font-semibold tracking-widest text-brand-light uppercase">
                            Terms of Service
                        </span>
                    </div>
                    <h1 className="font-serif text-3xl font-bold tracking-tight text-white md:text-5xl mb-8">
                        Legal Disclaimer & Terms
                    </h1>
                    <div className="space-y-6 text-foreground/80 leading-relaxed text-sm">
                        <p>
                            <strong>1. General Provisions</strong>
                            <br />
                            These Terms of Service constitute a legally binding agreement between you and Mykenas ("Company", "we", "us", or "our") concerning your access to and use of our digital asset recovery and forensic services.
                        </p>
                        <p>
                            <strong>2. Limitation of Liability</strong>
                            <br />
                            The investigative and recovery services provided by Mykenas are performed on a best-effort basis using proprietary and standard blockchain forensic methodologies. We make no guarantees or warranties, express or implied, regarding the timeline or success rate of recovering any digital assets. Under no circumstances shall Mykenas be held liable for any direct, indirect, or consequential damages resulting from the use or inability to use our services.
                        </p>
                        <p>
                            <strong>3. Confidentiality and NDA</strong>
                            <br />
                            All client interactions, investigative strategies, and case details are strictly confidential and protected by a mutual Non-Disclosure Agreement (NDA). Information is only shared with authorized parties (e.g., law enforcement) with explicit client consent.
                        </p>
                        <p>
                            <strong>4. Jurisdiction</strong>
                            <br />
                            Any claims or disputes relating to Mykenas services or these Terms shall be governed by the laws of the jurisdiction in which the Company operates, without regard to its conflict of law provisions.
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
