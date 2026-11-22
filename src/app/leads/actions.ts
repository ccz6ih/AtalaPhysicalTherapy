"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { refresh } from "next/cache";
import { LEADS_COOKIE, cookieValid, passwordMatches, sessionToken, updateLead } from "@/lib/leads";

async function requireSession() {
  const jar = await cookies();
  if (!cookieValid(jar.get(LEADS_COOKIE)?.value)) throw new Error("Not signed in");
}

export async function signIn(formData: FormData) {
  const pw = String(formData.get("password") || "");
  if (!passwordMatches(pw)) {
    await new Promise((r) => setTimeout(r, 900));
    redirect("/leads/?error=1");
  }
  const jar = await cookies();
  jar.set(LEADS_COOKIE, sessionToken(), { httpOnly: true, secure: true, sameSite: "strict", path: "/leads", maxAge: 60 * 60 * 24 * 30 });
  redirect("/leads/");
}

export async function signOut() {
  const jar = await cookies();
  jar.delete({ name: LEADS_COOKIE, path: "/leads" });
  redirect("/leads/");
}

export async function setStatus(formData: FormData) {
  await requireSession();
  await updateLead(Number(formData.get("id")), { status: String(formData.get("status") || "") });
  refresh();
}

export async function saveNotes(formData: FormData) {
  await requireSession();
  await updateLead(Number(formData.get("id")), { notes: String(formData.get("notes") || "") });
  refresh();
}
