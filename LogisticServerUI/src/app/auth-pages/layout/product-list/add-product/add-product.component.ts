import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TabsModule, TabsetComponent } from 'ngx-bootstrap/tabs';
import { StationDetailFormComponent } from "../components/station-detail-form/station-detail-form.component";
import { HrfDetailFormComponent } from "../components/hrf-detail-form/hrf-detail-form.component";
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { TextComponent } from '../../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { BarcodeTypeEnum } from '../../../../shared/models/entities/product/enum/barcode-type.enum';
import { KeyValuePair } from '../../../../shared/models/view/key-value-pair.model';
import { NgSelectComponent } from '../../../../shared/components/elements/ng-select/ng-select.component';
import { BatchTypeEnum } from '../../../../shared/models/entities/product/enum/batch-type.enum';
import { BatchTypeEnumPipe } from '../../../../shared/pipes/batch-type-enum.pipe';
import { ViewAddProduct } from '../../../../shared/models/view/product-list/view-add-product.model';
import { ViewStationDetail } from '../../../../shared/models/view/product-list/view-station-detail.model';
import { AddProductDetail } from '../../../../shared/models/entities/product/add-product.model';
import { StationDetails } from '../../../../shared/models/entities/product/station-details.model';
import { HrfStringPipe } from '../../../../shared/pipes/hrf-string.pipe';
import { THIRD_PARTY_LIST } from '../../../../shared/models/common/const/third-party-list.const';
import { ThirdPartyEnum } from '../../../../shared/models/common/enums/third-party.enum';
import { ThirdPartyEnumPipe } from '../../../../shared/pipes/third-party-enum.pipe';


@Component({
  selector: 'app-add-product-list',
  standalone: true,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
  imports: [
    PageHeaderComponent,
    NgSelectComponent,
    RouterModule,
    FormsModule,
    FormBtnPrComponent,
    TextComponent,
    TabsModule,
    StationDetailFormComponent,
    HrfDetailFormComponent
  ],
  providers: [
    BatchTypeEnumPipe,
    HrfStringPipe,
    ThirdPartyEnumPipe
  ]
})
export class AddProductListComponent extends BaseComponent implements OnInit {

  @ViewChild('stationTabs', { static: false }) stationTabs?: TabsetComponent;

  router = inject(Router);
  productListService = inject(ProductListService);
  batchTypeEnumPipe = inject(BatchTypeEnumPipe);
  hrfStringPipe = inject(HrfStringPipe);
  thirdPartyEnumPipe = inject(ThirdPartyEnumPipe);


  viewAddProductDetail: ViewAddProduct;
  companyPrefixList !: string[];
  batchTypeList = [
    { label: this.batchTypeEnumPipe.transform(BatchTypeEnum.Serialization), value: BatchTypeEnum.Serialization },
    { label: this.batchTypeEnumPipe.transform(BatchTypeEnum.ParentChildOnline), value: BatchTypeEnum.ParentChildOnline },
    { label: this.batchTypeEnumPipe.transform(BatchTypeEnum.LineIndependent), value: BatchTypeEnum.LineIndependent },
  ]
  thirdPartyServerList!: any[];
  accountNameList = [
    "KN",
    "Sanofi",
    "Roche",
    "Opella",
    "Abbott",
  ]

  constructor() {
    super();
    this.viewAddProductDetail = new ViewAddProduct();
    this.viewAddProductDetail.StationDetails = [];
    this.preFillDropDownList();
    this.addNewStation();
  }

  ngOnInit(): void {
    this.getCompanyPrefix();
  }

