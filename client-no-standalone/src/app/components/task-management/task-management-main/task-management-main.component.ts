import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, finalize } from 'rxjs';
import { TaskCaptionModel } from '../models/task-caption.model';
import { TaskCountCaptionModel } from '../models/task-count-caption.model';
import { TaskCountModel } from '../models/task-count.model';
import { TaskEmptyCaptionModel } from '../models/task-input-caption.model';
import { TaskInputModel, TaskModel } from '../models/task.model';

@Component({
  selector: 'app-task-management-main',
  templateUrl: './task-management-main.component.html',
  styleUrl: './task-management-main.component.css'
})
export class TaskManagementMainComponent implements OnInit {
  //#region inject functions
  private _taskService = inject(TaskService);
  private _translateService = inject(TranslateService);
  //#endregion

  //#region properties
  public allTasks: TaskInputModel = {
    todoTasks: [],
    completedTasks: []
  }
  public taskCount: TaskCountModel = {
    toDoTaskCount: 0,
    completedTaskCount: 0
  }
  public taskEmptyCaption: TaskEmptyCaptionModel = {
    taskTitle: ''
  }
  public taskCountCaption: TaskCountCaptionModel = {
    dayTitle: '',
    taskTitle: ''
  }
  public taskCaption: TaskCaptionModel = {
    todoCaption: '',
    completedCaption: ''
  }

  public loading: boolean = false;

  private readonly captionSource = {
    "emptyCaption": "task-management.TaskEmptyCard",
    "countCaption": "task-management.TaskCount",
    "taskCaption": "task-management.Task"
  }
  //#endregion

  //#region lifecycle
  ngOnInit(): void {
    this._fetchData();
    this._fetchCaptions();
  }
  //#endregion

  //#region logic methods
  private _fetchCaptions(): void {
    this._translateService.get(this.captionSource.emptyCaption).subscribe((cap) => {
      this.taskEmptyCaption = cap;
    });

    this._translateService.get(this.captionSource.countCaption).subscribe((cap) => {
      this.taskCountCaption = cap;
    });

    this._translateService.get(this.captionSource.taskCaption).subscribe((cap) => {
      this.taskCaption.todoCaption = cap.todoTitle;
      this.taskCaption.completedCaption = cap.completedTitle;
    });
  }

  private _fetchData(): void {
    this.loading = true;

    forkJoin([this._taskService.getTodoTasks(), this._taskService.getCompletedTasks()])
      .pipe(finalize(() => this.loading = false))
      .subscribe(([todoTasks, completedTasks]) => {
        this.allTasks.todoTasks = todoTasks;
        this.allTasks.completedTasks = completedTasks;

        this._calcTaskCounts(todoTasks, completedTasks);
      });
  }

  private _calcTaskCounts(todoTasks: TaskModel[], completedTasks: TaskModel[]): void {
    this.taskCount.toDoTaskCount = todoTasks.length;
    this.taskCount.completedTaskCount = completedTasks.length;
  }

  private _completeTask(taskId: string): void {
    this._taskService.complete(taskId).subscribe(() => {
      this._fetchData();
    });
  }

  private _incompleteTask(taskId: string): void {
    this._taskService.inComplete(taskId).subscribe(() => {
      this._fetchData();
    })
  }

  private _deleteTask(taskId: string): void {
    this._taskService.delete(taskId).subscribe(() => {
      this._fetchData();
    });
  }
  //#endregion

  //#region handler methods
  public onDoneTaskHandler(taskId: string): void {
    this._completeTask(taskId);
  }

  public onUndoTaskHandler(taskId: string): void {
    this._incompleteTask(taskId);
  }

  public onDeleteTaskHandler(taskId: string): void {
    this._deleteTask(taskId);
  }
  //#endregion
}
