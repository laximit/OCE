import { Link } from "react-router-dom";

interface LinkData {
  text: string;
  to: string;
}

interface props {
  title: string;
  links: LinkData[];
}

function SidebarFolder({title, links}: props) {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    return (
        <div className="sidebar_folder">
            <span className="sidebar_folder-title">{title}</span>
            <div className="sidebar_separator"></div>
            <div className="sidebar_links">
              {links.map((link, index) => (
                <Link 
                  key={index} 
                  to={link.to}
                  className="sidebar_link"
                  onClick={scrollToTop}
                  >{link.text}</Link>
              ))}
            </div>
        </div>
    );
}

export default SidebarFolder;