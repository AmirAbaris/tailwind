import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarMainComponent } from '../components/navbar/navbar-main/navbar-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TaskAddDialogComponent } from '../components/navbar/task-add-dialog/task-add-dialog.component';

@NgModule({
  declarations: [NavbarMainComponent, TaskAddDialogComponent],
  imports: [
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  exports: [NavbarMainComponent, TaskAddDialogComponent]
})
export class NavbarModule { }
