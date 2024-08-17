import React, { useEffect, useRef } from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const location = useLocation();
  const navbarCollapseRef = useRef(null); // Reference to the navbar collapse element

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getColor = (curr) => {
    if (location.pathname === curr) {
      return "#0064d8";
    }
    return "transparent";
  };

  const getRadius = (curr) => {
    if (location.pathname === curr) {
      return "50px";
    }
    return "0px";
  };

  const handleNavLinkClick = () => {
    // Collapse the navbar if it's open
    const collapseElement = navbarCollapseRef.current;
    if (collapseElement && collapseElement.classList.contains('show')) {
      collapseElement.classList.remove('show');
    }
  };

  return (
    <div className="container mt-lg-5">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light portfolio fw-bold" to="/" data-aos="fade-down">
            DEVELOPER.
          </NavLink>
          <button
            className="navbar-toggler menu-bar"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarNavDropdown"
            ref={navbarCollapseRef} // Attach the ref here
          >
            <ul className="navbar-nav nav_list px-2 py-2">
              <li
                className="nav-item nav_list_item px-3 py-1 justify-content-center d-flex"
                style={{ backgroundColor: getColor('/Jai_portfolio'), borderRadius: getRadius('/Jai_portfolio') }}
                data-aos="fade-right"
              >
                <NavLink
                  to="/Jai_portfolio"
                  className="nav-link active home"
                  aria-current="page"
                  onClick={handleNavLinkClick} // Handle click to close the navbar
                >
                  Home
                </NavLink>
              </li>
              <li
                className="nav-item nav_list_items px-3 py-1 mx-2 justify-content-center d-flex"
                style={{ backgroundColor: getColor('/about'), borderRadius: getRadius('/about') }}
                data-aos="fade-right"
              >
                <NavLink
                  to="/about"
                  className="nav-link text-muted home"
                  onClick={handleNavLinkClick}
                >
                  About
                </NavLink>
              </li>
              <li
                className="nav-item nav_list_items px-3 py-1 justify-content-center d-flex"
                style={{ backgroundColor: getColor('/work'), borderRadius: getRadius('/work') }}
                data-aos="fade-right"
              >
                <NavLink
                  to="/work"
                  className="nav-link text-muted home"
                  onClick={handleNavLinkClick}
                >
                  Work
                </NavLink>
              </li>
              <li
                className="nav-item nav_list_items px-3 py-1 mx-2 justify-content-center d-flex"
                style={{ backgroundColor: getColor('/services'), borderRadius: getRadius('/services') }}
                data-aos="fade-right"
              >
                <NavLink
                  to="/services"
                  className="nav-link text-muted home"
                  onClick={handleNavLinkClick}
                >
                  Services
                </NavLink>
              </li>
              <li
                className="nav-item nav_list_items px-3 py-1 ms-2 justify-content-center d-flex"
                style={{ backgroundColor: getColor('/contact'), borderRadius: getRadius('/contact') }}
                data-aos="fade-right"
              >
                <NavLink
                  to="/contact"
                  className="nav-link text-muted home"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
