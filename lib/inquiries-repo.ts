import { getSupabaseServerClient } from "@/lib/supabase-server"

export interface InquiryInput {
  fullName: string
  country: string
  email: string
  phone?: string
  summary: string
  source?: string
}

export interface Inquiry {
  id: string
  createdAt: string
  fullName: string
  country: string
  email: string
  phone?: string
  summary: string
  source?: string
}

interface InquiryRow {
  id: string
  created_at: string
  full_name: string
  country: string
  email: string
  phone: string | null
  summary: string
  source: string | null
}

function mapRowToInquiry(row: InquiryRow): Inquiry {
  return {
    id: row.id,
    createdAt: row.created_at,
    fullName: row.full_name,
    country: row.country,
    email: row.email,
    phone: row.phone || "",
    summary: row.summary,
    source: row.source || "website",
  }
}

export async function createInquiry(input: InquiryInput): Promise<Inquiry> {
  const supabase = getSupabaseServerClient()

  const payload = {
    full_name: input.fullName.trim(),
    country: input.country.trim(),
    email: input.email.trim(),
    phone: input.phone?.trim() || null,
    summary: input.summary.trim(),
    source: input.source?.trim() || "website",
  }

  const { data, error } = await supabase
    .from("inquiries")
    .insert(payload)
    .select("id, created_at, full_name, country, email, phone, summary, source")
    .single()

  if (error || !data) {
    throw new Error(error?.message || "Failed to create inquiry")
  }

  return mapRowToInquiry(data as InquiryRow)
}

export async function listInquiries(): Promise<Inquiry[]> {
  const supabase = getSupabaseServerClient()

  const { data, error } = await supabase
    .from("inquiries")
    .select("id, created_at, full_name, country, email, phone, summary, source")
    .order("created_at", { ascending: false })

  if (error) {
    throw new Error(error.message || "Failed to list inquiries")
  }

  return (data ?? []).map((row) => mapRowToInquiry(row as InquiryRow))
}