  getCompanyPrefix() {
    this.productListService.getCompanyPrefix()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.companyPrefixList = response;
      });
  }

  preFillDropDownList() {
    // Third party list
    var thirdPartyEnumKeys = Object.keys(ThirdPartyEnum).filter(key => isNaN(+key)) as Array<keyof typeof ThirdPartyEnum>;
    this.thirdPartyServerList = thirdPartyEnumKeys.map((x) => {
      return {
        label: this.thirdPartyEnumPipe.transform(ThirdPartyEnum[x]),
        value: ThirdPartyEnum[x]
      }
    });
  }

  onThirdPartyChange(thirdParty: string) {

  }

  onAccountNameChange(accountName: string) {
    //Currently static
    this.viewAddProductDetail.MAHGLNNumber = "1234567890123"
  }

  addNewStation() {
    if (this.viewAddProductDetail.StationDetails.length > 3) {
      return;
    }

    var stationDetails: ViewStationDetail = {
      GTIN: "",
      PackagingLevel: "",
      Layers: "",
      ItemsInLayer: "",
      BarcodeType: BarcodeTypeEnum.TWOD,
      SSCCPrefix: "",
      FilterValue: "",
      Recipe: "",
      ProductHeight: "",
      hrfDetails: {
        HRF1: new KeyValuePair,
        HRF2: new KeyValuePair,
        HRF3: new KeyValuePair,
        HRF4: new KeyValuePair,
        HRF5: new KeyValuePair
      },
      HRF1: "",
      HRF2: "",
      HRF3: "",
      HRF4: "",
      HRF5: "",
    }

    this.viewAddProductDetail.StationDetails.push(stationDetails);
  }

  removeStation() {
    if (this.viewAddProductDetail.StationDetails.length == 1) {
      return;
    }

    this.viewAddProductDetail.StationDetails.pop();
  }

  calculateGtin() {
    var stationIndex: number = parseInt(this.stationTabs?.tabs.find(x => x.active)?.id as string);
    let tmprange: string;
    this.viewAddProductDetail.StationDetails.forEach((item, index) => {
      if (index === stationIndex) {
        if (this.validateGtinLevelIndicator(stationIndex, item.PackagingLevel)) {
          const companyPrefix = this.viewAddProductDetail.CompanyPrefix;
          const currentgtin = this.viewAddProductDetail.ItemCode;
          if (companyPrefix.length > 0) {
            if ((companyPrefix.length + currentgtin.length) <= 12) {
              let newproductcode = '';
              const slicenum = (12 - companyPrefix.length);
              const str = new Array(slicenum + 1).join('0');
              newproductcode = (str + currentgtin).slice(-slicenum);
              
              tmprange = item.PackagingLevel + companyPrefix + newproductcode;
              const numArr = tmprange.split('');
              const multiplyArr = numArr.map(function (currentnum, index) {
                  return parseInt(currentnum) * (index % 2 === 0 ? 3 : 1);
              });
              const summate  = multiplyArr.reduce(function (a, b) { return a + b; });
              var checkDigit = (10 - summate % 10) % 10;                   

              this.viewAddProductDetail.ItemCode = newproductcode;
              item.GTIN = `${item.PackagingLevel}${companyPrefix}${this.viewAddProductDetail.ItemCode}${checkDigit}`
            }
          }
        } else {
          item.PackagingLevel = "";
        }
      }
    });
  }

  validateGtinLevelIndicator(stationIndex: number, packagingLevel: string): boolean {
    let result = true;
    this.viewAddProductDetail.StationDetails.every((element, index) => {
      if (index !== stationIndex && element.PackagingLevel === packagingLevel) {
        result = false;
        return result;
      }
      return result;
    });

    return result;
  }

  onAddBtnClick() {
    var product = this.mapToAddRequestData();

    this.productListService.createProduct(product)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        void this.router.navigateByUrl('productdetials');
      });
  }

  mapToAddRequestData(): AddProductDetail {
    var product = new AddProductDetail;
    product.ProductName = this.viewAddProductDetail.ProductName;
    product.ItemCode = this.viewAddProductDetail.ItemCode;
    product.CompanyPrefix = this.viewAddProductDetail.CompanyPrefix;
    product.BatchType = this.viewAddProductDetail.BatchType;
    product.AccountName = this.viewAddProductDetail.AccountName;
    product.MAHGLNNumber = this.viewAddProductDetail.MAHGLNNumber;
    product.CustomerProductCode = this.viewAddProductDetail.CustomerProductCode? this.viewAddProductDetail.CustomerProductCode: "";
    product.ServerType = "11";
    product.StationDetails = this.viewAddProductDetail.StationDetails.map(x => {
      var stationDetails = new StationDetails;
      stationDetails.GTIN = x.GTIN;
      stationDetails.PackagingLevel = x.PackagingLevel;
      stationDetails.Layers = x.Layers;
      stationDetails.ItemsInLayer = x.ItemsInLayer;
      stationDetails.BarcodeType = x.BarcodeType;
      stationDetails.SSCCPrefix = x.SSCCPrefix;
      stationDetails.FilterValue = x.FilterValue;
      stationDetails.Recipe = x.Recipe;
      stationDetails.ProductHeight = x.ProductHeight;
      stationDetails.HRF1 = (x.hrfDetails.HRF1.Value) ? this.hrfStringPipe.transform(x.hrfDetails.HRF1) : "";
      stationDetails.HRF2 = (x.hrfDetails.HRF2.Value) ? this.hrfStringPipe.transform(x.hrfDetails.HRF2) : "";
      stationDetails.HRF3 = (x.hrfDetails.HRF3.Value) ? this.hrfStringPipe.transform(x.hrfDetails.HRF3) : "";
      stationDetails.HRF4 = (x.hrfDetails.HRF4.Value) ? this.hrfStringPipe.transform(x.hrfDetails.HRF4) : "";
      stationDetails.HRF5 = (x.hrfDetails.HRF5.Value) ? this.hrfStringPipe.transform(x.hrfDetails.HRF5) : "";

      return stationDetails;
    });

    return product;
  }

}
