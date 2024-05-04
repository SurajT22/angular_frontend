import { Component, Input, OnInit, inject } from '@angular/core';
import { NgSelectComponent } from "../../../../../../shared/components/elements/ng-select/ng-select.component";
import { TextComponent } from "../../../../../../shared/components/elements/text/text.component";
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { ProductionReport } from '../../../../../../shared/models/view/report/production-report/production-report.model';
import { SERIAL_NUMBER_STATUS_LIST } from '../../../../../../shared/models/common/const/serial-number-status-list.const';
import { ProductionReportService } from '../../production-report.service';
import { FilterData } from '../../../../../../shared/models/entities/production-report/filter-data.model';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'app-product-filter-form',
    standalone: true,
    templateUrl: './product-filter-form.component.html',
    styleUrl: './product-filter-form.component.scss',
    imports: [NgSelectComponent, TextComponent]
})
export class ProductFilterFormComponent extends BaseComponent implements OnInit {
    productionReportService = inject(ProductionReportService);

    @Input() filterFormData !: ProductionReport;

    productList : string[] = [];
    batchList : string[] = [];
    gtinList : string[] = [];
    statusList : string[] = SERIAL_NUMBER_STATUS_LIST;
    productFilterData : FilterData[] = [];
    selectedBatch !: FilterData;
    
    constructor() {
        super()
        this.getProductList();
    }

    ngOnInit(): void {

    }

    getProductList(){
        this.productionReportService.getProductList()
        .pipe(takeUntil(this.destroy$))
        .subscribe((response)=>{
            this.productList = response;
        });
    }

    onProductChange(){
        this.productionReportService.getProductwiseBatchList(this.filterFormData.ProductName)
        .pipe(takeUntil(this.destroy$))
        .subscribe((response)=>{
            this.productFilterData = response;
            this.batchList = response.map(x => x.BatchName);

            this.filterFormData.BatchName = "";
            this.filterFormData.GTIN = "";
            this.filterFormData.PackagingLevel = "";
        });
    }

    onBatchChange(){
        this.selectedBatch = <FilterData>this.productFilterData.find(x => x.BatchName == this.filterFormData.BatchName);
        this.gtinList = this.selectedBatch.LevelData.map(x => x.GTIN);
        this.filterFormData.ProductName = this.selectedBatch.ProductName;
        this.filterFormData.GTIN = "";
        this.filterFormData.PackagingLevel = "";
    }

    onGtinChange(){
        this.filterFormData.PackagingLevel = <string>this.selectedBatch.LevelData.find(x => x.GTIN == this.filterFormData.GTIN)?.PackagingLevel;
    }
}
