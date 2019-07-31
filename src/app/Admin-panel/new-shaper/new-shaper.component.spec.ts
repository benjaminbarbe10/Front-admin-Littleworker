import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShaperComponent } from './new-shaper.component';

describe('NewShaperComponent', () => {
  let component: NewShaperComponent;
  let fixture: ComponentFixture<NewShaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewShaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
