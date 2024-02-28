import React, { useState } from 'react';
import Formulario from './Components/Formulario';
import Card from './Components/Card';

function App() {
  const [showCard, setShowCard] = useState(false);
  const [cardInfo, setCardInfo] = useState({});

  const handleFormSubmit = (Musica1, Musica2) => {
    setCardInfo({ Musica1, Musica2 });
    setShowCard(true);
  };

  return (
    <div className="App">
      <h1> Elige un tema de música </h1>
      <Formulario onSubmit={handleFormSubmit} />
      {showCard && <Card Musica1={cardInfo.Musica1} Musica2={cardInfo.Musica2} />}
    </div>
  );
}

export default App;

