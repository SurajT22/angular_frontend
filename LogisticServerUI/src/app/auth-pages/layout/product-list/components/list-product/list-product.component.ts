import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { ConfirmDialogService } from '../../../../../shared/components/dialogs/confirm-dialogbox/confirm-dialog.service';
import { FormBtnPrComponent } from '../../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { PageHeaderComponent } from '../../../../../shared/components/page/page-header/page-header.component';
import { NgSelectComponent } from '../../../../../shared/components/elements/ng-select/ng-select.component';
import { ProductListService } from '../../product-list.service';
import { takeUntil } from 'rxjs';
import { Product } from '../../../../../shared/models/entities/product/product.model';
import { KeyValuePair } from '../../../../../shared/models/view/key-value-pair.model';
import { HrfKeyValuePipe } from '../../../../../shared/pipes/hrf-key-value.pipe';
import { BarcodeTypeEnumPipe } from '../../../../../shared/pipes/barcode-type-enum.pipe';
import { BarcodeTypeEnum } from '../../../../../shared/models/entities/product/enum/barcode-type.enum';
import { BtnPrComponent } from "../../../../../shared/components/elements/button/btn-pr/btn-pr.component";


@Component({
    selector: 'app-list-product',
    standalone: true,
    templateUrl: './list-product.component.html',
    styleUrl: './list-product.component.scss',
    providers: [
        HrfKeyValuePipe,
        BarcodeTypeEnumPipe
    ],
    imports: [
        RouterModule,
        PageHeaderComponent,
        FormsModule,
        NgSelectComponent,
        FormBtnPrComponent,
        BtnPrComponent
    ]
})
export class ListProductComponent extends BaseComponent implements OnInit {
  router = inject(Router);
  productListService = inject(ProductListService);
  confirmDialogService = inject(ConfirmDialogService);
  hrfKeyValuePipe = inject(HrfKeyValuePipe);
  barcodeTypeEnumPipe = inject(BarcodeTypeEnumPipe);

  productList!: string[];
  gtinList!: string[];
  selectedProductName!: string;
  selectedGtin!: string;
  stationDetails !: KeyValuePair[];
  hrfDetails !: KeyValuePair[];

  ngOnInit(): void {
    this.getAllProductNames();
  }

  onProductSelectionChange() {
    this.gtinList = [];
    this.productListService.getAllGtin(this.selectedProductName)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.gtinList = response;
    });
  }

  onGtinSelectionChange() {
    this.stationDetails = [];
    this.hrfDetails = [];
    this.productListService.getProduct(this.selectedProductName, this.selectedGtin)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.FillStationDetails(response);
        this.FillHrfDetails(response);
      });
  }

  onUpdateBtnClick(){
    void this.router.navigateByUrl(`productdetials/edit/${this.selectedProductName}/${this.selectedGtin}`);
  }

  getAllProductNames() {
    this.productListService.getAllProductNames()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.productList = response;
      });
  }

  private FillStationDetails(product: Product): void {
    this.stationDetails = [];
    // Fill Station Details
    this.stationDetails.push(new KeyValuePair({Name:"Packaging Level", Value:product.PackagingLevel}));
    this.stationDetails.push(new KeyValuePair({Name:"Item Code", Value:product.ItemCode}));
    this.stationDetails.push(new KeyValuePair({Name:"Layers", Value:product.Layers}));
    this.stationDetails.push(new KeyValuePair({Name:"Item In Layers", Value:product.ItemsInLayer}));
    this.stationDetails.push(new KeyValuePair({Name:"Barcode Type", Value: this.barcodeTypeEnumPipe.transform(product.BarcodeType)}));
    this.stationDetails.push(new KeyValuePair({Name:"SSCC Prefix", Value: this.evaluateStringValue(product.SSCCPrefix, product.BarcodeType)}));
    this.stationDetails.push(new KeyValuePair({Name:"Filter Value", Value: this.evaluateStringValue(product.FilterValue, product.BarcodeType)}));
    this.stationDetails.push(new KeyValuePair({Name:"Product Height", Value: this.evaluateStringValue(product.ProductHeight)}));
    this.stationDetails.push(new KeyValuePair({Name:"Batch Type", Value:product.BatchType}));
    this.stationDetails.push(new KeyValuePair({Name:"Account Name", Value:product.AccountName}));
    this.stationDetails.push(new KeyValuePair({Name:"MAH GLN Number", Value:product.MAHGLNNumber}));
    this.stationDetails.push(new KeyValuePair({Name:"Customer Product Code", Value:product.CustomerProductCode}));
  }

  private FillHrfDetails(product: Product): void {
    this.hrfDetails = [];
    // Fill HRF Details
    if (product.HRF1 && product.HRF1 != "") {
      this.hrfDetails.push(this.hrfKeyValuePipe.transform(product.HRF1));
    }
    if (product.HRF2 && product.HRF2 != "") {
      this.hrfDetails.push(this.hrfKeyValuePipe.transform(product.HRF2));
    }
    if (product.HRF3 && product.HRF3 != "") {
      this.hrfDetails.push(this.hrfKeyValuePipe.transform(product.HRF3));
    }
    if (product.HRF4 && product.HRF4 != "") {
      this.hrfDetails.push(this.hrfKeyValuePipe.transform(product.HRF4));
    }
    if (product.HRF5 && product.HRF5 != "") {
      this.hrfDetails.push(this.hrfKeyValuePipe.transform(product.HRF5));
    }
  }

  private evaluateStringValue(value: string, barcodeType?: BarcodeTypeEnum): string{
    
    if(!value || value == "" || value == null || (barcodeType && barcodeType != BarcodeTypeEnum.SSCC)){
      return "N/A";
    }

    return value;
  }
}
