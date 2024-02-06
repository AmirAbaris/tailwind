import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/task-management.module').then((module) => module.TaskManagementModule)
  },
  {
    path: 'test',
    loadChildren: () => import('../app/modules/test.module').then((module) => module.TestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
