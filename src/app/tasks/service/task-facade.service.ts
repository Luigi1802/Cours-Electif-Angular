import { inject, Injectable } from '@angular/core';
import { TasksModule } from '../tasks.module';
import { CRUDTaskListServiceService } from './crudtask-list-service.service';
import { ByStatutTaskListServiceService } from './by-statut-task-list-service.service';
import { TaskList } from '../model/task-list';
import { ETAT, Task } from '../model/task';

@Injectable({
  providedIn: TasksModule
})
export class TaskFacadeService {
  crudTaskListServiceService: CRUDTaskListServiceService = inject (CRUDTaskListServiceService);
  byStatutTaskListServiceService: ByStatutTaskListServiceService = inject (ByStatutTaskListServiceService);

  constructor() { }

  // crudTaskListServiceService

  postTask(task: Task)  {
    this.crudTaskListServiceService.postTask(task);
  }
  getTasklist(): TaskList{
    return this.crudTaskListServiceService.getTasklist();
  }
  putTask(task: Task) {
    return this.crudTaskListServiceService.putTask(task);
  }
  deleteTask(task: Task) {
    return this.crudTaskListServiceService.deleteTask(task);
  }

  // byStatutTaskListServiceService

  getTasklistByStatut(etat: ETAT) {
    return this.byStatutTaskListServiceService.getTasklistByStatut(etat);
  }
  
}
