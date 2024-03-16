import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user-rights',
  templateUrl: './user-rights.component.html',
  styleUrls: ['./user-rights.component.css']
})
export class UserRightsComponent implements OnInit {
  inspectionValue: boolean = true;
  System_Settings: boolean = true;
  Third_Party_SettingsValue: boolean = true;
  toggleInspection(event: any) {
    this.userRightsData.Inspection = event.target.checked;
  }
  toggleThird_Party_Settings(event: any) {
    this.userRightsData.Third_Party_Settings = event.target.checked;
  }
  toggleSystem_Settings(event: any) {
    this.userRightsData.System_Settings = event.target.checked;
  }
  toggleRecipe(event: any) {
    this.userRightsData.Recipe = event.target.checked;
  }
  toggleTest_IO(event: any) {
    this.userRightsData.Test_IO = event.target.checked;
  }
  toggleBatch_Detail(event: any) {
    this.userRightsData.Batch_Detail = event.target.checked;
  }
  toggleFault_Images(event: any) {
    this.userRightsData.Fault_Images = event.target.checked;
  }
  toggleTeach(event: any) {
    this.userRightsData.Teach = event.target.checked;
  }
  toggleProduction_Report(event: any) {
    this.userRightsData.Production_Report = event.target.checked;
  }

  toggleUser_Management(event: any) {
    this.userRightsData.User_Management = event.target.checked;
  }
  toggleAudit_Report(event: any) {
    this.userRightsData.Audit_Report = event.target.checked;
  }

  toggleCamera_Settings(event: any) {
    this.userRightsData.Camera_Settings = event.target.checked;
  }

  toggleHelp(event: any) {
    this.userRightsData.Help = event.target.checked;
  }
  toggleHardware_Settings(event: any) {
    this.userRightsData.Hardware_Settings = event.target.checked;
  }
  toggleInfo(event: any) {
    this.userRightsData.Info = event.target.checked;
  }
  togglePRINTER_SETTING(event: any) {
    this.userRightsData.PRINTER_SETTING = event.target.checked;
  }
  toggleReconciliation(event: any) {
    this.userRightsData.Reconciliation = event.target.checked;
  }
  toggleServer_Settings(event: any) {
    this.userRightsData.Server_Settings = event.target.checked;
  }
  toggleWarehouse(event: any) {
    this.userRightsData.Warehouse = event.target.checked;
  }
  toggleserver_access(event: any) {
    this.userRightsData.server_access = event.target.checked;
  }
  togglebatch_access(event: any) {
    this.userRightsData.batch_access = event.target.checked;
  }
  togglebatch_upload_access(event: any) {
    this.userRightsData.batch_upload_access = event.target.checked;
  }

  userRightsData: any = {};

  userRights: any;

  constructor(private service: SharedService) { }
  ngOnInit(): void {
    this.refreshUserRights();
  }

  refreshUserRights() {
    this.service.getUserRights('Admin').subscribe((data: any) => {
      this.userRightsData = data['Response_Data']['User_Rights'];
      // this.userRightsData = data.User_Rights;
      console.log('User Rights Data:', this.userRightsData);

    },
      (error) => {
        // Handle error if necessary
        console.error('Error fetching user rights:', error);
      });

  }

  updateUserRights() {
    
    var val = {"User_Rights":{
      // "UserName":this.userRightsData.UserName, 
      "Inspection": this.userRightsData.Inspection,
      "Recipe": this.userRightsData.Recipe,
      "Batch_Detail": this.userRightsData.Batch_Detail,
      "Teach": this.userRightsData.Teach,
      "User_Management": this.userRightsData.User_Management,
      "Camera_Settings": this.userRightsData.Camera_Settings,
      "Hardware_Settings": this.userRightsData.Hardware_Settings,
      "Printer_Settings": this.userRightsData.Printer_Settings,
      "Server_Settings": this.userRightsData.Server_Settings,
      "Third_Party_Settings": this.userRightsData.Third_Party_Settings,
      "System_Settings": this.userRightsData.System_Settings,
      "Test_IO": this.userRightsData.Test_IO,
      "Fault_Images": this.userRightsData.Fault_Images,
      "Production_Report": this.userRightsData.Production_Report,
      "Audit_Report": this.userRightsData.Audit_Report,
      "Help": this.userRightsData.Help,
      "Info": this.userRightsData.Info,
      "Reconciliation": this.userRightsData.Reconciliation,
      "Warehouse": this.userRightsData.Warehouse,
      "server_access": this.userRightsData.server_access,
      "batch_access": this.userRightsData.batch_access,
      "batch_upload_access": this.userRightsData.batch_upload_access
    },
    "UserName" : 'Admin'
    };
    
    this.service.updateUserRights(val).subscribe(res => {
      console.log("User Rights update data is", res);
      this.refreshUserRights();
      // this.successMessageService.emitSuccessMessage('Security Policy Update successfully!', 3000)
    },
      (error) => {
        console.error('Error:', error);
      });
  }

}
