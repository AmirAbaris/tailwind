import { Component, input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-todo-card',
  templateUrl: './task-todo-card.component.html',
  styleUrl: './task-todo-card.component.css'
})
export class TaskTodoCardComponent {
  todoTaskInput = input.required<Task[]>();
}
