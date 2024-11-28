import React from "react"
import { NavLink } from "react-router-dom"
import Nav from '../components/layout/Nav';

const HomePage = (props) => {
    return (
        <body className="vh-100 m-3 text-white d-flex justify-content-center align-items-center">

            <Nav />

            <main>
                <div className="text-center home">
                    <div className="frase mt-5 me-5">
                        Moldea tu cuerpo, Moldea tu vida.
                        <div className="d-block d-flex gap-3 mt-3">
                            <NavLink type="button" to='/signup'
                                className="btn btn-md btn-danger rounded-pill"
                                data-mdb-ripple-init>Registrarme</NavLink>
                            <button className="btn btn-md btn-dark rounded-pill "><NavLink className="nav-link black-plan" to='/planes'>Ver
                                Planes</NavLink></button>
                        </div>
                        <p className="parrafo">
                            Adoptá un estilo de vida saludable con rutinas de
                            ejercicio efectivas y hábitos que potenciarán tu
                            bienestar físico y mental. Descubrí cómo pequeños
                            cambios diarios pueden llevarte a grandes resultados,
                            moldeando no solo tu cuerpo, sino también tu vida.
                        </p>

                    </div>
                </div>
            </main>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                crossorigin="anonymous"></script>

        </body>
    )
}

export default HomePage