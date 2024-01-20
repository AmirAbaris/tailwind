import { Component } from '@angular/core';
import { TaskCountComponent } from '../task-count/task-count.component';
import { ToDoTaskComponent } from '../to-do-task/to-do-task.component';
import { CompletedTaskComponent } from '../completed-task/completed-task.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToDoTaskComponent,
    CompletedTaskComponent,
    TaskCountComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
