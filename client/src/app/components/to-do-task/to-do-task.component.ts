import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-to-do-task',
  standalone: true,
  imports: [
    MatIconModule, FilterPipe, FormsModule,
    ReactiveFormsModule, MatInputModule, MatDividerModule,
    MatCardModule
  ],
  templateUrl: './to-do-task.component.html',
  styleUrl: './to-do-task.component.css'
})
export class ToDoTaskComponent {
  @Input() searchTerm: string = '';
  @Input() todoTasks: Task[] = [];

  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() completeTaskEvent = new EventEmitter<string>();

  onDeleteTask(taskId: string): void {
    this.deleteTaskEvent.emit(taskId);
  }

  onCompleteTask(taskId: string): void {
    this.completeTaskEvent.emit(taskId);
  }
}
