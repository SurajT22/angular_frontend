import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { Router } from '@angular/router';
import { InwardBatch } from '../../../../shared/models/view/batch-detail/inward-batch.model';
import { NgSelectComponent } from "../../../../shared/components/elements/ng-select/ng-select.component";
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from "../../../../shared/components/elements/checkbox/checkbox.component";
import { TextComponent } from "../../../../shared/components/elements/text/text.component";
import { DateComponent } from "../../../../shared/components/elements/date/date.component";
import { FormFooterComponent } from "../../../../shared/components/form/form-footer/form-footer.component";
import { PageHeaderComponent } from "../../../../shared/components/page/page-header/page-header.component";
import { BatchDetailsService } from '../batch-details.service';
import { takeUntil } from 'rxjs';
import { InwardTypeEnumPipe } from '../../../../shared/pipes/inward-type-enum.pipe';
import { InwardTypeEnum } from '../../../../shared/models/entities/batch-detail/enum/inward-type.enum';
import { ThirdPartyEnum } from '../../../../shared/models/common/enums/third-party.enum';
import { ThirdPartyEnumPipe } from '../../../../shared/pipes/third-party-enum.pipe';
import { InwardPageData } from '../../../../shared/models/entities/batch-detail/inward-page-data.model';
import { MultiLineComponent } from '../../../../shared/components/elements/multi-line/multi-line.component';
import { CommonModule, DatePipe } from '@angular/common';
import { BtnPrComponent } from '../../../../shared/components/elements/button/btn-pr/btn-pr.component';
import { InwardFileListReq } from '../../../../shared/models/entities/batch-detail/inward-file-list-req.model';
import { StationTypeEnumPipe } from '../../../../shared/pipes/station-type-enum.pipe';
import { StationTypeEnum } from '../../../../shared/models/common/enums/station-type.enum';
import { ScanDataReq } from '../../../../shared/models/entities/batch-detail/scan-data-req.model';
import { InwardDownloadFileRes } from '../../../../shared/models/entities/batch-detail/inward-download-file-res.model';
import { InwardVerifyFileRes } from '../../../../shared/models/entities/batch-detail/inward-verify-file-res.model';
import { InwardDownloadFileReq } from '../../../../shared/models/entities/batch-detail/inward-download-file-req.model';
import { InwardVerifyFileReq } from '../../../../shared/models/entities/batch-detail/inward-verify-file-req.model';
import { InwardBatchReq } from '../../../../shared/models/entities/batch-detail/inward-batch-req.model';
import { ConfirmDialogService } from '../../../../shared/components/dialogs/confirm-dialogbox/confirm-dialog.service';
import { InwardVerifyDialogComponent } from './inward-verify-dialog/inward-verify-dialog.component';
import { InwardVerifyDialogService } from './inward-verify-dialog/inward-verify-dialog.service';
import { RegulatoryEnum } from '../../../../shared/models/entities/server-settings/enums/sscc-regulatory.enum';

@Component({
  selector: 'app-batch-inward',
  standalone: true,
  templateUrl: './batch-inward.component.html',
  styleUrl: './batch-inward.component.scss',
  imports: [
    CommonModule,
    NgSelectComponent,
    FormsModule,
    CheckboxComponent,
    TextComponent,
    DateComponent,
    FormFooterComponent,
    PageHeaderComponent,
    MultiLineComponent,
    BtnPrComponent,
    InwardVerifyDialogComponent
  ],
  providers: [
    InwardTypeEnumPipe,
    ThirdPartyEnumPipe,
    StationTypeEnumPipe,
    DatePipe
  ]
})
export class BatchInwardComponent extends BaseComponent implements OnInit {

  router = inject(Router);
  batchDetailsService = inject(BatchDetailsService);
  inwardTypeEnumPipe = inject(InwardTypeEnumPipe);
  thirdPartyEnumPipe = inject(ThirdPartyEnumPipe);
  stationTypeEnumPipe = inject(StationTypeEnumPipe);
  confirmDialogService = inject(ConfirmDialogService);
  inwardVerifyDialogService = inject(InwardVerifyDialogService);
  datePipe = inject(DatePipe);

