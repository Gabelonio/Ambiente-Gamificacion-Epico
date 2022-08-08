import React from 'react'
import { useParams } from "react-router-dom";

//data de prueba
import claseData from '../../data_prueba/clases.json'
import actividadesData from '../../data_prueba/actividades.json'


const Actividad = ({usuarioo}) => {

  
  let usuario=usuarioo[0];
  let params = useParams();
  let idClass=params.idClass;
  let idActividad= params.idAct;

  let clase=[];
  let actividad=[];


  //conectar a la api res para obtener lo nesesario
function getDatos(){
  claseData.map(i=>{ if(i.id===idClass){clase=i} return true})
  actividadesData.map(i=>{ if(i.id===idActividad){actividad=i} return true})

}

getDatos()


  return (
    <div>
      <p>{usuario.nombre}</p>
      <p>Clase {clase.id} </p>
      <p>actividad {actividad.id} </p>
    </div>
  )
}

export default Actividad