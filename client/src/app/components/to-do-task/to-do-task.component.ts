import { Component, Input } from '@angular/core';
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
}
