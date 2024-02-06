import { Component, EventEmitter, Output, input } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskIcon } from '../models/task-card-icon.model';
import { TaskEmptyCaption } from '../models/task-input-caption.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  //#region properties
  task = input.required<Task[]>();
  taskIcon = input.required<TaskIcon>();
  taskEmptyCaption = input.required<TaskEmptyCaption>();

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
