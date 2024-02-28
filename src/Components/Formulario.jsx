import React, { useState } from 'react';

function Formulario({ onSubmit }) {
    const [Musica1, setMusica1] = useState('');
    const [Musica2, setMusica2] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();


    if (Musica1.trim().length >= 3 && Musica2.trim().length >= 6) {
        onSubmit(Musica1, Musica2);
        setError(false);
    } else {
        setError(true);
    }
};

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Musica 1: </label>
                <input
                type="text"
                value={Musica1}
                onChange={(e) => setMusica1(e.target.value)}
            />
        </div>
        <div>
            <label>Musica 2: </label>
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
