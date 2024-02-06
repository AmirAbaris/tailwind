import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskService } from '../../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { TaskFormOutPutModel } from '../../task-management/models/task-form-output.model';
import { forkJoin } from 'rxjs';
import { NavbarMainCaption } from '../models/navbar-main-caption.model';
import { TranslateService } from '@ngx-translate/core';

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

  private readonly captionSource = {
    "navbarMainCaption": "task-management.NavbarMain"
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
  }
  //#endregion

  //#region handler methods
  public addTask(): void {
    const dialogRef = this._dialog.open(TaskAddDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((outputDialog: TaskFormOutPutModel) => {
      if (outputDialog?.title) {
        this._taskService.add(outputDialog.title).pipe(takeUntilDestroyed(this._destroyRef)).subscribe();
      }
    });
  }
  //#endregion
}
