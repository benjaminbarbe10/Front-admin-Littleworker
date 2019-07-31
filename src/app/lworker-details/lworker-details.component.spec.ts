import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LworkerDetailsComponent } from './lworker-details.component';

describe('LworkerDetailsComponent', () => {
  let component: LworkerDetailsComponent;
  let fixture: ComponentFixture<LworkerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LworkerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LworkerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
