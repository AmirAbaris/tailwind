import { Component, DestroyRef, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskCountInupt } from '../../models/task-count-input.model';
import { TaskInput } from '../../models/task-input.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly #taskService = inject(TaskService);
  readonly #destroyRef = inject(DestroyRef);

  taskCount: TaskCountInupt | undefined;
  taskInput: TaskInput | undefined;

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: (tasks) => {
        if (this.taskCount && this.taskInput) {
          this.taskCount.toDoTaskCount = tasks.length;
          this.taskCount.completedTaskCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
          this.taskInput.todoTasks = tasks.filter(task => !task.completed);
          this.taskInput.completedTasks = tasks.filter(task => task.completed);
        }
      }
    });
  }

  // countToDoTasks(): void {
  //   this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
  //     next: (tasks) => {
  //       if (this.taskCount) {
  //         this.taskCount.toDoTaskCount = tasks.length;
  //       }
  //     }
  //   });
  // }

  // calcCompletedTaskCount(): void {
  //   this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
  //     next: (tasks) => {
  //       // calc the completed tasks by arrow func
  //       if (this.taskCount) {
  //         this.taskCount.completedTaskCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
  //       }
  //     }
  //   });
  // }

  // showTodoTasks(): void {
  //   this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
  //     next: (tasks) => {
  //       if (this.taskInput) {
  //         this.taskInput.todoTasks = tasks.filter(task => !task.completed);
  //       }
  //     }
  //   });
  // }

  deleteTask(taskId: string): void {
    this.#taskService.delete(taskId);
  }

  completeTask(taskId: string): void {
    this.#taskService.complete(taskId);
  }

  inCompleteTask(taskId: string): void {
    this.#taskService.inComplete(taskId);
  }

  // showCompletedTasks(): void {
  //   this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
  //     next: (tasks) => {
  //       if (this.taskInput) {
  //         this.taskInput.completedTasks = tasks.filter(task => task.completed);
  //       }
  //     }
  //   });
  // }
}
