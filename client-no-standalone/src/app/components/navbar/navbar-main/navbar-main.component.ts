import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskService } from '../../../services/task.service';
import { TaskFormOutPutModel } from '../models/task-form-output.model';
import { TranslateService } from '@ngx-translate/core';
import { NavbarCaptionModel } from '../models/navbar-captions.model';

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
  public navbarCaptions: NavbarCaptionModel | undefined;

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

  getData(): void {}
  //#endregion

  //#region logic method
  private _fetchCaption(): void {
    this._translateService.get(this._captionSource.navbarMainCaption).subscribe((cap) => {
      if (this.navbarCaptions) {
        this.navbarCaptions.navbarCaption = cap;
      }
    });

    this._translateService.get(this._captionSource.taskDialogCaption).subscribe((cap) => {
      if (this.navbarCaptions) {
        this.navbarCaptions.taskDialogCaption = cap;
      }
    });

    this._translateService.get(this._captionSource.errorCaption).subscribe((cap) => {
      if (this.navbarCaptions) {
        this.navbarCaptions.errorCaption = cap;
      }
    });
  }
  //#endregion

  //#region handler methods
  public addTask(): void {
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
