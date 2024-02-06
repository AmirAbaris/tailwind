import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../components/test/test.component';
import { CommonModule } from '@angular/common';

const testRoutes: Routes = [
  { path: '', component: TestComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(testRoutes)
  ]
})
export class TestModule { }
