import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TaskDetailsCardComponent } from './task-details-card.component';
import { provideRouter } from '@angular/router';

const initialState = {};
describe('TaskDetailsCardComponent', () => {
  let component: TaskDetailsCardComponent;
  let fixture: ComponentFixture<TaskDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailsCardComponent], 
      providers: [
        provideRouter([]), 
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
