import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SkipLink } from "@/components/site/SkipLink";
import { LinkButton, Button } from "@/components/site/Button";
import { CookieBanner } from "@/components/site/CookieBanner";
import { AccessibilityPanel } from "@/components/site/AccessibilityPanel";
import { AuthProvider } from "@/hooks/useAuth";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="max-w-md text-center">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl">Seite nicht gefunden</h1>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground">
          Die von Ihnen aufgerufene Seite existiert nicht oder wurde verschoben.
        </p>
        <LinkButton to="/" className="mt-6">Zur Startseite</LinkButton>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl sm:text-3xl">Diese Seite konnte nicht geladen werden</h1>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.
        </p>
        <Button onClick={() => { router.invalidate(); reset(); }} className="mt-6">
          Erneut versuchen
        </Button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zentralverband der Deutschen Gold- & Silberschmiede e.V." },
      {
        name: "description",
        content:
          "Seit 1900 vertritt der Zentralverband die Interessen der Goldschmiede und Silberschmiede in Deutschland – politisch, wirtschaftlich und kulturell.",
      },
      { property: "og:title", content: "Zentralverband der Deutschen Gold- & Silberschmiede e.V." },
      {
        property: "og:description",
        content: "Dachverband des Gold- und Silberschmiedehandwerks in Deutschland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zentralverband der Deutschen Gold- & Silberschmiede e.V." },
      { name: "description", content: "Zentralverband vertritt die Interessen aller Goldschmiedinnen und Silberschmiedinnen in Deutschland – auf politischer, wirtschaftlicher und kultureller Ebene." },
      { property: "og:description", content: "Zentralverband vertritt die Interessen aller Goldschmiedinnen und Silberschmiedinnen in Deutschland – auf politischer, wirtschaftlicher und kultureller Ebene." },
      { name: "twitter:description", content: "Zentralverband vertritt die Interessen aller Goldschmiedinnen und Silberschmiedinnen in Deutschland – auf politischer, wirtschaftlicher und kultureller Ebene." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d15018ac-35eb-4b70-a4a0-37d78b7d3c91/id-preview-b3e6671d--51d12d03-d068-4cf1-a3ff-36c5cc334885.lovable.app-1779714130584.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d15018ac-35eb-4b70-a4a0-37d78b7d3c91/id-preview-b3e6671d--51d12d03-d068-4cf1-a3ff-36c5cc334885.lovable.app-1779714130584.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="flex min-h-screen flex-col">
          <SkipLink />
          <SiteHeader />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            <Outlet />
          </main>
          <SiteFooter />
          <CookieBanner />
          <AccessibilityPanel />
          <Toaster position="top-right" richColors />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}
