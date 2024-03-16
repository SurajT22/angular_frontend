import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'; 
import { SuccessMessageSourceService } from '../success-message-source.service'; 

@Component({
  selector: 'app-security-policy',
  templateUrl: './security-policy.component.html',
  styleUrls: ['./security-policy.component.css']
})
export class SecurityPolicyComponent implements OnInit{
  SecurityPolicyList:any = {};
  securitypolicy:any = {};
  autoLogoutCheckbox: boolean = false;


  constructor(private service:SharedService,private successMessageService: SuccessMessageSourceService){}
  
  ngOnInit(): void{
    this.refreshSecurityPolicyList();
  }

  toggleAutoLogout(event: any) {
    this.securitypolicy.AutoLogout = event.target.checked ? '1' : '0';
    
  }
  
  toggleAutoSymbols(event:any){
    this.securitypolicy.Symbols = event.target.checked ? '1': '0';
  }
  toggleAutoUppercaseLetters(event:any){
    this.securitypolicy.UppercaseLetters=event.target.checked ? '1':'0';
  }
  toggleAutoNumbers(event:any){
    this.SecurityPolicyList.Numbers=event.target.checked ? '1':'0';
  }

  refreshSecurityPolicyList() {
    this.service.getSecurityPolicyList().subscribe((data: any) => {
      this.securitypolicy = data.SecurityPolicyDB;
      this.autoLogoutCheckbox = this.securitypolicy.AutoLogout === '1';
    },
    (error) => {
      console.error("Error fetching security policy", error);
      console.log('Error message is', this.securitypolicy.response);
    }
    );
  }

  updateSecurityPolicyList() {
    var val = {
      "PasswordLength": this.securitypolicy.PasswordLength,
      "ExpiryDays": this.securitypolicy.ExpiryDays,
      "UserDays": this.securitypolicy.UserDays,
      "LockoutAttempts": this.securitypolicy.LockoutAttempts,
      "DuplicatePassword": this.securitypolicy.DuplicatePassword,
      "UppercaseLetters": this.securitypolicy.UppercaseLetters,
      "Numbers": this.securitypolicy.Numbers,
      "Symbols": this.securitypolicy.Symbols,
      "AutoLogoutDuration": this.securitypolicy.AutoLogoutDuration,
      "AutoLogout": this.securitypolicy.AutoLogout
    };
  this.service.updateSecurityPolicyList(val).subscribe(res=>{
    console.log("security Policy update data is",res);
    this.refreshSecurityPolicyList();
    this.successMessageService.emitSuccessMessage('Security Policy Update successfully!', 3000)
  },
  (error) => {
    console.error('Error:', error);
  });}

  


}
