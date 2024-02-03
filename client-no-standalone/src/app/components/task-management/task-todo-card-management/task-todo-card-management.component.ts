import { Component, DestroyRef, inject, input } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-task-todo-card-management',
  templateUrl: './task-todo-card-management.component.html',
  styleUrl: './task-todo-card-management.component.css'
})
export class TaskTodoCardManagementComponent {
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
  completeTaskHandler(taskId: string): void {
    this.taskService.complete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  //#endregion
}
