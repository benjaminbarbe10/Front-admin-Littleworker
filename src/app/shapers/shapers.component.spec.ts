import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapersComponent } from './shapers.component';

describe('ShapersComponent', () => {
  let component: ShapersComponent;
  let fixture: ComponentFixture<ShapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
