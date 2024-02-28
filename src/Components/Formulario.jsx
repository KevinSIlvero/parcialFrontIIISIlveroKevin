import React, { useState } from 'react';

function Formulario({ onSubmit }) {
    const [Nombre, setNombre] = useState('');
    const [Musica2, setMusica2] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();


    if (Nombre.trim().length >= 3 && Musica2.trim().length >= 6) {
        onSubmit(Nombre, Musica2);
        setError(false);
    } else {
        setError(true);
    }
};

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Mi nombre es: </label>
                <input
                type="text"
                value={Nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div>
            <label>¿Que musica te gusta? : </label>
            <input
                type="text"
                value={Musica2}
            onChange={(e) => setMusica2(e.target.value)}
            />
        </div>
        <button type="submit">Enviar</button>
        </form>
        {error && <p>Por favor, verifica que la información sea correcta.</p>}
    </div>
    );
}

export default Formulario;
