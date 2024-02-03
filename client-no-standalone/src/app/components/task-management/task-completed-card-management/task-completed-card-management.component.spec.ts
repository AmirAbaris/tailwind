import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCompletedCardManagementComponent } from './task-completed-card-management.component';

describe('TaskCompletedCardManagementComponent', () => {
  let component: TaskCompletedCardManagementComponent;
  let fixture: ComponentFixture<TaskCompletedCardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskCompletedCardManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCompletedCardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
