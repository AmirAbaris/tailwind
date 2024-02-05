import { Component, DestroyRef, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskService } from '../../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { TaskFormOutPutModel } from '../../task-management/models/task-form-output.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.css'
})
export class NavbarMainComponent {
  //#region inject function
  private dialog = inject(MatDialog);
  private taskService = inject(TaskService);
  private destroyRef = inject(DestroyRef);
  //#endregion

  //#region logic method
  //#endregion

  //#region handler methods
  addTask(): void {
    const dialogRef = this.dialog.open(TaskAddDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((outputDialog: TaskFormOutPutModel) => {
      if (outputDialog?.title) {
        this.taskService.add(outputDialog.title).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
      }
    });
  }
  //#endregion
}
