import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverBikemanComponent } from './deliver-bikeman.component';

describe('DeliverBikemanComponent', () => {
  let component: DeliverBikemanComponent;
  let fixture: ComponentFixture<DeliverBikemanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverBikemanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverBikemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
