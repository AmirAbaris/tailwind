import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskService } from '../../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaskFormOutPutModel } from '../models/task-form-output.model';
import { NavbarMainCaptionModel } from '../models/navbar-main-caption.model';
import { TranslateService } from '@ngx-translate/core';
import { ErrorCaptionModel } from '../models/error-caption.model';
import { TaskDialogCaptionModel } from '../models/task-dialog-caption.model';

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
  public navbarCaption: NavbarMainCaptionModel = {
    mainTitle: '',
    addTask: ''
  }

  public taskDialogCaption: TaskDialogCaptionModel = {
    taskTitle: '',
    addTask: '',
    close: ''
  }

  public errorCaption: ErrorCaptionModel = {
    reqError: '',
    spaceError: ''
  }

  private readonly captionSource = {
    "navbarMainCaption": "navbar.NavbarMain",
    "taskDialogCaption": "navbar.TaskDialog",
    "errorCaption": "error-output"
  }
  //#endregion

  //#region lifecycle
  ngOnInit(): void {
    this._fetchCaption();
  }
  //#endregion

  //#region logic method
  private _fetchCaption(): void {
    this._translateService.get(this.captionSource.navbarMainCaption).subscribe((cap) => {
      this.navbarCaption = cap;
    });

    this._translateService.get(this.captionSource.taskDialogCaption).subscribe((cap) => {

      this.taskDialogCaption = cap;
    });

    this._translateService.get(this.captionSource.errorCaption).subscribe((cap) => {
      this.errorCaption = cap;
    });
  }
  //#endregion

  //#region handler methods
  public addTask(): void {
    const dialogRef = this._dialog.open(TaskAddDialogComponent, {
      width: '500px',
      data: {
        taskDialogCaption: this.taskDialogCaption,
        errorCaption: this.errorCaption
      }
    });

    dialogRef.afterClosed().subscribe((outputDialog: TaskFormOutPutModel) => {
      if (outputDialog?.title) {
        this._taskService.add(outputDialog.title).pipe(takeUntilDestroyed(this._destroyRef)).subscribe();
      }
    });
  }
  //#endregion
}
