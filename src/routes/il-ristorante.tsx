import { createFileRoute } from "@tanstack/react-router";
import sala from "@/assets/tavoli.jpg";
import salaBassa from "@/assets/sala.jpg";
import taranto from "@/assets/taranto.jpg";
import ingredienti from "@/assets/ingredienti.jpg";
import quadro from "@/assets/quadro.jpg";
import hero from "@/assets/hero.jpg";
import cozze from "@/assets/cozze.jpg";
import tiella from "@/assets/tiella.jpg";
import pesce from "@/assets/pesce.jpg";
import { PageHero, SiteShell } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/il-ristorante")({
  head: () => ({
    meta: [
      { title: "Il Ristorante — Osteria Tarantina" },
      { name: "description", content: "La storia e la filosofia dell'Osteria Tarantina: cucina tradizionale pugliese, pesce fresco e il legame con Taranto." },
      { property: "og:title", content: "La nostra osteria — Osteria Tarantina" },
      { property: "og:description", content: "Storia, filosofia e territorio di un'osteria di tradizione a Taranto." },
    ],
  }),
  component: Ristorante,
});

const GALLERY = [
  { src: sala, alt: "La sala con i tavoli in legno", cls: "md:col-span-2 md:row-span-2" },
  { src: cozze, alt: "Cozze alla tarantina", cls: "" },
  { src: quadro, alt: "Ingredienti pugliesi: olio, pomodorini, taralli", cls: "" },
  { src: pesce, alt: "Pesce del giorno alla griglia", cls: "" },
  { src: hero, alt: "Un tavolo affacciato sul mare", cls: "md:col-span-2" },
  { src: tiella, alt: "Tiella di riso, patate e cozze", cls: "" },
];

function Block({ eyebrow, title, children, image, alt, reverse }: { eyebrow: string; title: string; children: React.ReactNode; image: string; alt: string; reverse?: boolean }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
      <Reveal className={reverse ? "md:order-2" : ""}>
        <img src={image} alt={alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover shadow-lg" />
      </Reveal>
      <Reveal delay={120}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-4xl md:text-5xl">{title}</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">{children}</div>
      </Reveal>
    </section>
  );
}

function Ristorante() {
  return (
    <SiteShell>
      <PageHero eyebrow="Il Ristorante" title="La nostra osteria" image={sala} />
     <Block eyebrow="La nostra storia" title="Una cucina di famiglia" image={salaBassa} alt="Interno dell'osteria">
        <p>L'Osteria Tarantina è nata per riportare in tavola i piatti che abbiamo sempre mangiato a casa: quelli delle domeniche, delle feste, delle sere d'estate vicino al mare.</p>
        <p>Pochi tavoli, un'accoglienza sincera e una cucina che non ha bisogno di effetti speciali.</p>
      </Block>
      <div className="bg-cream">
       <Block reverse eyebrow="La nostra storia" title="Una cucina di famiglia" image={ingredienti} alt="Interno dell'osteria">
          <p>Il pesce arriva fresco, le verdure seguono le stagioni, l'olio è pugliese. Scegliamo bene e poi lasciamo parlare gli ingredienti.</p>
          <p>Le ricette sono quelle della tradizione, preparate con cura e senza fretta.</p>
        </Block>
      </div>
      <Block eyebrow="Il territorio" title="Taranto, la città dei due mari" image={taranto} alt="Il lungomare di Taranto con le barche dei pescatori">
        <p>Mar Grande e Mar Piccolo, le cozze, i pescatori della città vecchia: la nostra cucina viene da qui.</p>
        <p>Ogni piatto è un piccolo racconto di Taranto e della Puglia.</p>
      </Block>
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Uno sguardo all'osteria</h2>
        </Reveal>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((g) => (
            <div key={g.alt} className={`group overflow-hidden rounded-lg ${g.cls}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
