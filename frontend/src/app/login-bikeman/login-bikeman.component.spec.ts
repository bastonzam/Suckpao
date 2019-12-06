import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBikemanComponent } from './login-bikeman.component';

describe('LoginBikemanComponent', () => {
  let component: LoginBikemanComponent;
  let fixture: ComponentFixture<LoginBikemanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBikemanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBikemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
