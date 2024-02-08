import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskService } from '../../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskFormOutPutModel } from '../models/task-form-output.model';
import { NavbarMainCaption } from '../models/navbar-main-caption.model';
import { TranslateService } from '@ngx-translate/core';
import { TaskDialogCaption } from '../models/task-dialog-caption.model';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.css'
})
export class NavbarMainComponent implements OnInit {
  //#region inject function
  private _dialog = inject(MatDialog);
  private _taskService = inject(TaskService);
  private _translateService = inject(TranslateService);
  private _destroyRef = inject(DestroyRef);
  //#endregion

  //#region properties
  public navbarCaption: NavbarMainCaption = {
    titleCaption: '',
    addTaskCaption: ''
  }

  public taskDialogCaption: TaskDialogCaption = {
    titleCaption: '',
    reqErrorCaption: '',
    spaceErrorCaption: '',
    addTaskCaption: '',
    closeCaption: ''
  }

  private readonly captionSource = {
    "navbarMainCaption": "navbar.NavbarMain",
    "taskDialogCaption": "navbar.TaskDialog"
  }
  //#endregion

  //#region lifecycle
  ngOnInit(): void {
    this._fetchCaption();
  }
  //#endregion

  //#region logic method
  private _fetchCaption(): void {
    this._translateService.get(this.captionSource.navbarMainCaption).pipe(takeUntilDestroyed(this._destroyRef)).subscribe((cap) => {
      this.navbarCaption.titleCaption = cap.mainTitle;
      this.navbarCaption.addTaskCaption = cap.addTask;
    });

    this._translateService.get(this.captionSource.taskDialogCaption).pipe(takeUntilDestroyed(this._destroyRef)).subscribe((cap) => {
      this.taskDialogCaption.titleCaption = cap.taskTitle;
      this.taskDialogCaption.reqErrorCaption = cap.reqError;
      this.taskDialogCaption.spaceErrorCaption = cap.spaceError;
      this.taskDialogCaption.addTaskCaption = cap.addTask;
      this.taskDialogCaption.closeCaption = cap.close;
    });
  }
  //#endregion

  //#region handler methods
  public addTask(): void {
    const dialogRef = this._dialog.open(TaskAddDialogComponent, {
      width: '500px',
      data: this.taskDialogCaption
    });

    dialogRef.afterClosed().subscribe((outputDialog: TaskFormOutPutModel) => {
      if (outputDialog?.title) {
        this._taskService.add(outputDialog.title).pipe(takeUntilDestroyed(this._destroyRef)).subscribe();
      }
    });
  }
  //#endregion
}
