import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LworkersComponent } from './lworkers.component';

describe('LworkersComponent', () => {
  let component: LworkersComponent;
  let fixture: ComponentFixture<LworkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LworkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
