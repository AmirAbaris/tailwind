import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { TaskInput } from '../../models/task-input.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // new signal input
  taskInput = input.required<TaskInput>();

  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() completeTaskEvent = new EventEmitter<string>();
  @Output() inCompleteTaskEvent = new EventEmitter<string>();

  onDeleteTaskHandler(taskId: string): void {
    this.deleteTaskEvent.emit(taskId);
  }

  onCompleteTaskHandler(taskId: string): void {
    this.completeTaskEvent.emit(taskId);
  }

onInCompleteTaskHandler(taskId: string): void {
    this.inCompleteTaskEvent.emit(taskId);
  }
}
