import React from "react"
import { NavLink } from "react-router-dom"


const Nav = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink  to='/'>Home</NavLink></li>
                    <li><NavLink  to='/nosotros'>Nosotros</NavLink></li>
                    <li><NavLink  to='/novedades'>Planes</NavLink></li>
                    <li><NavLink  to='/contacto'></NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav