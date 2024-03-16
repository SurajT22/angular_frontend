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
    this.selectedUserStatus = this.usermanag.UserStatus?.toString() || '1';
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
      this.GroupList = data?.GroupConfig.map((group: any) => {
        return {
          value: group.group_level.toString(),   // Using group_level as the value
          label: this.userTypeMappings[group.group_level] || 'Unknown'
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
      "UserID": this.usermanag.UserID,//username
      "UserType": this.usermanag.UserType,//user_type
      "UserName": this.usermanag.UserName,//full_name
      "Department": this.usermanag.Department,//department
      "Password": this.usermanag.password,//password
      "UserStatus": this.selectedUserStatus,
      "EmailID":this.usermanag.EmailID,
   
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
      "UserID": this.usermanag.UserID,//username
      "UserType": this.usermanag.UserType,//user_type
      "UserName": this.usermanag.UserName,//full_name
      "Department": this.usermanag.Department,//department
      // "Password": this.usermanag[4],//password
      "UserStatus": this.selectedUserStatus,
      "EmailID":this.usermanag.EmailID,
      "Remark":"123",

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
