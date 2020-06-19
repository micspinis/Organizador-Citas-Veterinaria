import React, {Fragment} from 'react';
import Formulario from './components/Formulario';


function App() {
  return (
    <fragment>
      {/* Estaremos utilizando skeleton */}
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>            
      </div>
    </fragment>
  );
}

export default App;
