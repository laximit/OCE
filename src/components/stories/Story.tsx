import { stories } from "./Stories";
import { Link } from "react-router-dom";
import '../../sass/StoryPage.scss';

interface StoryProps {
  storyId: string;
}

function Story({ storyId }: StoryProps) {
  const story = stories.find((story) => story.storyId === storyId);

  if (!story) {
    return (
      <div className="story_notfound">
        <span className="story_notfound-text">Desculpe, essa página<br />não está disponível.</span>
        <Link className="story_notfound-link" to={'/historia/teststory1'}>Voltar ao Início</Link>
      </div>
    );
  }

  return (
    <div className="story_contents">
      <div className="story_body">
        <span className="age_rating">{story.ageRating}</span>
        <div className="story_tags">
          {story.tags.map((tag, index) => (
            <span className="story_tag" key={index}>{tag}</span>
          ))}
        </div>
        <h1 className="story_title">{story.title}</h1>
        <div className="story_separator"></div>
          {story.links.map((link,index) => (
            <p className="story_text">{link.paragraph}</p>
          ))}
        <div className="story_separator"></div>
        <div className="story_end">Fim.</div>
      </div>
    </div>
  );
}

export default Story;