import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTodoCardManagementComponent } from './task-todo-card-management.component';

describe('TaskTodoCardManagementComponent', () => {
  let component: TaskTodoCardManagementComponent;
  let fixture: ComponentFixture<TaskTodoCardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskTodoCardManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskTodoCardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
