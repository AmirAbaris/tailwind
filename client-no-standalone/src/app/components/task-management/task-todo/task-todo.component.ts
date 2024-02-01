import { Component, EventEmitter, Output, input } from '@angular/core';
import { CompletedTaskInput, TodoTaskInput } from '../../../models/task-input.model';
import { AllTasks, Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrl: './task-todo.component.css'
})
export class TaskTodoComponent {
  //#region properties
  taskInput = input.required<AllTasks>();
  //#endregion
}
