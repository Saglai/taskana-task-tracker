import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { appConfig } from './app.config';

@Component({standalone: true, selector: 'app-layout', template: ''})
class LayoutStubComponent {}

@Component({standalone: true, selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({standalone: true, selector: 'router-outlet', template: ''})
class RouterOutletStubComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule(
      Object.assign({}, appConfig, {
        imports: [
          AppComponent, 
          LayoutStubComponent, 
          HeaderStubComponent, 
          RouterOutletStubComponent,
          RouterLink,
        ], 
        providers: [provideRouter([])]
      })
    ).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

