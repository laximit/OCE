import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { characters } from "../characters/Characters";
import { stories } from "../stories/Stories";
import { magics } from "../magics/Magics";
import { faBook, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '../../sass/Homepage.scss'
import { useState } from "react";

function Homepage() {
  const [activeTab, setActiveTab] = useState<string>('stories');

  const titles: {[key: string]: string} = {
    stories: "Histórias",
    characters: "Personagens",
  };

  return (
    <div className="homepage">
      <div className="homepage_wrapper">
        <div className="homepage_buttons">
          <div 
            className="homepage_button"
            onClick={() => setActiveTab('stories')}  
          >
            <FontAwesomeIcon icon={faBook}/>
            <span className="homepage_button-text">Histórias</span>
          </div>
          <div 
            className="homepage_button"
            onClick={() => setActiveTab('characters')}
          >
            <FontAwesomeIcon icon={faUser}/>
            <span className="homepage_button-text">Personagens</span>
          </div>
          <div 
            className="homepage_button"
            onClick={() => setActiveTab('magics')}
          >
            <FontAwesomeIcon icon={faStar}/>
            <span className="homepage_button-text">Magias</span>
          </div>
        </div>
        <div className="homepage_separator"></div>
        <span className="homepage_title">{titles.activeTab}</span>
        <div className="homepage_contents">
          <div 
            className={`homepage_stories ${activeTab === 'stories' ? '' : 'unselected'}`}>
            {stories
              .sort((a, b) => (a.storyId > b.storyId ? 1 : -1))
              .map((story) => (
              <Link className="homepage_story" to={story.storyLink}>
                <span className="homepage_story-title">{story.title}</span>
                <span className="homepage_story-age">{story.ageRating}</span>
              </Link>  
            ))}
          </div>
          <div 
            className={`homepage_characters ${activeTab === 'characters' ? '' : 'unselected'}`}>
            {characters
              .sort((a, b) => (a.characterId > b.characterId ? 1 : -1))
              .map((character) => (
              <Link className="homepage_character" to={character.link}>
                <img src={character.imgs[0]} className="homepage_character-img" />
                <span className="homepage_character-title">{character.name}</span>
                <div className="homepage_character-info">
                  <span className="homepage_character-race">{character.tags[0]}</span>
                  <span className="homepage_character-side">{character.tags[1]}</span>
                </div>
              </Link>  
            ))}
          </div>
          <div 
            className={`homepage_magics ${activeTab === 'magics' ? '' : 'unselected'}`}>
            {magics
              .sort((a, b) => (a.magicId > b.magicId ? 1 : -1))
              .map((magic) => (
              <Link className="homepage_magic" to={magic.link}>
                <span className="homepage_magic-title">{magic.name}</span>
                <div className="homepage_magic-info">
                  <span className="homepage_magic-element">{magic.element}</span>
                </div>
              </Link>  
            ))}
          </div>
        </div>
      </div>
    </div>
  );

}

export default Homepage;