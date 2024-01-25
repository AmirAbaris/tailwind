import { NgModule } from '@angular/core';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [TaskFormComponent],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [TaskFormComponent]
})
export class TaskFormModule { }
