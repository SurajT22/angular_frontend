import { Component,OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { SuccessMessageSourceService } from 'src/app/success-message-source.service'; 

@Component({
  selector: 'app-registration-access',
  templateUrl: './registration-access.component.html',
  styleUrls: ['./registration-access.component.css']
})
export class RegistrationAccessComponent implements OnInit {
  registeration_ip: any = {};
  ipSegments: string[] = ['', '', '', ''];
  successMessage: string = '';

  constructor(private service: SharedService, private successMessageService: SuccessMessageSourceService) {}


  ngOnInit(): void{
    
    if (this.successMessageService) {
      this.successMessageService.successMessage$.subscribe((message: string) => {
        this.successMessage = message;
      });
      
    }
    
  }


  addRegistrationAccess() {
    const ipAddress = this.ipSegments.join('.');
    var ip_val = {
      "ClientIP": ipAddress
    };
    this.service.addRegistrationAccess(ip_val).subscribe(res => {
      console.log("ip value",ip_val);
      this.ipSegments = ['', '', '', ''];
      // Show success message
      this.successMessageService.emitSuccessMessage('IP registered successfully!', 3000);
      // Handle the response if needed
    },
    (error: any) => {
      console.error('Error:', error);
    });
  }
}
