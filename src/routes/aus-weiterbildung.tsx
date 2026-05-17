import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/aus-weiterbildung")({
  head: () => ({
    meta: [
      { title: "Aus- & Weiterbildung" },
      { name: "description", content: "Aus- und Weiterbildung im Gold- und Silberschmiedehandwerk." },
    ],
  }),
  component: AusWeiterPage,
});

function AusWeiterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nachwuchs"
        title="Aus- & Weiterbildung"
        intro="Der Meistertitel ist Ausdruck von Qualität, Kompetenz, Verbraucherschutz und Nachhaltigkeit."
      />
      <section className="container-prose py-16 grid gap-12 lg:grid-cols-3">
        {[
          {
            title: "Ausbildung",
            text: "Die Ausbildung zur Goldschmiedin / zum Goldschmied ist ein besonderes Anliegen des Verbandes – fachlich fundiert und gestalterisch frei.",
          },
          {
            title: "Meistertitel",
            text: "Der Meistertitel steht für höchste handwerkliche Qualität und ist ein verlässliches Versprechen an die Kundschaft.",
          },
          {
            title: "Weiterbildung",
            text: "Wir bieten Weiterbildungen für Gestalter:innen, technische Fachkräfte und Inhaber:innen von Betrieben.",
          },
        ].map((b) => (
          <div key={b.title} className="rounded-sm border border-border bg-card p-8">
            <h3 className="font-display text-2xl">{b.title}</h3>
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{b.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
