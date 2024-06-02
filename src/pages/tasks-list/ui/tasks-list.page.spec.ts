import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListPage } from './tasks-list.page';

describe('TasksListPage', () => {
  let component: TasksListPage;
  let fixture: ComponentFixture<TasksListPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksListPage]
    });
    fixture = TestBed.createComponent(TasksListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
