import { Component, input } from '@angular/core';
import { TaskInput } from '../../../models/task.model';

@Component({
  selector: 'app-task-count-card',
  templateUrl: './task-count-card.component.html',
  styleUrl: './task-count-card.component.css'
})
export class TaskCountCardComponent {
  allTasks = input.required<TaskInput>();
}
