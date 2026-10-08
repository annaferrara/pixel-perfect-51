import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import hero from "@/assets/hero.jpg";
import sala from "@/assets/sala.jpg";
import taranto from "@/assets/taranto.jpg";
import { SiteShell } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { SITE, SPECIALITA } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Osteria Tarantina — Cucina tarantina, pugliese e di pesce" },
      { name: "description", content: "Ristorante tarantino con specialità di mare e cucina pugliese: cozze alla tarantina, tiella e pesce del giorno. Prenota con una telefonata." },
      { property: "og:title", content: "Osteria Tarantina — I sapori autentici di Taranto" },
      { property: "og:description", content: "Cucina tarantina, specialità di mare e tradizione pugliese in un'atmosfera semplice e accogliente." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img src={hero} alt="Cozze alla tarantina servite su un tavolo in legno affacciato sul mare di Taranto" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-wood/85 via-wood/55 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow !text-sea">Osteria · Taranto</p>
            <h1 className="mt-4 text-5xl !text-primary-foreground sm:text-6xl md:text-7xl">I sapori autentici di Taranto, a tavola.</h1>
            <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl">
              Cucina tarantina, specialità di mare e tradizione pugliese in un'atmosfera semplice e accogliente.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/menu" className="btn-sea">Scopri il Menù</Link>
              <a href={SITE.phoneHref} className="btn-book !bg-transparent border border-primary-foreground/70 hover:!bg-sea-deep">
                <Phone className="h-4 w-4" aria-hidden /> Prenota Ora
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-24 text-center md:py-32">
        <Reveal>
          <p className="eyebrow">La filosofia</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Da noi ogni piatto racconta una storia.</h2>
          <div className="mx-auto my-8 h-px w-16 bg-sea-deep" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            Qui si cucina come si è sempre fatto a Taranto: le cozze del Mar Piccolo, il pesce che arriva la mattina,
            l'olio buono e il pane da spezzare con le mani. Niente di complicato — solo ricette che conosciamo da sempre
            e ingredienti che rispettiamo. Ci si siede, si chiacchiera, si mangia bene.
          </p>
        </Reveal>
      </section>

      <div className="wave-divider" />

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal className="mb-14 text-center">
            <p className="eyebrow">Dalla nostra cucina</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Le nostre specialità</h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SPECIALITA.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <article className="group h-full overflow-hidden rounded-lg border border-wood/10 bg-card transition-shadow hover:shadow-xl">
                  <div className="aspect-square overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/menu" className="btn-book">Vedi tutto il menù</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <Reveal>
          <div className="relative">
            <img src={sala} alt="La sala dell'Osteria Tarantina con tavoli in legno" loading="lazy" width={1024} height={1024} className="rounded-lg object-cover shadow-lg" />
            <img src={taranto} alt="Il lungomare di Taranto al tramonto" loading="lazy" width={1600} height={912} className="absolute -bottom-8 -right-4 hidden w-1/2 rounded-lg border-4 border-background shadow-lg md:block" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Il Ristorante</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Una storia di mare e tradizione</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            L'Osteria Tarantina nasce dall'amore per la nostra città e per il suo mare. Tavoli di legno, apparecchiatura semplice,
            una cucina dove si preparano i piatti di sempre con ingredienti di qualità.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            È un posto dove tornare: per una cena in famiglia, un pranzo tra amici o un piatto di cozze come si deve.
          </p>
          <Link to="/il-ristorante" className="mt-8 inline-block border-b-2 border-sea-deep pb-1 font-semibold text-wood transition-colors hover:text-sea-deep">
            Scopri la nostra osteria →
          </Link>
        </Reveal>
      </section>

      <section className="wood-texture py-20 text-center">
        <Reveal className="mx-auto max-w-2xl px-4">
          <h2 className="text-4xl !text-primary-foreground md:text-5xl">Ti aspettiamo a tavola</h2>
          <p className="mt-4 text-primary-foreground/80">Per prenotare basta una telefonata.</p>
          <a href={SITE.phoneHref} className="btn-sea mt-8 !px-10 !py-4 !text-base">
            <Phone className="h-5 w-5" aria-hidden /> Prenota Ora
          </a>
        </Reveal>
      </section>
    </SiteShell>
  );
}
