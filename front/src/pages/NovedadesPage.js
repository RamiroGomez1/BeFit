import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/novedad';
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
                
                const novedadesData = response.data.map((novedad) => {
                    const imagen_url = novedad.imagen.match(/src=['"]([^'"]*)['"]/)?.[1] || '';
                    console.log('Extracted Image URL:', imagen_url);
                    return {
                        ...novedad,
                        imagen_url
                    };
                });
        
                setNovedades(novedadesData);
                setLoading(false);
            } catch (error) {
                console.error("Error buscando novedades:", error);
                setNovedades([]);
                setLoading(false);
            }
        };
        

        cargarNovedades();
    }, []);

    return (
        <body
            className=" text-white d-flex justify-content-center">

            <Nav />

            <main className='noticias'>
                <div className="text-center mb-5">
                    <h2>
                        Noticias
                    </h2>
                    <p>Aqui se veran las noticias mas relevantes sobre el mundo
                        fitness. Desde nuevos papers e investigaciones hasta
                        influencers emergentes.</p>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mx-5">
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
                        <p className='mt-5'>No hay novedades disponibles.</p>
                    )}
                </div>
            </main>

        </body>




    )
}

export default NovedadesPage