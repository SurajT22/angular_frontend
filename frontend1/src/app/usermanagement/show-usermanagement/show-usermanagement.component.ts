import { Component,OnInit,Input, Output,EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared.service'; 
import { SuccessMessageSourceService } from 'src/app/success-message-source.service';
import { AddEditUsermanagementComponent } from '../add-edit-usermanagement/add-edit-usermanagement.component';


@Component({
  selector: 'app-show-usermanagement',
  templateUrl: './show-usermanagement.component.html',
  styleUrls: ['./show-usermanagement.component.css']
})
export class ShowUsermanagementComponent implements OnInit{
  // successMessage!: string;
  errorMessage: any;
  modalId: any;
  addEditUserManagementComponent: any;

  constructor(private service:SharedService,private successMessageService: SuccessMessageSourceService){}

  // UsermanagementList :any=[];
  // UsermanagementList: Array<Array<string>> = [];
  @Input() userTypeMappings: { [key: string]: string } = {};
  UsermanagementList:any[]=[]
  Data!:String
  ModalTitle !:String;
  ActivateAddEditUserComp : boolean = false;
  usermanag : any;
  successMessage: string = '';
  
  // @Input() successMessage: string | undefined;
  // @Input() successMessage: EventEmitter<void> = new EventEmitter<void>();
  // @Output() successMessage: EventEmitter<void> = new EventEmitter<void>();
  // successMessage: any;

  closeClick() {
    this.ActivateAddEditUserComp = false;
    this.refreshUserList();
  }




  getMappedUserType(userType: string): string {
    return this.addEditUserManagementComponent.userTypeMappings[userType] || 'Unknown';
  }
  
 
  ngOnInit(): void{
    
    if (this.successMessageService) {
      this.successMessageService.successMessage$.subscribe((message: string) => {
        this.successMessage = message;
      });
      
    }
    this.refreshUserList();
    this.loadUserTypeMappings();
  }

  loadUserTypeMappings() {
    // Load user type mappings from your service or wherever you have them
    this.userTypeMappings = {
      '0': 'Admin',
      '1': 'Supervisor',
      '2': 'Operator',
      '3': 'QA',
      '4': 'Production'
    };
  }


  refreshUserList() {
    // const headers = { 'Authorization': 'Bearer QWRtaW58MjUtMDItMjUgMTM6NDk6MTkNCg==' }
    this.service.getProfileList().subscribe((data: any) => {
      this.UsermanagementList = data.UserDetails;
      console.log("UserDetails are ", this.UsermanagementList);
      // console.log(this.successMessage);
      // this.successMessage
    });
  }
  
  maskPassword(password: string): string {
    // Logic to mask the password, e.g., replace characters with asterisks
    return '*'.repeat(password.length); // Replace this with your masking logic if needed
  }



  addClick(){
    this.usermanag={
      user_name:'',
      user_type : 0,
      fullname:'',
      department:'',
      password: '',
      password_expirey_status: '',
      password_change_attempts:'',
      user_status:'',
      password_creation_date:'',
      password_creation_time:'',
      rights:'',
    }
    this.ModalTitle = "Add UserProfile";
    this.ActivateAddEditUserComp = true;
    this.refreshUserList();
    this.errorMessage;
    // this.successMessage;
    // this.successMessage = 'User profile updated successfully!';
    
  }


  editClick(item: any){
    this.usermanag = item;
    this.ModalTitle = "Edit User Profile";
    this.ActivateAddEditUserComp = true;
    console.log('user details',this.usermanag);
    
  }


  // deleteClick(item:any){
  //   if(confirm('Are you sure??')){
  //     const deleteUrl = `UserID=${item[0]}`;
  //     this.service.deleteProfile(deleteUrl).subscribe(data=>{
  //       // alert(data.toString());
  //       this.refreshUserList();
  //     })
  //   }
  // }
  deleteClick(userId: string) {
    console.log('Deleting user with UserID:', userId);
    if (confirm('Are you sure??')) {
      this.service.deleteProfile(userId).subscribe(
        data => {
          console.log('Delete response:', data);
          this.refreshUserList();
        },
        error => {
          console.error('Delete error:', error);
        }
      );
    }
  }
  
  
}
