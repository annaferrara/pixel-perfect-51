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
          <strong>Ultimo aggiornamento:</strong> 9 ottobre 2026
        </p>

        <h2 className="text-2xl font-semibold">
          1. Titolare del trattamento
        </h2>
        <p>
          Il titolare del trattamento è Osteria Tarantina,
          con sede in Via Sesia 4, 27020 Trivolzio (PV), Italia.
          Per informazioni relative alla privacy è possibile
          contattare il titolare attraverso i recapiti ufficiali
          indicati nella pagina Contatti del sito.
        </p>

        <h2 className="text-2xl font-semibold">
          2. Dati personali raccolti
        </h2>
        <p>
          Durante la navigazione possono essere trattati dati
          tecnici necessari al funzionamento e alla sicurezza
          del sito, come informazioni relative al browser,
          al dispositivo e ai log del server.
        </p>
        <p>
          Se l’utente contatta l’osteria tramite telefono,
          email o eventuali moduli presenti sul sito, possono
          essere trattati i dati comunicati volontariamente,
          come nome, recapiti e contenuto della richiesta.
        </p>

        <h2 className="text-2xl font-semibold">
          3. Finalità del trattamento
        </h2>
        <p>I dati possono essere trattati per:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>garantire il funzionamento e la sicurezza del sito;</li>
          <li>rispondere alle richieste di informazioni;</li>
          <li>gestire eventuali richieste di prenotazione;</li>
          <li>adempiere agli obblighi previsti dalla legge.</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          4. Base giuridica
        </h2>
        <p>
          Il trattamento si basa, secondo i casi, sulle richieste
          dell’utente, sul legittimo interesse a garantire la
          sicurezza del sito, sul consenso quando richiesto
          e sull’adempimento degli obblighi di legge.
        </p>

        <h2 className="text-2xl font-semibold">
          5. Conservazione e sicurezza
        </h2>
        <p>
          I dati sono trattati con strumenti informatici e misure
          di sicurezza adeguate e sono conservati per il tempo
          necessario alle finalità per cui sono stati raccolti,
          nel rispetto degli obblighi normativi applicabili.
        </p>

        <h2 className="text-2xl font-semibold">
          6. Comunicazione dei dati
        </h2>
        <p>
          I dati possono essere trattati da fornitori tecnici
          autorizzati che supportano l’hosting, la manutenzione
          e la sicurezza del sito, nei limiti necessari
          all’erogazione dei rispettivi servizi. I dati non
          vengono venduti a terzi.
        </p>

        <h2 className="text-2xl font-semibold">
          7. Cookie e servizi esterni
        </h2>
        <p>
          Il sito può utilizzare strumenti tecnici necessari
          al proprio funzionamento. L’eventuale utilizzo di
          cookie analitici o di profilazione, mappe incorporate
          o altri servizi esterni dovrà essere descritto in
          modo specifico, con le modalità di consenso previste
          dalla normativa applicabile.
        </p>

        <h2 className="text-2xl font-semibold">
          8. Diritti dell’interessato
        </h2>
        <p>
          Nei casi previsti dal Regolamento UE 2016/679 (GDPR),
          l’utente può richiedere l’accesso ai propri dati,
          la rettifica, la cancellazione, la limitazione del
          trattamento, l’opposizione e, ove applicabile,
          la portabilità dei dati.
        </p>
        <p>
          È inoltre possibile proporre reclamo al Garante
          per la protezione dei dati personali. Per esercitare
          i propri diritti, è possibile contattare il titolare
          attraverso i recapiti ufficiali indicati nella
          pagina Contatti.
        </p>

        <h2 className="text-2xl font-semibold">
          9. Modifiche all’informativa
        </h2>
        <p>
          La presente informativa può essere aggiornata in caso
          di modifiche al sito o alle modalità di trattamento
          dei dati. La versione aggiornata sarà pubblicata
          su questa pagina.
        </p>
      </div>
    </section>
  </SiteShell>
),
});
