import { Component, EventEmitter, Output, input } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskIcon } from '../models/task-card-icon.model';
import { TaskEmptyCaption } from '../models/task-input-caption.model';
import { TaskCaption } from '../models/task-caption.model';

@Component({
  selector: 'app-task-card-management',
  templateUrl: './task-card-management.component.html',
  styleUrl: './task-card-management.component.css'
})
export class TaskCardManagementComponent {
  //#region properties
  todoTasks = input.required<Task[]>();
  completedTasks = input.required<Task[]>();
  taskIcon = input.required<TaskIcon>();
  taskEmptyCaption = input.required<TaskEmptyCaption>();
  taskCaption = input.required<TaskCaption>();
  loading = input.required<boolean>();

  @Output() clickLeftButtonEvent = new EventEmitter<string>();
  @Output() clickRightButtonEvent = new EventEmitter<string>();
  @Output() anotherClickRightButtonEvent = new EventEmitter<string>();
  //#endregion

  // #region handler methods
  public onClickDoneHandler(taskId: string): void {
    this.clickRightButtonEvent.emit(taskId);
  }

  public onClickUndoHandler(taskId: string): void {
    this.anotherClickRightButtonEvent.emit(taskId);
  }

  public onClickDeleteHandler(taskId: string): void {
    this.clickLeftButtonEvent.emit(taskId);
  }
  //#endregion
}
