import React from "react"
import { NavLink } from "react-router-dom"

import logo from '../img/logo.png';


const NovedadesPage = (props) => {
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
            <div class="intro">
                <h2>
                    Nuestros Planes 
                </h2>
                <p>Nuestos servicios vienen con distintas membresias para que logres tu cuerpo ideal. Para esto ofrecemos planes profesionales y personalizados que se adaptan a tus necesidades y condiciones.</p>
            </div>

            <div class="planes">
                <div class="plan">
                    <div class="titulo">
                        <h3>Plan Express</h3>
                        <p>8000 ARS</p>
                    </div>
                    <ul class="ul">
                        <li>Plan de entrenamiento profesional</li>
                        <li>Plan nutricional basico</li>
                        <li>Desde la comodidad de tu casa</li>
                        <li>Sin sesiones de seguimiento</li>
                    </ul>
                    <button type="button" class="btn btn-primary"
                        style={{backgroundColor: 'rgb(173, 3, 3)', border: 'none'}}
                        data-bs-toggle="button"
                        autocomplete="off">Obtener</button>
                </div>
                <div class="plan">
                    <div class="titulo">
                        <h3>Plan Avanzado</h3>
                        <p>12000 ARS</p>
                    </div>
                    <ul class="ul">
                        <li>Plan de entrenamiento intensivo</li>
                        <li>Plan nutricional especializado</li>
                        <li>Sesion de seguimiento cada 15 dias</li>
                        <li>Acceso a comunidad online</li>
                    </ul>
                    <button type="button" class="btn btn-primary"
                    style={{backgroundColor: 'rgb(173, 3, 3)', border: 'none'}}
                    data-bs-toggle="button"
                    autocomplete="off">Obtener</button>
                </div>
                <div class="plan">
                    <div class="titulo">
                        <h3>Plan Pro</h3>
                        <p>15000 ARS</p>
                    </div>
                    <ul class="ul">
                        <li>Plan de entrenamiento personalizado</li>
                        <li>Plan nutricional adaptado a tus metas</li>
                        <li>Sesiones de seguimiento semanal</li>
                        <li>Asesoria online 24/7</li>
                    </ul>
                    <button type="button" class="btn btn-primary"
                    style={{backgroundColor: 'rgb(173, 3, 3)', border: 'none'}}
                    data-bs-toggle="button"
                    autocomplete="off">Obtener</button>
                </div>
                <div class="plan">
                    <div class="titulo">
                        <h3>Plan Familiar</h3>
                        <p>20000 ARS</p>
                    </div>
                    <ul class="ul">
                        <li>Entrenamiento grupal personal para hasta 4 personas</li>
                        <li>Plan nutricional individual personalizado</li>
                        <li>Seguimiento semanal</li>
                        <li>Descuento en gimnasios adheridos</li>
                    </ul>
                    <button type="button" class="btn btn-primary"
                        style={{backgroundColor: 'rgb(173, 3, 3)', border: 'none'}}
                        data-bs-toggle="button"
                        autocomplete="off">Obtener</button>
                </div>
            </div>
        </main>
        
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"></script>
    </body>
            </>
    )
}

export default NovedadesPage