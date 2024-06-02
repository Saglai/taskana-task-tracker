import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TasksFilterCardComponent } from './tasks-filter-card.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

const initialState = {};
describe('TasksFilterCardComponent', () => {
  let component: TasksFilterCardComponent;
  let fixture: ComponentFixture<TasksFilterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TasksFilterCardComponent, 
        NoopAnimationsModule
      ], 
      providers: [
        provideMockStore({ initialState }), 
        NoopAnimationsModule
      ]
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
