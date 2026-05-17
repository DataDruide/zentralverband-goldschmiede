import { Link } from "@tanstack/react-router";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-prose flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span
            aria-hidden
            className="grid h-10 w-10 place-items-center rounded-full border border-accent/60 text-accent transition-transform group-hover:rotate-45"
          >
            <span className="block h-3 w-3 rounded-full bg-accent" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-foreground">Zentralverband</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
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
          className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="container-prose flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground/80 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block self-start rounded-full border border-accent px-4 py-2 text-sm text-accent"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
