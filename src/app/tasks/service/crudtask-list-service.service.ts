import { Injectable, OnInit } from '@angular/core';
import { TasksModule } from '../tasks.module';
import { TaskList } from '../model/task-list';
import { ETAT, Task } from '../model/task';
import { CRUDTaskServiceInterface } from '../interface/crudtask-service-interface';

@Injectable({
  providedIn: TasksModule
})
export class CRUDTaskListServiceService implements CRUDTaskServiceInterface {

  tasks: Task[] = [
    {titre: "Tache 1", description: "Faire la vaisselle", etat: ETAT.TERMINEE, date:new Date()},
    {titre: "Tache 2", description: "Construire l'appli task-manager", etat: ETAT.EN_COURS, date:new Date()},
    {titre: "Tache 3", description: "Trouver une alternance", etat: ETAT.A_FAIRE, date:new Date()},
    {titre: "Tache 4", description: "Aider PH", etat: ETAT.TERMINEE, date:new Date()},
    {titre: "Tache 5", description: "Aller chercher un café", etat: ETAT.A_FAIRE, date:new Date()}
  ];
  taskList: TaskList = {tasks: this.tasks};
  
  constructor() { }

  // CRUD

  postTask(task: Task)  {
    this.tasks.push(task);
    this.taskList = {tasks: this.tasks};
  }

  getTasklist(): TaskList{
    return this.taskList;
  }

  putTask(task: Task) {
    //
  }

  deleteTask(task: Task) {
    //
  }
}
