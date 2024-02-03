import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I18nComponent } from './components/i18n/i18n.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/modules/task-management.module').then((module) => module.TaskManagementModule) },
  { path: 'i18n', component: I18nComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
