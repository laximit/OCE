 
export interface LinkData { text: string; to: string; }

export interface FolderData { title: string; links: LinkData[]; }

// Sidebar Folders and Pages
export const folders: FolderData[] = [
  {
    title: "1029",
    links: [
      { text: "Sombras do Passado", to: "/OCE/historia/1029_1" },
    ]
  },
  {
    title: "1032",
    links: [
      { text: "O Nascer das Chamas Infernais", to: "/OCE/historia/1032_1" },
    ]
  },
];