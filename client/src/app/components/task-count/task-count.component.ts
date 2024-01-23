import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-task-count',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './task-count.component.html',
  styleUrl: './task-count.component.css'
})
export class TaskCountComponent {
  @Input() taskCount: number = 0;
  @Input() completedTasksCount: number = 0;
}
