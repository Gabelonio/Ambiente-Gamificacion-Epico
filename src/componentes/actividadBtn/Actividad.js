import React from 'react'
import "./actividad.css";

const Actividad = ({data}) => {

  return (
    <div style={{left:data.x+"px", top:data.y+"px"}} className="conteneder_actividad" >
        <i  className="fa-solid fa-circle-question"></i>
        <div className='resumen_actividad'>
            <p>{data.nombre}</p>
            <p>Vida<i className="fa-solid fa-heart-pulse"> {data.vida}</i></p>
            <p>Experiencia<i className="fa-solid fa-medal">:{data.experiencia} </i></p>
            <p>{data.descripcion}</p>
        </div>
    </div>
  )
}

export default Actividad