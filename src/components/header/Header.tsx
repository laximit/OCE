import React, { useEffect } from "react";
import '../../sass/Header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
            <div className="header_title" id="headerTitle">
                <span className="header_title-text">O CODEX ETERNO</span>
            </div>
        </header>
    );
}

export default Header;