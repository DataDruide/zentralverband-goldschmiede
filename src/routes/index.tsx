import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-goldsmith.jpg";
import { ArrowUpRight, Award, GraduationCap, Leaf, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zentralverband der Deutschen Gold- & Silberschmiede e.V." },
      {
        name: "description",
        content:
          "Dachverband für das Goldschmiede- und Silberschmiedehandwerk in Deutschland – Tradition seit 1900, Verbraucherschutz, Ausbildung und Nachhaltigkeit.",
      },
    ],
  }),
  component: HomePage,
});

const newsItems = [
  {
    date: "13.05.2026",
    title: "Vortrag der Innung der Gold- und Silberschmiede München und Oberbayern am 13.06.2026",
    excerpt:
      "Am Samstag, den 13. Juni 2026 veranstaltet die Gold- und Silberschmiedeinnung München/Oberbayern einen kunsthistorischen Vortrag: »Viktorianisch und Art Deco«.",
  },
  {
    date: "12.05.2026",
    title: "Frühjahrstagung 09. Mai 2026 in Würzburg",
    excerpt:
      "Am 09. Mai 2026 trafen sich 39 Delegierte, Gäste und Ehrenmitglieder zur Frühjahrstagung des Zentralverbandes in der gastfreundlichen Stadt Würzburg.",
  },
  {
    date: "Goldpreis",
    title: "Der aktuelle Goldpreis mit Entwicklungsverlauf",
    excerpt:
      "Aktuelle Notierungen und Verlauf für Mitglieder – ein verlässlicher Indikator für Kalkulation und Beratung.",
  },
];

const highlights = [
  {
    icon: Award,
    title: "Ja zum Meister",
    text: "Der Meistertitel steht für Qualität, Verbraucherschutz und nachhaltiges Handwerk.",
  },
  {
    icon: Sparkles,
    title: "125 Jahre ZV",
    text: "Seit 1900 vertreten wir das Gold- und Silberschmiedehandwerk in Deutschland.",
  },
  {
    icon: GraduationCap,
    title: "Immaterielles Kulturerbe",
    text: "Unser Handwerk ist Teil des immateriellen Kulturerbes – über 5000 Jahre Tradition.",
  },
  {
    icon: Leaf,
    title: "Green Economy",
    text: "Wir treten ein für Ressourceneffizienz, Fairtrade und Zukunftslösungen.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-prose grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Seit 1900</p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05] text-foreground">
              Schmuck und Gerät
              <br />
              <span className="text-accent italic">von Menschen für Menschen.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Sich zu schmücken ist ein Grundbedürfnis des Menschen. Der Zentralverband vertritt
              die Interessen aller Goldschmiedinnen und Silberschmiedinnen in Deutschland – auf
              politischer, wirtschaftlicher und kultureller Ebene.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/der-zv"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent transition-colors"
              >
                Über den Verband
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/gold-silberschmiede"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                Mitgliedsbetrieb finden
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border shadow-[0_30px_80px_-40px_oklch(0.4_0.05_60/0.5)]">
              <img
                src={heroImage}
                alt="Goldschmiedearbeit auf der Werkbank"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <p className="text-xs uppercase tracking-[0.22em] opacity-80">Imagefilm 2024</p>
                <p className="font-display text-2xl mt-1">Unser Handwerk in Bewegung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container-prose py-20">
        <div className="grid gap-px bg-border rounded-sm overflow-hidden md:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card p-8 hover:bg-secondary/60 transition-colors">
              <Icon className="text-accent" size={28} strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container-prose grid gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Der Zentralverband</p>
            <h2 className="mt-3 font-display text-4xl">
              Ein Dachverband<br />mit Haltung.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Seit 1900 kann der Zentralverband seine Aufgaben in unterschiedlichen
              Gesellschaftsordnungen auf politischer, wirtschaftlicher und kultureller Ebene
              verwirklichen. Die über 5000-jährige Tradition des Berufes ist Verpflichtung für
              die Zukunft.
            </p>
            <p>
              Die Ausbildung und Weiterbildung ist ein besonderes Anliegen des Zentralverbandes.
              Der Meistertitel ist Ausdruck von Qualität und Kompetenz – er steht für
              Verbraucherschutz und Nachhaltigkeit. Auch tritt der Zentralverband für Green
              Economy und Zukunftslösungen mit Ressourceneffizienz ein.
            </p>
            <Link
              to="/der-zv"
              className="inline-flex items-center gap-1 text-accent hover:gap-2 transition-all"
            >
              Mehr über den ZV erfahren <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="container-prose py-20">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">Aktuell</p>
            <h2 className="mt-2 font-display text-4xl">Neuigkeiten & Termine</h2>
          </div>
          <Link to="/aktuell" className="text-sm text-accent hover:underline">
            Alle Meldungen →
          </Link>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3 rounded-sm overflow-hidden">
          {newsItems.map((item) => (
            <article key={item.title} className="bg-card p-8 flex flex-col">
              <time className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {item.date}
              </time>
              <h3 className="mt-4 font-display text-xl leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {item.excerpt}
              </p>
              <Link to="/aktuell" className="mt-6 text-sm text-accent hover:underline self-start">
                weiterlesen →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose pb-24">
        <div className="rounded-sm border border-accent/40 bg-card p-10 md:p-14 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Mitglied werden</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Werden Sie Teil unserer Gemeinschaft.
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-muted-foreground">
            Um eine Meinungsvielfalt zu erfahren und vertreten zu können, braucht der
            Zentralverband die Mitarbeit aller Goldschmiedinnen.
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent transition-colors"
          >
            Kontakt aufnehmen <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
