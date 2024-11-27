import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/novedad';
import { NavLink } from "react-router-dom"
import Nav from '../components/layout/Nav';

import '../styles/componentes/pages/NovedadesPage.css'


const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([])

    useEffect(() => {
        const cargarNovedades = async () => {
            try {   
                setLoading(true);
                const response = await axios.get('http://localhost:3000/api/novedades');

                const novedadesData = response.data.map((novedad) => ({
                    ...novedad, 
                    imagen_url: novedad.imagen.match(/src="([^"]*)"/)?.[1] || '',
                }));
                

                setNovedades(novedadesData);
                setLoading(false);
            } catch (error) {
                console.error("Error buscando novedades:", error);
                setNovedades([]);
                setLoading(false)
            } 
        };

        cargarNovedades();
    }, []);

    return (
        <body
            className="overflow-hidden text-white d-flex justify-content-center align-items-center">

            <Nav />

            <main>
                <div className="text-center noticias mb-5">
                    <h2>
                        Noticias
                    </h2>
                    <p>Aqui se veran las noticias mas relevantes sobre el mundo
                        fitness. Desde nuevos papers o investigaciones hasta
                        influencers emergentes.</p>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {loading ? (
                        <p>Cargando...</p>
                    ) : novedades.length > 0 ? (
                        novedades.map(item => (
                            <NovedadItem
                                key={item.id}
                                title={item.titulo}
                                subtitle={item.subtitulo}
                                imagen={item.imagen_url}
                                body={item.cuerpo}
                            />
                        ))
                    ) : (
                        <p>No hay novedades disponibles.</p>
                    )}
                </div>
            </main>

        </body>




    )
}

export default NovedadesPage