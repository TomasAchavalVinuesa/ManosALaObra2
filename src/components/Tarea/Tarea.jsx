import CheckboxInput from "../CheckboxInput/CheckboxInput.jsx";
import DescripcionTarea from "../DescripcionTarea/DescripcionTarea.jsx";
import Boton from "../Boton/Boton.jsx"

function Tarea(props){
    return(
        <li className="task-item">
            <CheckboxInput taskNumber={props.taskNumber}/>
            <DescripcionTarea taskNumber={props.taskNumber} descripcion={props.descripcion}/>
            <Boton clase="delete-button" texto="🗑" />
        </li>
    );
} 

export default Tarea;