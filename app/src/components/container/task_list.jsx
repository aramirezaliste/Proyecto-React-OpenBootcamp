import React from "react";
import TaskComponent from "./pure/task";
import { Task } from "../../models/task_class";
import { LEVELS } from "../../models/levels.enum";

//Componente que renderiza una lista del componenete tarea

function TaskListComponent() {
  const defaultTask1 = new Task(
    "Andres",
    "Lavar la ropa",
    false,
    LEVELS.NORMAL
  );

  // Estado del componente
  /*const [tasks, setTasks] = useState(defaultTask1);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [tasks]); */

  // data-mdb-perfect-scrollbar="true" -- hace scroll si hace muchas tareas y pasa de 400px

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5 className="">Lista de Tareas
            </h5>
          </div>
          <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "400px" }}>
            <table >
              <thead>
              <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
              </tr>
              </thead>
              <tbody>
              <TaskComponent task={defaultTask1} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default TaskListComponent;
