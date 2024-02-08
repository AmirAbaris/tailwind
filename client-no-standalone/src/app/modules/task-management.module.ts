import { NgModule } from '@angular/core';
import { TaskManagementMainComponent } from '../components/task-management/task-management-main/task-management-main.component';
import { FilterPipe } from "../pipes/filter.pipe";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TaskEmptyCardComponent } from '../components/task-management/task-empty-card/task-empty-card.component';
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { FormFieldErrorDirective } from '../directives/form-field-error.directive';
import { TaskCardComponent } from '../components/task-management/task-card/task-card.component';
import { TaskCountComponent } from '../components/task-management/task-count/task-count.component';
import { TaskCardManagementComponent } from '../components/task-management/task-card-management/task-card-management.component';
import { TaskComponent } from '../components/task-management/task/task.component';
import { TaskService } from '../services/task.service';
import { LocalStorageService } from '../services/local-storage.service';

const taskRoutes: Routes = [
    { path: '', component: TaskManagementMainComponent }
];
@NgModule({
    declarations: [
        TaskManagementMainComponent,
        TaskEmptyCardComponent,
        TaskCardManagementComponent,
        TaskCardComponent,
        TaskCountComponent,
        TaskComponent,
        FilterPipe,
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
        CommonModule,
        RouterModule.forChild(taskRoutes),
    ],
    providers: [TaskService, LocalStorageService] // change ls task service
})
export class TaskManagementModule { }
