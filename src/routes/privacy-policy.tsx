import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Osteria Tarantina" },
      { name: "description", content: "Informativa sulla privacy del sito Osteria Tarantina." },
      { property: "og:title", content: "Privacy Policy — Osteria Tarantina" },
      { property: "og:description", content: "Informativa sulla privacy del sito Osteria Tarantina." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="text-5xl">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-base leading-7">
  <p>
    La tua privacy è importante per noi. In questa pagina trovi
    informazioni su come vengono trattati i dati personali
    durante la navigazione sul sito dell’Osteria Tarantina.
  </p>

  <h2 className="text-2xl font-semibold">
    Titolare del trattamento
  </h2>
  <p>
    Il titolare del trattamento è Osteria Tarantina.
    Per richieste relative alla privacy, puoi contattarci
    utilizzando i recapiti ufficiali indicati nella pagina Contatti.
  </p>
</div>
    </SiteShell>
  ),
});
