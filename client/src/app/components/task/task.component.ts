import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: Task[] = [];

  addTask(titleCtrl: string): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: titleCtrl,
      completed: false
    }

    this.tasks.push(newTask);
  }

  completeTask(task: Task): void {
    task.completed = true;
  }
}
