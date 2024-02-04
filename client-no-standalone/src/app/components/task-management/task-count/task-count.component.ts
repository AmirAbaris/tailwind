import { Component, input } from '@angular/core';
import { TaskCount } from '../../../models/task-count.model';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrl: './task-count.component.css'
})
export class TaskCountComponent {
  taskCounts = input.required<TaskCount>();
}
