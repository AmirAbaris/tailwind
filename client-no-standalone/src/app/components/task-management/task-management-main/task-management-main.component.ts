import { Component, inject } from '@angular/core';
import { AllTasks } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-management-main',
  templateUrl: './task-management-main.component.html',
  styleUrl: './task-management-main.component.css'
})
export class TaskManagementMainComponent {
  //#region inject functions
  private taskService = inject(TaskService);
  //#endregion

  //#region interfaces
  allTasks: AllTasks = {
    todoTasks: [],
    completedTasks: []
  };
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
