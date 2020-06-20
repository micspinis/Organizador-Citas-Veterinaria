import React, {Fragment, useState} from 'react';
// Como esta proyecto no usa base de datos, para asignar un id unico instalamos npm i uuid
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ crearCita }) => {

    // Crear State de citas
    const [ cita, actualizarCita ] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    })

    // Agregamos un segundo state para notificar al usuario que debe llenar todos los campos
    const [ error, actualizarError ] = useState(false)

    // Para poder usar la funcion actualizarCita y llenar el state usamos eventos.
    // Funcion que se ejecuta cada que el usuario escribe en un input.
    // como argumentp del arrow function le pasamos en eventp -> e
    const actualizarState = e => {
        actualizarCita({
            // Copiamos el state para que no se reescriba y pueda almacenar
            ...cita,
            // mapeamos el valor al nombre correspondiente, los names en los inputs son iguales que los valores en el state
            [ e.target.name ]: e.target.value
        })}

    // Extraer los valores con destructuring
    const { mascota, propietario, fecha, hora, sintomas } = cita;
        
    // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        // Prevenir la accion por defecto
        e.preventDefault();
        
        // Validar
        if (mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "") {
            actualizarError(true);
            return;
        }
        // Modificar el mensaje previo
        actualizarError(false);
        
        // Asignar in ID
        cita.id = uuidv4(); //Generar id unicos

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
    }

    return ( 
        <Fragment>
            <h1>Crear Cita</h1>

            {error
            ? <p className='alerta-error'>Todos los campos son obligatorios</p>
            : null
            }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascote</label>
                <input
                    type="text"
                    name="mascota"
                    // Skeleton
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    // Evento en react
                    onChange={actualizarState}
                    // valores extraidos del state
                    value={ mascota }
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
                    // valores extraidos del state
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    // Skeleton
                    className="u-full-width" 
                    // Evento en react
                    onChange={actualizarState}  
                    // valores extraidos del state
                    value={fecha}                 
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    // Skeleton
                    className="u-full-width" 
                    // Evento en react
                    onChange={actualizarState}                   
                    // valores extraidos del state
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    // Evento en react
                    onChange={actualizarState}
                    // valores extraidos del state
                    value={sintomas}
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