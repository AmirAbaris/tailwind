import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';
import { Task } from '../models/task.model';
import Chance from 'chance';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TaskService {
  private localStorageService = inject(LocalStorageService);

  add(taskTitle: string): Observable<null> { // return the list
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

        this.localStorageService.addTask(newTask);
      })
    );
  }

  delete(taskId: string): Observable<null> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        this.localStorageService.deleteTask(taskId);
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
}