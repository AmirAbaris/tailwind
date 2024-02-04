import { Component, inject } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { TaskInput } from '../../../models/task.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskCount } from '../../../models/task-count.model';

@Component({
  selector: 'app-task-management-main',
  templateUrl: './task-management-main.component.html',
  styleUrl: './task-management-main.component.css'
})
export class TaskManagementMainComponent {
  //#region inject functions
  private taskService = inject(TaskService);
  //#endregion

  //#region properties
  allTasks: TaskInput = {
    todoTasks: [],
    completedTasks: []
  };
  taskCounts: TaskCount = {
    toDoTaskCount: 0,
    completedTaskCount: 0
  };
  //#endregion

  //#region lifecycles
  ngOnInit(): void {
    this.allTasks.todoTasks = this.taskService.tasks.todoTasks;
    this.allTasks.completedTasks = this.taskService.tasks.completedTasks;

    this.calcTaskCounts();
  }
  //#endregion

  //#region logic methods
  private calcTaskCounts(): void {
    this.taskCounts.toDoTaskCount = this.allTasks.todoTasks.length;
    this.taskCounts.completedTaskCount = this.allTasks.completedTasks.length;
  }
  //#endregion

  //#region handler methods
  onCompleteTaskHandler(taskId: string): void {
    this.taskService.complete(taskId).pipe(takeUntilDestroyed()).subscribe();
  }

  onInCompleteTaskHandler(taskId: string): void {
    this.taskService.inComplete(taskId).pipe(takeUntilDestroyed()).subscribe();
  }

  onDeleteTaskHandler(taskId: string): void {
    this.taskService.delete(taskId).pipe(takeUntilDestroyed()).subscribe();
  }
  //#endregion
}
