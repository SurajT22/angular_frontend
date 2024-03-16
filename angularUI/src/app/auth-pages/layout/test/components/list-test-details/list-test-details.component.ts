import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { TestStatusHtmlPipe } from '../pipe/test-details-status.pipe';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { TestDetails } from '../../../../../shared/models/entities/test-client-registration/test-detail.model';
import { TestStatusEnum } from '../../../../../shared/models/entities/test-client-registration/enums/test-status.enum';

@Component({
  selector: 'app-list-test-details',
  standalone: true,
  imports: [
    RouterModule,
    PageHeaderComponent,
    TestStatusHtmlPipe
  ],
  templateUrl: './list-test-details.component.html',
  styleUrl: './list-test-details.component.scss'
})
export class ListTestDetailsComponent extends BaseComponent implements OnInit {

  testDetails: TestDetails [] = [{
    _id: "1",
    createdBy: "",
    createdOn: new Date(),
    updatedBy: "",
    ipAddress: "1.1.1.1",
    macAddress: "A4-B5-CC-SS-34-WW",
    lineNumber:"L1",
    plantName: "P1",
    location:"Safal",
    status: TestStatusEnum.Registered
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
    status: TestStatusEnum.NotRegistered
  }];



  ngOnInit(): void {
    
  }

}
