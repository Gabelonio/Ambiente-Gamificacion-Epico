import React from 'react'
import "./pregunta.css";
const Pregunta = (props) => {

    let actividad=props.actividad;


  return (
    <div className='actividad_pregunta'>
        <p className='pregunta_nombre'>{actividad.nombre}</p>
        <p className='pregunta_pregunta'>{actividad.pregunta.pregunta}</p>

        <div className='pregunta_info vencimiento'>Vencimiento: {actividad.vencimiento}</div>
        <div className='pregunta_info recompensa'>Recompensa: {actividad.experiencia} XP</div>
        <div className='pregunta_info castigo'>Castigo: {actividad.vida}</div>


        <hr></hr>
        <br></br>
        <input type="checkbox" id="primera" name="primera" value={actividad.pregunta.primera} />
        <label  for="primera"> {actividad.pregunta.primera}</label><br></br>
        
        <input type="checkbox" id="segunda" name="segunda" value={actividad.pregunta.segunda} />
        <label  for="segunda"> {actividad.pregunta.segunda}</label><br></br>

        <input type="checkbox" id="tercera" name="tercera" value={actividad.pregunta.tercera} />
        <label  for="tercera"> {actividad.pregunta.tercera}</label><br></br>

        <button className='pregunta_entregar'>Entregar</button>
        
        

    </div>
  )
}

export default Pregunta