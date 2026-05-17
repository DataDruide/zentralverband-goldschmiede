import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-foreground">
            Zentralverband der Deutschen <br />Gold- & Silberschmiede e.V.
          </p>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Seit 1900 vertreten wir die Interessen der Goldschmiede und Silberschmiede in
            Deutschland – auf politischer, wirtschaftlicher und kultureller Ebene.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Kontakt</h4>
          <address className="mt-3 not-italic text-sm leading-relaxed text-foreground/80">
            Altmarkt 17<br />
            03046 Cottbus<br />
            Tel.: 0355 / 29065035<br />
            <a href="mailto:info@zentralverband-goldschmiede.de" className="hover:text-accent">
              info@zentralverband-goldschmiede.de
            </a>
          </address>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Rechtliches</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/kontakt" className="hover:text-accent">Kontakt</Link></li>
            <li><Link to="/impressum" className="hover:text-accent">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-accent">Datenschutz</Link></li>
            <li><Link to="/barrierefreiheit" className="hover:text-accent">Barrierefreiheit</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="container-prose flex flex-col sm:flex-row justify-between gap-2 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Zentralverband der Deutschen Gold- & Silberschmiede e.V.</span>
          <span>Schmuck und Gerät von Menschen für Menschen.</span>
        </div>
      </div>
    </footer>
  );
}
