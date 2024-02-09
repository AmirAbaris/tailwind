import { Injectable } from '@angular/core';
import { TaskInputModel, TaskModel } from '../components/task-management/models/task.model';
import Chance from 'chance';

@Injectable()
export class LocalStorageService {
  //#region properties
  allTasks: TaskInputModel = {
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
  addTodoTask(taskTitle: string): void {
    const chance = new Chance();
    
    const newTask: TaskModel = {
      id: chance.string({ length: 8 }),
      title: taskTitle,
      completed: false
    };

    // Update the todoTasks array directly in local storage
    const todoTasks = this.getStoredTasks('todoTasks');
    todoTasks.push(newTask);
    this.saveTasksToStorage('todoTasks', todoTasks);
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
    const taskIndex = this.allTasks.completedTasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
      const inCompletedTask = this.allTasks.completedTasks.splice(taskIndex, 1)[0];
      inCompletedTask.completed = false;
      this.allTasks.todoTasks.push(inCompletedTask);

      this.saveTasksToStorage('todoTasks', this.allTasks.todoTasks);
      this.saveTasksToStorage('completedTasks', this.allTasks.completedTasks);
    }
  }

  private getStoredTasks(key: string): TaskModel[] {
    const taskJson = localStorage.getItem(key);

    return taskJson ? JSON.parse(taskJson) : [];
  }

  private saveTasksToStorage(key: string, tasks: TaskModel[]): void {
    localStorage.setItem(key, JSON.stringify(tasks));
  }
  //#endregion
}