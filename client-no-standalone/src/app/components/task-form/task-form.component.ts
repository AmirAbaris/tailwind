import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';
import { customValidators } from '../../validators/validators';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  readonly #fb = inject(FormBuilder);
  readonly #taskService = inject(TaskService);
  readonly dialogRef = inject(MatDialogRef);

  closeDialog(result: boolean): void {
    if (result) {
      this.dialogRef.close(result);
    }
  }

  taskGroup = this.#fb.group({
    titleCtrl: [null, [Validators.required, customValidators.notAllSpaces]]
  });

  // getter
  get TitleCtrl(): FormControl {
    return this.taskGroup.get('titleCtrl') as FormControl;
  }

  onSubmit(): void {
    if (this.taskGroup.valid) {
      this.#taskService.add(this.TitleCtrl.value);

      console.log('New Task Added:', this.TitleCtrl.value);

      this.taskGroup.reset();
    }
  }
}