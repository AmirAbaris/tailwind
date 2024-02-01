import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementMainComponent } from './components/task-management/task-management-main/task-management-main.component';
import { I18nComponent } from './components/i18n/i18n.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/modules/task.module').then((module) => module.TaskModule) },
  { path: 'i18n', component: I18nComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
