import { Component, Input, OnInit, inject } from '@angular/core';
import { TextComponent } from "../../../../../../shared/components/elements/text/text.component";
import { NgSelectComponent } from "../../../../../../shared/components/elements/ng-select/ng-select.component";
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { SERIAL_NUMBER_STATUS_LIST } from '../../../../../../shared/models/common/const/serial-number-status-list.const';
import { ProductionReport } from '../../../../../../shared/models/view/report/production-report/production-report.model';
import { ProductionReportService } from '../../production-report.service';
import { takeUntil } from 'rxjs';
import { FilterData } from '../../../../../../shared/models/entities/production-report/filter-data.model';

@Component({
    selector: 'app-batch-filter-form',
    standalone: true,
    templateUrl: './batch-filter-form.component.html',
    styleUrl: './batch-filter-form.component.scss',
    imports: [
        TextComponent,
        NgSelectComponent
    ]
})
export class BatchFilterFormComponent extends BaseComponent implements OnInit {
    productionReportService = inject(ProductionReportService);
    @Input() lineList : string[] = [];
    @Input() filterFormData !: ProductionReport;
    
    batchList : string[] = [];
    gtinList : string[] = [];
    statusList : string[] = SERIAL_NUMBER_STATUS_LIST;
    lineFilterData : FilterData[] = [];

    selectedBatch !: FilterData;

    constructor() {
        super()
        this.filterFormData = new ProductionReport();
    }

    ngOnInit(): void {

    }

    onLineChange(){
        this.getBatchData();
    }

    onBatchChange(){
        this.selectedBatch = <FilterData>this.lineFilterData.find(x => x.BatchName == this.filterFormData.BatchName);
        this.gtinList = this.selectedBatch.LevelData.map(x => x.GTIN);
        this.filterFormData.ProductName = this.selectedBatch.ProductName;
        this.filterFormData.GTIN = "";
        this.filterFormData.PackagingLevel = "";
    }

    onGtinChange(){
        this.filterFormData.PackagingLevel = <string>this.selectedBatch.LevelData.find(x => x.GTIN == this.filterFormData.GTIN)?.PackagingLevel;
    }

    getBatchData(){
        this.productionReportService.getBatchListFromLine(this.filterFormData.LineNumber)
        .pipe(takeUntil(this.destroy$))
        .subscribe((response)=>{
            this.lineFilterData = response;
            this.batchList = response.map(x => x.BatchName);

            this.filterFormData.BatchName = "";
            this.filterFormData.ProductName = "";
            this.filterFormData.GTIN = "";
            this.filterFormData.PackagingLevel = "";
        });
    }
}
