import { NgModule } from '@angular/core';
import { TaskManagementMainComponent } from '../components/task-management/task-management-main/task-management-main.component';
import { TaskTodoComponent } from '../components/task-management/task-todo/task-todo.component';
import { TaskCompletedComponent } from '../components/task-management/task-completed/task-completed.component';
import { FilterPipe } from "../pipes/filter.pipe";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TaskEmptyCardComponent } from '../components/task-management/task-empty-card/task-empty-card.component';

@NgModule({
    declarations: [TaskManagementMainComponent, TaskTodoComponent, TaskCompletedComponent, TaskEmptyCardComponent, FilterPipe],
    imports: [
        MatCardModule,
        MatDividerModule,
        MatIconModule
    ],
    exports: [TaskManagementMainComponent, TaskTodoComponent, TaskCompletedComponent, TaskEmptyCardComponent]
})
export class TaskModule { }
