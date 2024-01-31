import { Component, DestroyRef, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';
import { TaskService } from '../../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.css'
})
export class NavbarMainComponent {
  //#region inject funciton
  private dialog = inject(MatDialog);
  private taskService = inject(TaskService);
  private destroyRef = inject(DestroyRef);
  //#endregion

  //#region handler methods
  addTask(): void {
    this.dialog.open(TaskAddDialogComponent, {
      width: '500px',
      data: {}
    }).afterClosed().subscribe((outputDialog) => {
      this.taskService.add(outputDialog.titleCtrl).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    });
  }
  //#endregion
}
