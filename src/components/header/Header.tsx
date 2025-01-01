import '../../sass/Header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface HeaderProps {
    toggleSidebar: () => void;
    isSidebarVisible: boolean;
}

function Header({toggleSidebar, isSidebarVisible}: HeaderProps) {      
    return(
        <header>
            <div className="header_button" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isSidebarVisible ? faXmark: faBars}/>
            </div>
            <Link to={"/OCE"} className="header_button home">
                <FontAwesomeIcon icon={faHome}/>
            </Link>
            <div className="header_title" id="headerTitle">
                <Link className="header_title-text" to={"/OCE"}>O CODEX ETERNO</Link>
            </div>
        </header>
    );
}

export default Header;