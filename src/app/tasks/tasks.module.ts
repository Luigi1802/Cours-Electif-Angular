import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MainTaskComponent } from './main-task/main-task.component';
import { TaskColorDirective } from './directive/task-color.directive';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { CRUDTaskListServiceService } from './service/crudtask-list-service.service';
import { ByStatutTaskListServiceService } from './service/by-statut-task-list-service.service';
import { TaskFacadeService } from './service/task-facade.service';


@NgModule({
  declarations: [TaskComponent, TaskListComponent, MainTaskComponent, TaskColorDirective, DateFormatPipe],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  providers: [CRUDTaskListServiceService, ByStatutTaskListServiceService, TaskFacadeService]
})
export class TasksModule { }
