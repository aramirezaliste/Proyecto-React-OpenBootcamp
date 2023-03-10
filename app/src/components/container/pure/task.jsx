import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../../models/task_class'
import { LEVELS } from '../../../models/levels.enum';

//rfc (Shorcut para crear componenete funcional)
//Componente que renderiza la tarea en si

function TaskComponent({ task }) {

    //Ciclo de vida de las tareas
    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log(`Tarea: ${task.name} sera desmontada `);
        }
    }, [task]);

    //La funcion va a retornar un Badge dependiendo del nivel de la tarea
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>)

            case LEVELS.URGENTE:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>)

            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>)

            default:
                break;
        }
    }

    function taskCompletedIcon() {
        if (task.completed) {
            return (<i className='bi bi-toggle-on' style={{ color: "green" }}></i>)
        }
        else
            return (<i className='bi bi-toggle-off' style={{ color: "grey" }}></i>)
    }


return (
    <tr className='fw-normal'>
        <th>
            <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
            <span>{task.description}</span>
        </td>
        <td className='align-middle'>
            {/*Ejecucion de la funcion para retornar un elemento badge*/}
            {taskLevelBadge()}
        </td>
        <td className='align-middle'>
             {/*Ejecucion de la funcion para retornar un icono*/}
            { taskCompletedIcon()}
            <i className='bi bi-trash ms-1' style={{ color: "tomato" }}></i>
        </td>
    </tr>



)
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
