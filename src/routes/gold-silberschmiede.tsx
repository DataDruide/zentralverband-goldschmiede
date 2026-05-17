import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/gold-silberschmiede")({
  head: () => ({
    meta: [
      { title: "Gold- & Silberschmiede — Ihr Fachmann für Schmückendes" },
      {
        name: "description",
        content: "Finden Sie Ihren Gold- und Silberschmied in Ihrer Nähe – individuelle Anfertigungen, Umarbeitungen, Service und Reparatur.",
      },
    ],
  }),
  component: GoldSilberPage,
});

function GoldSilberPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mitgliedsbetriebe"
        title="Gold- & Silberschmiede"
        intro="Ihr Fachmann für Schmückendes – individuelle Anfertigungen, Umarbeitungen, Verkauf, Service und Reparatur."
      />
      <section className="container-prose py-16 grid gap-12 lg:grid-cols-2">
        <div className="space-y-5 text-foreground/85 leading-relaxed">
          <p>
            Ihren Gold- und Silberschmied finden Sie auch in Ihrer Nähe. Er ist Ihr Fachmann für
            individuelle Anfertigungen, Umarbeitungen, Verkauf, Service und Reparatur. Ihr
            Fachmann für Schmückendes!
          </p>
          <p>
            Schauen Sie unter »Mitgliedsbetriebe« – dort sind unsere organisierten Betriebe
            aufgeführt. Sie können sich vertrauensvoll an die dort angegebenen Adressen wenden.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-accent transition-colors"
          >
            Mitgliedsbetrieb suchen
          </Link>
        </div>
        <div className="rounded-sm border border-border bg-card p-8">
          <h3 className="font-display text-2xl">Leistungen unserer Betriebe</h3>
          <ul className="mt-6 grid gap-3 text-sm text-foreground/80">
            {[
              "Individuelle Anfertigungen",
              "Trauringe & Ehrungsschmuck",
              "Umarbeitungen aus eigenem Material",
              "Reparatur und Service",
              "Beratung zu Edelmetallen & Edelsteinen",
              "Restaurierung & Bewertung",
            ].map((s) => (
              <li key={s} className="flex gap-3 border-b border-border/60 pb-3 last:border-0">
                <span className="text-accent">◆</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
