import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';
import { customValidators } from '../../validators/validators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  //#region inject functions
  readonly #fb = inject(FormBuilder);
  readonly #taskService = inject(TaskService);
  readonly dialogRef = inject(MatDialogRef);
  readonly #destroyRef = inject(DestroyRef);
  //#endregion

  taskGroup = this.#fb.group({
    titleCtrl: [null, [Validators.required, customValidators.notAllSpaces]]
  });

  //#region getter
  get TitleCtrl(): FormControl {
    return this.taskGroup.get('titleCtrl') as FormControl;
  }
  //#endregion

  //#region methods
  onSubmit(): void {
    if (this.taskGroup.valid) {
      this.#taskService.add(this.TitleCtrl.value).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();

      console.log('New Task Added:', this.TitleCtrl.value);

      this.taskGroup.reset();
    }
  }

  closeDialog(result: boolean): void {
    if (result) {
      this.dialogRef.close(result);
    }
  }
  //#endregion
}