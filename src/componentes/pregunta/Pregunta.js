import './pregunta.css';

export default function Preguntas({pregunta,respuesta}) {

    const selection= (e) =>{
        
    }


    return(
            <div className="contenedor_pregunta" onClick={selection}>
                <p>{pregunta} <i className="fa-solid fa-caret-down"></i></p>
                <p className='respuesta'>{respuesta}</p>
                
            </div>
    )

}