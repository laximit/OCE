import { folders } from "./CharacterPages";
import SidebarFolder from "./SidebarFolder";
import '../../sass/Sidebar.scss';

function CharacterItems() {
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

export default CharacterItems;