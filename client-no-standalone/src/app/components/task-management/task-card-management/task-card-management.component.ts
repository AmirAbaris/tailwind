import { Component, EventEmitter, Output, input } from '@angular/core';
import { TaskInputModel, TaskModel } from '../models/task.model';
import { TaskEmptyCaptionModel } from '../models/task-input-caption.model';
import { TaskManagementCaptionModel } from '../models/task-management-caption.model';

@Component({
  selector: 'app-task-card-management',
  templateUrl: './task-card-management.component.html',
  styleUrl: './task-card-management.component.css'
})
export class TaskCardManagementComponent {
  //#region properties
  tasks = input.required<TaskInputModel>();
  caption = input.required<TaskManagementCaptionModel>()
  loading = input.required<boolean>();

  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() completeTaskEvent = new EventEmitter<string>();
  @Output() inCompleteTaskEvent = new EventEmitter<string>();
  //#endregion

  // #region handler methods
  public onClickDoneHandler(taskId: string): void {
    this.completeTaskEvent.emit(taskId);
  }

  public onClickUndoHandler(taskId: string): void {
    this.inCompleteTaskEvent.emit(taskId);
  }

  public onClickDeleteHandler(taskId: string): void {
    this.deleteTaskEvent.emit(taskId);
  }
  //#endregion
}
