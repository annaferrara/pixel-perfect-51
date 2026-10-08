// Tutti i contenuti modificabili del sito in un unico posto.
import gratin from "@/assets/gratin.jpg";
import cavatelli2 from "@/assets/cavatelli2.jpg";
import pesce from "@/assets/pesce.jpg";
import spaghetti from "@/assets/spaghetti.jpg";

export const SITE = {
  name: "Osteria Tarantina",
  phoneHref: "tel:+39 344 1304 304",
  phoneLabel: "+39 344 1304 304",
  address: "Via D. Sesia, 4, 27020 Trivolzio PV",
  parking: "* Parcheggi disponibili in Via Sesia, 25",

  hours: `Lunedì  Chiuso
Martedì  19:30 - 22:30
Mercoledì  19:30 - 22:30
Giovedì  12:30 - 14:30 / 19:30 - 22:30
Venerdì  12:30 - 14:30 / 19:30 - 22:30
Sabato  12:30 - 14:30 / 19:30 - 22:30
Domenica  12:30 - 14:30 / 19:30 - 22:30`,

  mapQuery: "Via D. Sesia, 4, 27020 Trivolzio PV",
};

export const SPECIALITA = [
  {
    name: "Cozze al Gratin",
    image: gratin,
    description:
      "Cozze fresche preparate secondo la tradizione, gratinate con Parmigiano Regginano stagionato 36 Mesi.",
  },
  {
    name: "Spaghetti Ai Ricci",
    image: cavatelli2,
    description:
      "Il grande classico della tradizione locale, con ricci e salsa ai tre pomodori.",
  },
  {
    name: "Pesce del giorno",
    image: pesce,
    description:
      "Pesce fresco selezionato in base alla disponibilità e preparato nel rispetto della materia prima.",
  },
  {
    name: "Spaghetti alle cozze",
    image: spaghetti,
    description:
      "Un primo piatto semplice e ricco di sapore, ispirato ai profumi del mare di Taranto.",
  },
];

export type MenuItem = {
  name: string;
  price: string;
  description: string;
};

export const MENU: { category: string; items: MenuItem[] }[] = [
  {
    category: "Antipasti",
    items: [
      {
        name: "Alice Marinata A Modo Nostro",
        price: "",
        description: "Olio, aceto, pepe rosa.",
      },
      {
        name: "Zuppa Di Eracle",
        price: "",
        description: "Purea di fave e cicoria.",
      },
      {
        name: "Cozze Al Gratin Al Parmigiano 36 Mesi",
        price: "",
        description: "Cozze, mollica di pane, parmigiano reggiano.",
      },
      {
        name: "Zuppetta Di Moscardino",
        price: "",
        description: "Moscardino, tre pomodori, olive taggiasche.",
      },
       {
        name: "Lampuga Mediterranea In Agrodolce",
        price: "",
        description: "Lampuga fritta, cipolla di Tropea.",
      },
    ],
  },

{
  category: "Crudo di Mare",
    items: [
      {
        name: "Gamberi",
        price: "",
        description: "",
      },
      {
        name: "Ostriche",
        price: "",
        description: "",
      },
      {
        name: "Scampi",
        price: "",
        description: "",
      },
      {
        name: "Carpaccio/Tartar di...",
        price: "",
        description: "",
      },
    ],
  },
  
  {
    category: "Primi",
    items: [
      {
        name: "Cavatelli Con Le Cozze",
        price: "",
        description: "Cozze, pomodorini, aglio e prezzemolo.",
      },
      {
        name: "Chitarrine Con Vongole",
        price: "",
        description: "Pasta fresca, cime di rapa, acciughe e mollica.",
      },
      {
        name: "Calamarata Al Polpo",
        price: "",
        description: "Riso, patate e cozze al forno.",
      },
      {
        name: "Cavatelli Con Guancette Di Rana Pescatrice",
        price: "",
        description: "Riso, patate e cozze al forno.",
      },
    ],
  },

  {
    category: "Secondi",
    items: [
      {
        name: "Polpo Su Letto Di Purea Di Fave",
        price: "",
        description: "Alla griglia, al forno o all'acqua pazza.",
      },
      {
        name: "La Frittura Di Nonno Nicola",
        price: "",
        description: "Pesce piccolo fritto, croccante e leggero.",
      },
      {
        name: "Filetto Di Pescato Al Forno",
        price: "",
        description: "Al sugo di pomodoro con pane abbrustolito.",
      },
     {
        name: "Filetto Di Pescato Alla Mediterranea",
        price: "",
        description: "Al sugo di pomodoro con pane abbrustolito.",
      },
      {
        name: "Zuppa Mamma Rosa",
        price: "",
        description: "Al sugo di pomodoro con pane abbrustolito.",
      },
    ],
  },

  {
    category: "Contorni",
    items: [
      {
        name: "Broccoli Saltati",
        price: "",
        description: "Con rosmarino e olio extravergine pugliese.",
      },
      {
        name: "Erbette Saltate In Padella",
        price: "",
        description: "Grigliate o ripassate in padella.",
      },
      {
        name: "Cicoria Saltata In Padella",
        price: "",
        description: "Grigliate o ripassate in padella.",
      }, 
      {
        name: "Insalata Verde",
        price: "",
        description: "Grigliate o ripassate in padella.",
      }, 
    ],
  },

  {
    category: "Dolci",
    items: [
      {
        name: "Frizzulla",
        price: "",
        description: "Noci, Frisella, Cacao Amaro, Caffé Dec.",
      },
      {
        name: "Crostata Al Pistacchio",
        price: "",
        description: "Pasta Frolla, Pistacchio, Ricotta di Capra, Marmellata di Fichi",
      },
      {
        name: "Tortino Di Cioccolato",
        price: "",
        description: "Cacao",
      },
      {
        name: "Tiramisú (Secondo Noi)",
        price: "",
        description: "Crema di Mascarpone e Biscotto Sbriciolato",
      },
    ],
  },
];

