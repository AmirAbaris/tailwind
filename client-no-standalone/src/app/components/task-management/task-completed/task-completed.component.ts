
import { Component, EventEmitter, Output, input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-completed',
  templateUrl: './task-completed.component.html',
  styleUrl: './task-completed.component.css'
})
export class TaskCompletedComponent {
  //#region properties
  taskName = input.required<Task[]>();
  rightButton = input.required<(taskId: string) => void>();
  leftButton = input.required<(taskId: string) => void>();

  @Output('clickRightButton') clickRightButtonEvent = new EventEmitter();
  @Output('clickLeftButton') clickLeftButonEvent = new EventEmitter();
  //#endregion
}
