import { Component, inject } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly #taskService = inject(TaskService);

  taskCount: number = 0;

  countAllTasks(): void {
    this.#taskService.tasks$.pipe(takeUntilDestroyed()).subscribe({
      next: (tasks) => {
        this.taskCount = tasks.length;
      }
    });
  }
}
