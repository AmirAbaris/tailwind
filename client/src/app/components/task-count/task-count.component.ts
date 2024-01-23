import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskService } from '../../services/task.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-task-count',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './task-count.component.html',
  styleUrl: './task-count.component.css'
})
export class TaskCountComponent {
  readonly #taskService = inject(TaskService);
  readonly #destroyRef = inject(DestroyRef);

  taskCount: number = 0;
  completedTasksCount: number = 0;

  ngOnInit(): void {
    this.countAllTasks();
    this.calcCompletedTasks();
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
}
