import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { RouterModule } from '@angular/router';
import { RegistrationDetail } from '../../../../../shared/models/entities/client-registration/registration-detail.model';
import { RegistrationStatusEnum } from '../../../../../shared/models/entities/client-registration/enums/registration-status.enum';
import { RegistrationStatusHtmlPipe } from '../../pipe/registration-detail-status.pipe';

@Component({
  selector: 'app-list-registration-details',
  standalone: true,
  imports: [
    RouterModule,
    PageHeaderComponent,
    RegistrationStatusHtmlPipe,
  ],
  templateUrl: './list-registration-details.component.html',
  styleUrl: './list-registration-details.component.scss'
})

export class ListRegistrationDetailsComponent extends BaseComponent implements OnInit {
  
  registraionDetails: RegistrationDetail[] = [{
    _id: "1",
    createdBy: "",
    createdOn: new Date(),
    updatedBy: "",
    ipAddress: "1.1.1.1",
    macAddress: "A4-B5-CC-SS-34-WW",
    lineNumber:"L1",
    plantName: "P1",
    location:"Safal",
    status: RegistrationStatusEnum.Registered
  },
  {
    _id: "2",
    createdBy: "",
    createdOn: new Date(),
    updatedBy: "",
    ipAddress: "1.1.1.1",
    macAddress: "A4-B5-CC-SS-34-WW",
    lineNumber:"L1",
    plantName: "P1",
    location:"Safal",
    status: RegistrationStatusEnum.NotRegistered
  }];


  ngOnInit(): void {
    
  }

}
