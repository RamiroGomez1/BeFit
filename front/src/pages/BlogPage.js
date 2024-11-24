import React from "react"
import { NavLink } from "react-router-dom"

import logo from '../img/logo.png';


const BlogPage = (props) => {
    return(
        <>
        <body
        className="overflow-hidden d-flex text-white justify-content-center align-items-center">

        <nav
            className="navbar navbar-dark navbar-expand-lg fs-5 fixed-top mt-3 pb-3">
            <div className="container-fluid">
                <div className=" mt-3 brand">
                    <NavLink className="navbar-brand" to='/'>
                    <img src={logo} alt="Logo" width="75" className="ms-5 me-3" />

                        BeFit
                    </NavLink>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="offcanvas  navbarsecciones offcanvas-end"
                    tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul
                            className="navbar-nav navcenter justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item mx-2">
                                <NavLink
                                    className="nav-link mt-2 mx-3"
                                    to='/'>Inicio</NavLink>
                            </li>
                            <li className="nav-item mt-2 mx-2">
                                <NavLink
                                    aria-current="page"
                                    className="nav-link"
                                    to='/planes'>Planes</NavLink>
                            </li>
                            <li className="nav-item mt-2 mx-3">
                                <NavLink
                                    className="nav-link"
                                    to='/contacto'>Contacto</NavLink>
                            </li>
                            <li className="nav-item mt-2 mx-3">
                                <NavLink className="nav-link" to='/noticias'>Noticias</NavLink>
                            </li>
                            <li className="nav-item mt-2 mx-3">
                                <NavLink className="nav-link" to='/blog'>Blogs</NavLink>
                            </li>
                        </ul>
                        <div className="mt-3 me-5">
                            <NavLink style={{ backgroundColor: 'rgb(173, 3, 3)' }}
                                className="text-decoration-none text-white text-center rounded px-5 py-2"
                                href>Únete ya</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <main>
            
        </main>
        
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"></script>
    </body>
            </>
    )
}

export default BlogPage