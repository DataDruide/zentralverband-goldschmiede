import { createServerFn } from "@tanstack/react-start";

export type GoldPriceResult =
  | { ok: true; eur_per_oz: number; eur_per_g: number; change_pct: number | null; updated: string }
  | { ok: false; error: string };

export const getGoldPrice = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoldPriceResult> => {
    try {
      const res = await fetch("https://data-asg.goldprice.org/dbXRates/EUR", {
        headers: { Accept: "application/json", "User-Agent": "ZV-Goldschmiede/1.0" },
      });
      if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
      const json = (await res.json()) as {
        items?: Array<{ xauPrice?: number; chgXau?: number; pcXau?: number }>;
        ts?: number;
      };
      const item = json.items?.[0];
      if (!item?.xauPrice) return { ok: false, error: "Keine Daten" };
      const eur_per_oz = Number(item.xauPrice);
      const eur_per_g = eur_per_oz / 31.1034768;
      return {
        ok: true,
        eur_per_oz,
        eur_per_g,
        change_pct: typeof item.pcXau === "number" ? item.pcXau : null,
        updated: new Date(json.ts ?? Date.now()).toISOString(),
      };
    } catch (err) {
      return { ok: false, error: err instanceof Error ? err.message : "Netzwerkfehler" };
    }
  },
);
