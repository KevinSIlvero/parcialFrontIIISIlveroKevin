import './App.css'

function App() {

  return (
    <>
      <h1>Hola como estas</h1> 
      <p>Este es un proyecto de prueba con React, NextJS y NodeJS</p>
      
      <div className="card">
        <h2>Mi perrito</h2>
        <img src="/dog.jpg" alt ="Perro"/>
        <h3>Rex el Perro</h3>
        <ul>
          <li>Edad: 5 años</li> 
          <li>Color: Negro</li>
          <li>Raza: Labrador Retriever</li>
        </ul>
      </div>

      <button onClick={() => alert('Has hecho clic en el botón')}>Click me!</button>  

      <form action="#"> </form> 

      <label htmlFor='nombre'>Nombre:</label>
      <input type="text" id="nombre"></input><br/><br/>
      <label htmlFor='edad'>Edad:</label>
      <input type="number" min="0" id="edad"></input><br/><br/> 

      <button onClick={(e) => {
                            e.preventDefault(); //evita que se recargue la pagina
                            const nombre = document.getElementById("nombre").value; 
                            const edad = document.getElementById("edad").value;
                            
                            if(nombre === "" || edad === ""){ 
                              alert("Todos los campos son obligatorios");
                            }else{
                              alert(`Bienvenido ${nombre}, tu edad es ${parseInt(edad)}`);
                            }
                            }} >Enviar</button> 

    
    </> 
  )
}

export default App
