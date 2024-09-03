import { Component, inject, OnInit } from '@angular/core';
import { ETAT } from '../model/task';
import { TaskList } from '../model/task-list';
import { TaskFacadeService } from '../service/task-facade.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrl: './main-task.component.css'
})
export class MainTaskComponent implements OnInit{
  taskList!:TaskList;
  currentTasks!:TaskList;
  archivedTasks!:TaskList;
  taskFacadeService: TaskFacadeService = inject (TaskFacadeService);

  ngOnInit(): void {
    this.taskList = this.taskFacadeService.getTasklistByStatut(ETAT.A_FAIRE);
    this.currentTasks = this.taskFacadeService.getTasklistByStatut(ETAT.EN_COURS);
    this.archivedTasks = this.taskFacadeService.getTasklistByStatut(ETAT.TERMINEE);
  }
  
}