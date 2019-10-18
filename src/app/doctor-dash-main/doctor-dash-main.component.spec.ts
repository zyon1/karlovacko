import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDashMainComponent } from './doctor-dash-main.component';

describe('DoctorDashMainComponent', () => {
  let component: DoctorDashMainComponent;
  let fixture: ComponentFixture<DoctorDashMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDashMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDashMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
