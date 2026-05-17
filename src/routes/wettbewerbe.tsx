import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/wettbewerbe")({
  head: () => ({
    meta: [
      { title: "Wettbewerbe" },
      { name: "description", content: "Wettbewerbe des Zentralverbandes." },
    ],
  }),
  component: WettbewerbePage,
});

function WettbewerbePage() {
  return (
    <>
      <PageHeader
        eyebrow="Auszeichnungen"
        title="Wettbewerbe"
        intro="Bühne für herausragendes Handwerk – nationale und internationale Wettbewerbe."
      />
      <section className="container-prose py-16">
        <div className="rounded-sm border border-dashed border-border bg-secondary/40 p-10 text-center">
          <h2 className="font-display text-3xl">Inhalte folgen</h2>
          <p className="mt-3 text-muted-foreground">
            Aktuelle Wettbewerbsausschreibungen werden hier zeitnah veröffentlicht.
          </p>
        </div>
      </section>
    </>
  );
}
