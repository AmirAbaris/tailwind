import { Component, DestroyRef, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-completed-card-management',
  templateUrl: './task-completed-card-management.component.html',
  styleUrl: './task-completed-card-management.component.css'
})
export class TaskCompletedCardManagementComponent {
  //#region inject functions
  private taskService = inject(TaskService);
  private destroyRef = inject(DestroyRef);
  //#endregion
  
  //#region properties
  taskIdInput = input.required<string>();
  //#endregion

  //#region handler methods
  deleteTaskHandler(taskId: string): void {
    this.taskService.delete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  inCompleteTaskHandler(taskId: string): void {
    this.taskService.inComplete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  //#endregion
}
