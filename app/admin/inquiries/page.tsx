import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { listInquiries } from "@/lib/inquiries-repo"

export const dynamic = "force-dynamic"

const ADMIN_COOKIE = "inquiries_admin_session"

async function unlock(formData: FormData) {
  "use server"

  const password = String(formData.get("password") ?? "")
  const adminKey = process.env.INQUIRIES_ADMIN_KEY

  if (!adminKey || password !== adminKey) {
    redirect("/admin/inquiries?error=1")
  }

  const cookieStore = await cookies()
  cookieStore.set(ADMIN_COOKIE, adminKey, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  })

  redirect("/admin/inquiries")
}

async function logout() {
  "use server"

  const cookieStore = await cookies()
  cookieStore.delete(ADMIN_COOKIE)
  redirect("/admin/inquiries")
}

export default async function AdminInquiriesPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = searchParams ? await searchParams : {}
  const hasError = params?.error === "1"
  const adminKey = process.env.INQUIRIES_ADMIN_KEY

  if (!adminKey) {
    return (
      <main className="min-h-screen bg-background px-6 py-16 text-foreground">
        <div className="mx-auto max-w-xl rounded-xl border border-red-400/30 bg-red-500/10 p-6">
          <h1 className="font-serif text-2xl font-bold text-white">Admin Gate Not Configured</h1>
          <p className="mt-3 text-sm text-red-100/90">
            Set <code>INQUIRIES_ADMIN_KEY</code> in your environment to protect this page.
          </p>
        </div>
      </main>
    )
  }

  const cookieStore = await cookies()
  const unlocked = cookieStore.get(ADMIN_COOKIE)?.value === adminKey

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-background px-6 py-16 text-foreground">
        <div className="mx-auto max-w-md rounded-xl border border-glass-border bg-card/70 p-7 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <p className="inline-flex items-center rounded-full border border-brand-primary/25 bg-brand-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-brand-light uppercase">
            Protected Admin
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold text-white">Enter Admin Password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This dashboard is restricted to authorized team members.
          </p>

          <form action={unlock} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full rounded-md border border-glass-border bg-background/60 px-3 py-2.5 text-sm text-white outline-none transition focus:border-brand-primary"
              />
            </div>

            {hasError && (
              <p className="text-sm text-red-300">Invalid password. Please try again.</p>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-brand-primary px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-dark"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </main>
    )
  }

  let inquiries: Awaited<ReturnType<typeof listInquiries>> = []
  let loadError = ""

  try {
    inquiries = await listInquiries()
  } catch (error) {
    loadError =
      error instanceof Error ? error.message : "Unable to load inquiries from Supabase."
  }
  const latest = inquiries[0]
  const modalSourceCount = inquiries.filter((item) => item.source === "modal").length
  const websiteSourceCount = inquiries.length - modalSourceCount

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-10 text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-brand-light/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center rounded-full border border-brand-primary/25 bg-brand-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-brand-light uppercase">
              Admin Dashboard
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-white">Inquiry Console</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Review, triage, and follow up on client submissions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-glass-border bg-card/70 px-4 py-3 text-right backdrop-blur-sm">
              <p className="text-[11px] tracking-wide text-muted-foreground uppercase">Last Update</p>
              <p className="mt-1 text-sm text-white">
                {latest ? new Date(latest.createdAt).toLocaleString() : "No data yet"}
              </p>
            </div>
            <form action={logout}>
              <button
                type="submit"
                className="rounded-md border border-glass-border bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors hover:bg-white/10"
              >
                Logout
              </button>
            </form>
          </div>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-glass-border bg-card/65 p-4 backdrop-blur-sm">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">Total Inquiries</p>
            <p className="mt-2 text-3xl font-bold text-white">{inquiries.length}</p>
          </div>
          <div className="rounded-xl border border-glass-border bg-card/65 p-4 backdrop-blur-sm">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">Website Source</p>
            <p className="mt-2 text-3xl font-bold text-white">{websiteSourceCount}</p>
          </div>
          <div className="rounded-xl border border-glass-border bg-card/65 p-4 backdrop-blur-sm">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">Modal Source</p>
            <p className="mt-2 text-3xl font-bold text-white">{modalSourceCount}</p>
          </div>
          <div className="rounded-xl border border-glass-border bg-card/65 p-4 backdrop-blur-sm">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">Latest Contact</p>
            <p className="mt-2 truncate text-base font-semibold text-white">
              {latest ? latest.fullName : "N/A"}
            </p>
          </div>
        </div>

        {loadError && (
          <div className="mb-6 rounded-xl border border-red-400/30 bg-red-500/10 p-4">
            <p className="text-sm font-semibold text-red-200">Inquiry data load failed</p>
            <p className="mt-1 text-xs text-red-100/90">{loadError}</p>
            <p className="mt-2 text-xs text-red-100/80">
              Verify Supabase env vars and that <code>public.inquiries</code> exists.
            </p>
          </div>
        )}

        <div className="overflow-x-auto rounded-xl border border-glass-border bg-card/60 shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-sm">
          <table className="w-full min-w-[920px] text-left text-sm">
            <thead className="border-b border-glass-border bg-background/80 text-xs tracking-wide text-muted-foreground uppercase">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Summary</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length === 0 ? (
                <tr>
                  <td className="px-4 py-10 text-center text-muted-foreground" colSpan={7}>
                    No inquiries yet.
                  </td>
                </tr>
              ) : (
                inquiries.map((inquiry) => (
                  <tr
                    key={inquiry.id}
                    className="border-b border-glass-border/60 align-top transition-colors hover:bg-background/40"
                  >
                    <td className="px-4 py-3 text-foreground/85">
                      {new Date(inquiry.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 font-semibold text-white">{inquiry.fullName}</td>
                    <td className="px-4 py-3 text-foreground/85">{inquiry.email}</td>
                    <td className="px-4 py-3 text-foreground/85">{inquiry.country}</td>
                    <td className="px-4 py-3 text-foreground/85">{inquiry.phone || "-"}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-1 text-xs font-semibold text-brand-light">
                        {inquiry.source || "website"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-foreground/85">{inquiry.summary}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <footer className="mt-10 border-t border-glass-border pt-6">
          <div className="flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              {`\u00A9 ${new Date().getFullYear()} Mykenas Admin Console`}
            </p>
            <p>Protected inquiry data. Authorized access only.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
