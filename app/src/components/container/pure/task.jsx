import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../../models/task_class'

//rfc (Shorcut para crear componenete funcional)
//Componente que renderiza la tarea en si

function TaskComponent({ task }) {

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                <span>{task.level}</span>
            </td>
            <td className='align-middle'>
                <span>{task.completed}</span>
            </td>
        </tr>



    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
