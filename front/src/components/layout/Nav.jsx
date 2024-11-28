import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png'
import { useEffect, useState } from "react";
import '../../styles/componentes/pages/layout/Nav.css'

const Nav = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav className={`navbar navbar-dark navbar-expand-lg fs-5 fixed-top pb-3 ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <div className="mt-3 brand">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="75" className="ms-5 me-3" />
            BeFit
          </NavLink>
        </div>
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas navbarsecciones offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav navcenter justify-content-center flex-grow-1 ">
              <li className="nav-item offcanvasText">
                <NavLink className="nav-link mt-2 mx-3" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item mt-2 mx-3 offcanvasText">
                <NavLink className="nav-link offcanvasText" to="/planes">
                  Planes
                </NavLink>
              </li>
              <li className="nav-item mt-2 mx-3 offcanvasText">
                <NavLink className="nav-link offcanvasText" to="/contacto">
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item mt-2 mx-3 offcanvasText" >
                <NavLink className="nav-link offcanvasText" to="/novedades">
                  Novedades
                </NavLink>
              </li>
            </ul>

            <div className="mt-3">
              <NavLink
                style={{ backgroundColor: "rgb(173, 3, 3)" }}
                className="text-decoration-none text-white text-center rounded px-5 py-2"
                to="/signup" //ruta señuelo
              >
                Únete ya
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
    </nav>
  );
};

export default Nav;
