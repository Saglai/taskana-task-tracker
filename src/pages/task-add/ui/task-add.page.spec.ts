import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddPage } from './task-add.page';

describe('TaskAddPage', () => {
  let component: TaskAddPage;
  let fixture: ComponentFixture<TaskAddPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskAddPage]
    });
    fixture = TestBed.createComponent(TaskAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
