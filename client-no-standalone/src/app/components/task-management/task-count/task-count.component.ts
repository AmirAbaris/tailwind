import { Component, inject, input } from '@angular/core';
import { TaskCount } from '../models/task-count.model';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrl: './task-count.component.css'
})
export class TaskCountComponent {
  //#region properties
  public counts = input.required<TaskCount>();
  //#endregion
}
