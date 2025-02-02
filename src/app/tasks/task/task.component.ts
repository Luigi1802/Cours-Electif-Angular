import { Component, Input} from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() currentTask!:Task;
}