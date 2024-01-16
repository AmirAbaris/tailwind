import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
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
    }
  }
}
