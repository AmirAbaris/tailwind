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
import { TaskCompleteCardComponent } from '../components/task-management/task-complete-card/task-complete-card.component';
import { TaskTodoCardComponent } from '../components/task-management/task-todo-card/task-todo-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { TaskTodoCardManagementComponent } from '../components/task-management/task-todo-card-management/task-todo-card-management.component';
import { TaskCompletedCardManagementComponent } from '../components/task-management/task-completed-card-management/task-completed-card-management.component';
import { FormFieldErrorDirective } from '../directives/form-field-error.directive';

const taskRoutes: Routes = [
    { path: '', component: TaskManagementMainComponent }
];
@NgModule({
    declarations: [
        TaskManagementMainComponent,
        TaskTodoComponent,
        TaskCompletedComponent,
        TaskEmptyCardComponent,
        TaskCountCardComponent,
        FilterPipe,
        TaskCompleteCardComponent,
        TaskTodoCardComponent,
        TaskTodoCardManagementComponent,
        TaskCompletedCardManagementComponent,
        FormFieldErrorDirective,
    ],
    imports: [
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        NgOptimizedImage,
        TranslateModule,
        MatProgressSpinnerModule,
        FormsModule,
        RouterModule.forChild(taskRoutes),
    ],
    exports: [
        TaskManagementMainComponent, TaskTodoComponent,
        TaskCompletedComponent, TaskEmptyCardComponent,
        TaskCountCardComponent, TaskCompleteCardComponent,
        TaskTodoCardComponent, TranslateModule,
        TaskTodoCardManagementComponent, TaskCompletedCardManagementComponent,
        FormFieldErrorDirective
    ]
})
export class TaskManagementModule { }
