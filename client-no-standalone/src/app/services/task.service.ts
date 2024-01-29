import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';
import { Task } from '../models/task.model';
import Chance from 'chance';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TaskService {
  private localStorageService = inject(LocalStorageService);

  // private tasksSource = new BehaviorSubject<Task[]>([]);
  // tasks$ = this.tasksSource.asObservable();

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

        // this.tasksSource.next([...this.tasksSource.value, newTask]);
        this.localStorageService.addTask(newTask);
      })
    );
  }

  delete(taskId: string): Observable<null> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        // const tasks: Task[] = this.tasksSource.value.filter(task => task.id !== taskId);
        // this.tasksSource.next(tasks);
        this.localStorageService.deleteTask(taskId);
      })
    );
  }

  complete(taskId: string): Observable<null> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        // const tasks: Task[] = this.tasksSource.value.map(task => {
        //   if (task.id === taskId) {
        //     task.completed = true;
        //   }

        //   return task;
        // });

        // this.tasksSource.next(tasks);

        this.localStorageService.completeTask(taskId);
      })
    );
  }

  inComplete(taskId: string): Observable<null> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        // const tasks: Task[] = this.tasksSource.value.map(task => {
        //   if (task.id === taskId) {
        //     task.completed = false;
        //   }

        //   return task;
        // });

        // this.tasksSource.next(tasks);
        this.localStorageService.inCompleteTask(taskId);
      })
    );
  }
}