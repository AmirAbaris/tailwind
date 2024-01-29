import { Component, DestroyRef, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskCountInupt } from '../../models/task-count-input.model';
import { TaskInput } from '../../models/task-input.model';
import { Task } from '../../models/task.model';
import { TaskDto } from '../../models/task-dto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //#region inject functions
  readonly #taskService = inject(TaskService);
  readonly #destroyRef = inject(DestroyRef);
  //#endregion

  //#region interfaces and var
  taskCount: TaskCountInupt = {
    toDoTaskCount: 0,
    completedTaskCount: 0
  };
  taskInput: TaskInput = {
    todoTasks: [],
    completedTasks: [],
    searchTerm: ''
  };

  loadingTasks: boolean | undefined;
  //#endregion

  //#region lifecycles
  ngOnInit(): void {
    this.fetchTasks();
  }
  //#endregion

  //#region methods
  private fetchTasks(): void {
    this.loadingTasks = true;

    this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: (tasks) => {
        if (this.taskCount && this.taskInput) {
          this.taskCount.toDoTaskCount = tasks.length;
          this.taskCount.completedTaskCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
          this.taskInput.todoTasks = tasks.filter(task => !task.completed);
          this.taskInput.completedTasks = tasks.filter(task => task.completed);

          this.loadingTasks = false;
        }
      },
      error: (err) => {
        this.loadingTasks = false;

        console.log(err);
      }
    });
  }

  deleteTask(taskId: string): void {
    this.#taskService.delete(taskId).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }

  completeTask(taskId: string): void {
    this.#taskService.complete(taskId).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }

  inCompleteTask(taskId: string): void {
    this.#taskService.inComplete(taskId).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  } // fist publis and then privats
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
