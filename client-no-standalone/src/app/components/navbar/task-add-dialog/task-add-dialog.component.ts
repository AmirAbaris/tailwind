import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { customValidators } from '../../../validators/validators';
import { TaskFormOutPutModel } from '../../task-management/models/task-form-output.model';
import { TaskDialogCaption } from '../models/task-dialog-caption.model';

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
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogCaption
  ) {
    this.taskGroup = this.fb.group({
      titleCtrl: [null, [Validators.required, customValidators.notAllSpaces]]
    });
  }
  //#endregion

  //#region properties
  readonly formKeys = {
    titleCtrl: 'titleCtrl'
  }

  taskGroup: FormGroup;
  //#endregion

  get TitleCtrl(): FormControl {
    return this.taskGroup.get(this.formKeys.titleCtrl) as FormControl;
  }

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

