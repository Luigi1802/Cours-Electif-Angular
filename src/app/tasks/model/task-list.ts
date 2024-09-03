import { Task } from "./task";

export class TaskList {
    tasks!: Task[];

    constructor(tasks:Task[]) {
      this.tasks = tasks;
    }
}
