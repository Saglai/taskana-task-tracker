import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TaskDetailsPage } from './task-details.page';
import { provideMockStore } from '@ngrx/store/testing';

const initialState = {};
describe('TaskDetailsPage', () => {
  let component: TaskDetailsPage;
  let fixture: ComponentFixture<TaskDetailsPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailsPage],
      providers: [
        provideRouter([]),
        provideMockStore({ initialState }), 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
