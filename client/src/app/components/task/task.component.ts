import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    MatIconModule, MatCardModule, MatDividerModule,
    FilterPipe, CommonModule, MatInputModule,
    FormsModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() searchTerm: string = '';
  @Input() todoTasks: Task[] = [];
  @Input() completedTasks: Task[] = [];

  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() completeTaskEvent = new EventEmitter<string>();

  onDeleteTask(taskId: string): void {
    this.deleteTaskEvent.emit(taskId);
  }

  onCompleteTask(taskId: string): void {
    this.completeTaskEvent.emit(taskId);
  }
}
