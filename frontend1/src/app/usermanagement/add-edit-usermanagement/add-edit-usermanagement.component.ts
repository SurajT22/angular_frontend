import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { SuccessMessageSourceService } from 'src/app/success-message-source.service';

@Component({
  selector: 'app-add-edit-usermanagement',
  templateUrl: './add-edit-usermanagement.component.html',
  styleUrls: ['./add-edit-usermanagement.component.css']
})
export class AddEditUsermanagementComponent implements OnInit {
  userName: any = {};

  // onSubmit() {
  //   // if (this.userForm.valid) {
  //   //   // Your form submission logic goes here
  //   //   console.log('Form submitted!', this.usermanag);
  //   //   this.addUserProfile();
  //   // }else{
  //   //     console.log('Form not submitted!',this.usermanag);
  //   // }
  //   this.addUserProfile();

  // }
  successMessage: any;
  errorMessage!: string;
  userForm: any;

  constructor(private service: SharedService, private successMessageService: SuccessMessageSourceService) { }
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  // @ViewChild('successModal') successModal !: ElementRef;


  @Input() usermanag: any = {};
  modalId: string = 'exampleModal1';
  user_name!: string
  user_type !: string
  fullname!: string
  department!: string
  password!: string
  password_expirey_status!: string
  password_change_attempts!: string
  user_status!: string
  password_creation_date!: string
  password_creation_time!: string
  rights!: string
  "UserID": string
  selectedUserStatus: string = '1';
  GroupList: any = [];


  ngOnInit(): void {
    // this.selectedUserStatus =this.usermanag[7] ? this.usermanag[7].toString() : '1';
    this.selectedUserStatus = this.usermanag[7]?.toString() || '1';
    this.loadGroupList();


  }

  userTypeMappings: { [key: string]: string } = {
    '0': 'Admin',
    '1': 'Supervisor',
    '2': 'Operator',
    '3': 'QA',
    '4': 'Production'
  };
  backendValueMappings: { [key: string]: string } = {
    'Admin': '0',
    'Supervisor': '1',
    'Operator': '2',
    'QA': '3',
    'Production': '4'
  };
  // loadGroupList(){
  //   this.service.getGroupList().subscribe((data:any)=>{
  //   // this.GroupList =  data?.Data?.GroupConfig || [];
  //   // this.GroupList = data?.Data?.GroupConfig.map((group: any[]) => group[7]) || [];
  //   this.GroupList = data?.Data?.GroupConfig.map((group: any[]) => this.userTypeMappings[group[7]]) || [];
  //   });
  // }

  loadGroupList() {
    this.service.getGroupList().subscribe((data: any) => {
      this.GroupList = data?.Data?.GroupConfig.map((group: any[]) => {
        return {
          value: group[7].toString(),   // Convert to string as ngModel expects string values
          label: this.userTypeMappings[group[7]] || 'Unknown'
        };
      }) || [];
    });
  }





  userStatusOptions = [
    { value: '1', label: 'Active' },
    { value: '0', label: 'Inactive' }
  ];



  addUserProfile() {

    var val = {
      "UserID": this.usermanag[0],//username
      "GroupLevel": this.usermanag[1],//user_type
      "UserName": this.usermanag[2],//full_name
      "Department": this.usermanag[3],//department
      "Password": this.usermanag[4],//password
      // password_expirey_status:this.usermanag[5],
      // password_change_attempts:this.usermanag[6],
      // "User Status":this.usermanag[7],//user_status
      "UserStatus": this.selectedUserStatus,
      // password_creation_date:this.usermanag[8],
      // password_creation_time:this.usermanag[9],
      // rights:this.usermanag[10],
    }

    this.service.addUsersProfile(val).subscribe(res => {

      this.successMessage = 'User profile Added successfully!';
      console.log('success Message', this.successMessage);
      console.log('user data add', val);
      this.closeModal.emit();
      this.successMessageService.emitSuccessMessage('User profile Added successfully!', 3000);

    },
    (error: any) => {

      console.error('Error:', error);
    });
  }

  updateUserProfile() {
    var val = {
      "UserID": this.usermanag[0],//username
      "GroupLevel": this.usermanag[1],//user_type
      "UserName": this.usermanag[2],//full_name
      "Department": this.usermanag[3],//department
      "Password": this.usermanag[4],//password
      "UserStatus": this.selectedUserStatus,
    };
    this.service.updateUsersProfile(val).subscribe(res => {

      console.log('indise udpade userprofile', res);
      this.successMessage = 'User profile updated successfully!';
      this.closeModal.emit();

      this.successMessageService.emitSuccessMessage('User profile Updated successfully!', 3000);

      // alert(res.toString());

    },
    (error) => {
      console.error('Error:', error);
    }
    );
  }

}
