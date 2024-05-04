import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { HrfDetailFormComponent } from '../../product-list/components/hrf-detail-form/hrf-detail-form.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { NgSelectComponent } from '../../../../shared/components/elements/ng-select/ng-select.component';
import { AddBatch } from '../../../../shared/models/view/batch-detail/add-batch.model';
import { KeyValuePair } from '../../../../shared/models/view/key-value-pair.model';
import { TextComponent } from "../../../../shared/components/elements/text/text.component";
import { FormFooterComponent } from "../../../../shared/components/form/form-footer/form-footer.component";
import { ThirdPartyEnum } from '../../../../shared/models/common/enums/third-party.enum';
import { ThirdPartyEnumPipe } from '../../../../shared/pipes/third-party-enum.pipe';
import { StationTypeEnum } from '../../../../shared/models/common/enums/station-type.enum';
import { StationTypeEnumPipe } from '../../../../shared/pipes/station-type-enum.pipe';
import { AddPageDataReq } from '../../../../shared/models/entities/batch-detail/add-page-data-req.model';
import { AddPageData } from '../../../../shared/models/entities/batch-detail/add-page-data.model';
import { BatchDetailsService } from '../batch-details.service';
import { takeUntil } from 'rxjs';
import { PackagingTypeEnumPipe } from '../../../../shared/pipes/packaging-type-enum.pipe';
import { PackagingTypeEnum } from '../../../../shared/models/entities/batch-detail/enum/packaging-type.enum';
import { BarcodeTypeEnumPipe } from '../../../../shared/pipes/barcode-type-enum.pipe';
import { BarcodeTypeEnum } from '../../../../shared/models/entities/product/enum/barcode-type.enum';
import { HrfKeyValuePipe } from '../../../../shared/pipes/hrf-key-value.pipe';
import { AddBatchReq } from '../../../../shared/models/entities/batch-detail/add-batch-req.model';
import { DateComponent } from '../../../../shared/components/elements/date/date.component';
import { CheckboxComponent } from '../../../../shared/components/elements/checkbox/checkbox.component';
import { InwardTypeEnumPipe } from '../../../../shared/pipes/inward-type-enum.pipe';
import { InwardTypeEnum } from '../../../../shared/models/entities/batch-detail/enum/inward-type.enum';
import { DatePipe } from '@angular/common';
import { RegulatoryEnum } from '../../../../shared/models/entities/server-settings/enums/sscc-regulatory.enum';


@Component({
  selector: 'app-add-batch',
  standalone: true,
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.scss',
  imports: [
    HrfDetailFormComponent,
    PageHeaderComponent,
    NgSelectComponent,
    RouterModule,
    FormsModule,
    TextComponent,
    FormFooterComponent,
    BarcodeTypeEnumPipe,
    DateComponent,
    CheckboxComponent
  ],
  providers: [
    ThirdPartyEnumPipe,
    StationTypeEnumPipe,
    PackagingTypeEnumPipe,
    HrfKeyValuePipe,
    InwardTypeEnumPipe,
    DatePipe
  ]
})
export class AddBatchComponent extends BaseComponent {

  router = inject(Router);
  thirdPartyEnumPipe = inject(ThirdPartyEnumPipe);
  stationTypeEnumPipe = inject(StationTypeEnumPipe);
  batchDetailService = inject(BatchDetailsService);
  packagingTypeEnumPipe = inject(PackagingTypeEnumPipe);
  hrfKeyValuePipe = inject(HrfKeyValuePipe);
  inwardTypeEnumPipe = inject(InwardTypeEnumPipe);
  datePipe = inject(DatePipe);

  addBatch: AddBatch;
  thirdPartyList !: any[];
  stationTypeList !: any[];
  addPageData !: AddPageData;
  packagingTypeList !: any[];

  // regulatoryTypeList = [
  //   "DGFT",
  //   "EU",
  //   "BAHRAIN",
  //   "MoHAP-UAE"
  // ]
  RegulatoryList: any[] = [];

  constructor() {
    super();
    this.addBatch = new AddBatch();
    this.addBatch.hrfDetails = {
      HRF1: new KeyValuePair,
      HRF2: new KeyValuePair,
      HRF3: new KeyValuePair,
      HRF4: new KeyValuePair,
      HRF5: new KeyValuePair
    };
    this.preFillDropDownList();
    this.getRegulatoryDetailList();
  }

