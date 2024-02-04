import { Injectable, inject } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { Task, TaskInput } from '../models/task.model';
import { LocalStorageService } from './local-storage.service';
import Chance from 'chance';

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

  //#region properties
  tasks: TaskInput = {
    todoTasks: [],
    completedTasks: []
  };
  //#endregion

  //#region logic methods
  getTodoTasks(): void {
    this.tasks.todoTasks = this.localStorageService.allTasks.todoTasks;
  }

  getCompletedTasks(): void {
    this.tasks.completedTasks = this.localStorageService.allTasks.completedTasks;
  }

  add(taskTitle: string): Observable<null> {
    // simulate HTTP request delay
    return of(null).pipe(
      delay(500),
      // update tasks locally
      tap(() => {
        const chance = new Chance();

        const newTask: Task = {
          id: chance.string({ length: 8 }),
          title: taskTitle,
          completed: false
        };

        this.localStorageService.addTodoTask(newTask);
      })
    );
  }

  delete(taskId: string): Observable<null> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        this.localStorageService.deleteTask(taskId);

        // reload the tasks
        this.getTodoTasks();
        this.getCompletedTasks();
      })
    );
  }

  complete(taskId: string): Observable<null> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        this.localStorageService.completeTask(taskId);
      })
    );
  }

  inComplete(taskId: string): Observable<null> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        this.localStorageService.inCompleteTask(taskId);
      })
    );
  }
  //#endregion
}