import '../../sass/Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SummaryItems from './SummaryItems';
import MagicItems from './MagicItems';
import CharacterItems from './CharacterItems';

interface FolderData {
  title: string;
  links: {text: string; to: string;}[];
}

interface SidebarProps {
  isVisible: boolean;
}

function Sidebar({isVisible}: SidebarProps) {
  const [activeCategory, setActiveCategory] = useState<string>('stories');

  const titles: { [key: string]: string } = {
    stories: "Histórias",
    characters: "Personagens",
    magics: "Magias",
  }


  return (
    <aside 
        className={`sidebar ${isVisible ? "sidebar_not-hidden" : "sidebar_hidden"}`}
    >        
      	<span className="sidebar_title">{titles[activeCategory]}</span>

        {activeCategory === "stories" && <SummaryItems/>}
        {activeCategory === "characters" && <CharacterItems/>}
        {activeCategory === "magics" && <MagicItems/>}

        <div className="sidebar_buttons">
          <div 
            className={`sidebar_button ${activeCategory === 'stories' ? 'selected' : ''}`}
            onClick={() => setActiveCategory('stories')}>
            <FontAwesomeIcon icon={faBook}/>
          </div>
          <div 
            className={`sidebar_button ${activeCategory === 'characters' ? 'selected' : ''}`}
            onClick={() => setActiveCategory('characters')}>
            <FontAwesomeIcon icon={faUser}/>
          </div>
          <div 
            className={`sidebar_button ${activeCategory === 'magics' ? 'selected' : ''}`}
            onClick={() => setActiveCategory('magics')}>
            <FontAwesomeIcon icon={faStar}/>
          </div>
        </div>
    </aside>
);
}

export default Sidebar;