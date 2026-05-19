import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/aktuell", label: "Aktuell" },
  { to: "/der-zv", label: "Der ZV" },
  { to: "/fortbildungen", label: "Fortbildungen" },
  { to: "/gold-silberschmiede", label: "Gold- & Silberschmiede" },
  { to: "/wettbewerbe", label: "Wettbewerbe" },
  { to: "/aus-weiterbildung", label: "Aus- & Weiterbildung" },
  { to: "/nachhaltigkeit", label: "Nachhaltigkeit" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-[var(--gold)] before:via-[var(--ember)] before:to-[var(--plum)]">
      <div className="container-prose flex items-center justify-between gap-3 py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0" onClick={() => setOpen(false)}>
          <span
            aria-hidden
            className="grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full border border-accent/60 text-accent transition-transform group-hover:rotate-45"
          >
            <span className="block h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-accent" />
          </span>
          <span className="flex flex-col leading-tight min-w-0">
            <span className="font-display text-base sm:text-lg text-foreground truncate">Zentralverband</span>
            <span className="hidden sm:block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-muted-foreground truncate">
              Deutsche Gold- & Silberschmiede e.V.
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-accent" }}
              className="px-3 py-2 text-sm text-foreground/80 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="ml-2 rounded-full border border-accent/70 px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Login
          </Link>
        </nav>

        <button
          type="button"
          className="xl:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="container-prose flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-accent" }}
                className="py-3 text-base border-b border-border/60 last:border-0 text-foreground/85 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 inline-flex items-center justify-center rounded-full border border-accent px-5 py-3 text-sm font-medium text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
