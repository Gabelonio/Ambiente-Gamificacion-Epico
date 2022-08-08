import React from 'react'
import "./actividad.css";

const Actividad = ({data}) => {

  return (
    <div style={{left:data.x+"px", top:data.y+"px"}} className="conteneder_actividad" >
        <i  className="fa-solid fa-circle-question icono"></i>
        <div className='resumen_actividad'>
            <p className='nombre'>{data.nombre}</p>
            <p className='vida'>Riesgo<i className="fa-solid fa-heart-pulse"> {data.vida}</i></p>
            <p className='exp'>Experiencia Ganada<i className="fa-solid fa-medal">{data.experiencia} </i></p>
            <hr></hr>
            <p className='descripcion'>{data.descripcion}</p>
            <button>Resolver</button>
        </div>
    </div>
  )
}

export default Actividad