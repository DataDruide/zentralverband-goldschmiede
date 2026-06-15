import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "./Button";

const KEY = "zv-cookie-consent-v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      /* ignore */
    }
  }, []);

  if (!visible) return null;

  const decide = (value: "all" | "necessary") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed bottom-2 left-2 right-2 sm:bottom-5 sm:left-5 sm:right-5 z-50 mx-auto max-w-3xl rounded-xl sm:rounded-2xl border border-border bg-card/95 backdrop-blur shadow-[0_30px_80px_-40px_oklch(0.2_0.02_60/0.4)] p-3 sm:p-5"
    >
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
        <div className="flex-1 min-w-0">
          <p id="cookie-title" className="font-display text-sm sm:text-lg">
            <span className="accent-dot" />Datenschutz & Cookies
          </p>
          <p className="mt-1 text-[11px] leading-snug sm:text-sm sm:leading-relaxed text-muted-foreground">
            Technisch notwendige Cookies & – optional – Analyse. Details in der{" "}
            <Link to="/datenschutz" className="text-accent underline-offset-2 hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-row gap-2 sm:shrink-0">
          <Button variant="outline" size="sm" onClick={() => decide("necessary")} className="flex-1 sm:flex-none whitespace-nowrap">
            Nur notwendige
          </Button>
          <Button size="sm" onClick={() => decide("all")} className="flex-1 sm:flex-none whitespace-nowrap">
            Allen zustimmen
          </Button>
        </div>
      </div>
    </div>

  );
}
