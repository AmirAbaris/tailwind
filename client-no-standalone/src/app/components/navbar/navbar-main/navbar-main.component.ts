import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskService } from '../../../services/task.service';
import { TaskFormOutPutModel } from '../models/task-form-output.model';
import { TranslateService } from '@ngx-translate/core';
import { NavbarCaptionModel } from '../models/navbar-captions.model';
import { forkJoin } from 'rxjs';

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
  //#endregion

  //#region properties
  public navbarCaptions: NavbarCaptionModel = {
    navbarCaption: {
      mainTitle: '',
      addTask: ''
    },
    taskDialogCaption: {
      taskTitle: '',
      addTask: '',
      close: ''
    },
    errorCaption: {
      reqError: '',
      spaceError: ''
    }
  }

  private readonly _captionSource = {
    "navbarMainCaption": "navbar.NavbarMain",
    "taskDialogCaption": "navbar.TaskDialog",
    "errorCaption": "error-output"
  }
  //#endregion

  //#region lifecycle
  ngOnInit(): void {
    this._fetchCaption();
  }

  getData(): void { }
  //#endregion

  //#region logic method
  private _fetchCaption(): void {
    const navbarMainCaption$ = this._translateService.get(this._captionSource.navbarMainCaption);
    const taskDialogCaption$ = this._translateService.get(this._captionSource.taskDialogCaption);
    const errorCaption$ = this._translateService.get(this._captionSource.errorCaption);

    forkJoin([navbarMainCaption$, taskDialogCaption$, errorCaption$]).subscribe({
      next: ([navbarMainCaption, taskDialogCaption, errorCaption]) => {
        if (!this.navbarCaptions) {
          return;
        }
        this.navbarCaptions.navbarCaption = navbarMainCaption;
        this.navbarCaptions.taskDialogCaption = taskDialogCaption;
        this.navbarCaptions.errorCaption = errorCaption;
      }
    });
  }
  //#endregion

  //#region handler methods
  public onClickAddTask(): void {
    const dialogRef = this._dialog.open(TaskAddDialogComponent, {
      width: '500px',
      data: {
        taskDialogCaption: this.navbarCaptions?.taskDialogCaption,
        errorCaption: this.navbarCaptions?.errorCaption
      }
    });

    dialogRef.afterClosed().subscribe((outputDialog: TaskFormOutPutModel) => {
      if (outputDialog?.title) {
        this._taskService.add(outputDialog.title).subscribe();
      }
    });
  }
  //#endregion
}
