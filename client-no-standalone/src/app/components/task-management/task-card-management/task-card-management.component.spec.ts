import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardManagementComponent } from './task-card-management.component';

describe('TaskCardManagementComponent', () => {
  let component: TaskCardManagementComponent;
  let fixture: ComponentFixture<TaskCardManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskCardManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
