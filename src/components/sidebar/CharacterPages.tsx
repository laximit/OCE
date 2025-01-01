export interface LinkData { text: string; to: string; }

export interface FolderData { title: string; links: LinkData[]; }

// Sidebar Folders and Pages
export const folders: FolderData[] = [
  {
    title: "Humanos",
    links: [
      { text: "Laximit", to: "/personagem/laximit" },
      { text: "Lenora", to: "/personagem/lenora" },
      { text: "Seraphine", to: "/personagem/seraphine" },
      { text: "Duskbane", to: "/personagem/duskbane" },
    ]
  },
  {
    title: "Criaturas Misticas",
    links: [
      { text: "Aera", to: "/personagem/aera" },
      { text: "Haruna", to: "/personagem/haruna" },
      { text: "Fubuki", to: "/personagem/fubuki" },
      { text: "Kouji", to: "/personagem/kouji" },
      { text: "Umbraza", to: "/personagem/umbraza" },
      { text: "Nagael", to: "/personagem/nagael" },
      { text: "Hiyou", to: "/personagem/hiyou" },
      { text: "Raiya", to: "/personagem/raiya" },
    ]
  },
  {
    title: "Demônios",
    links: [
      { text: "Drakzor", to: "/personagem/drakzor" },
    ]
  },
];