  inwardTypeEnum = InwardTypeEnum;
  thirdPartyList !: any[];
  selectedThirdParty !: ThirdPartyEnum;
  inwardTypeList !: any[];
  inwardBatch: InwardBatch;
  // regulatoryTypeList = [
  //   "DGFT",
  //   "EU",
  //   "BAHRAIN",
  //   "MoHAP-UAE"
  // ]
  RegulatoryList: any[] = [];
  inwardPageData !: InwardPageData;
  fileList !: string[];
  selectedFile !: string;
  downloadFileData !: InwardDownloadFileRes | undefined;
  verifyFileData !: InwardVerifyFileRes | undefined;

  constructor() {
    super();

    this.preFillDropDownList();
    this.getRegulatoryDetailList();
    this.inwardBatch = new InwardBatch();
    this.inwardPageData = new InwardPageData();
  }

  ngOnInit(): void {

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

    // Inward type list
    var inwardTypeEnumKeys = Object.keys(InwardTypeEnum).filter(key => isNaN(+key)) as Array<keyof typeof InwardTypeEnum>
    this.inwardTypeList = inwardTypeEnumKeys.map((x) => {
      return {
        label: this.inwardTypeEnumPipe.transform(InwardTypeEnum[x]),
        value: InwardTypeEnum[x]
      }
    });
  }

  onThirdPartyChange() {
    this.getInwardPageData();
  }

