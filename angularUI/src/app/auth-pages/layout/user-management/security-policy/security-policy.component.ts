import { Component, Input, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBtnPrComponent } from '../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { SecurityPolicyService } from './security-policy.service';
import { SecurityPolicy } from '../../../../shared/models/entities/security-policy/security-policy.model';
import { CheckboxComponent } from '../../../../shared/components/elements/checkbox/checkbox.component';
import { NumberComponent } from '../../../../shared/components/elements/number/number.component';

@Component({
  selector: 'app-security-policy',
  standalone: true,
  imports: [
    FormsModule,
    NumberComponent,
    FormBtnPrComponent,
    PageHeaderComponent,
    CheckboxComponent
  ],
  templateUrl: './security-policy.component.html',
  styleUrl: './security-policy.component.scss'
})
export class SecurityPolicyComponent extends BaseComponent implements OnInit  {
  securityPolicyService = inject(SecurityPolicyService);

  securitypolicy!: SecurityPolicy;

  constructor(){
    super()
    this.securitypolicy = new SecurityPolicy();
  }

  ngOnInit(){
    this.getSecurityPolicy();
  }

  getSecurityPolicy(){
    this.securityPolicyService.getSecurityPolicy()
    .subscribe((res)=>{
      this.securitypolicy = res;
    });
  }

  onUpdateBtnClick(){
   this.securityPolicyService.updateSecurityPolicy(this.securitypolicy)
   .subscribe(() =>{
    
   });
  }
}
