import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskCountInupt } from '../../../models/task-count-input.model';
import { TaskDto } from '../../../dtos/task-dto.model';
import { Task } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';
import { CompletedTaskInput, TodoTaskInput } from '../../../models/task-input.model';

@Component({
  selector: 'app-task-management-main',
  templateUrl: './task-management-main.component.html',
  styleUrl: './task-management-main.component.css'
})
export class TaskManagementMainComponent {
  //#region inject functions
  private taskService = inject(TaskService);
  private destroyRef = inject(DestroyRef);
  //#endregion

  //#region interfaces
  taskCount: TaskCountInupt = {
    toDoTaskCount: 0,
    completedTaskCount: 0
  };
  todoTaskInput: TodoTaskInput = {
    todoTasks: [],
    searchTerm: ''
  };
  completedTaskInput: CompletedTaskInput = {
    completedTasks: [],
    searchTerm: ''
  };
  //#endregion

  //#region lifecycles
  ngOnInit(): void {
    // this.fetchTasks();
  }
  //#endregion

  //#region handler methods
  deleteTask(taskId: string): void {
    this.taskService.delete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  completeTask(taskId: string): void {
    this.taskService.complete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  inCompleteTask(taskId: string): void {
    this.taskService.inComplete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  //#endregion

  //#region logic methods
  //#endregion

  //#region helper methods
  private convertTaskDtoToTask(taskDto: TaskDto): Task {
    let task: Task = {
      id: taskDto.id,
      title: taskDto.title,
      completed: taskDto.completed,
    }

    return task;
  }
  //#endregion
}
