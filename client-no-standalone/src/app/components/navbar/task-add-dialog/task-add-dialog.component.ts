import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { customValidators } from '../../../validators/validators';
import { TaskFormOutPutModel } from '../models/task-form-output.model';
import { ErrorCaptionModel } from '../models/error-caption.model';
import { TaskDialogCaptionModel } from '../models/task-dialog-caption.model';

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrl: './task-add-dialog.component.css'
})
export class TaskAddDialogComponent {
  //#region constructor
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { taskDialogCaption: TaskDialogCaptionModel, errorCaption: ErrorCaptionModel }
  ) {
    this.taskGroup = this.fb.group({
      titleCtrl: [null, [Validators.required, customValidators.notAllSpaces]]
    });
  }
  //#endregion

  //#region properties
  public taskGroup: FormGroup;

  readonly formKeys = {
    titleCtrl: 'titleCtrl'
  }
  //#endregion

  //#region helper methods
  get TitleCtrl(): FormControl {
    return this.taskGroup.get(this.formKeys.titleCtrl) as FormControl;
  }
  //#endregion

  //#region handler methods
  onSubmit(): void {
    if (this.taskGroup.valid) {
      const outputValue: TaskFormOutPutModel = {
        title: this.TitleCtrl.value
      };

      this.dialogRef.close(outputValue);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  //#endregion
}

