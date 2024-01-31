import { NgModule } from '@angular/core';
import { TaskManagementMainComponent } from '../components/task-management/task-management-main/task-management-main.component';
import { TaskTodoComponent } from '../components/task-management/task-todo/task-todo.component';
import { TaskCompletedComponent } from '../components/task-management/task-completed/task-completed.component';
import { FilterPipe } from "../pipes/filter.pipe";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TaskEmptyCardComponent } from '../components/task-management/task-empty-card/task-empty-card.component';
import { TaskCountCardComponent } from '../components/task-management/task-count-card/task-count-card.component';
import { NgOptimizedImage } from '@angular/common'

@NgModule({
    declarations: [
        TaskManagementMainComponent,
        TaskTodoComponent,
        TaskCompletedComponent,
        TaskEmptyCardComponent,
        TaskCountCardComponent,
        FilterPipe
    ],
    imports: [
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        NgOptimizedImage
    ],
    exports: [
        TaskManagementMainComponent, TaskTodoComponent,
        TaskCompletedComponent, TaskEmptyCardComponent,
        TaskCountCardComponent
    ]
})
export class TaskModule { }
