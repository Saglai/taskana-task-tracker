import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterTasksButtonComponent } from './filter-tasks-button.component';
import { provideMockStore } from '@ngrx/store/testing';

const initialState = {};

describe('FilterTasksButtonComponent', () => {
  let component: FilterTasksButtonComponent;
  let fixture: ComponentFixture<FilterTasksButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTasksButtonComponent], 
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterTasksButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
