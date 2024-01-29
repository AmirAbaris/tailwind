import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TaskCountModule } from './modules/task-count/task-count.module';
import { TaskFormModule } from './modules/task-form/task-form.module';
import { TaskModule } from './modules/task/task.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // create home module then import child modules!
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    TaskCountModule,
    TaskFormModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
