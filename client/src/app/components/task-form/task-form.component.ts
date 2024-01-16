import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  constructor(public dialogRef: MatDialogRef<TaskFormComponent>) { }

  closeDialog(result: boolean): void {
    this.dialogRef.close(result);
  }
  
  @Output() addTask: EventEmitter<string> = new EventEmitter<string>();

  readonly #fb = inject(FormBuilder);

  taskGroup = this.#fb.group({
    titleCtrl: [null, [Validators.required]]
  });

  // getter
  get TitleCtrl(): FormControl {
    return this.taskGroup.get('titleCtrl') as FormControl;
  }

  onSubmit(): void {
    if (this.taskGroup.valid) {
      this.addTask.emit(this.TitleCtrl.value);

      this.taskGroup.reset();
    }
  }
}
