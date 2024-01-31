import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementMainComponent } from './components/task-management/task-management-main/task-management-main.component';

const routes: Routes = [
  { path: '', component: TaskManagementMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
