import { Component, EventEmitter, Output, input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrl: './task-todo.component.css'
})
export class TaskTodoComponent {
  //#region properties
  taskName = input.required<Task[]>();
  rightButton = input.required<(taskId: string) => void>();
  leftButton = input.required<(taskId: string) => void>();

  @Output('clickRightButton') clickRightButtonEvent = new EventEmitter();
  @Output('clickLeftButton') clickLeftButonEvent = new EventEmitter();
  //#endregion
}
