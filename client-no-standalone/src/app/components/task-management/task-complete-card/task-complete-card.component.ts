import { Component, DestroyRef, EventEmitter, Output, inject, input } from '@angular/core';
import { Task } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-task-complete-card',
  templateUrl: './task-complete-card.component.html',
  styleUrl: './task-complete-card.component.css'
})
export class TaskCompleteCardComponent {
  //#region properties
  completedTaskInput = input.required<Task[]>();
  searchQuery = input.required<string>();
  //#endregion
}
