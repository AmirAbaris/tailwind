import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
