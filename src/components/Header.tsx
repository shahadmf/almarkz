import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
              <Link to="/why">لماذا؟</Link>
            </li>
            <li>
              <Link to="/benefits">المزايا</Link>
            </li>
            <li>
              <Link to="/pricing">الباقات</Link>
            </li>
            <li>
              <Link to="/contact-us">تواصل معنا</Link>
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
