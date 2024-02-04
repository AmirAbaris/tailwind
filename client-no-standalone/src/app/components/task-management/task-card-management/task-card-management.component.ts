import { Component, EventEmitter, Output, input } from '@angular/core';
import { Task, TaskInput } from '../../../models/task.model';

@Component({
  selector: 'app-task-card-management',
  templateUrl: './task-card-management.component.html',
  styleUrl: './task-card-management.component.css'
})
export class TaskCardManagementComponent {
  //#region properties
  tasks = input.required<TaskInput>();
  rightButton = input.required<(taskId: string) => void>();
  leftButton = input.required<(taskId: string) => void>();

  @Output('clickRightButton') clickRightButtonEvent = new EventEmitter();
  @Output('clickLeftButton') clickLeftButonEvent = new EventEmitter();
  //#endregion
}
