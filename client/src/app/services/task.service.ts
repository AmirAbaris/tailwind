import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';
import Chance from 'chance';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSource = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSource.asObservable();

  addTask(taskTitle: string): void {
    // added chance library to give a random input in id
    let chance = new Chance();

    const currentTask: Task = {
      id: chance.string({ length: 8 }),
      title: taskTitle,
      completed: false

    }

    // update the observable with new input value
    const updatedTasks = [...this.tasksSource.value, currentTask];

    // update ob value
    this.tasksSource.next(updatedTasks);
  }

  deleteTask(taskId: string): void {

  }
}
