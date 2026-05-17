import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Zentralverband der Deutschen Gold- & Silberschmiede e.V." },
      { name: "description", content: "Kontakt zur Geschäftsstelle des Zentralverbandes in Cottbus." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader eyebrow="Kontakt" title="Schreiben Sie uns" intro="Wir freuen uns über Ihre Anfrage – telefonisch, per E-Mail oder über das Formular." />
      <section className="container-prose py-16 grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-2xl">Zentralverband der Deutschen Gold- & Silberschmiede e.V.</h3>
            <address className="mt-4 not-italic text-foreground/85 leading-relaxed">
              Altmarkt 17<br />
              03046 Cottbus<br />
              Tel.: 0355 / 29065035<br />
              Fax: 0355 / 790 307<br />
              <a href="mailto:info@zentralverband-goldschmiede.de" className="text-accent hover:underline">
                info@zentralverband-goldschmiede.de
              </a>
            </address>
          </div>
          <div className="rounded-sm border border-border bg-card p-6">
            <h4 className="font-display text-lg">Öffnungszeiten</h4>
            <dl className="mt-3 grid grid-cols-[max-content_1fr] gap-x-6 gap-y-1 text-sm text-foreground/80">
              <dt>Mo – Do</dt><dd>07:30 – 16:00 Uhr</dd>
              <dt>Fr</dt><dd>07:30 – 12:00 Uhr</dd>
            </dl>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-sm border border-border bg-card p-8 space-y-4"
        >
          {sent ? (
            <div className="text-center py-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Vielen Dank</p>
              <h3 className="mt-3 font-display text-2xl">Ihre Nachricht wurde gesendet.</h3>
              <p className="mt-2 text-sm text-muted-foreground">Wir melden uns zeitnah bei Ihnen.</p>
            </div>
          ) : (
            <>
              <Field label="Ihr Name *" name="name" required />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Straße" name="street" />
                <Field label="PLZ" name="zip" />
              </div>
              <Field label="Ort" name="city" />
              <Field label="E-Mail *" name="email" type="email" required />
              <div>
                <label className="text-sm text-foreground/80">Ihre Mitteilung *</label>
                <textarea required rows={5} className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:border-accent" />
              </div>
              <label className="flex gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5" />
                Ich habe die Datenschutzerklärung gelesen und akzeptiert.
              </label>
              <button type="submit" className="w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-accent transition-colors">
                Absenden
              </button>
              <p className="text-xs text-muted-foreground">* Pflichtfelder</p>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-foreground/80">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:border-accent"
      />
    </div>
  );
}
