import { Component, OnInit, input } from '@angular/core';
import { AllTasks, Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  allTasksInput = input.required<AllTasks>();
}
