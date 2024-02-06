import { Component, input } from '@angular/core';
import { TaskCount } from '../models/task-count.model';
import { TaskCountCaption } from '../models/task-count-caption.model';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrl: './task-count.component.css'
})
export class TaskCountComponent {
  //#region properties
  counts = input.required<TaskCount>();
  caption = input.required<TaskCountCaption>();
  //#endregion
}
