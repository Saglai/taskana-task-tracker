import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksListPage } from './tasks-list.page';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

const initialState = {};
describe('TasksListPage', () => {
  let component: TasksListPage;
  let fixture: ComponentFixture<TasksListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TasksListPage, 
        NoopAnimationsModule
      ], 
      providers: [
        provideRouter([]), 
        provideMockStore({ initialState }),
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
