import { Injectable } from '@angular/core';
import { AllTasks, Task } from '../models/task.model';

@Injectable()
export class LocalStorageService {
  //#region properties
  // todoTasks: Task[] = [];
  // completedTasks: Task[] = [];
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
    this.allTasks.todoTasks.forEach(task => {
      if (task.id === taskId) {
        task.completed = true;
      }
    });

    this.saveTasksToStorage('todoTasks', this.allTasks.todoTasks);
  }

  inCompleteTask(taskId: string): void {
    this.allTasks.completedTasks.forEach(task => {
      if (task.id === taskId) {
        task.completed = false;
      }
    });

    this.saveTasksToStorage('completedTasks', this.allTasks.todoTasks);
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