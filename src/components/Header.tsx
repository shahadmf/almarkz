import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-menu">
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={isOpen ? "dropdown-active" : "navbar-links"}>
            <li>
              <a href="#why">لماذا؟</a>
            </li>
            <li>
              <a href="#about">المزايا</a>
            </li>
            <li>
              <a href="#services">الباقات</a>
            </li>
            <li>
              <a href="#contact">تواصل معنا</a>
            </li>
            <button className={isOpen ? "button-out" : "button-in"}>
              ابدأ الان
            </button>
          </ul>
          <button className={isOpen ? "button-in" : "button-out"}>
            ابدأ الان
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
