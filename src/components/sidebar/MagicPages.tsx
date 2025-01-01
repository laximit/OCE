export interface LinkData { text: string; to: string; }

export interface FolderData { title: string; links: LinkData[]; }

// Sidebar Folders and Pages
export const folders: FolderData[] = [
  {
    title: "Luz",
    links: [
      { text: "Memorathis", to: "/magia/memorathis" },
    ]
  },
];