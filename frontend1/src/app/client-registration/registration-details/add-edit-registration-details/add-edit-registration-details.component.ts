import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-registration-details',
  templateUrl: './add-edit-registration-details.component.html',
  styleUrls: ['./add-edit-registration-details.component.css']
})
export class AddEditRegistrationDetailsComponent implements OnInit {



  constructor(private service: SharedService, private route: ActivatedRoute) { }
  @Input() register: any = {};
  registrationForm: any;
  editMode: boolean = false;
  ip!:string
  private localRegister: any = {};


 
  ngOnInit(): void {
    console.log('ngOnInit() called');
    this.route.params.subscribe(params => {
      const register = params['registration'];
      if (register) {
        this.register = JSON.parse(register);
        this.editMode = true;
        console.log("Register data:", this.register['ip']);
        
      } else {
        this.editMode = false;
        console.log('editMode', this.editMode);
        console.log("after false IP data", this.register['ip']);
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
          Account_Type: '',
          System_Model: '',
        };
      }
    });
   
  }
  

  addRegisterationDetails() {
    var val = {
      'ip': this.register.ip,
      'mac_id': this.register.mac_id,
      'line_number': this.register.line_number,
      'plant_name': this.register.plant_name,
      'location': this.register.location,
      'status': this.register.status,
      'date_time': this.register.date_time,
      'packaging_level': this.register.packaging_level,
      'regulatory': this.register.regulatory,
      'system_name': this.register.system_name,
      // 'Account_Type': this.register.Account_Type,
      'System_Model': this.register.System_Model,
    };
    this.service.addUsersProfile(val).subscribe(res => {
      console.log('inside add user profile', res);
    },
      (error: any) => {
        console.error('Error:', error);
      });
  }

  updateRegistrationDetails() {
    var val = {
      'ip': this.register.ip,
      'mac_id': this.register.mac_id,
      'line_number': this.register.line_number,
      'plant_name': this.register.plant_name,
      'location': this.register.location,
      'status': this.register.status,
      'date_time': this.register.date_time,
      'packaging_level': this.register.packaging_level,
      'regulatory': this.register.regulatory,
      'system_name': this.register.system_name,
      'Account_Type': this.register.Account_Type,
      // 'System_Model': this.register.System_Model,
    };
    this.service.updateUsersProfile(val).subscribe(res => {
      console.log('inside update user profile', res);
    });
  }
}
