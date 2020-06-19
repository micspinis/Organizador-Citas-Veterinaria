import React, {Fragment} from 'react';

const Formulario = () => {
    return ( 
        <Fragment>
            <h1>Crear Cita</h1>
            <form>
                <label>Nombre Mascote</label>
                <input
                    type="text"
                    name="mascota"
                    // Skeleton
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    // Skeleton
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    // Skeleton
                    className="u-full-width"                    
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    // Skeleton
                    className="u-full-width"                    
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;