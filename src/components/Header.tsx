import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (to: string, id: string) => {
    navigate(to);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    window.open(
      "https://ws1hw6v5baf.typeform.com/almarkz",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={isOpen ? "dropdown-active" : "navbar-links"}>
            <li>
              <Link to="/" onClick={() => handleLinkClick("/", "why")}>
                لماذا؟
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleLinkClick("/", "benefits")}>
                المزايا
              </Link>
            </li>
            <li>
              <Link to="/pricing">الباقات</Link>
            </li>
            <li>
              <Link to="/contact-us">تواصل معنا</Link>
            </li>
            <button
              className={isOpen ? "button-out" : "button-in"}
              onClick={handleClick}
            >
              ابدأ الان
            </button>
          </ul>
          <button
            className={isOpen ? "button-in" : "button-out"}
            onClick={handleClick}
          >
            ابدأ الان
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
