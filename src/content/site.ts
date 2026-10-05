// Tutti i contenuti modificabili del sito in un unico posto.
import cozze from "@/assets/cozze.jpg";
import tiella from "@/assets/tiella.jpg";
import pesce from "@/assets/pesce.jpg";
import spaghetti from "@/assets/spaghetti.jpg";

export const SITE = {
  name: "Osteria Tarantina",
  phoneHref: "tel:+39 344 1304 304", // TODO: inserire numero reale
  phoneLabel: "+39 344 1304 304",
  address: "Via D. Sesia, 4, 27020 Trivolzio PV",
 hours: [
  { day: "Lunedì", time: "Chiuso" },
  { day: "Martedì", time: "19:30 - 22:30" },
  { day: "Mercoledì", time: "19:30 - 22:30" },
  { day: "Giovedì", time: "12:30 - 14:30 / 19:30 - 22:30" },
  { day: "Venerdì", time: "12:30 - 14:30 / 19:30 - 22:30" },
  { day: "Sabato", time: "12:30 - 14:30 / 19:30 - 22:30" },
  { day: "Domenica", time: "12:30 - 14:00 / 19:30 - 22:00" },
],
  
  mapQuery: "Trivolzio, Italia", // TODO: sostituire con indirizzo reale
};

export const SPECIALITA = [
  { name: "Cozze alla Tarantina", image: cozze, description: "Cozze fresche preparate secondo la tradizione, con i sapori semplici e autentici della cucina tarantina." },
  { name: "Tiella alla Tarantina", image: tiella, description: "Il grande classico della tradizione locale, con riso, patate e cozze." },
  { name: "Pesce del giorno", image: pesce, description: "Pesce fresco selezionato in base alla disponibilità e preparato nel rispetto della materia prima." },
  { name: "Spaghetti alle cozze", image: spaghetti, description: "Un primo piatto semplice e ricco di sapore, ispirato ai profumi del mare di Taranto." },
];

export type MenuItem = { name: string; price: string; description: string };
export const MENU: { category: string; items: MenuItem[] }[] = [
  { category: "Antipasti", items: [
    { name: "Cozze crude del Mar Piccolo", price: "€ —", description: "Servite con limone, come vuole la tradizione." },
    { name: "Impepata di cozze", price: "€ —", description: "Cozze, pepe nero, prezzemolo e crostini di pane." },
    { name: "Antipasto della casa", price: "€ —", description: "Assaggi di mare e di terra secondo la giornata." },
  ]},
  { category: "Primi", items: [
    { name: "Spaghetti alle cozze", price: "€ —", description: "Cozze, pomodorini, aglio e prezzemolo." },
    { name: "Orecchiette alle cime di rapa", price: "€ —", description: "Pasta fresca, cime di rapa, acciughe e mollica." },
    { name: "Tiella alla Tarantina", price: "€ —", description: "Riso, patate e cozze al forno." },
  ]},
  { category: "Secondi", items: [
    { name: "Pesce del giorno", price: "€ —", description: "Alla griglia, al forno o all'acqua pazza." },
    { name: "Frittura di paranza", price: "€ —", description: "Pesce piccolo fritto, croccante e leggero." },
    { name: "Cozze alla Tarantina", price: "€ —", description: "Al sugo di pomodoro con pane abbrustolito." },
  ]},
  { category: "Contorni", items: [
    { name: "Patate al forno", price: "€ —", description: "Con rosmarino e olio extravergine pugliese." },
    { name: "Verdure di stagione", price: "€ —", description: "Grigliate o ripassate in padella." },
  ]},
  { category: "Dolci", items: [
    { name: "Pasticciotto", price: "€ —", description: "Pasta frolla e crema pasticcera." },
    { name: "Dolce della casa", price: "€ —", description: "Chiedete al personale la proposta del giorno." },
  ]},
  { category: "Bevande", items: [
    { name: "Vino della casa", price: "€ —", description: "Bianco, rosato o Primitivo, al calice o in caraffa." },
    { name: "Acqua minerale", price: "€ —", description: "Naturale o frizzante." },
    { name: "Birra artigianale pugliese", price: "€ —", description: "Selezione di birrifici locali." },
  ]},
];
