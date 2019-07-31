import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPressComponent } from './new-press.component';

describe('NewPressComponent', () => {
  let component: NewPressComponent;
  let fixture: ComponentFixture<NewPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
