import React from 'react';

function Card({ Musica1, Musica2 }) {
    return (
    <div>
        <h2>Información ingresada:</h2>
        <p>Temática: Música </p>
        <p>Musica 1: {Musica1}</p>
        <p>Musica 2: {Musica2}</p>
    </div>
    );
}

export default Card;
