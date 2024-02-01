
import { Component, input } from '@angular/core';
import { AllTasks, Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html',
  styleUrl: './task-completed.component.css'
})
export class TaskCompletedComponent {
  //#region properties
  taskInput = input.required<AllTasks>();
  //#endregion
}
