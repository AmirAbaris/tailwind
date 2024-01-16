import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSource = new BehaviorSubject<string[]>([]);
  tasks$ = this.tasksSource.asObservable();

  addTask(taskTitle: string): void {
    const currentTasks = this.tasksSource.value;
    const updatedTasks = [...currentTasks, taskTitle];
    
    this.tasksSource.next(updatedTasks);
  }

  deleteTask(taskId: string): void {
    
  }
}
