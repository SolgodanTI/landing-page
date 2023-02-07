import React from 'react';
import './Card.css';

function Card(props) {
    return (

        <div className='card-container' >

            <img className='image-container'
                src={require(`../imagenes/testimonio-${props.photo}.png`)}
                alt='Foto de Asg' />

            <div className='card-content'>

                <div className='card-title'>
                    <h3>{props.title}</h3>
                </div>
                <div className="card-body">
                    <p>{props.msg}</p>
                </div>

            </div>





        </div>

    )
}

export default Card