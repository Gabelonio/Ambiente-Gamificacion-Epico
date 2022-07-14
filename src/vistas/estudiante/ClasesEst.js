
import './clasesEst.css';

import data from '../../data_prueba/clases.json'
import FichaClase from '../../componentes/fichaClase/FichaClase'


export default function ClasesEst(props){

    return( <div className='clasesEst'>
               <h1> Mis Clases</h1>
               <hr></hr>
               <div className="misClases">
                    {data.map(item => { return <FichaClase key={item} clase={item}/>})}
               </div>
               <div className="ingresarClase">
                    <h1>Matricularme en una clase</h1>
                    <hr></hr>
               </div>
            </div>)
 
}