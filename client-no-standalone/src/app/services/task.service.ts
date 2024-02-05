import { Injectable, inject } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { Task } from '../components/task-management/models/task.model';
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

  //#region logic methods
  getTodoTasks(): Observable<Task[]> {
    return of(this.localStorageService.allTasks.todoTasks);
  }

  getCompletedTasks(): Observable<Task[]> {
    return of(this.localStorageService.allTasks.completedTasks);
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

        console.log('delete is ok!');
      })
    );
  }

  complete(taskId: string): Observable<null> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        this.localStorageService.completeTask(taskId);

        console.log('done is ok!');
      })
    );
  }

  inComplete(taskId: string): Observable<null> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        this.localStorageService.inCompleteTask(taskId);

        console.log('undo is ok!');
      })
    );
  }
  //#endregion
}