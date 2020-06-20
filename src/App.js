import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

  // Arreglo de citas
  const [ citas, guardarCitas ] = useState([]);

  // Use Effect para realizar ciertas acciones cuando el state cambia
  // Para que useEffect se ejecute solo una vez, se le debe pasar un arreglo vacio.
  useEffect( () => {
    console.log('Documento listo o algo paso con las citas');
    // Ponemos citas, asi cada vez que cambie el state citas, tambien cambia el useEffect 
  }, [citas] );

  // Funcion que tome las citas actuales y agrgue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);    
  }

  // Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);   
    guardarCitas(nuevasCitas) 
  }
  
  // Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas"  : "Administra tus citas";


  return (
    <Fragment>
      {/* Estaremos utilizando skeleton */}
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>            
      </div>
    </Fragment>
  );
}

export default App;
