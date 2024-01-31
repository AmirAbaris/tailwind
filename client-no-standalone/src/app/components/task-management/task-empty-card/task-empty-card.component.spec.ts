import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEmptyCardComponent } from './task-empty-card.component';

describe('TaskEmptyCardComponent', () => {
  let component: TaskEmptyCardComponent;
  let fixture: ComponentFixture<TaskEmptyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskEmptyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskEmptyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
