import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { TaskModel } from '../components/task-management/models/task.model';

@Injectable()
export class TaskService {
  //#region inject functions
  private localStorageService = inject(LocalStorageService);
  //#endregion

  //#region constructor
  constructor() {
    this.getTodoTasks();
    this.getCompletedTasks();
  }
  //#endregion

  //#region logic methods
  getTodoTasks(): Observable<TaskModel[]> {
    return of(this.localStorageService.allTasks.todoTasks);
  }

  getCompletedTasks(): Observable<TaskModel[]> {
    return of(this.localStorageService.allTasks.completedTasks);
  }

  add(taskTitle: string): Observable<void> {
    return of(this.localStorageService.addTodoTask(taskTitle));
  }

  delete(taskId: string): Observable<void> {
    return of(this.localStorageService.deleteTask(taskId));
  }

  complete(taskId: string): Observable<void> {
    return of(this.localStorageService.completeTask(taskId));
  }

  inComplete(taskId: string): Observable<void> {
    return of(this.localStorageService.inCompleteTask(taskId));
  }
  //#endregion
}