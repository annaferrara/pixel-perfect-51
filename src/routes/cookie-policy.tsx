import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/Layout";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Osteria Tarantina" },
      { name: "description", content: "Informativa sui cookie del sito Osteria Tarantina." },
      { property: "og:title", content: "Cookie Policy — Osteria Tarantina" },
      { property: "og:description", content: "Informativa sui cookie del sito Osteria Tarantina." },
      { name: "robots", content: "noindex" },
    ],
  }),
  
component: () => (
  <SiteShell>
    <section className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-5xl">Cookie Policy</h1>

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
          Per informazioni relative alla privacy e ai cookie,
          è possibile utilizzare i recapiti ufficiali indicati
          nella pagina Contatti del sito.
        </p>

        <h2 className="text-2xl font-semibold">
          2. Cosa sono i cookie
        </h2>
        <p>
          I cookie sono piccoli file di testo che i siti web
          possono memorizzare sul dispositivo dell’utente
          durante la navigazione. Esistono anche tecnologie
          simili che consentono di memorizzare o leggere
          informazioni sul dispositivo.
        </p>

        <h2 className="text-2xl font-semibold">
          3. Tipologie di cookie
        </h2>

        <h3 className="text-xl font-semibold">
          Cookie tecnici
        </h3>
        <p>
          Sono utilizzati, quando necessari, per consentire
          il funzionamento del sito, garantire la sicurezza
          e fornire le funzionalità richieste dall’utente.
          Per i cookie strettamente necessari non è normalmente
          richiesto il consenso preventivo, nei limiti previsti
          dalla normativa applicabile.
        </p>

        <h3 className="text-xl font-semibold">
          Cookie analitici
        </h3>
        <p>
          Possono essere utilizzati per ottenere informazioni
          aggregate sull’utilizzo del sito e migliorarne
          i contenuti. Se non rientrano nelle condizioni previste
          dalla normativa per essere assimilati ai cookie tecnici,
          vengono attivati soltanto dopo aver ottenuto il consenso
          dell’utente.
        </p>

        <h3 className="text-xl font-semibold">
          Cookie di profilazione e marketing
        </h3>
        <p>
          Possono essere utilizzati per analizzare le preferenze
          dell’utente o proporre contenuti pubblicitari
          personalizzati. Se presenti, vengono installati
          soltanto previo consenso, quando richiesto dalla legge.
        </p>

        <h2 className="text-2xl font-semibold">
          4. Cookie utilizzati da questo sito
        </h2>
        <p>
          I cookie e gli strumenti effettivamente utilizzati
          dipendono dalle funzionalità attive sul sito e dai
          servizi di terze parti eventualmente integrati.
          L’elenco aggiornato, con nome, finalità, durata
          e soggetto che li gestisce, deve essere verificato
          sulla configurazione reale del sito.
        </p>

        <h2 className="text-2xl font-semibold">
          5. Servizi di terze parti
        </h2>
        <p>
          Alcune funzionalità, se presenti, possono essere
          fornite da soggetti esterni, ad esempio servizi
          di mappe, statistiche o contenuti incorporati.
          Tali servizi possono utilizzare cookie o tecnologie
          analoghe secondo le rispettive informative.
        </p>

        <h2 className="text-2xl font-semibold">
          6. Gestione del consenso
        </h2>
        <p>
          Quando richiesto, al primo accesso viene mostrata
          un’interfaccia che permette di accettare, rifiutare
          o personalizzare i cookie non necessari. Le scelte
          dell’utente devono essere rispettate e il consenso
          deve poter essere revocato o modificato in seguito.
        </p>

        <h2 className="text-2xl font-semibold">
          7. Come gestire i cookie dal browser
        </h2>
        <p>
          L’utente può gestire o cancellare i cookie attraverso
          le impostazioni del proprio browser. La disattivazione
          dei cookie tecnici potrebbe compromettere alcune
          funzionalità del sito.
        </p>

        <h2 className="text-2xl font-semibold">
          8. Aggiornamenti
        </h2>
        <p>
          Questa Cookie Policy può essere aggiornata in caso
          di modifiche al sito, ai cookie utilizzati o alla
          normativa applicabile. La versione aggiornata sarà
          pubblicata su questa pagina.
        </p>
      </div>
    </section>
  </SiteShell>
),
});
