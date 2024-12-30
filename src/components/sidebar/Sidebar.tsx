import SidebarFolder from './SidebarFolder';
import { folders } from './Pages';
import '../../sass/Sidebar.scss';

interface FolderData {
  title: string;
  links: {text: string; to: string;}[];
}

interface SidebarProps {
  isVisible: boolean;
}

function Sidebar({isVisible}: SidebarProps) {
  return (
    <aside 
        className={`sidebar ${isVisible ? "sidebar_not-hidden" : "sidebar_hidden"}`}
    >
        <span className="sidebar_title">Histórias</span>
        {folders.map((folder, index) => (
          <SidebarFolder 
            key={index}
            title={folder.title}
            links={folder.links}
          />
        ))}
    </aside>
);
}

export default Sidebar;