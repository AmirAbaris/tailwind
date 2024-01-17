import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TaskCountComponent } from '../task-count/task-count.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent, TaskCountComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
