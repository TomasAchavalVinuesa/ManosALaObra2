import Tarea from "../Tarea/Tarea.jsx";

function ListaTareas(){
    const tasks =[
        {id: 1, taskNumber: "task1", descripcion: "Resumir Conceptos de web"},
        {id: 2, taskNumber: "task2", descripcion: "Realizar los prácticos"},
        {id: 3, taskNumber: "task3", descripcion: "Enviar los proyectos"},
        {id: 4, taskNumber: "task4", descripcion: "Preparar presentación del proyecto"}
    ]

    const tasksItems = tasks.map(
        task => <Tarea taskNumber={task.taskNumber} descripcion={task.descripcion} />
    )
    return(
        <ul className="task-list">
            {tasksItems}
        </ul>
    );
}

export default ListaTareas;