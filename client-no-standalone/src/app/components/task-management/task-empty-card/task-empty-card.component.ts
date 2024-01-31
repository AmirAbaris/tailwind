import { Component, inject, input } from '@angular/core';
import { CompletedTaskInput, TodoTaskInput } from '../../../models/task-input.model';

@Component({
  selector: 'app-task-empty-card',
  templateUrl: './task-empty-card.component.html',
  styleUrl: './task-empty-card.component.css'
})
export class TaskEmptyCardComponent {
  todoTaskInput = input.required<TodoTaskInput>();
  completedTaskInput = input.required<CompletedTaskInput>();
}
