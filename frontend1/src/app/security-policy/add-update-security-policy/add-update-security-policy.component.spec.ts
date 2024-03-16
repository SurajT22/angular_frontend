import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateSecurityPolicyComponent } from './add-update-security-policy.component';

describe('AddUpdateSecurityPolicyComponent', () => {
  let component: AddUpdateSecurityPolicyComponent;
  let fixture: ComponentFixture<AddUpdateSecurityPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateSecurityPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateSecurityPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
