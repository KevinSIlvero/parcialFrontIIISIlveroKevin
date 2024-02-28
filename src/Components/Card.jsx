import React from 'react';

function Card({ Nombre, Musica2 }) {
    return (
    <div>
        <h2>Información ingresada:</h2>
        <p> ¡Hola {Nombre} bienvenido! </p>
        <p> Me gusta  escuchar {Musica2} </p>
    </div>
    );
}

export default Card;
