import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StationDetailFormComponent } from "../components/station-detail-form/station-detail-form.component";
import { HrfDetailFormComponent } from "../components/hrf-detail-form/hrf-detail-form.component";
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { TextComponent } from '../../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { KeyValuePair } from '../../../../shared/models/view/key-value-pair.model';
import { NgSelectComponent } from '../../../../shared/components/elements/ng-select/ng-select.component';
import { Product } from '../../../../shared/models/entities/product/product.model';
import { ProductListService } from '../product-list.service';
import { takeUntil } from 'rxjs';
import { HrfKeyValuePipe } from '../../../../shared/pipes/hrf-key-value.pipe';
import { HrfStringPipe } from '../../../../shared/pipes/hrf-string.pipe';
import { ViewStationDetail } from '../../../../shared/models/view/product-list/view-station-detail.model';


@Component({
  selector: 'app-edit-product-list',
  standalone: true,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
  imports: [
    PageHeaderComponent,
    NgSelectComponent,
    FormsModule,
    StationDetailFormComponent,
    TextComponent,
    HrfDetailFormComponent,
    FormBtnPrComponent
  ],
  providers: [
    HrfKeyValuePipe,
    HrfStringPipe
  ]
})
export class EditProductListComponent extends BaseComponent implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  productListService = inject(ProductListService);
  hrfKeyValuePipe = inject(HrfKeyValuePipe);
  hrfStringPipe = inject(HrfStringPipe);

  updateProduct !: Product;
  stationDetails !: ViewStationDetail;
  thirdPartyServer !: string;
  ssccPrefixList !: string[];

  thirdPartyServerList = [
    "Traceink",
    "Tatmee",
    "NHRA",
  ]
  accountNameList = [
    "KN",
    "Sanofi",
    "Roche",
    "Opella",
    "Abbott",
  ]

  constructor() {
    super();

    const productName = this.activatedRoute.snapshot.paramMap.get('prod') || '';
    const gtin = this.activatedRoute.snapshot.paramMap.get('gtin') || '';

    this.updateProduct = new Product();
    this.updateProduct.ProductName = productName;
    this.updateProduct.GTIN = gtin;

    this.stationDetails = new ViewStationDetail();
    this.stationDetails.hrfDetails = {
      HRF1: new KeyValuePair,
      HRF2: new KeyValuePair,
      HRF3: new KeyValuePair,
      HRF4: new KeyValuePair,
      HRF5: new KeyValuePair
    };
  }

  ngOnInit(): void {
    this.getCompanyPrefix();
    this.getProductDetails();
  }

  getProductDetails() {
    this.productListService.getProduct(this.updateProduct.ProductName, this.updateProduct.GTIN)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.updateProduct = response;
        this.stationDetails = {
          PackagingLevel: this.updateProduct.PackagingLevel,
          Layers: this.updateProduct.Layers,
          ItemsInLayer: this.updateProduct.ItemsInLayer,
          BarcodeType: this.updateProduct.BarcodeType,
          SSCCPrefix: this.updateProduct.SSCCPrefix,
          FilterValue: this.updateProduct.FilterValue,
          GTIN: this.updateProduct.GTIN,
          ProductHeight: this.updateProduct.ProductHeight,
          Recipe: this.updateProduct.Recipe,
          HRF1: this.updateProduct.HRF1,
          HRF2: this.updateProduct.HRF2,
          HRF3: this.updateProduct.HRF3,
          HRF4: this.updateProduct.HRF4,
          HRF5: this.updateProduct.HRF5,
          hrfDetails: {
            HRF1: this.hrfKeyValuePipe.transform(this.updateProduct.HRF1),
            HRF2: this.hrfKeyValuePipe.transform(this.updateProduct.HRF2),
            HRF3: this.hrfKeyValuePipe.transform(this.updateProduct.HRF3),
            HRF4: this.hrfKeyValuePipe.transform(this.updateProduct.HRF4),
            HRF5: this.hrfKeyValuePipe.transform(this.updateProduct.HRF5)
          }
        };
      });
  }

  getCompanyPrefix() {
    this.productListService.getCompanyPrefix()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.ssccPrefixList = response;
      });
  }

  onEditBtnClick() {
    this.updateProduct.Layers = this.stationDetails.Layers;
    this.updateProduct.ItemsInLayer = this.stationDetails.ItemsInLayer;
    this.updateProduct.BarcodeType = this.stationDetails.BarcodeType;
    this.updateProduct.SSCCPrefix = this.stationDetails.SSCCPrefix;
    this.updateProduct.FilterValue = this.stationDetails.FilterValue;
    this.updateProduct.HRF1 = (this.stationDetails.hrfDetails.HRF1.Value) ? this.hrfStringPipe.transform(this.stationDetails.hrfDetails.HRF1) : "";
    this.updateProduct.HRF2 = (this.stationDetails.hrfDetails.HRF2.Value) ? this.hrfStringPipe.transform(this.stationDetails.hrfDetails.HRF2) : "";
    this.updateProduct.HRF3 = (this.stationDetails.hrfDetails.HRF3.Value) ? this.hrfStringPipe.transform(this.stationDetails.hrfDetails.HRF3) : "";
    this.updateProduct.HRF4 = (this.stationDetails.hrfDetails.HRF4.Value) ? this.hrfStringPipe.transform(this.stationDetails.hrfDetails.HRF4) : "";
    this.updateProduct.HRF5 = (this.stationDetails.hrfDetails.HRF5.Value) ? this.hrfStringPipe.transform(this.stationDetails.hrfDetails.HRF5) : "";

    this.productListService.updateProduct(this.updateProduct)
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      void this.router.navigateByUrl('productdetials');
    });
  }
}
