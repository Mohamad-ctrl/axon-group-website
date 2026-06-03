"use server";

import { revalidatePath } from "next/cache";
import { isAuthenticated } from "@/lib/admin-auth";
import { supabaseAdmin } from "@/lib/supabase";
import { isStage } from "@/lib/stages";

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
