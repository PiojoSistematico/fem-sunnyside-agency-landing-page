import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-hamburger.svg";
import arrow from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={isMenuOpen ? "overlay" : ""}>
      <section className="nav-section flex-between">
        <a>
          <img src={logo} alt="Logo" />
        </a>

        <button
          className="btn-menu mobile"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={handleClick}
        >
          <img
            className="icon-menu"
            src={iconMenu}
            alt="Menu"
            aria-hidden="false"
          />
          <span className="visually-hidden">Menu</span>
        </button>
        <div className={isMenuOpen ? "arrow-left desktop" : "desktop"}></div>
        <nav
          className={
            isMenuOpen
              ? "menu-open primary-navigation desktop"
              : "primary-navigation desktop"
          }
          id="primary-navigation"
        >
          <ul aria-label="Primary" role="list">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <button className="btn-contact">Contact</button>
            </li>
          </ul>
        </nav>
      </section>

      <section className="arrow-section">
        <h1>We are creatives</h1>

        <img src={arrow} alt="" />
      </section>
    </header>
  );
};

export default Menu;
