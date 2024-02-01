import { Component, EventEmitter, Output, input } from '@angular/core';
import { CompletedTaskInput, TodoTaskInput } from '../../../models/task-input.model';
import { AllTasks, Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html',
  styleUrl: './task-completed.component.css'
})
export class TaskCompletedComponent {
  //#region properties
  taskInput = input.required<AllTasks>();

  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() inCompleteTaskEvent = new EventEmitter<string>();
  //#endregion

  //#region handler methods
  onDeleteTaskHandler(taskId: string): void {
    this.deleteTaskEvent.emit(taskId);
  }
  onInCompleteTaskHandler(taskId: string): void {
    this.inCompleteTaskEvent.emit(taskId);
  }
  //#endregion
}
