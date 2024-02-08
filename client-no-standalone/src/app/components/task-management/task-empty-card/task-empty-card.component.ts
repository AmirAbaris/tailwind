import { Component, input } from '@angular/core';
import { TaskEmptyCaptionModel } from '../models/task-input-caption.model';

@Component({
  selector: 'app-task-empty-card',
  templateUrl: './task-empty-card.component.html',
  styleUrl: './task-empty-card.component.css'
})
export class TaskEmptyCardComponent {
  //#region properties
  taskEmptyCaption = input.required<TaskEmptyCaptionModel>();
  //#endregion
}
