export interface LinkData { text: string; to: string; }

export interface FolderData { title: string; links: LinkData[]; }

// Sidebar Folders and Pages
export const folders: FolderData[] = [
  {
    title: "Humanos",
    links: [
      { text: "Laximit", to: "/OCE/personagem/laximit" },
      { text: "Lenora", to: "/OCE/personagem/lenora" },
      { text: "Seraphine", to: "/OCE/personagem/seraphine" },
      { text: "Duskbane", to: "/OCE/personagem/duskbane" },
    ]
  },
  {
    title: "Criaturas Misticas",
    links: [
      { text: "Aera", to: "/OCE/personagem/aera" },
      { text: "Haruna", to: "/OCE/personagem/haruna" },
      { text: "Fubuki", to: "/OCE/personagem/fubuki" },
      { text: "Kouji", to: "/OCE/personagem/kouji" },
      { text: "Umbraza", to: "/OCE/personagem/umbraza" },
      { text: "Nagael", to: "/OCE/personagem/nagael" },
      { text: "Hiyou", to: "/OCE/personagem/hiyou" },
      { text: "Raiya", to: "/OCE/personagem/raiya" },
    ]
  },
  {
    title: "Demônios",
    links: [
      { text: "Drakzor", to: "/OCE/personagem/drakzor" },
    ]
  },
];