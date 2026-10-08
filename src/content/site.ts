// Tutti i contenuti modificabili del sito in un unico posto.
import cozze from "@/assets/cozze.jpg";
import tiella from "@/assets/tiella.jpg";
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
    name: "Cozze alla Tarantina",
    image: cozze,
    description:
      "Cozze fresche preparate secondo la tradizione, con i sapori semplici e autentici della cucina tarantina.",
  },
  {
    name: "Tiella",
    image: tiella,
    description:
      "Il grande classico della tradizione locale, con riso, patate e cozze.",
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
        name: "Cozze Gratinate",
        price: "",
        description: "Servite con limone, come vuole la tradizione.",
      },
      {
        name: "Frittura Mista",
        price: "",
        description: "Cozze, pepe nero, prezzemolo e crostini di pane.",
      },
      {
        name: "Tris dell'Oste",
        price: "",
        description: "Assaggi di mare e di terra secondo la giornata.",
      },
    ],
  },

{
  category: "Crudo di Mare",
    items: [
      {
        name: "Carpaccio di",
        price: "",
        description: "Servite con limone, come vuole la tradizione.",
      },
      {
        name: "Ostriche",
        price: "",
        description: "Cozze, pepe nero, prezzemolo e crostini di pane.",
      },
      {
        name: "Scampi",
        price: "",
        description: "Assaggi di mare e di terra secondo la giornata.",
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
        name: "Spaghetto Alle Vongole",
        price: "",
        description: "Pasta fresca, cime di rapa, acciughe e mollica.",
      },
      {
        name: "Spaghetto Allo Scoglio",
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
        name: "Zuppa Di Pesce",
        price: "",
        description: "Pesce piccolo fritto, croccante e leggero.",
      },
      {
        name: "Filetto Di Ricciola Al Forno Con Contorno",
        price: "",
        description: "Al sugo di pomodoro con pane abbrustolito.",
      },
     {
        name: "Filetto Di Rana Pescatrice In Guazzetto Con Contorno",
        price: "",
        description: "Al sugo di pomodoro con pane abbrustolito.",
      },
    ],
  },

  {
    category: "Contorni",
    items: [
      {
        name: "Patate Arrosto",
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