  preFillDropDownList() {
    // Third party list
    var thirdPartyEnumKeys = Object.keys(ThirdPartyEnum).filter(key => isNaN(+key)) as Array<keyof typeof ThirdPartyEnum>;
    this.thirdPartyList = thirdPartyEnumKeys.map((x) => {
      return {
        label: this.thirdPartyEnumPipe.transform(ThirdPartyEnum[x]),
        value: ThirdPartyEnum[x]
      }
    });

    // Batch type list
    var stationTypeEnumKeys = Object.keys(StationTypeEnum).filter(key => isNaN(+key)) as Array<keyof typeof StationTypeEnum>;
    this.stationTypeList = stationTypeEnumKeys.filter(x => StationTypeEnum[x] != StationTypeEnum.CARTON).map((x) => {
      return {
        label: this.stationTypeEnumPipe.transform(StationTypeEnum[x]),
        value: StationTypeEnum[x]
      }
    });

    // Packaging type list
    var packagingTypeEnumKeys = Object.keys(PackagingTypeEnum).filter(key => isNaN(+key)) as Array<keyof typeof PackagingTypeEnum>;
    this.packagingTypeList = packagingTypeEnumKeys.map((x) => {
      return {
        label: this.packagingTypeEnumPipe.transform(PackagingTypeEnum[x]),
        value: PackagingTypeEnum[x]
      }
    });
  }

  onThirdPartyChange() {
    this.getAddPageData();
  }

  onBatchTypeChange() {
    this.getAddPageData();
  }

  getAddPageData() {

    if (!this.addBatch.stationType || !this.addBatch.thirdParty) {
      return;
    }

    var reqData: AddPageDataReq = {
      Station: this.stationTypeEnumPipe.transform(this.addBatch.stationType),
      ServerType: this.addBatch.thirdParty.toString()
    }

    this.batchDetailService.getAddPageData(reqData)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.addPageData = response;
      });
  }

  getRegulatoryDetailList() {
    this.batchDetailService.getAllRegulatory()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.RegulatoryList = res.map(item => ({
          label: item.Name,
          value: <RegulatoryEnum>item.Name, 
          disabled: !item.IsLicensed 
        }));
      })
  }

  onProductChange(){
    var stationType = this.stationTypeEnumPipe.transform(this.addBatch.stationType);
    this.batchDetailService.getProductDetail(this.addBatch.productName, stationType)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.addBatch.gtin = response.GTIN;
      this.addBatch.barcodeType = <BarcodeTypeEnum>response.BarcodeType;
      this.addBatch.ssccPrefix = response.SSCCPrefix;
      this.addBatch.filterValue = response.FilterValue;

      this.addBatch.hrfDetails = {
        HRF1: this.hrfKeyValuePipe.transform(response.HRF1),
        HRF2: this.hrfKeyValuePipe.transform(response.HRF2),
        HRF3: this.hrfKeyValuePipe.transform(response.HRF3),
        HRF4: this.hrfKeyValuePipe.transform(response.HRF4),
        HRF5: this.hrfKeyValuePipe.transform(response.HRF5),
      }
    });
  }

  onBtnClick() {
    var reqData = this.mapToAddRequestData();
    this.batchDetailService.addBatch(reqData)
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      void this.router.navigateByUrl('batchdetails');
    });
  }

  mapToAddRequestData():AddBatchReq{
    var reqData = new AddBatchReq();

    reqData.BatchName = this.addBatch.batchName;
    reqData.GTIN = this.addBatch.gtin;
    reqData.LineNumber = ""
    reqData.DeviceID = this.addBatch.deviceId;
    reqData.InwardType = this.inwardTypeEnumPipe.transform( this.addBatch.directInward ? InwardTypeEnum.DIRECT_INWARD : InwardTypeEnum.FILE_BASED );
    reqData.ProductName = this.addBatch.productName;
    reqData.PackagingType = this.packagingTypeEnumPipe.transform(this.addBatch.packagingType);
    reqData.AccountName = this.addBatch.accountName;
    reqData.ExpiryDate = ((this.addBatch.expiryDate as any instanceof Date)? this.datePipe.transform(this.addBatch.expiryDate,"ddMMyy") : this.addBatch.expiryDate) as string;
    reqData.BarcodeType = this.addBatch.barcodeType;
    reqData.SSCCPrefix = this.addBatch.ssccPrefix;
    reqData.Regulatory = this.addBatch.regulatory;
    reqData.Layers = this.addBatch.layers;
    reqData.ItemsInLayer = this.addBatch.itemInLayer;
    reqData.Quantity = this.addBatch.quantity;
    reqData.FilterValue = this.addBatch.filterValue;
    reqData.StationName = this.stationTypeEnumPipe.transform(this.addBatch.stationType);
    

    return reqData;
  }

}
