import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinginStoreadminComponent } from './singin-storeadmin.component';

describe('SinginStoreadminComponent', () => {
  let component: SinginStoreadminComponent;
  let fixture: ComponentFixture<SinginStoreadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinginStoreadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinginStoreadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
