import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { TaskInput } from '../../models/task-input.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // new signal input
  taskInput = input<TaskInput>({ todoTasks: [], completedTasks: [], searchTerm: '' });
  @Input() loadingTasks: boolean | undefined;

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
