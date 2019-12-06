import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostomerComponent } from './add-costomer.component';

describe('AddCostomerComponent', () => {
  let component: AddCostomerComponent;
  let fixture: ComponentFixture<AddCostomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCostomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCostomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
