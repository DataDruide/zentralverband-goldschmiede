import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({ email: z.string().email().max(255) });

export const lookupPunzen = createServerFn({ method: "POST" })
  .inputValidator((input) => Input.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.PUNZEN_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "PUNZEN_API_KEY nicht konfiguriert" };
    }
    try {
      const res = await fetch(
        "https://gnufywlflvxvfmczvylu.supabase.co/functions/v1/account-lookup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
          },
          body: JSON.stringify({ email: data.email }),
        },
      );
      const text = await res.text();
      let payload: unknown = null;
      try { payload = text ? JSON.parse(text) : null; } catch { payload = text; }
      if (!res.ok) {
        return { ok: false as const, status: res.status, error: typeof payload === "string" ? payload : (payload as { error?: string })?.error ?? `HTTP ${res.status}` };
      }
      return { ok: true as const, data: payload };
    } catch (err) {
      return { ok: false as const, error: err instanceof Error ? err.message : "Netzwerkfehler" };
    }
  });
