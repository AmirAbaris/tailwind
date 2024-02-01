import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCompleteCardComponent } from './task-complete-card.component';

describe('TaskCompleteCardComponent', () => {
  let component: TaskCompleteCardComponent;
  let fixture: ComponentFixture<TaskCompleteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskCompleteCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCompleteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