  getInwardPageData() {
    this.batchDetailsService.getInwardPageData(this.selectedThirdParty.toString())
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.inwardPageData = response;
        this.inwardBatch.accountName = '';
        this.inwardBatch.productName = '';
        this.inwardBatch.poNumber = '';
        this.inwardBatch.lineNumber = '';
      });
  }

  onInwardTypeChange() {
    if (this.inwardBatch.inwardType == InwardTypeEnum.FILE_BASED) {
      this.getFileList();
    }
  }

  onAccountChange() {
    if (this.inwardBatch.inwardType == InwardTypeEnum.FILE_BASED) {
      this.getFileList();
    }
  }

  getFileList() {

    if (!this.inwardBatch.accountName || this.inwardBatch.accountName == "") {
      return
    }

    var req: InwardFileListReq = {
      AccountName: this.inwardBatch.accountName,
      InwardType: this.inwardTypeEnumPipe.transform(this.inwardBatch.inwardType)
    }
    this.batchDetailsService.fetchInwardFileList(req)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.fileList = response;
      });
  }

  onProductChange() {
    var station = this.stationTypeEnumPipe.transform(StationTypeEnum.CARTON);
    this.batchDetailsService.getProductDetail(this.inwardBatch.productName, station)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.inwardBatch.gtin = response.GTIN;
        this.inwardBatch.packagingLevel = response.PackagingLevel;
      });
  }
  getRegulatoryDetailList() {
    this.batchDetailsService.getAllRegulatory()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.RegulatoryList = res.map(item => ({
          label: item.Name,
          value: <RegulatoryEnum>item.Name, 
          disabled: !item.IsLicensed 
        }));
      })
  }
  

  onScannedKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      var reqData: ScanDataReq = {
        ScannedString: this.inwardBatch.scannedData
      };
      this.batchDetailsService.getScannedData(reqData)
        .pipe(takeUntil(this.destroy$))
        .subscribe((response) => {
          this.inwardBatch.batchName = response.BatchName;
          this.inwardBatch.gtin = response.GTIN;
          this.inwardBatch.expiryDate = response.ExpiryDate;
          this.inwardBatch.productName = response.ProductName;
        });
    }
  }

  onFileChange(){
    this.downloadFileData = undefined;
    this.verifyFileData = undefined;
  }

  onDownloadBtnClick() {
    var reqData: InwardDownloadFileReq = {
      AccountName: this.inwardBatch.accountName,
      InwardType: this.inwardTypeEnumPipe.transform(this.inwardBatch.inwardType),
      FileName: this.selectedFile
    };
    this.batchDetailsService.downloadInwardFile(reqData)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        var header = "Are you sure want to inward ?"
        var template = `<p class="text-start">
      Multiple batch in file ! <br/><br/>
      Batch Name: ${response[0].BatchName} <br/>
      GTIN: ${response[0].GTIN} <br/>
      Expiry: ${response[0].ExpiryDate} <br/>
      Quantity: ${response[0].Quantity} <br/>
      </p>`;
        this.confirmDialogService.confirm((isConfirm: boolean) => {
          if (isConfirm) {
            this.downloadFileData = response[0];
            this.inwardBatch.batchName = this.downloadFileData.BatchName;
            this.inwardBatch.gtin = this.downloadFileData.GTIN;
            this.inwardBatch.mfg = this.downloadFileData.MFGDate;
            this.inwardBatch.expiryDate = this.downloadFileData.ExpiryDate;
          }
        }, template, header);
      });
  }

  onVerifyBtnClick() {
    var reqData: InwardVerifyFileReq = {
      BatchName: this.inwardBatch.batchName,
      GTIN: this.inwardBatch.gtin,
      ExpiryDate: this.inwardBatch.expiryDate,
      FilePath: this.downloadFileData?.FilePath as string,
      ProductName: this.inwardBatch.productName
    };
    this.batchDetailsService.verifyInwardFile(reqData)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {

        this.inwardVerifyDialogService.show((isVerified: boolean)=>{
          if(isVerified){
            this.verifyFileData = response;
          }
        }, response);
      });
  }

  onImportBtnClick() {

    var header = "Are you sure want to inward ?"

    var template = `<p class="text-start">
    Batch Name: ${this.inwardBatch?.batchName} <br/>
    GTIN: ${this.inwardBatch?.gtin} <br/>
    </p>`;

    if (this.inwardBatch.inwardType == InwardTypeEnum.FILE_BASED) {
      template = `<p class="text-start">
        Batch Name: ${this.verifyFileData?.BatchName} <br/>
        Carton: ${this.verifyFileData?.LevelDetails[0]?.Quantity} <br/>
        Shipper: ${this.verifyFileData?.LevelDetails[1]?.Quantity} <br/>
        Pallet: ${this.verifyFileData?.LevelDetails[2]?.Quantity} <br/>
        </p>`;
    }

    this.confirmDialogService.confirm((isConfirm: boolean) => {
      if (isConfirm) {
        this.importData();
      }
    }, template, header);
  }

  importData() {
    var reqData: InwardBatchReq = {
      LineNumber: this.inwardBatch.lineNumber,
      InwardType: this.inwardTypeEnumPipe.transform(this.inwardBatch.inwardType),
      AccountName: this.inwardBatch.accountName,
      ProductName: this.inwardBatch.productName,
      BatchName: this.inwardBatch.batchName,
      GTIN: this.inwardBatch.gtin,
      ExpiryDate: ((this.inwardBatch.expiryDate as any instanceof Date)? this.datePipe.transform(this.inwardBatch.expiryDate,"ddMMyy") : this.inwardBatch.expiryDate) as string,
      MFGDate: ((this.inwardBatch.mfg as any instanceof Date)? this.datePipe.transform(this.inwardBatch.mfg,"yyyy-MM-dd") : this.inwardBatch.mfg) as string,
      PackagingLevel: this.inwardBatch.packagingLevel,
      FilePath: this.downloadFileData?.FilePath as string,
      Regulatory:this.inwardBatch.regulatory
    };
    this.batchDetailsService.inwardBatch(reqData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        void this.router.navigateByUrl('batchdetails');
      });
  }
}
