import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, Phone, X, Anchor } from "lucide-react";
import { SITE } from "@/content/site";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/il-ristorante", label: "Il Ristorante" },
  { to: "/menu", label: "Menù" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-wood/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-serif text-2xl font-semibold text-wood">
          <img src={logo} alt="Osteria Tarantina" className="h-19 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principale">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium tracking-wide text-wood/80 transition-colors hover:text-sea-deep"
              activeProps={{ className: "text-sea-deep" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
<a href={SITE.phoneHref} className="btn-book w-full !py-4 !text-base text-white" style={{ backgroundColor: "#7394BF" }}>
            <Phone className="h-4 w-4" aria-hidden /> Prenota Ora
          </a>
          <button className="rounded-md p-2 text-wood md:hidden" onClick={() => setOpen(!open)} aria-label="Apri menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-wood/10 bg-background px-4 py-4 md:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
              className="block py-3 font-serif text-2xl text-wood" activeProps={{ className: "text-sea-deep" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="wood-texture text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-3xl">Osteria Tarantina</p>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/75">
            Cucina tarantina, specialità di mare e tradizione pugliese. Una tavola semplice, come a casa.
          </p>
        </div>
        <div>
          <p className="eyebrow !text-sea">Pagine</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-sea">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-sea">Contatti</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li><a href={SITE.phoneHref} className="hover:text-sea">{SITE.phoneLabel}</a></li>
            <li>
  {SITE.address}
  <div className="mt-1 text-xs text-primary-foreground/60">
    {SITE.parking}
  </div>
</li>
            <li>{SITE.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 pb-24 text-xs text-primary-foreground/70 md:flex-row md:px-8 md:pb-6">
          <p>© 2026 Osteria Tarantina — Tutti i diritti riservati</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-sea">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-sea">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobileBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-wood/10 bg-background/95 p-3 backdrop-blur md:hidden">
      <a href={SITE.phoneHref} className="btn-book w-full !py-4 !text-base">
        <Phone className="h-5 w-5" aria-hidden /> Prenota Ora — Chiama
      </a>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBookBar />
    </div>
  );
}

export function PageHero({ title, subtitle, image, eyebrow }: { title: string; subtitle?: string; image: string; eyebrow?: string }) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-wood/85 via-wood/40 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 md:px-8">
        {eyebrow && <p className="eyebrow !text-sea">{eyebrow}</p>}
        <h1 className="mt-2 text-5xl !text-primary-foreground md:text-7xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">{subtitle}</p>}
      </div>
    </section>
  );
}
