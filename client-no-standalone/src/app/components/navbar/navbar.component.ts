import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  readonly #dialog = inject(MatDialog);

  addTask(): void {
    this.#dialog.open(TaskFormComponent, {
      width: '500px'
    });
  }
}
