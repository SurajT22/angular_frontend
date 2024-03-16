import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../../shared/components/base/base.component';
import { ProductList } from '../../../../../../../shared/models/entities/server-settings/product-list.model';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../../../../../../shared/components/elements/text/text.component';
import { FormFooterComponent } from '../../../../../../../shared/components/form/form-footer/form-footer.component';
import { NgSelectComponent } from '../../../../../../../shared/components/elements/ng-select/ng-select.component';
import { ActivatedRoute } from '@angular/router';
import { StationDetail } from '../../../../../../../shared/models/entities/server-settings/station-details.model';
import { FormBtnPrComponent } from "../../../../../../../shared/components/form/form-btn-pr/form-btn-pr.component";

@Component({
    selector: 'app-list-product-form',
    standalone: true,
    templateUrl: './list-product-form.component.html',
    styleUrl: './list-product-form.component.scss',
    imports: [
        FormsModule,
        TextComponent,
        FormFooterComponent,
        NgSelectComponent,
        FormBtnPrComponent
    ]
})
export class ListProductFormComponent extends BaseComponent implements OnInit {

  @Input() productList:ProductList;
  @Input () stationDetail:StationDetail
  @Input() btnLabel = '';
  @Input() isUpdate = false;
  @Output() btnClick: EventEmitter<ProductList | null> = new EventEmitter();
  activatedRoute = inject(ActivatedRoute);
  companyPrefixList = [
    "4051223",
    "55551223"
  ];
  packageLevelList = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ]
  itemInLayersList =[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ]
  barcodeTypeList = [
   '2D',
   'SSCC'
  ]
  hrfDetailslist = [
   ' None',
'00 Serial Shipping Container Code(SSCC18)',
'01 Global Trade Identification Number (GTIN)',
'02 Number of containers',
'10 Batch Number',
'11 Production Date',
'13 Packaging Date',
'15 Sell by Date (Quality Control)',
'17 Expiration Date',
'20 Product Variant',
'21 Serial Number',
'22 HIBCC Quantity, Date, Batch and Link',
'23x Lot Number',
'24 Product Name',
'240 Additional Product Identification',
'241 GMID Number ',
'250 Second Serial Number',
'30 Quantity Each',
'310y Product Net Weight in kg',
'311y Product Length/1st Dim in meters',
'312y Product Width/Dim/2nd Dim, in meters',
'313y Product Depth/Thickness/3rd Dim, in meters',
'314y Product Area, in square meters',
'315y Product Volume, in liters',
'316y product Volume, in cubic meters',
'320y Product Net Weight, in pounds',
'321y Product Length/1st Dim, in inches',
'322y Product Length/1st Dim, in ft',
'323y Product Length/1st Dim, in yards',
'324y Product Width/Dia/2nd Dim, in inches',
'325y Product Width/Dia/2nd Dim, in ft',
'326y Product Width/Dia/2nd Dim, in yards',
'327y Product Depth/Thickness/3rd Dim, in inches',
'328y Product Depth/Thickness/3rd Dim, in ft',
'329y Product Depth/Thickness/3rd Dim, in yards',
'330y Container Gross Weight (Kg)',
'331y Container Length/1st Dim (Meters)',
'332y Container Width/Diar/2nd Dim(Meters)',
'333y Container Depth/Thickness/3rd Dim(Meters)',
'334y Container Area (Square Meters)',
'335y Container Gross Volume (Liters)',
'336y Container Gross Volume (Cubic Meters)',
'340y Container Gross Weight (Pounds)',
'341y Container Length/1st Dim, in inches',
'342y Container Length/1st Dim, in feet',
'343y Container Length/1st Dim in, in yards',
'344y Container Width/Dia/2nd Dim, in inches',
'345y Container Width/Dia/2nd Dim, in feet',
'346y Container Width/Dia/2nd Dim, in yards',
'347y Container Depth/Thickness/Height/3rd Dim, in inches',
'348y Container Depth/Thickness/Height/3rd Dim, in feet',
'349y Container Depth/Thickness/Height/3rd Dim, in yards',
'350y Product Area (Square Inches)',
'351y Product Area (Square Feet)',
'352y Product Area (Square Yards)',
'353y Container Area (Square Inches)',
'354y Container Area (Square Feet)',
'355y Container Area (Suqare Yards)',
'356y Net Weight (Troy Ounces)',
'360y Product Volume (Quarts)',
'361y Product Volume (Gallons)',
'362y Container Gross Volume (Quarts)',
'363y Container Gross Volume (Gallons)',
'364y Product Volume (Cubic Inches)',
'365y Product Volume (Cubic Feet)',
'366y Product Volume (Cubic Yards)',
'367y Container Gross Volume (Cubic Inches)',
'368y Container Gross Volume (Cubic Feet)',
'369y Container Gross Volume (Cubic Yards)None',
'00 Serial Shipping Container Code(SSCC18)',
'01 Global Trade Identification Number (GTIN)',
'02 Number of containers',
'10 Batch Number',
'11 Production Date',
'13 Packaging Date',
'15 Sell by Date (Quality Control)',
'17 Expiration Date',
'20 Product Variant',
'21 Serial Number',
'22 HIBCC Quantity, Date, Batch and Link',
'23x Lot Number',
'24 Product Name',
'240 Additional Product Identification',
'241 GMID Number ',
'250 Second Serial Number',
'30 Quantity Each',
'310y Product Net Weight in kg',
'311y Product Length/1st Dim in meters',
'312y Product Width/Dim/2nd Dim, in meters',
'313y Product Depth/Thickness/3rd Dim, in meters',
'314y Product Area, in square meters',
'315y Product Volume, in liters',
'316y product Volume, in cubic meters',
'320y Product Net Weight, in pounds',
'321y Product Length/1st Dim, in inches',
'322y Product Length/1st Dim, in ft',
'323y Product Length/1st Dim, in yards',
'324y Product Width/Dia/2nd Dim, in inches',
'325y Product Width/Dia/2nd Dim, in ft',
'326y Product Width/Dia/2nd Dim, in yards',
'327y Product Depth/Thickness/3rd Dim, in inches',
'328y Product Depth/Thickness/3rd Dim, in ft',
'329y Product Depth/Thickness/3rd Dim, in yards',
'330y Container Gross Weight (Kg)',
'331y Container Length/1st Dim (Meters)',
'332y Container Width/Diar/2nd Dim(Meters)',
'333y Container Depth/Thickness/3rd Dim(Meters)',
'334y Container Area (Square Meters)',
'335y Container Gross Volume (Liters)',
'336y Container Gross Volume (Cubic Meters)',
'340y Container Gross Weight (Pounds)',
'341y Container Length/1st Dim, in inches',
'342y Container Length/1st Dim, in feet',
'343y Container Length/1st Dim in, in yards',
'344y Container Width/Dia/2nd Dim, in inches',
'345y Container Width/Dia/2nd Dim, in feet',
'346y Container Width/Dia/2nd Dim, in yards',
'347y Container Depth/Thickness/Height/3rd Dim, in inches',
'348y Container Depth/Thickness/Height/3rd Dim, in feet',
'349y Container Depth/Thickness/Height/3rd Dim, in yards',
'350y Product Area (Square Inches)',
'351y Product Area (Square Feet)',
'352y Product Area (Square Yards)',
'353y Container Area (Square Inches)',
'354y Container Area (Square Feet)',
'355y Container Area (Suqare Yards)',
'356y Net Weight (Troy Ounces)',
'360y Product Volume (Quarts)',
'361y Product Volume (Gallons)',
'362y Container Gross Volume (Quarts)',
'363y Container Gross Volume (Gallons)',
'364y Product Volume (Cubic Inches)',
'365y Product Volume (Cubic Feet)',
'366y Product Volume (Cubic Yards)',
'367y Container Gross Volume (Cubic Inches)',
'368y Container Gross Volume (Cubic Feet)',
'369y Container Gross Volume (Cubic Yards)',
'37 Number of Units Contained',
'400 Customer Purchase Order Number',
'410 Ship To/Deliver To Location Code',
'411 Bill To/Invoice Location Code',
'412 Purchase From Location Code',
'420 Ship To/Deliver To Postal Code',
'421 Ship To/Deliver To Postal Code',
'8001 Roll Products-Width/Length/Core Dia',
'8002 Electronic Serial Number (ESN)',
'8003 UPC/EAN Number and Serial No',
'8004 UPC/EAN Serial Identification',
'8005 Price per Unit of Measure',
'8100 Coupon Extd Code: No System and Offer',
'8101Coupon Extd Code: No System, Offer, End of Offer',
'8102 Coupon Extd Code: No Sys preceded by 0',
'90 Mutually Agreed Between Trading Partners',
'91 Company Internal Information',
'92 Company Internal Information',
'93 Company Internal Information',
'94 Company Internal Information',
'95 Company Internal Information',
'96 Company Internal Information',
'97 Company Internal Information',
'98 Company Internal Information',
'99 Company Internal Information',
'710 National Healthcare Reimbursement Number',
'711 National Healthcare Reimbursement Number',
'712 National Healthcare Reimbursement Number',
'713 National Healthcare Reimbursement Number',
'37 Number of Units Contained',
'400 Customer Purchase Order Number',
'410 Ship To/Deliver To Location Code',
'411 Bill To/Invoice Location Code',
'412 Purchase From Location Code',
'420 Ship To/Deliver To Postal Code',
'421 Ship To/Deliver To Postal Code',
'8001 Roll Products-Width/Length/Core Dia',
'8002 Electronic Serial Number (ESN)',
'8003 UPC/EAN Number and Serial No',
'8004 UPC/EAN Serial Identification',
'8005 Price per Unit of Measure',
'8100 Coupon Extd Code: No System and Offer',
'8101Coupon Extd Code: No System, Offer, End of Offer',
'8102 Coupon Extd Code: No Sys preceded by 0',
'90 Mutually Agreed Between Trading Partners',
'91 Company Internal Information',
'92 Company Internal Information',
'93 Company Internal Information',
'94 Company Internal Information',
'95 Company Internal Information',
'96 Company Internal Information',
'97 Company Internal Information',
'98 Company Internal Information',
'99 Company Internal Information',
'710 National Healthcare Reimbursement Number',
'711 National Healthcare Reimbursement Number',
'712 National Healthcare Reimbursement Number',
'713 National Healthcare Reimbursement Number',
'714 National Healthcare Reimbursement Number',
  ]
  constructor() {
    super();
    this.productList = new ProductList();
    this.stationDetail = new StationDetail();
  }
  
  onBtnClick(): void {
    this.btnClick.emit(this.productList);
  }
  onSaveBtnClick() {

  }
  ngOnInit(): void {
    if (this.isUpdate) {}
  }
}
