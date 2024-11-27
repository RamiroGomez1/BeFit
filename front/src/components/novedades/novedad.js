import React from 'react';
import { NavLink } from "react-router-dom"
import Links from '../layout/Links';
import '../../styles/componentes/pages/NovedadesPage.css'


const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <>
        <Links />
        <div className="col">
    <div className="card bg-black text-white h-100">
        <img src={imagen} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{subtitle}</p>
            <p className="card-text">{body}</p>
        </div>
    </div>
</div>
        </>


    )
}

export default NovedadItem