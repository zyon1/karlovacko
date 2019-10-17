import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarUserComponent } from './calendar-user.component';

describe('CalendarUserComponent', () => {
  let component: CalendarUserComponent;
  let fixture: ComponentFixture<CalendarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
