import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Mitglieder-Login" }, { name: "robots", content: "noindex" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <>
      <PageHeader
        eyebrow="Mitgliederbereich"
        title={mode === "login" ? "Anmelden" : "Konto anlegen"}
        intro="Geschützter Bereich für Mitglieder des Zentralverbandes."
      />
      <section className="container-prose py-16 max-w-md">
        <div className="rounded-sm border border-border bg-card p-8">
          <div className="flex gap-2 text-sm mb-6">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 rounded-full px-4 py-2 transition ${mode === "login" ? "bg-primary text-primary-foreground" : "border border-border text-foreground/70 hover:border-accent"}`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={`flex-1 rounded-full px-4 py-2 transition ${mode === "register" ? "bg-primary text-primary-foreground" : "border border-border text-foreground/70 hover:border-accent"}`}
            >
              Registrieren
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="text-sm text-foreground/80">E-Mail</label>
              <input type="email" required className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="text-sm text-foreground/80">Passwort</label>
              <input type="password" required className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:border-accent" />
            </div>
            <button type="submit" className="w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-accent transition-colors">
              {mode === "login" ? "Anmelden" : "Konto anlegen"}
            </button>
            {mode === "login" && (
              <p className="text-center text-xs text-muted-foreground">
                <a href="#" className="hover:text-accent">Passwort vergessen?</a>
              </p>
            )}
          </form>
        </div>
        <p className="mt-4 text-xs text-muted-foreground text-center">
          Hinweis: Die echte Anmeldung wird in einem nächsten Schritt mit Lovable Cloud aktiviert.
        </p>
      </section>
    </>
  );
}
