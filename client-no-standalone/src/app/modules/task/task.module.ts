import { NgModule } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    FilterPipe,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FormsModule
  ],
  exports: [TaskComponent]
})
export class TaskModule { }
