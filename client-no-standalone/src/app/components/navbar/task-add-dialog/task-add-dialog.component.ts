import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../../services/task.service';
import { customValidators } from '../../../validators/validators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrl: './task-add-dialog.component.css'
})
export class TaskAddDialogComponent {
  //#region inject functions
  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);
  private dialogRef = inject(MatDialogRef);
  private destroyRef = inject(DestroyRef);
  //#endregion

  //#region properties
  readonly formKeys = {
    titleCtrl: 'titleCtrl'
  }

  taskGroup = this.fb.group({
    titleCtrl: [null, [Validators.required, customValidators.notAllSpaces]]
  });
  //#endregion

  get TitleCtrl(): FormControl {
    return this.taskGroup.get(this.formKeys.titleCtrl) as FormControl;
  }

  //#region handler methods
  onSubmit(): void {
    if (this.taskGroup.valid) {
      const outputValue: TaskFormOutPutModel = {
        title: this.TitleCtrl.value
      }
      this.dialogRef.close();

      this.taskService.add(this.formKeys.titleCtrl).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();

      this.taskGroup.reset();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  //#endregion
}

export interface TaskFormOutPutModel {
  title: string
}

