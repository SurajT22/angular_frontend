import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRegistrationDetailsComponent } from './add-edit-registration-details.component';

describe('AddEditRegistrationDetailsComponent', () => {
  let component: AddEditRegistrationDetailsComponent;
  let fixture: ComponentFixture<AddEditRegistrationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRegistrationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditRegistrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
