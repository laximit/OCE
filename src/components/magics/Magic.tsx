import { magics } from "./Magics";
import '../../sass/MagicPage.scss';
import { Link } from "react-router-dom";

interface CharacterProps {
  magicId: string;
}

function Magic({magicId}: CharacterProps) {
  const magic = magics.find((magic) => magic.magicId === magicId);

  if (!magic) {
    return (
      <div className="magic_notfound">
        <span className="magic_notfound-text">Desculpe, essa página<br />não está disponível.</span>
        <Link className="magic_notfound-link" to={'/OCE'}>Voltar ao Início</Link>
      </div>
    );
  }

  return (
    <div className="magic_contents">
        <div className="magic_body">
        <span className="magic_element">{magic.element}</span>
        <h1 className="magic_title">{magic.name}</h1>
        <div className="magic_separator"></div>
        {magic.abouts.map((about, index) => (
          <p className="magic_text" key={index}>{about.paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default Magic;