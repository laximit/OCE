import { characters } from "./Characters";
import { stories } from "../stories/Stories";
import '../../sass/CharacterPage.scss';
import { Link } from "react-router-dom";

interface CharacterProps {
  characterId: string;
  characterTag: string;
}

function Character({characterId, characterTag}: CharacterProps) {
  const character = characters.find((character) => character.characterId === characterId);

  if (!character) {
    return (
      <div className="character_notfound">
        <span className="character_notfound-text">Desculpe, essa página<br />não está disponível.</span>
        <Link className="character_notfound-link" to={'/personagem/testchar'}>Voltar ao Início</Link>
      </div>
    );
  }

  const characterTimeline = stories.filter((story) => 
    story.tags.includes(characterTag)
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="character_contents">
      <div className="character_body">
        <div className="character_tags">
          {character.tags.map((tag, index) => (
            <span className="character_tag" key={index}>{tag}</span>
          ))}
        </div>
        <h1 className="character_title">{character.name}</h1>
        <div className="character_separator"></div>
        <span className="ai_warning">Aviso: Imagens feitas por IA são provisórias. </span>
          <div className="character_imgs">
            {character.imgs.map((img, index) => (
              <img src={img} key={index} className="character_img" />
            ))}
          </div>
        <h1 className="character_title">Sobre</h1>
        <div className="character_separator"></div>
          {character.abouts.map((about, index) => (
            <p className="character_text" key={index}>{about.paragraph}</p>
          ))}
          <h1 className="character_title">Linha do Tempo</h1>
        <div className="character_separator"></div>
        <div className="character_timeline">
        {characterTimeline.map((story) => (
            <div className="character_timeline-contents">
              <span className="character_timeline-year">{story.storyYear}</span>
              <Link 
                className="character_timeline-item" 
                to={`/historia/${story.storyId}`} 
                onClick={scrollToTop}
                >
                  {story.title}
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Character;