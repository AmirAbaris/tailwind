import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TaskModule } from './modules/task/task.module';
import { NavbarMainComponent } from './components/navbar/navbar-main/navbar-main.component';
import { TaskAddDialogComponent } from './components/navbar/task-add-dialog/task-add-dialog.component';
import { TaskCompletedComponent } from './components/task-management/task-completed/task-completed.component';
import { TaskTodoComponent } from './components/task-management/task-todo/task-todo.component';
import { TaskCardManagementComponent } from './components/task-management/task-card-management/task-card-management.component';
import { TaskCardComponent } from './components/task-management/task-card/task-card.component';
import { TaskEmptyCardComponent } from './components/task-management/task-empty-card/task-empty-card.component';
import { TaskManagementMainComponent } from './components/task-management/task-management-main/task-management-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // create home module then import child modules!
    NavbarComponent, NavbarMainComponent, TaskAddDialogComponent, TaskCompletedComponent, TaskTodoComponent, TaskCardManagementComponent, TaskCardComponent, TaskEmptyCardComponent, TaskManagementMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
