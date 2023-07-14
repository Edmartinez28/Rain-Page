import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="logo">
        <img
          src="/assets/LogoR_RAIN.png"
          alt="Logo de la empresa"
          className="logo-img"
        />
      </div>
      <button
        className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Quiénes somos
            </a>
          </li>
          <li className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen ? "true" : "false"}
              onClick={toggleDropdown}
            >
              Eventos
            </a>
            <div
              className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                Vr Day Latam 2023
              </a>
              <a className="dropdown-item" href="#">
                Vr Day Latam 2022
              </a>
              <a className="dropdown-item" href="#">
                Vr Day Latam 2021
              </a>
              <a className="dropdown-item" href="#">
                Vr Day Latam 2020
              </a>
              <a className="dropdown-item" href="#">
                Vr Day Latam 2019
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contáctenos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
