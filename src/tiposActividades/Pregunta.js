import React from 'react'
import "./pregunta.css";
const Pregunta = (props) => {

    let actividad=props.actividad;


  return (
    <div>
        <p>{actividad.nombre}</p>
        <p>{actividad.pregunta.pregunta}</p>
        <p>{actividad.pregunta.primera}</p>
        <p>{actividad.pregunta.segunda}</p>
        <p>{actividad.pregunta.tercera}</p>
    </div>
  )
}

export default Pregunta