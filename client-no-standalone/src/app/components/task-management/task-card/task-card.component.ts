import { Component, input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  taskInput = input.required<Task[]>();
}
