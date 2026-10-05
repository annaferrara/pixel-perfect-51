import { createFileRoute } from "@tanstack/react-router";
import spaghetti from "@/assets/spaghetti.jpg";
import { PageHero, SiteShell } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { MENU } from "@/content/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menù — Osteria Tarantina | Specialità tarantine e di pesce" },
      { name: "description", content: "Il menù dell'Osteria Tarantina: antipasti di mare, primi, secondi di pesce, contorni, dolci e vini pugliesi." },
      { property: "og:title", content: "Il nostro Menù — Osteria Tarantina" },
      { property: "og:description", content: "I sapori della tradizione tarantina, il profumo del mare e la semplicità della cucina pugliese." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <SiteShell>
      <PageHero eyebrow="Menù" title="Il nostro Menù" image={spaghetti}
        subtitle="I sapori della tradizione tarantina, il profumo del mare e la semplicità della cucina pugliese." />
      <div className="mx-auto max-w-4xl px-4 py-20 md:px-8">
        <nav className="mb-16 flex flex-wrap justify-center gap-3" aria-label="Categorie">
          {MENU.map((c) => (
            <a key={c.category} href={`#${c.category.toLowerCase()}`} className="rounded-full border border-wood/20 px-4 py-2 text-sm text-wood transition-colors hover:border-sea-deep hover:bg-secondary">
              {c.category}
            </a>
          ))}
        </nav>
        <div className="space-y-20">
          {MENU.map((c) => (
            <Reveal key={c.category}>
              <section id={c.category.toLowerCase()} className="scroll-mt-28">
                <div className="mb-8 flex items-center gap-4">
                  <h2 className="text-4xl md:text-5xl">{c.category}</h2>
                  <div className="h-px flex-1 bg-sea" />
                </div>
                <ul className="space-y-7">
                  {c.items.map((it) => (
                    <li key={it.name}>
                      <div className="flex items-baseline gap-3">
                        <h3 className="text-2xl">{it.name}</h3>
                        <span className="mb-1 flex-1 border-b border-dotted border-wood/30" />
                        <span className="font-serif text-xl text-wood">{it.price}</span>
                      </div>
                      <p className="mt-1 text-muted-foreground">{it.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
        <p className="mt-20 rounded-lg bg-secondary px-6 py-5 text-center font-serif text-xl italic text-secondary-foreground">
          Il menù può variare in base alla disponibilità e alla stagionalità degli ingredienti.
        </p>
      </div>
    </SiteShell>
  );
}
