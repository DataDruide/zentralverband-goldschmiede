import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: [{ title: "Datenschutz" }, { name: "description", content: "Datenschutzerklärung des Zentralverbandes." }] }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutz" />
      <section className="container-prose py-16 max-w-3xl space-y-5 text-foreground/85 leading-relaxed">
        <p>
          Wir freuen uns über Ihren Besuch auf unserer Website. Der Schutz Ihrer
          personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir
          Sie über die Verarbeitung Ihrer personenbezogenen Daten beim Besuch unserer Website.
        </p>
        <p>
          Verantwortlich für die Datenverarbeitung ist der Zentralverband der Deutschen Gold-
          und Silberschmiede e.V., Altmarkt 17, 03046 Cottbus.
        </p>
        <p className="text-muted-foreground text-sm">
          Vollständige Datenschutzerklärung folgt – bitte wenden Sie sich für Auskünfte gerne
          an die Geschäftsstelle.
        </p>
      </section>
    </>
  );
}
