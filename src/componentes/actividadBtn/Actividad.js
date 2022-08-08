import React from 'react'
import "./actividad.css";
import { useNavigate } from "react-router-dom";

const Actividad = ({data,idClass}) => {

  const navigate = useNavigate();
  function navigateActividad() {
    navigate("/Clase/Actividad/"+idClass+"/"+data.id);
  }
 
  return (
    <div style={{left:data.x+"px", top:data.y+"px"}} className="conteneder_actividad" >
      <div className='contenedor_icono'>
        <i  className="fa-solid fa-circle-question icono"></i>
      </div>
        <div className='resumen_actividad'>
            <p className='nombre'>{data.nombre}</p>
            <p className='vida'>Riesgo<i className="fa-solid fa-heart-pulse"> {data.vida}</i></p>
            <p className='exp'>Experiencia Ganada<i className="fa-solid fa-medal">{data.experiencia} </i></p>
            <p className='exp'>Hasta : {data.vencimiento}</p>
            <hr></hr>
            <p className='descripcion'>{data.descripcion}</p>
            <button onClick={navigateActividad}>Resolver</button>
        </div>
    </div>
  )
}

export default Actividad