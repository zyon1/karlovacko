import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderDoctorComponent } from './sider-doctor.component';

describe('SiderDoctorComponent', () => {
  let component: SiderDoctorComponent;
  let fixture: ComponentFixture<SiderDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiderDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
