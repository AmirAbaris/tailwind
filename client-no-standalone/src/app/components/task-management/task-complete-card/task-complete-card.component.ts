import { Component, input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-complete-card',
  templateUrl: './task-complete-card.component.html',
  styleUrl: './task-complete-card.component.css'
})
export class TaskCompleteCardComponent {
  completedTaskInput = input.required<Task[]>();
}
