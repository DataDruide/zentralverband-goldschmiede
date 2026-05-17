import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-border bg-secondary/60">
      <div className="container-prose grid gap-8 sm:gap-10 py-10 sm:py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-xl sm:text-2xl text-foreground text-balance">
            Zentralverband der Deutschen Gold- & Silberschmiede e.V.
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed text-pretty">
            Seit 1900 vertreten wir die Interessen der Goldschmiede und Silberschmiede in
            Deutschland – auf politischer, wirtschaftlicher und kultureller Ebene.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Kontakt</h4>
          <address className="mt-3 not-italic text-sm leading-relaxed text-foreground/80">
            Altmarkt 17<br />
            03046 Cottbus<br />
            <a href="tel:+4935529065035" className="hover:text-accent transition-colors">
              0355 / 29065035
            </a><br />
            <a href="mailto:info@zentralverband-goldschmiede.de" className="hover:text-accent transition-colors break-all">
              info@zentralverband-goldschmiede.de
            </a>
          </address>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Rechtliches</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/kontakt" className="hover:text-accent transition-colors">Kontakt</Link></li>
            <li><Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link></li>
            <li><Link to="/barrierefreiheit" className="hover:text-accent transition-colors">Barrierefreiheit</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-prose flex flex-col sm:flex-row sm:justify-between gap-2 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Zentralverband der Deutschen Gold- & Silberschmiede e.V.</span>
          <span className="italic">Schmuck und Gerät von Menschen für Menschen.</span>
        </div>
      </div>
    </footer>
  );
}
