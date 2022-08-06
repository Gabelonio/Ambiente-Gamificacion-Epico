import React from 'react'
import { useParams } from "react-router-dom";

export default function Clase (){

    let params = useParams();
  return (
    <div>{params.idClass}</div>
  )
}
