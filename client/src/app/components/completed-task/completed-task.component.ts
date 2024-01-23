import { Component, DestroyRef, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [
    MatIconModule, MatDividerModule, MatCardModule
  ],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.css'
})
export class CompletedTaskComponent {
  @Input() completedTasks: Task[] = [];

  @Output() deleteTaskEvent = new EventEmitter<string>();

  onDeleteTask(taskId: string): void {
    this.deleteTaskEvent.emit(taskId);
  }
}
