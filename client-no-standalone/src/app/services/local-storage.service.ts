import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable()
export class LocalStorageService {
  //#region behavior subject
  private taskSource = new BehaviorSubject<Task[]>([]);
  tasks$ = this.taskSource.asObservable(); // remove this!
  //#endregion

  //#region methods
  addTask(task: Task): void {
    const tasks: Task[] = [...this.taskSource.value, task];

    this.taskSource.next(tasks);
  }

  deleteTask(taskId: string): void {
    const tasks: Task[] = this.taskSource.value.filter(task => task.id !== taskId);

    this.taskSource.next(tasks);
  }

  completeTask(taskId: string): void {
    const tasks: Task[] = this.taskSource.value.map(task => {
      if (task.id === taskId) {
        task.completed = true;
      }

      return task;
    });

    this.taskSource.next(tasks);
  }

  inCompleteTask(taskId: string): void {
    const tasks: Task[] = this.taskSource.value.map(task => {
      if (task.id === taskId) {
        task.completed = false;
      }

      return task;
    });

    this.taskSource.next(tasks);
  }
  //#endregion
}
