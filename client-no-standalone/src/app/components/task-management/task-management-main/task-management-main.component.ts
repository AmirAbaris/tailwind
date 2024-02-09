import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, finalize } from 'rxjs';
import { TaskInputModel, TaskModel } from '../models/task.model';
import { TaskManagementCaptionModel } from '../models/task-management-caption.model';
import { TaskCountModel } from '../models/task-count.model';

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
  caption: TaskManagementCaptionModel = {
    taskCardManagement: {
      todoTitle: '',
      completedTitle: ''
    },
    taskEmptyCaption: {
      taskTitle: ''
    },
    taskCountCaption: {
      dayTitle: '',
      taskTitle: ''
    }
  }

  public taskCount: TaskCountModel = {
    toDoTaskCount: 0,
    completedTaskCount: 0
  }

  public tasks: TaskInputModel = {
    todoTasks: [],
    completedTasks: []
  }

  public loading: boolean = false;
  public actionLoading: boolean = false;

  private readonly captionSource = {
    "emptyCaption": "task-management.TaskEmptyCard",
    "countCaption": "task-management.TaskCount",
    "taskCardManagementCaption": "task-management.TaskCardManagement"
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
    forkJoin({
      emptyCaption: this._translateService.get(this.captionSource.emptyCaption),
      countCaption: this._translateService.get(this.captionSource.countCaption),
      taskCardManagementCaption: this._translateService.get(this.captionSource.taskCardManagementCaption)
    }).subscribe({
      next: (results) => {
        this.caption.taskEmptyCaption = results.emptyCaption;
        this.caption.taskCountCaption = results.countCaption;
        this.caption.taskCardManagement = results.taskCardManagementCaption;
      }
    });
  }

  private _fetchData(): void {
    this.loading = true;

    forkJoin([this._taskService.getTodoTasks(), this._taskService.getCompletedTasks()])
      .pipe(finalize(() => this.loading = false))
      .subscribe(([todoTasks, completedTasks]) => {
        this.tasks.todoTasks = todoTasks;
        this.tasks.completedTasks = completedTasks;

        this._calcTaskCounts(todoTasks, completedTasks);
      });
  }

  private _calcTaskCounts(todoTasks: TaskModel[], completedTasks: TaskModel[]): void {
    this.taskCount.toDoTaskCount = todoTasks.length;
    this.taskCount.completedTaskCount = completedTasks.length;
  }

  private _completeTask(taskId: string): void {
    this.actionLoading = true;

    this._taskService.complete(taskId).pipe(finalize(() => this.actionLoading = false)).subscribe(() => {
      this._fetchData();
    });
  }

  private _incompleteTask(taskId: string): void {
    this.actionLoading = true;

    this._taskService.inComplete(taskId).pipe(finalize(() => this.actionLoading = false)).subscribe(() => {
      this._fetchData();
    })
  }

  private _deleteTask(taskId: string): void {
    this.actionLoading = true;

    this._taskService.delete(taskId).pipe(finalize(() => this.actionLoading = false)).subscribe(() => {
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
