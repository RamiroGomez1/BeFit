import React from "react"
import Nav from "../components/layout/Nav"

const SignPage = (props) => {

    return (
        <body className="overflow-hidden d-flex justify-content-center align-items-center text-white">

            <Nav />

            <main>
                <div className="text-center noticias mb-5">
                    <h2>
                        Registrarse/Iniciar Sesion
                    </h2>
                </div>
                <div>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-danger">Iniciar Sesion</button>
                    </form>
                </div>

            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        </body>
    )
}

export default SignPage