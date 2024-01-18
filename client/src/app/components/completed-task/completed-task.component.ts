import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.css'
})
export class CompletedTaskComponent implements OnInit {
  readonly #taskService = inject(TaskService);
  readonly #destryoRef = inject(DestroyRef);

  completedTasks: Task[] = [];

  ngOnInit(): void {
    this.showCompletedTasks();
  }

  showCompletedTasks(): void {
    this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destryoRef)).subscribe({
      next: (tasks) => {
        this.completedTasks = tasks.filter(task => task.completed);
      }
    });
  }

  deleteTask(taskId: string): void {
    this.#taskService.delete(taskId);
  }
}
