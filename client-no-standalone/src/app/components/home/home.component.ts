import { Component, DestroyRef, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskCountInupt } from '../../models/task-count-input.model';
import { TaskInput } from '../../models/task-input.model';
import { Task } from '../../models/task.model';
import { TaskDto } from '../../models/task-dto.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //#region inject functions
  private taskService = inject(TaskService);
  private destroyRef = inject(DestroyRef);
  private localStorageService = inject(LocalStorageService);
  //#endregion

  //#region interfaces
  taskCount: TaskCountInupt = {
    toDoTaskCount: 0,
    completedTaskCount: 0
  };
  taskInput: TaskInput = {
    todoTasks: [],
    completedTasks: [],
    searchTerm: ''
  };
  //#endregion

  //#region lifecycles
  ngOnInit(): void {
    this.fetchTasks();
  }
  //#endregion

  //#region methods
  deleteTask(taskId: string): void {
    this.taskService.delete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  completeTask(taskId: string): void {
    this.taskService.complete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  inCompleteTask(taskId: string): void {
    this.taskService.inComplete(taskId).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  private fetchTasks(): void { // fist publis and then private methods
    this.localStorageService.tasks$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (tasks) => {
        if (this.taskCount && this.taskInput) {
          this.taskCount.toDoTaskCount = tasks.length;
          this.taskCount.completedTaskCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
          this.taskInput.todoTasks = tasks.filter(task => !task.completed);
          this.taskInput.completedTasks = tasks.filter(task => task.completed);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  //#endregion

  //#region DTO convertor
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
