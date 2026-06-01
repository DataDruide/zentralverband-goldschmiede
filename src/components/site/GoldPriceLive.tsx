import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { TrendingUp, TrendingDown, Loader2 } from "lucide-react";
import { getGoldPrice } from "@/lib/goldprice.functions";

export function GoldPriceLive() {
  const fn = useServerFn(getGoldPrice);
  const { data, isLoading } = useQuery({
    queryKey: ["goldprice"],
    queryFn: () => fn(),
    staleTime: 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
  });

  const fmt = (n: number) =>
    new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(n);

  if (isLoading) {
    return (
      <div className="mt-5 flex items-center gap-2 text-muted-foreground">
        <Loader2 size={18} className="animate-spin" />
        <span className="text-sm">Live-Kurs lädt…</span>
      </div>
    );
  }

  if (!data?.ok) {
    return (
      <div className="mt-5">
        <p className="font-display text-2xl sm:text-3xl text-muted-foreground">Kurs derzeit nicht verfügbar</p>
        <p className="mt-1 text-xs text-muted-foreground">Bitte später erneut versuchen.</p>
      </div>
    );
  }

  const change = data.change_pct;
  const up = (change ?? 0) >= 0;

  return (
    <>
      <p className="mt-5 font-display text-3xl sm:text-4xl tabular-nums">
        {fmt(data.eur_per_oz)} €
        <span className="text-base text-muted-foreground"> / oz</span>
      </p>
      <div className="mt-1 flex items-center gap-3 text-sm">
        <span className="text-muted-foreground tabular-nums">{fmt(data.eur_per_g)} € / g</span>
        {change !== null && (
          <span className={`inline-flex items-center gap-1 font-medium tabular-nums ${up ? "text-emerald-600" : "text-destructive"}`}>
            {up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {up ? "+" : ""}{fmt(change)} %
          </span>
        )}
      </div>
      <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-1">
        Stand: {new Date(data.updated).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })} Uhr
      </p>
    </>
  );
}
