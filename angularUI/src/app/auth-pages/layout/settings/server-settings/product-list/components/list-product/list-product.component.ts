import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../../shared/components/base/base.component';
import { ProductList } from '../../../../../../../shared/models/entities/server-settings/product-list.model';
import { ConfirmDialogService } from '../../../../../../../shared/components/dialogs/confirm-dialogbox/confirm-dialog.service';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../../../../../shared/components/page/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from "../../../../../../../shared/components/elements/ng-select/ng-select.component";
import { StationDetail } from '../../../../../../../shared/models/entities/server-settings/station-details.model';
import { HrfDetails } from '../../../../../../../shared/models/entities/server-settings/hrf-details.model';

@Component({
  selector: 'app-list-product',
  standalone: true,
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
  imports: [
    RouterModule,
    PageHeaderComponent,
    FormsModule,
    NgSelectComponent
  ]
})
export class ListProductComponent extends BaseComponent implements OnInit {

  confirmDialogService = inject(ConfirmDialogService);
  productList: ProductList[] = [{
    ProductName: '',
    GTIN: 'string',
    StationDetail: 'string',
    Value: 'string',
    HRFName: 'string',
    HRFValue: 'string',
    CompanyPrefrix: 'string',
    BatchType: 'string',
    LineNumber: 'string',
    stationDetails: 'string',
    hrfDetails: 'string',
    productHeight:'string',
    productList:'string',
  }]
  productNameList = [
    'JDMQ1',
    'ABC1',
    'Batch1'
  ]
  gtinList = [
    '08904231102545',
    '28904231102549',
    '48904231102543',
    '08904231102545'
  ]


  ngOnInit(): void {

  }

}
