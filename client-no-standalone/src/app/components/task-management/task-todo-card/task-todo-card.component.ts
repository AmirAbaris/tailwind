import { Component, DestroyRef, inject, input } from '@angular/core';
import { Task } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-task-todo-card',
  templateUrl: './task-todo-card.component.html',
  styleUrl: './task-todo-card.component.css'
})
export class TaskTodoCardComponent {
  //#region inject functions
  private taskService = inject(TaskService);
  private destroyRef = inject(DestroyRef);
  //#endregion

  //#region properties
  todoTaskInput = input.required<Task[]>();
  searchQuery = input.required<string>();
  //#endregion

  //#region handler methods
  onDeleteTaskHandler(taskId: string): void {
    this.taskService.delete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  onCompleteTaskHandler(taskId: string): void {
    this.taskService.complete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  //#endregion
}
