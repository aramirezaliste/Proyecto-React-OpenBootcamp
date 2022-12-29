import { LEVELS } from "./levels.enum";

//Clase creadora de las task
export class Task {
    
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL; //Niveles exportados de un objeto .js
    
    
    constructor(name,description,completed,level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level
    }
}