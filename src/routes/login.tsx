import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/site/Button";
import { useId, useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Mitglieder-Login" }, { name: "robots", content: "noindex" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const emailId = useId();
  const pwId = useId();

  return (
    <>
      <PageHeader
        eyebrow="Mitgliederbereich"
        title={mode === "login" ? "Anmelden" : "Konto anlegen"}
        intro="Geschützter Bereich für Mitglieder des Zentralverbandes."
      />
      <section className="container-prose py-12 sm:py-16">
        <div className="mx-auto max-w-md">
          <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
            <div
              role="tablist"
              aria-label="Anmeldemodus"
              className="flex gap-2 text-sm mb-6 p-1 rounded-full bg-secondary/60"
            >
              <button
                role="tab"
                aria-selected={mode === "login"}
                onClick={() => setMode("login")}
                className={`flex-1 rounded-full px-4 py-2 min-h-10 transition-colors ${
                  mode === "login" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-accent"
                }`}
              >
                Login
              </button>
              <button
                role="tab"
                aria-selected={mode === "register"}
                onClick={() => setMode("register")}
                className={`flex-1 rounded-full px-4 py-2 min-h-10 transition-colors ${
                  mode === "register" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-accent"
                }`}
              >
                Registrieren
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label htmlFor={emailId} className="block text-sm font-medium text-foreground/85">E-Mail</label>
                <input
                  id={emailId}
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1.5 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm min-h-11 hover:border-foreground/30"
                />
              </div>
              <div>
                <label htmlFor={pwId} className="block text-sm font-medium text-foreground/85">Passwort</label>
                <input
                  id={pwId}
                  type="password"
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  required
                  className="mt-1.5 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm min-h-11 hover:border-foreground/30"
                />
              </div>
              <Button type="submit" size="lg" fullWidth>
                {mode === "login" ? "Anmelden" : "Konto anlegen"}
              </Button>
              {mode === "login" && (
                <p className="text-center text-xs text-muted-foreground">
                  <a href="#" className="hover:text-accent underline-offset-2 hover:underline">Passwort vergessen?</a>
                </p>
              )}
            </form>
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            Hinweis: Die echte Anmeldung wird im nächsten Schritt mit Lovable Cloud aktiviert.
          </p>
        </div>
      </section>
    </>
  );
}
