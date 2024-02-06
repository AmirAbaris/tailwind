import { Component, EventEmitter, Output, input } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskIcon } from '../models/task-card-icon.model';
import { TaskEmptyCaption } from '../models/task-input-caption.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  //#region properties
  todoTasks = input.required<Task[]>();
  completedTasks = input.required<Task[]>();
  taskIcon = input.required<TaskIcon>();
  taskEmptyCaption = input.required<TaskEmptyCaption>();

  @Output() clickLeftButtonEvent = new EventEmitter<string>();
  @Output() clickRightButtonEvent = new EventEmitter<string>();
  @Output() anotherClickRightButtonEvent = new EventEmitter<string>();

  // #endregion

  // #region handler methods
  // public onClickLeftButtonHandler(taskId: string): void {
  //   this.clickLeftButtonEvent.emit(taskId);
  // }

  // public onClickRightButtonHandler(taskId: string): void {
  //   this.clickRightButtonEvent.emit(taskId);
  // }
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
