import { Component, Input, input } from '@angular/core';
import { TaskCountInupt } from '../../models/task-count-input.model';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrl: './task-count.component.css'
})
export class TaskCountComponent {
  // @Input() taskCount: TaskCountInupt | undefined;
  taskCount = input<TaskCountInupt>({ toDoTaskCount: 0, completedTaskCount: 0 });
}
