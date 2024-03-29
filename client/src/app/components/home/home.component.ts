import { Component, DestroyRef, inject } from '@angular/core';
import { TaskCountComponent } from '../task-count/task-count.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TaskCountComponent,
    TaskComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly #taskService = inject(TaskService);
  readonly #destroyRef = inject(DestroyRef);

  taskCount: number = 0;
  completedTasksCount: number = 0;
  todoTasks: Task[] = [];
  searchTerm: string = '';
  completedTasks: Task[] = [];

  ngOnInit(): void {
    this.countAllTasks();
    this.calcCompletedTasks();
    this.showTodoTasks();
    this.showCompletedTasks();
  }

  countAllTasks(): void {
    this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: (tasks) => {
        this.taskCount = tasks.length;
      }
    });
  }

  calcCompletedTasks(): void {
    this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: (tasks) => {
        // calc the completed tasks by arrow func
        this.completedTasksCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
      }
    });
  }

  showTodoTasks(): void {
    this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: (tasks) => {
        this.todoTasks = tasks.filter(task => !task.completed);
      }
    });
  }

  deleteTask(taskId: string): void {
    this.#taskService.delete(taskId);
  }

  completeTask(taskId: string): void {
    this.#taskService.complete(taskId);
  }

  inCompleteTask(taskId: string): void {
    this.#taskService.inComplete(taskId);
  }

  showCompletedTasks(): void {
    this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: (tasks) => {
        this.completedTasks = tasks.filter(task => task.completed);
      }
    });
  }
}