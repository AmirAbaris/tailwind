import { Component, DestroyRef, EventEmitter, Output, inject } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task, TaskInput } from '../models/task.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskCount } from '../models/task-count.model';
import { forkJoin } from 'rxjs';
import { TaskIcon } from '../models/task-card-icon.model';
import { TranslateService } from '@ngx-translate/core';
import { TaskEmptyCaption } from '../models/task-input-caption.model';
import { TaskCountCaption } from '../models/task-count-caption.model';
import { TaskCaption } from '../models/task-caption.model';

@Component({
  selector: 'app-task-management-main',
  templateUrl: './task-management-main.component.html',
  styleUrl: './task-management-main.component.css'
})
export class TaskManagementMainComponent {
  //#region inject functions
  private _taskService = inject(TaskService);
  private _destroyRef = inject(DestroyRef);
  private _translateService = inject(TranslateService);

  @Output() clickLeftButtonEvent = new EventEmitter<string>();
  @Output() clickRightButtonEvent = new EventEmitter<string>();
  @Output() anotherRightButtonEvent = new EventEmitter<string>();
  //#endregion

  //#region properties
  public allTasks: TaskInput = {
    todoTasks: [],
    completedTasks: []
  }
  public taskCount: TaskCount = {
    toDoTaskCount: 0,
    completedTaskCount: 0
  }
  public icon: TaskIcon = {
    delete: 'delete',
    complete: 'done',
    undo: 'undo'
  }
  public taskEmptyCaption: TaskEmptyCaption = {
    emptyTitle: ''
  }
  public taskCountCaption: TaskCountCaption = {
    dayCaption: '',
    taskCaption: ''
  }
  public taskCaption: TaskCaption = {
    todoCaption: '',
    completedCaption: ''
  }

  private readonly captionSource = {
    "emptyCaption": "task-management.TaskManagementMain.TaskCardManagement.Task.TaskCard.TaskEmptyCard.taskTitle",
    "countCaption": "task-management.TaskManagementMain.TaskCount",
    "taskCaption": "task-management.TaskManagementMain.TaskCardManagement.Task"
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
    this._translateService.get(this.captionSource.emptyCaption).pipe(takeUntilDestroyed(this._destroyRef)).subscribe((cap) => {
      this.taskEmptyCaption.emptyTitle = cap;
    });

    this._translateService.get(this.captionSource.countCaption).pipe(takeUntilDestroyed(this._destroyRef)).subscribe((cap) => {
      this.taskCountCaption.dayCaption = cap.dayTitle;
      this.taskCountCaption.taskCaption = cap.taskTitle;
    });

    this._translateService.get(this.captionSource.taskCaption).pipe(takeUntilDestroyed(this._destroyRef)).subscribe((cap) => {
      this.taskCaption.todoCaption = cap.todoTitle;
      this.taskCaption.completedCaption = cap.completedTitle;
    });
  }

  private _fetchData(): void {
    forkJoin([this._taskService.getTodoTasks(), this._taskService.getCompletedTasks()])
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(([todoTasks, completedTasks]) => {
        this.allTasks.todoTasks = todoTasks;
        this.allTasks.completedTasks = completedTasks;

        this._calcTaskCounts(todoTasks, completedTasks);
      });
  }

  private _calcTaskCounts(todoTasks: Task[], completedTasks: Task[]): void {
    this.taskCount.toDoTaskCount = todoTasks.length;
    this.taskCount.completedTaskCount = completedTasks.length;
  }
  //#endregion

  //#region handler methods
  public onDoneTaskHandler(taskId: string): void {
    this._taskService.complete(taskId).pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._fetchData();
    });
  }

  public onUndoTaskHandler(taskId: string): void {
    this._taskService.inComplete(taskId).pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._fetchData();
    });
  }

  public onDeleteTaskHandler(taskId: string): void {
    this._taskService.delete(taskId).pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._fetchData();
    });
  }
  //#endregion
}
