import { ETAT } from "../model/task";
import { TaskList } from "../model/task-list";

export interface ByStatutTaskServiceInterface {
    getTasklistByStatut(etat: ETAT): TaskList; 
}
