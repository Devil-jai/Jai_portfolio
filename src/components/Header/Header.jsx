import React, { useEffect } from 'react';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
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
          <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavDropdown">
            <ul className="navbar-nav nav_list px-2 py-2">
              <li className="nav-item nav_list_item px-3 py-1 justify-content-center d-flex" 
                style={{backgroundColor: getColor('/Jai_portfolio'), borderRadius: getRadius('/Jai_portfolio')}}
                data-aos="fade-right">
                <NavLink to="/Jai_portfolio" className="nav-link active home" aria-current="page">
                  Home  
                </NavLink>
              </li>
              <li className="nav-item nav_list_items px-3 py-1 mx-2 justify-content-center d-flex" 
                style={{backgroundColor: getColor('/about'), borderRadius: getRadius('/about')}}
                data-aos="fade-right">
                <NavLink to="/about" className="nav-link text-muted home">
                  About
                </NavLink>
              </li>
              <li className="nav-item nav_list_items px-3 py-1 justify-content-center d-flex" 
                style={{backgroundColor: getColor('/work'), borderRadius: getRadius('/work')}}
                data-aos="fade-right">
                <NavLink to="/work" className="nav-link text-muted home">
                  Work
                </NavLink>
              </li>
              <li className="nav-item nav_list_items px-3 py-1 mx-2 justify-content-center d-flex" 
                style={{backgroundColor: getColor('/services'), borderRadius: getRadius('/services')}}
                data-aos="fade-right">
                <NavLink to="/services" className="nav-link text-muted home">
                  Services
                </NavLink>
              </li>
              <li className="nav-item nav_list_items px-3 py-1 ms-2 justify-content-center d-flex" 
                style={{backgroundColor: getColor('/contact'), borderRadius: getRadius('/contact')}}
                data-aos="fade-right">
                <NavLink to="/contact" className="nav-link text-muted home">
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
