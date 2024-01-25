import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInput } from '../../models/task-input.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() taskInput: TaskInput | undefined;

  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() completeTaskEvent = new EventEmitter<string>();
  @Output() inCompleteTaskEvent = new EventEmitter<string>();

  onDeleteTask(taskId: string): void {
    this.deleteTaskEvent.emit(taskId);
  }

  onCompleteTask(taskId: string): void {
    this.completeTaskEvent.emit(taskId);
  }

  onInCompleteTask(taskId: string): void {
    this.inCompleteTaskEvent.emit(taskId);
  }
}
