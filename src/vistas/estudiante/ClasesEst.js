
import './clasesEst.css';

import data from '../../data_prueba/clases.json'
import FichaClase from '../../componentes/fichaClase/FichaClase'


export default function ClasesEst(props){

    return( <div className='clasesEst'>
               <h1> Mis Clases</h1>
               <hr></hr>
               <div className="misClases">
                    {data.map(item => { return <FichaClase/>})}
                    {data.map(item => { return <FichaClase/>})}
                    {data.map(item => { return <FichaClase/>})}
               </div>
               <hr></hr>
               <div className="ingresarClase">
                    <h1>busqueda de clases</h1>
               </div>
            </div>)
 
}