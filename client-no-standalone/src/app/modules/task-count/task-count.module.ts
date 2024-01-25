import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TaskCountComponent } from '../../components/task-count/task-count.component';

@NgModule({
  declarations: [
    TaskCountComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [TaskCountComponent]
})
export class TaskCountModule { }
