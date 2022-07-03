import './preguntas.css';
import Pregunta from '../componentes/pregunta/Pregunta';
import data from '../data_prueba/faq.json';


export default function Preguntas(props) {

    return(
        <div>
            <div className="pr_title">
                <h1>FAQ</h1>
                <p>¿Tienes alguna duda? Aquí se encuentran las preguntas más 
                recurrentes que puedes tener</p>
            </div>
            <div className='faq'>
                {data.map(data=>{
                    return <Pregunta  key={data.pregunta}  pregunta={data.pregunta} respuesta={data.respuesta}/>
                })}
            </div>
        </div>
    )
}