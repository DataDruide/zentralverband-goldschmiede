import { createServerFn } from "@tanstack/react-start";

export type GoldPriceResult =
  | { ok: true; eur_per_oz: number; eur_per_g: number; change_pct: number | null; updated: string }
  | { ok: false; error: string };

// Public, no-key endpoints:
//  - https://api.gold-api.com/price/XAU       → { price: USD per ounce, updatedAt }
//  - https://api.frankfurter.dev/v1/latest?from=USD&to=EUR
export const getGoldPrice = createServerFn({ method: "GET" }).handler(
  async (): Promise<GoldPriceResult> => {
    try {
      const [goldRes, fxRes] = await Promise.all([
        fetch("https://api.gold-api.com/price/XAU", {
          headers: { Accept: "application/json" },
        }),
        fetch("https://api.frankfurter.dev/v1/latest?from=USD&to=EUR", {
          headers: { Accept: "application/json" },
        }),
      ]);
      if (!goldRes.ok) return { ok: false, error: `Gold HTTP ${goldRes.status}` };
      if (!fxRes.ok) return { ok: false, error: `FX HTTP ${fxRes.status}` };

      const gold = (await goldRes.json()) as { price?: number; updatedAt?: string };
      const fx = (await fxRes.json()) as { rates?: { EUR?: number } };

      const usdPerOz = Number(gold.price);
      const usdToEur = Number(fx.rates?.EUR);
      if (!usdPerOz || !usdToEur) return { ok: false, error: "Unvollständige Daten" };

      const eur_per_oz = usdPerOz * usdToEur;
      const eur_per_g = eur_per_oz / 31.1034768;

      return {
        ok: true,
        eur_per_oz,
        eur_per_g,
        change_pct: null,
        updated: gold.updatedAt ?? new Date().toISOString(),
      };
    } catch (err) {
      return { ok: false, error: err instanceof Error ? err.message : "Netzwerkfehler" };
    }
  },
);
