import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTodoCardComponent } from './task-todo-card.component';

describe('TaskTodoCardComponent', () => {
  let component: TaskTodoCardComponent;
  let fixture: ComponentFixture<TaskTodoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskTodoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskTodoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
