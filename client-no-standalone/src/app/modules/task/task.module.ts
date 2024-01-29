import { NgModule } from '@angular/core';
import { TaskComponent } from '../../components/task/task.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TaskService } from '../../services/task.service';
import { TaskCountComponent } from '../../components/task-count/task-count.component';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgOptimizedImage } from '@angular/common';
import { LocalStorageService } from '../../services/local-storage.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TaskComponent, TaskCountComponent, TaskFormComponent],
  imports: [
    FilterPipe,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    NgOptimizedImage,
    TranslateModule.forRoot()
  ],
  providers: [TaskService, LocalStorageService],
  exports: [TaskComponent, TaskCountComponent, TaskFormComponent]
})
export class TaskModule { }
