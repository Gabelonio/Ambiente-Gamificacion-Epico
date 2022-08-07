import React from 'react'
import "./clase.css";
import { useParams } from "react-router-dom";
import clase from '../../data_prueba/clase.json'
import actividades from '../../data_prueba/actividades.json'
import Actividad from '../../componentes/actividadBtn/Actividad';

export default function Clase (props){

  let params = useParams();
  function getClase(){
    //params.idClass, conseguir clase por id en url
    //conseguir actividades de la clase
  }
  const divFondoStyle = {
    backgroundImage: 'url(' + clase[0].img + ')',
    margin: "0",
    padding: "0",
    width: "99vw",
    height: "100vh",
    color: "black",
    backgroundSize:"100% 100%"
  };
  


  return (
    <div className='contenedor_clase'> 
        <div className='fondo' style={divFondoStyle} >
        {actividades.map(i=>{return(<Actividad data={i} key={i.id}></Actividad>)})}
        </div>
    </div>
  )
}
