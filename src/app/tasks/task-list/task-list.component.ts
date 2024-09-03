import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../model/task-list';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {
  @Input() currentTaskList!:TaskList;
}