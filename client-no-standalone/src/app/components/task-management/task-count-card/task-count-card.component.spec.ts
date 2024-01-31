import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCountCardComponent } from './task-count-card.component';

describe('TaskCountCardComponent', () => {
  let component: TaskCountCardComponent;
  let fixture: ComponentFixture<TaskCountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskCountCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
