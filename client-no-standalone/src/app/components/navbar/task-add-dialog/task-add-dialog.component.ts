import { Component, DestroyRef } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { customValidators } from '../../../validators/validators';
import { TaskFormOutPutModel } from '../../../models/task-form-output.model';

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

