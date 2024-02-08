import { Component, EventEmitter, Output, input } from '@angular/core';
import { TaskEmptyCaptionModel } from '../models/task-input-caption.model';
import { TaskModel } from '../models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  //#region properties
  task = input.required<TaskModel[]>();
  rightIcon = input.required<string>();
  leftIcon = input.required<string>();
  taskEmptyCaption = input.required<TaskEmptyCaptionModel>();
  loading = input.required<boolean>();

  @Output() clickLeftButtonEvent = new EventEmitter<string>();
  @Output() clickRightButtonEvent = new EventEmitter<string>();
  //#endregion

  //#region handler methods
  public onClickLeftButtonHandler(taskId: string): void {
    this.clickLeftButtonEvent.emit(taskId);
  }

  public onClickRightButtonHandler(taskId: string): void {
    this.clickRightButtonEvent.emit(taskId);
  }
  //#endregion
}
