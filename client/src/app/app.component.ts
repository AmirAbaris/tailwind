import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskService } from './services/task.service';
import { take } from 'rxjs';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  readonly #taskService = inject(TaskService);

  ngOnInit(): void {
    this.loadLocalStorateValues();
  }

  loadLocalStorateValues(): void {
    this.#taskService.tasks$.pipe(take(1)).subscribe({
      next: (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });
  }
}
