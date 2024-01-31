import { Component, input } from '@angular/core';
import { TaskCountInupt } from '../../../models/task-count-input.model';

@Component({
  selector: 'app-task-count-card',
  templateUrl: './task-count-card.component.html',
  styleUrl: './task-count-card.component.css'
})
export class TaskCountCardComponent {
  taskCount = input.required<TaskCountInupt>();
}
