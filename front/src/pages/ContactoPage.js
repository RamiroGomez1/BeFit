import React from "react"
import { NavLink } from "react-router-dom"
import { useState } from "react";
import axios from 'axios';

import logo from '../img/logo.png';

//Arreglar boton 3 lineas 

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false)
        setMsg(response.data.message)
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main>
            <body
                className="overflow-hidden d-flex justify-content-center align-items-center text-white">

                <nav
                    className="navbar navbar-dark navbar-expand-lg fs-5 fixed-top mt-3 pb-3">
                    <div className=" container-fluid">
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
                                            aria-current="page"
                                            to='/'>Inicio</NavLink>
                                    </li>
                                    <li className="nav-item mt-2 mx-2 active">
                                        <NavLink className="nav-link"
                                            to='/planes'>Planes</NavLink>
                                    </li>
                                    <li className="nav-item mt-2 mx-3">
                                        <NavLink
                                            className="nav-link"
                                            to='/contacto'>Contacto</NavLink>
                                    </li>
                                    <li className="nav-item mt-2 mx-3">
                                        <NavLink className="nav-link" to='/Novedades'>Novedades</NavLink>
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
                    <div className="text-center noticias mb-5">
                        <h2>
                            Contacto
                        </h2>
                        <p>Ponete en contácto con nosotros y te ayudamos a responder tus
                            dudas. Por favor completá el siguiente formulario y te
                            llegará nuestra respuesta lo antes posible.</p>
                    </div>

                    <section style={{ backgroundColor: '#111', borderRadius: '16px' }}
                        className="mx-auto my-2 text-light p-4">

                        <form className="row g-3" action="/contacto" method='post' onSubmit={handleSubmit}>
                            <div className="col-md-12">
                                <label for="inputEmail4"
                                    className="form-label">Email</label>
                                <input name='email' value={formData.email} onChange={handleChange} type="email" placeholder="tunombre@mail.com"
                                    className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label for="inputNombre"
                                    required className="form-label">Nombre y
                                    apellido</label>
                                <input name="nombre" value={formData.nombre} onChange={handleChange} type="text" className="form-control"
                                    id="inputNombre" placeholder="Santiago Perez" />
                            </div>
                            <div className="col-md-12">
                                <label for="inputTelefono"
                                    className="form-label">Telefono</label>
                                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="1122334545"
                                    className="form-control" id="inputTelefono" />
                            </div>
                            <div className="col-md-12">
                                <label for="inputMensaje"
                                    className="form-label">En que podemos ayudarte?</label>
                                <textarea name='mensaje' className="form-control" value={formData.mensaje} onChange={handleChange}></textarea>
                            </div>

                            <div className="col-md-2">
                                <label for="inputZip" className="form-label"></label>
                            </div>

                            <div class="col-12">
                                <button type="submit"
                                    className="btn btn-primary mb-3">Enviar</button>
                            </div>
                        </form>

                        {sending ? <p className="my-2 alert alert-primary">Enviando</p> : null}
                        {msg ? <p className="my-2 alert alert-primary">{msg}</p> : null}

                    </section>

                </main>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            </body>
        </main>
    )
}

export default ContactoPage