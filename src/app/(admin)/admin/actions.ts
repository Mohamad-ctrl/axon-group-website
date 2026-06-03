"use server";

import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase";
import { isStage } from "@/lib/stages";
import { redirect } from "next/navigation";

export async function setStage(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error("Unauthorized");

  const id = String(formData.get("id") ?? "");
  const stage = String(formData.get("stage") ?? "");
  if (!id || !isStage(stage)) throw new Error("Invalid request");

  const { error } = await supabaseAdmin().from("applications").update({ stage }).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin");
  revalidatePath(`/admin/${id}`);
}

function slugify(s: string): string {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export async function createJob(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error("Unauthorized");
  const g = (k: string) => String(formData.get(k) ?? "").trim();
  const lines = (k: string) => g(k).split("\n").map((s) => s.trim()).filter(Boolean);

  let slug = slugify(g("slug"));
  if (!slug) slug = slugify(g("title_en"));
  if (!slug) throw new Error("A title (English) or slug is required.");

  const data = {
    title: { en: g("title_en"), ar: g("title_ar") },
    department: { en: g("department_en"), ar: g("department_ar") },
    company: { en: g("company_en"), ar: g("company_ar") },
    location: { en: g("location_en"), ar: g("location_ar") },
    type: { en: g("type_en"), ar: g("type_ar") },
    excerpt: { en: g("excerpt_en"), ar: g("excerpt_ar") },
    description: { en: lines("description_en"), ar: lines("description_ar") },
    responsibilities: { en: lines("responsibilities_en"), ar: lines("responsibilities_ar") },
    requirements: { en: lines("requirements_en"), ar: lines("requirements_ar") },
  };

  const today = new Date().toISOString().slice(0, 10);
  const { error } = await supabaseAdmin().from("jobs").insert({ slug, active: true, posted: today, data });
  if (error) throw new Error(error.message);

  revalidatePath("/admin/jobs");
  revalidatePath("/en/careers");
  revalidatePath("/ar/careers");
  redirect("/admin/jobs");
}

export async function setJobActive(formData: FormData) {
  if (!(await isAuthenticated())) throw new Error("Unauthorized");
  const slug = String(formData.get("slug") ?? "");
  const active = String(formData.get("active") ?? "") === "true";
  if (!slug) throw new Error("Missing slug");

  const { error } = await supabaseAdmin().from("jobs").update({ active }).eq("slug", slug);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/jobs");
  revalidatePath("/en/careers");
  revalidatePath("/ar/careers");
}
