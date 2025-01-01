import { folders } from "./MagicPages";
import SidebarFolder from "./SidebarFolder";
import '../../sass/Sidebar.scss';

interface FolderData {
  title: string;
  links: {text: string; to: string;}[];
}

function MagicItems() {
  return (
    <div className="sidebar_items">
        {folders.map((folder, index) => (
          <SidebarFolder 
            key={index}
            title={folder.title}
            links={folder.links}
          />
        ))}
    </div>
  );
}

export default MagicItems;