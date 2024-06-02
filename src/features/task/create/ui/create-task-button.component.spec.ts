import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CreateTaskButtonComponent } from './create-task-button.component';

const initialState = {};
describe('CreateTaskButtonComponent', () => {
  let component: CreateTaskButtonComponent;
  let fixture: ComponentFixture<CreateTaskButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTaskButtonComponent], 
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
