import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({ email: z.string().email().max(255) });

export type PunzenLookupResult =
  | { ok: true; data: Record<string, unknown> | null }
  | { ok: false; status?: number; error: string };


export const lookupPunzen = createServerFn({ method: "POST" })
  .inputValidator((input) => Input.parse(input))
  .handler(async ({ data }): Promise<PunzenLookupResult> => {
    const apiKey = process.env.PUNZEN_API_KEY;
    if (!apiKey) return { ok: false, error: "PUNZEN_API_KEY nicht konfiguriert" };
    try {
      const res = await fetch(
        "https://gnufywlflvxvfmczvylu.supabase.co/functions/v1/account-lookup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-api-key": apiKey },
          body: JSON.stringify({ email: data.email }),
        },
      );
      const text = await res.text();
      let payload: Record<string, unknown> | null = null;
      let raw: string | null = null;
      try { payload = text ? (JSON.parse(text) as Record<string, unknown>) : null; } catch { raw = text; }
      if (!res.ok) {
        const errMsg = (payload && typeof payload.error === "string" ? payload.error : raw) ?? `HTTP ${res.status}`;
        return { ok: false, status: res.status, error: errMsg };
      }
      return { ok: true, data: payload };
    } catch (err) {
      return { ok: false, error: err instanceof Error ? err.message : "Netzwerkfehler" };
    }
  });

