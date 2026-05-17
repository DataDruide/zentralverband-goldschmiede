import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum" }, { name: "description", content: "Impressum des Zentralverbandes." }] }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <section className="container-prose py-16 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-3 text-foreground/85">
          <p className="font-semibold">Zentralverband der Deutschen Gold- & Silberschmiede e.V.</p>
          <address className="not-italic leading-relaxed">
            Altmarkt 17<br />
            03046 Cottbus<br />
            Tel.: 0355 / 29065035<br />
            Fax: 0355 / 790 307<br />
            <a href="mailto:info@zentralverband-goldschmiede.de" className="text-accent hover:underline">
              info@zentralverband-goldschmiede.de
            </a>
          </address>
          <p className="text-sm text-muted-foreground">Registergericht: Amtsgericht Cottbus VR 5706 CB<br />USt-IdNr.: 66/273/00250</p>
        </div>
        <div className="lg:col-span-2 space-y-6 text-foreground/85 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl">Haftung für Inhalte</h2>
            <p className="mt-3">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
              Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">Haftung für Links</h2>
            <p className="mt-3">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl">Urheberrecht</h2>
            <p className="mt-3">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
              gekennzeichnet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
