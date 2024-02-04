import { Component, EventEmitter, Output, input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  //#region properties
  task = input.required<Task[]>();
  rightButton = input.required<(taskId: string) => void>();
  leftButton = input.required<(taskId: string) => void>();

  @Output('clickRightButton') clickRightButtonEvent = new EventEmitter();
  @Output('clickLeftButton') clickLeftButonEvent = new EventEmitter();
  //#endregion
}
