import { Component, inject } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { TaskInput } from '../../../models/task.model';

@Component({
  selector: 'app-task-management-main',
  templateUrl: './task-management-main.component.html',
  styleUrl: './task-management-main.component.css'
})
export class TaskManagementMainComponent {
  //#region inject functions
  private taskService = inject(TaskService);
  //#endregion

  //#region properties
  allTasks: TaskInput = {
    todoTasks: [],
    completedTasks: []
  };
  searchQuery: string = '';
  //#endregion

  //#region lifecycles
  ngOnInit(): void {
    if (this.allTasks) {
      this.allTasks.todoTasks = this.taskService.tasks.todoTasks;
      this.allTasks.completedTasks = this.taskService.tasks.completedTasks;
    }
  }
  //#endregion
}
