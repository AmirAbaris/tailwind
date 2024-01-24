import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrl: './task-count.component.css'
})
export class TaskCountComponent {
  @Input() taskCount: number = 0;
  @Input() completedTasksCount: number = 0;
}
