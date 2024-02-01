import { Injectable } from '@angular/core';
import { AllTasks, Task } from '../models/task.model';

@Injectable()
export class LocalStorageService {
  //#region properties
  allTasks: AllTasks = {
    todoTasks: [],
    completedTasks: []
  }
  //#endregion

  //#region constructor
  constructor() {
    this.allTasks.todoTasks = this.getStoredTasks('todoTasks');
    this.allTasks.completedTasks = this.getStoredTasks('completedTasks');
  }
  //#endregion

  //#region logical methods
  addTodoTask(task: Task): void {
    this.allTasks.todoTasks.push(task);

    this.saveTasksToStorage('todoTasks', this.allTasks.todoTasks);
  }

  deleteTask(taskId: string): void {
    this.allTasks.todoTasks = this.allTasks.todoTasks.filter(task => task.id !== taskId);
    this.allTasks.completedTasks = this.allTasks.completedTasks.filter(task => task.id !== taskId);

    this.saveTasksToStorage('todoTasks', this.allTasks.todoTasks);
    this.saveTasksToStorage('completedTasks', this.allTasks.completedTasks);
  }

  completeTask(taskId: string): void {
    const taskIndex = this.allTasks.todoTasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
      const completedTask = this.allTasks.todoTasks.splice(taskIndex, 1)[0];
      completedTask.completed = true;
      this.allTasks.completedTasks.push(completedTask);

      this.saveTasksToStorage('todoTasks', this.allTasks.todoTasks);
      this.saveTasksToStorage('completedTasks', this.allTasks.completedTasks);
    }
  }

  inCompleteTask(taskId: string): void {
    const taskIndex = this.allTasks.todoTasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
      const completedTask = this.allTasks.todoTasks.splice(taskIndex, 1)[0];
      completedTask.completed = false;
      this.allTasks.completedTasks.push(completedTask);

      this.saveTasksToStorage('todoTasks', this.allTasks.todoTasks);
      this.saveTasksToStorage('completedTasks', this.allTasks.completedTasks);
    }
  }

  private getStoredTasks(key: string): Task[] {
    const taskJson = localStorage.getItem(key);

    return taskJson ? JSON.parse(taskJson) : [];
  }

  private saveTasksToStorage(key: string, tasks: Task[]): void {
    localStorage.setItem(key, JSON.stringify(tasks));
  }
  //#endregion
}