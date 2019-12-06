import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinginStoreComponent } from './singin-store.component';

describe('SinginStoreComponent', () => {
  let component: SinginStoreComponent;
  let fixture: ComponentFixture<SinginStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinginStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinginStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
