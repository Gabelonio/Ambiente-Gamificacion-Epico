import "./fichaClase.css";
import { useNavigate } from "react-router-dom";

export default function FichaClase(props) {

  const navigate = useNavigate();

  function navigateClass() {
    navigate("/Clase/"+props.clase.id);
  }
  return (
    <div className="fichaClase">
      <img src={props.clase.linkImagen} alt="Imagen de Fondo" />
      <p className="nombre_clase">
        <i className="fa-solid fa-dice"></i>
        {props.clase.nombre}
      </p>
      <p className="profesor_clase">
        <i className="fa-solid fa-dragon"></i> {props.clase.profesor}
      </p>
      <button className="ir_clase" onClick={navigateClass}>Ir a Clase</button>
    </div>
  );
}
