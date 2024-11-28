import React from "react"
import { useState } from "react";
import axios from 'axios';
import Nav from '../components/layout/Nav';


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
        <body className="overflow-hidden d-flex justify-content-center align-items-center text-white">

            <Nav />

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
    )
}

export default ContactoPage