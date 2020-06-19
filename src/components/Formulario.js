import React, {Fragment, useState} from 'react';

const Formulario = () => {

    // Crear State de citas
    const [ cita, actualizarCita ] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    })
    // Para poder usar la funcion actualizarCita y llenar el state usamos eventos.
    // Funcion que se ejecuta cada que el usuario escribe en un input.
    const actualizarState = () => {
        console.log('escribiendo...');
        
    }
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
                    // Evento en react
                    onChange={actualizarState}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    // Skeleton
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    // Evento en react
                    onChange={actualizarState}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    // Skeleton
                    className="u-full-width" 
                    // Evento en react
                    onChange={actualizarState}                   
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    // Skeleton
                    className="u-full-width" 
                    // Evento en react
                    onChange={actualizarState}                   
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    // Evento en react
                    onChange={actualizarState}
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