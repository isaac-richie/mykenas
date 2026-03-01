import { NextResponse } from "next/server"
import { z } from "zod"
import { createInquiry, listInquiries } from "@/lib/inquiries-repo"

const inquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  country: z.string().min(2, "Country is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  summary: z.string().min(10, "Summary is too short"),
  source: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = inquirySchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", issues: parsed.error.issues },
        { status: 400 }
      )
    }

    const inquiry = await createInquiry(parsed.data)
    return NextResponse.json({ ok: true, inquiry }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Unable to submit inquiry" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  const adminKey = process.env.INQUIRIES_ADMIN_KEY
  const providedKey = request.headers.get("x-admin-key")

  if (adminKey && providedKey !== adminKey) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const inquiries = await listInquiries()
    return NextResponse.json({ ok: true, count: inquiries.length, inquiries })
  } catch {
    return NextResponse.json({ error: "Unable to load inquiries" }, { status: 500 })
  }
}
