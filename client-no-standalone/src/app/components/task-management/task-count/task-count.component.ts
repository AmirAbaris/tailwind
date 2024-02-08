import { Component, input } from '@angular/core';
import { TaskCountModel } from '../models/task-count.model';
import { TaskCountCaptionModel } from '../models/task-count-caption.model';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrl: './task-count.component.css'
})
export class TaskCountComponent {
  //#region properties
  counts = input.required<TaskCountModel>();
  caption = input.required<TaskCountCaptionModel>();
  //#endregion
}
