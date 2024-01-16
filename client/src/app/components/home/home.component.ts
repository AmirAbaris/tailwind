import { Component, DestroyRef, OnInit, inject } from '@angular/core';
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
export class HomeComponent implements OnInit {
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
