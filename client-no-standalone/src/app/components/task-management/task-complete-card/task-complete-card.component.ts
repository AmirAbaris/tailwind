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
  //#region inject functions
  private taskService = inject(TaskService);
  private destroyRef = inject(DestroyRef);
  //#endregion

  //#region properties
  completedTaskInput = input.required<Task[]>();
  searchQuery = input.required<string>();
  //#endregion

  //#region handler methods
  onDeleteTaskHandler(taskId: string): void {
    this.taskService.delete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  onInCompleteTaskHandler(taskId: string): void {
    this.taskService.inComplete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  //#endregion
}
