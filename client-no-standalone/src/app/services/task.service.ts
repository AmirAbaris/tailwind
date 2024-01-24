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

  add(taskTitle: string): void {
    // added chance library to give a random input in id
    // * not the best practice to add a id tbh, but it'll do the job for this project
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

  delete(taskId: string): void {
    // find the target tasks index to delete
    const targetTask = this.tasksSource.value.findIndex(task => task.id === taskId);

    // if item not found
    // * -1 is used for not found items in a index!
    if (targetTask !== -1) {
      // create a copy of the tasks array
      const updatedTasks = [...this.tasksSource.value];

      // remove the target task
      updatedTasks.splice(targetTask, 1);

      // update the observable with the new array of tasks
      this.tasksSource.next(updatedTasks);
    }
  }

  complete(taskId: string): void {
    // find the target task
    const targetTaskIndex = this.tasksSource.value.findIndex(task => task.id === taskId);

    // check if the task was found
    if (targetTaskIndex !== -1) {
      // create a copy of the tasks array
      const updatedTasks = [...this.tasksSource.value];

      // complete the task
      updatedTasks[targetTaskIndex].completed = true;

      // update the observable
      this.tasksSource.next(updatedTasks);

      // log the obj
      console.log(this.tasksSource.value);
    }
  }

  inComplete(taskId: string): void {
    // find the target task
    const targetTaskIndex = this.tasksSource.value.findIndex(task => task.id == taskId);

    // check if the task was found
    if (targetTaskIndex !== -1) {
      // create a copy of the task array
      const updatedTasks = [...this.tasksSource.value];

      // incomplete the task
      updatedTasks[targetTaskIndex].completed = false;

      // update the obsesrvable
      this.tasksSource.next(updatedTasks);
    }
  }
}
