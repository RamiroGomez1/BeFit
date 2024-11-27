import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png'

const Nav = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fs-5 fixed-top mt-3 pb-3">
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
            <ul className="navbar-nav navcenter justify-content-center flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <NavLink className="nav-link mt-2 mx-3" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item mt-2 mx-2">
                <NavLink className="nav-link" to="/planes">
                  Planes
                </NavLink>
              </li>
              <li className="nav-item mt-2 mx-3">
                <NavLink className="nav-link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item mt-2 mx-3">
                <NavLink className="nav-link" to="/novedades">
                  Novedades
                </NavLink>
              </li>
            </ul>

            <div className="mt-3 me-5">
              <NavLink
                style={{ backgroundColor: "rgb(173, 3, 3)" }}
                className="text-decoration-none text-white text-center rounded px-5 py-2"
                to="/signup" //poner ruta correcta
              >
                Únete ya
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
