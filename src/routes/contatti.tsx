import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import taranto from "@/assets/taranto.jpg";
import { PageHero, SiteShell } from "@/components/site/Layout";
import { SITE } from "@/content/site";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Osteria Tarantina | Prenota con una telefonata" },
      { name: "description", content: "Indirizzo, orari e telefono dell'Osteria Tarantina. Prenota il tuo tavolo chiamandoci." },
      { property: "og:title", content: "Vieni a trovarci — Osteria Tarantina" },
      { property: "og:description", content: "Telefono, indirizzo e orari dell'Osteria Tarantina a Taranto." },
    ],
  }),
  component: Contatti,
});

function Contatti() {
  const rows = [
    { icon: Phone, label: "Telefono", value: <a href={SITE.phoneHref} className="hover:text-sea-deep">{SITE.phoneLabel}</a> },
    {
  icon: MapPin,
  label: "Indirizzo",
  value: (
    <>
      <span>{SITE.address}</span>
      <span className="mt-1 block text-sm text-muted-foreground">
        {SITE.parking}
      </span>
    </>
  ),
},
    { icon: Clock, label: "Orari", value: SITE.hours },
    { icon: Mail, label: "Email", value: SITE.email },
  ];
  return (
    <SiteShell>
      <PageHero eyebrow="Contatti" title="Vieni a trovarci" image={taranto} />
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="text-4xl">Osteria Tarantina</h2>
          <ul className="mt-8 space-y-6">
            {rows.map((r) => (
              <li key={r.label} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-sea-deep">
                  <r.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="eyebrow">{r.label}</p>
                  <p className="mt-1 whitespace-pre-line text-lg text-wood">{r.value}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href={SITE.phoneHref} className="btn-book mt-10 w-full !py-5 !text-base sm:w-auto sm:!px-12">
            <Phone className="h-5 w-5" aria-hidden /> Prenota Ora
          </a>
          <p className="mt-3 text-sm text-muted-foreground">Le prenotazioni si effettuano solo telefonicamente.</p>
        </div>
        <div className="min-h-[380px] overflow-hidden rounded-lg border border-wood/15">
          {/* Sostituire SITE.mapQuery con l'indirizzo reale */}
          <iframe
            title="Mappa Osteria Tarantina"
            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
            className="h-full min-h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteShell>
  );
}
