import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAccessComponent } from './registration-access.component';

describe('RegistrationAccessComponent', () => {
  let component: RegistrationAccessComponent;
  let fixture: ComponentFixture<RegistrationAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
