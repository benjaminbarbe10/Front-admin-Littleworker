import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLworkerComponent } from './new-lworker.component';

describe('NewLworkerComponent', () => {
  let component: NewLworkerComponent;
  let fixture: ComponentFixture<NewLworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
