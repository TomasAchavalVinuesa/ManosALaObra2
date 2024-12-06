import ListaTareas from "../components/ListaTareas/ListaTareas.jsx"
import Encabezado from "../components/Encabezado/Encabezado.jsx"

function ListaTareaCompleta(){

    return(
        <div className="todo-container">
            <Encabezado/>
            <ListaTareas/>
        </div>
    );
}

export default ListaTareaCompleta;