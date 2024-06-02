import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksFilterCardComponent } from './tasks-filter-card.component';

describe('TasksFilterCardComponent', () => {
  let component: TasksFilterCardComponent;
  let fixture: ComponentFixture<TasksFilterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksFilterCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksFilterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
