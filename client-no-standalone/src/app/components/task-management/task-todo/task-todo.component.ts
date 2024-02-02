import { Component, input } from '@angular/core';
import { TaskInput } from '../../../models/task.model';

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrl: './task-todo.component.css'
})
export class TaskTodoComponent {
  //#region properties
  taskInput = input.required<TaskInput>();
  searchQuery = input.required<string>();
  //#endregion
}
