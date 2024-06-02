import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TaskAddPage } from './task-add.page';
import { provideRouter } from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

const initialState = {};
describe('TaskAddPage', () => {
  let component: TaskAddPage;
  let fixture: ComponentFixture<TaskAddPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        TaskAddPage, 
        NoopAnimationsModule
      ], 
      providers: [
        provideRouter([]),
        provideMockStore({ initialState }),
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
