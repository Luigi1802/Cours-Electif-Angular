import { inject, Injectable } from '@angular/core';
import { TasksModule } from '../tasks.module';
import { CRUDTaskListServiceService } from './crudtask-list-service.service';
import { TaskList } from '../model/task-list';
import { ETAT, Task } from '../model/task';
import { ByStatutTaskServiceInterface } from '../interface/by-statut-task-service-interface';

@Injectable({
  providedIn: TasksModule
})
export class ByStatutTaskListServiceService implements ByStatutTaskServiceInterface{

  crudTaskListServiceService: CRUDTaskListServiceService = inject (CRUDTaskListServiceService);
  taskList!: TaskList;
  newTasks!: Task[];
  newTaskList!: TaskList;

  constructor() { }

  getTasklistByStatut(etat: ETAT): TaskList {
    this.newTasks = [];
    this.taskList = this.crudTaskListServiceService.getTasklist();
    this.taskList.tasks.forEach(task => {
      if (task.etat === etat) {
        this.newTasks.push(task);
      }
    });
    this.newTaskList = {tasks: this.newTasks};
    return this.newTaskList;
  }
}
