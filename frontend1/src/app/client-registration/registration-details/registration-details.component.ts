import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { SuccessMessageSourceService } from 'src/app/success-message-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css'],
})
export class RegistrationDetailsComponent implements OnInit {
  ActivateAddEditRegistrationComp: boolean = false;
  errorMessage: any;
  register: any;
  @Input() editMode: boolean  | undefined;
  registrationForm: any;
 

  
  constructor(private service: SharedService, private successMessageService: SuccessMessageSourceService,private router: Router) { }
  RegisterationDetails: any[] = []
  ngOnInit(): void {
    this.refreshRegistrationDetails();
  }

  refreshRegistrationDetails() {
    this.service.getRegistrationDetails().subscribe((data: any) => {
      this.RegisterationDetails = data.ClientRegistration;
      console.log("register data", data);
    },
    (error) => {
      console.error("Error fetching security policy", error);
    });
  }

  addClick() {
    this.editMode = false;
    this.register = {
      ip: '',
      mac_id: '',
      line_number: '',
      plant_name: '',
      location: '',
      status: '',
      date_time: '',
      packaging_level: '',
      regulatory: '',
      system_name: '',
      // Account_Type: '',
      System_Model: '',
    }

    this.ActivateAddEditRegistrationComp = true;
    this.refreshRegistrationDetails();
    this.errorMessage;
    this.editMode = false;
    this.registrationForm.resetForm();
    // this.router.navigate(['/add-edit-registration-details', { registration: JSON.stringify(this.register) }]);
    // this.successMessage;
    // this.successMessage = 'User profile updated successfully!';

  }


  editClick(item: any) {
    this.register = item;
    this.ActivateAddEditRegistrationComp = true;
    console.log('register details', this.register);
    // this.router.navigate(['/add-edit-registration-details', { registration: item }]);
    this.router.navigate(['/add-edit-registration-details', { registration: JSON.stringify(item) }]);

  }

  deleteClick(mac_id: string) {
    console.log('Deleting mac id:', mac_id);
    if (confirm('Are you sure??')) {
      this.service.deleteRegistrationDetails(mac_id).subscribe(
        data => {
          console.log('Delete response:', data);
          this.refreshRegistrationDetails();
        },
        error => {
          console.error('Delete error:', error);
        }
      );
    }
  }

}
