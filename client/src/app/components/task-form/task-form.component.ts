import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  constructor(public dialogRef: MatDialogRef<TaskFormComponent>) { }
  readonly #fb = inject(FormBuilder);
  readonly #taskService = inject(TaskService);

  closeDialog(result: boolean): void {
    if (result) {
      this.dialogRef.close(result);
    }
  }

  taskGroup = this.#fb.group({
    titleCtrl: [null, [Validators.required]]
  });

  // getter
  get TitleCtrl(): FormControl {
    return this.taskGroup.get('titleCtrl') as FormControl;
  }

  onSubmit(): void {
    if (this.taskGroup.valid) {
      this.#taskService.addTask(this.TitleCtrl.value);

      console.log('New Task Added:', this.TitleCtrl.value);

      this.taskGroup.reset();
    }
  }
}
