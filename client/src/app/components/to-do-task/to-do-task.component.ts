import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-to-do-task',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './to-do-task.component.html',
  styleUrl: './to-do-task.component.css'
})
export class ToDoTaskComponent implements OnInit {
  readonly #taskService = inject(TaskService);
  readonly #destryoRef = inject(DestroyRef);

  todoTasks: Task[] = [];

  ngOnInit(): void {
    this.#taskService.tasks$.pipe(takeUntilDestroyed(this.#destryoRef)).subscribe({
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
}
