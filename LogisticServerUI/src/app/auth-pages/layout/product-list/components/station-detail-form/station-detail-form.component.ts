import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { TextComponent } from '../../../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { BarcodeTypeEnum } from '../../../../../shared/models/entities/product/enum/barcode-type.enum';
import { HrfDetails } from '../../../../../shared/models/view/product-list/hrf-details.model';
import { NgSelectComponent } from '../../../../../shared/components/elements/ng-select/ng-select.component';
import { StationDetails } from '../../../../../shared/models/entities/product/station-details.model';
import { HrfKeyValuePipe } from '../../../../../shared/pipes/hrf-key-value.pipe';
import { SSCC_FILTER_VALUE } from '../../../../../shared/models/common/const/sscc-filter-value.const';
import { PACKAGING_LEVEL } from '../../../../../shared/models/common/const/packaging-level.const';


@Component({
    selector: 'app-station-detail-form',
    standalone: true,
    templateUrl: './station-detail-form.component.html',
    styleUrl: './station-detail-form.component.scss',
    imports: [
        NgSelectComponent,
        TextComponent, 
        FormBtnPrComponent,
        HrfKeyValuePipe,
    ]
})
export class StationDetailFormComponent extends BaseComponent {
    
    router = inject(Router);

    @Input() isUpdate : boolean = false;
    @Input() stationDetail !: StationDetails;
    @Input() itemCode!: string;
    @Input() ssccPrefixList!: string[];
    @Input() showProductHeight : Boolean = false;
    @Output() itemCodeChange = new EventEmitter();
    @Output() calculateGtin = new EventEmitter();
    
    barcodeTypeEnum = BarcodeTypeEnum;
    filterValueList = SSCC_FILTER_VALUE;
    packageLevelList = PACKAGING_LEVEL;
    barcodeTypeList = [
        { label: "SSCC", value: BarcodeTypeEnum.SSCC },
        { label: "2D", value: BarcodeTypeEnum.TWOD },
    ]


    constructor() {
        super();
    }

    ngOnInit(): void {
    }

}
