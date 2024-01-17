import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-count',
  standalone: true,
  imports: [],
  templateUrl: './task-count.component.html',
  styleUrl: './task-count.component.css'
})
export class TaskCountComponent {
  readonly #taskService = inject(TaskService);
  readonly #destroyRef = inject(DestroyRef);

  taskCount: number = 0;

  ngOnInit(): void {
    this.countAllTasks();
  }

  countAllTasks(): void {
    this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe({
      next: (tasks) => {
        if (tasks) {
          this.taskCount = tasks.length;
        }
      }
    });
  }
}
