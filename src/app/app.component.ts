import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksModule } from './tasks/tasks.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasksModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
}
