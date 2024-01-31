import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementMainComponent } from './task-management-main.component';

describe('TaskManagementMainComponent', () => {
  let component: TaskManagementMainComponent;
  let fixture: ComponentFixture<TaskManagementMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskManagementMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
