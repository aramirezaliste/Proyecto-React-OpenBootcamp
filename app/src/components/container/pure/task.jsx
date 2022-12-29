import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../../models/task_class'

//rfc (Shorcut para crear componenete funcional)
//Componente que renderiza la tarea en si

function TaskComponent({ task }) {

    return (
        <div>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                Descripcion: {task.description}
            </h3>
            <h4>
                Importancia: {task.level}
            </h4>
            <h5>
                Estado: {task.completed ? 'Tarea Completada' : 'Tarea Pendiente'}
            </h5>
        </div>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
