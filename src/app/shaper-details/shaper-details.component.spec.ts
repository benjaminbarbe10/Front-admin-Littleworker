import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaperDetailsComponent } from './shaper-details.component';

describe('ShaperDetailsComponent', () => {
  let component: ShaperDetailsComponent;
  let fixture: ComponentFixture<ShaperDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaperDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
