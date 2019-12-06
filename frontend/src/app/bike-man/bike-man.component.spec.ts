import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeManComponent } from './bike-man.component';

describe('BikeManComponent', () => {
  let component: BikeManComponent;
  let fixture: ComponentFixture<BikeManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
