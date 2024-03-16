import { ResourceLoader } from '@angular/compiler';
import { Component,Input,OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { SuccessMessageSourceService } from 'src/app/success-message-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usermanagement',
  templateUrl: './add-usermanagement.component.html',
  styleUrls: ['./add-usermanagement.component.css']
})
export class AddUsermanagementComponent implements OnInit {

  @Input() usermanag: any = {};
  GroupList: any = [];
  selectedUserStatus: string = '1';
  successMessage: any;
  userForm: any;
  router: any;

  constructor(private service: SharedService,private successMessageService: SuccessMessageSourceService){}

ngOnInit(): void {
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
userStatusOptions = [
  { value: '1', label: 'Active' },
  { value: '0', label: 'Inactive' }
];

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

// refreshUserList() {
//   this.service.addUsersProfile(ResourceLoader).subscribe(res => {
    
//   });
  
// }

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
    this.router.navigate(['add-profile']); 
    // this.refreshUserList();
    this.successMessageService.emitSuccessMessage('User profile Added successfully!', 3000);

  },
  (error: any) => {

    console.error('Error:', error);
  });
}
// addUserProfile() {
//   // Assuming all form fields are required for simplicity
//   if (this.userForm.invalid) {
//     // Handle invalid form
//     return;
//   }

//   const userStatus = this.selectedUserStatus;
//   const val = {
//     "UserID": this.usermanag.UserID,
//     "UserType": this.usermanag.UserType,
//     "UserName": this.usermanag.UserName,
//     "Department": this.usermanag.Department,
//     "Password": this.usermanag.password,
//     "UserStatus": userStatus,
//     "EmailID": this.usermanag.EmailID,
//   };

//   this.service.addUsersProfile(val).subscribe(
//     res => {
//       this.successMessage = 'User profile Added successfully!';
//       console.log('success Message', this.successMessage);
//       console.log('user data add', val);
//       // Assuming you want to refresh the user list after adding a user
//       // this.refreshUserList();
//       this.successMessageService.emitSuccessMessage('User profile Added successfully!', 3000);
//     },
//     (error) => {
//       console.error('Error:', error);
//     }
//   );
// }


}
