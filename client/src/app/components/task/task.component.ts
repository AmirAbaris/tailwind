import { HttpClientModule } from '@angular/common/http';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  readonly #taskService = inject(TaskService);
  readonly #destryoRef = inject(DestroyRef);

  tasks: Task[] = [];

  ngOnInit(): void {
    this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destryoRef)).subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      }
    });
  }

  completeTask(task: Task): void {
    task.completed = true;
  }
}
