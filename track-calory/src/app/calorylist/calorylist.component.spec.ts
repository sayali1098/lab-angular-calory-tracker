import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorylistComponent } from './calorylist.component';

describe('CalorylistComponent', () => {
  let component: CalorylistComponent;
  let fixture: ComponentFixture<CalorylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalorylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
