import React from 'react'
import TaskComponent from './pure/task'
import { Task } from '../../models/task_class'
import { LEVELS } from '../../models/levels.enum'

//Componente que renderiza una lista del componenete tarea

function TaskListComponent() {

    const defaultTask = new Task('Andres','Lavar la ropa', false, LEVELS.NORMAL);

  return (
    <div>
        <h1>Lista de Tareas</h1>
        <TaskComponent task = {defaultTask} />
    </div>
  )
}



export default TaskListComponent
