import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStoreadminComponent } from './login-storeadmin.component';

describe('LoginStoreadminComponent', () => {
  let component: LoginStoreadminComponent;
  let fixture: ComponentFixture<LoginStoreadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginStoreadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStoreadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
