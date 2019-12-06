import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBikemanComponent } from './register-bikeman.component';

describe('RegisterBikemanComponent', () => {
  let component: RegisterBikemanComponent;
  let fixture: ComponentFixture<RegisterBikemanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBikemanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBikemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
