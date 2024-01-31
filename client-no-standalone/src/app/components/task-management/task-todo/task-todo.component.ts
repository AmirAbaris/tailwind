import { Component, EventEmitter, Output, input } from '@angular/core';
import { CompletedTaskInput, TodoTaskInput } from '../../../models/task-input.model';

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrl: './task-todo.component.css'
})
export class TaskTodoComponent {
  //#region properties
  todoTaskInput = input.required<TodoTaskInput>();
  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() completeTaskEvent = new EventEmitter<string>();

  todoTasks: TodoTaskInput = {
    todoTasks: [],
    searchTerm: ''
  }
  
  completedTasks: CompletedTaskInput = {
    completedTasks: [],
    searchTerm: ''
  }
  //#endregion

  //#region handler methods
  onDeleteTaskHandler(taskId: string): void {
    this.deleteTaskEvent.emit(taskId);
  }

  onCompleteTaskHandler(taskId: string): void {
    this.completeTaskEvent.emit(taskId);
  }
}
