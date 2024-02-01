import { Component, EventEmitter, Output, input } from '@angular/core';
import { CompletedTaskInput, TodoTaskInput } from '../../../models/task-input.model';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html',
  styleUrl: './task-completed.component.css'
})
export class TaskCompletedComponent {
  //#region properties
  completedTaskInput = input.required<CompletedTaskInput>();

  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() inCompleteTaskEvent = new EventEmitter<string>();

  completedTasks: CompletedTaskInput = {
    completedTasks: [],
    searchTerm: ''
  }

  todoTasks: TodoTaskInput = {
    todoTasks: [],
    searchTerm: ''
  }

  tasks: Task[] = [];
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
