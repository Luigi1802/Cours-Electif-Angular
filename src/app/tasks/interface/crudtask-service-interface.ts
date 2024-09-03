import { Task } from "../model/task";
import { TaskList } from "../model/task-list";

export interface CRUDTaskServiceInterface {
    postTask(task: Task): void;
    getTasklist(): TaskList;
    putTask(task: Task): void;
    deleteTask(task: Task): void;
}
