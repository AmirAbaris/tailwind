import { Component, EventEmitter, Input, OnInit, Output, inject, input } from '@angular/core';
import { TaskInput } from '../../models/task-input.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  //#region inject function
  private translate = inject(TranslateService);
  //#endregion

  // new signal input
  taskInput = input.required<TaskInput>();

  param = { value: 'world' };

  ngOnInit(): void {
    this.translate.get('HELLO', { value: 'world' }).subscribe((res: string) => {
      console.log(res);
      //=> 'hello world'
    });
  }

  //#region out puts
  @Output() deleteTaskEvent = new EventEmitter<string>();
  @Output() completeTaskEvent = new EventEmitter<string>();
  @Output() inCompleteTaskEvent = new EventEmitter<string>();
  //#endregion

  //#region handler methods
  onDeleteTaskHandler(taskId: string): void {
    this.deleteTaskEvent.emit(taskId);
  }

  onCompleteTaskHandler(taskId: string): void {
    this.completeTaskEvent.emit(taskId);
  }

  onInCompleteTaskHandler(taskId: string): void {
    this.inCompleteTaskEvent.emit(taskId);
  }
  //#endregion

  getTranslatedText(key: string): string {
    return this.translate.instant(key);
  }
}
