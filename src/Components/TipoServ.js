

import React from 'react';
import './TipoServ.css';
/*
https://www.freecodecamp.org/espanol/news/tutorial-de-css-flexbox-y-css-grid-como-crear-una-pagina-de-inicio-responsivo-con-html-y-css/
*/

function TipoServ() {
    return (

        <div className='wrapper' >
            <div className='serv-flex'>
                <div className='serv-msg1'>
                    <p>Manejamos todas las marcas y clases de equipo CCTV</p>
                </div>

                <div className='serv-title'>
                    <p>Tipos de Servicio</p>
                </div>


            </div>

            <div className='serv-flex2'>

                <div className='serv-img stat'>
                    <img className='image-container'
                        src={require('../imagenes/cctv-01.jpg')}
                        alt='Foto A quien va dirigido.' />
                </div>

                <div className='serv-list stat'>
                    <ul>
                        <li>Mantenimiento preventivo</li>
                        <li>Servicios Técnicos</li>
                        <li>Soporte Remoto</li>
                        <li>Revisiones periódicas</li>
                        <li>Atención urgente</li>
                        <li>Apoyo logistico</li>
                    </ul>
                </div>
                <div className='serv-msg2 stat'>
                    <p className='contenedor-texto-msg2'>Póliza de Servicio para mantener todo tu equipo de CCTV funcionando permanentemente</p>
                    <div className='serv-btn'>
                        <button>Solicita Cotización</button>
                    </div>
                </div>




            </div>


        </div>



    )
}

export default TipoServ