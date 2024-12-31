import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Story from '../stories/Story';
 
export interface LinkData { text: string; to: string; }

export interface FolderData { title: string; links: LinkData[]; }

// Sidebar Folders and Pages
export const folders: FolderData[] = [
  {
    title: "1029",
    links: [
      { text: "Test Story 1", to: "/story1" },
      { text: "Test Story 2", to: "/story2" },
      { text: "Test Story 3", to: "/story3" },
      { text: "Test Char 1", to: "/char1" },
    ]
  },
];