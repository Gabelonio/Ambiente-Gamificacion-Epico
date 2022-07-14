import './fichaClase.css';

export default function FichaClase(props){

    return(
            <div className='fichaClase'>
                
                <div className='nombre_clase'>
                    <i className="fa-solid fa-dice"></i>
                    <p>{props.clase.nombre}</p>
                </div>
                <p>{props.clase.profesor}</p>

                <button className='ir_clase'>ir a clase</button>
            </div>
    )

}