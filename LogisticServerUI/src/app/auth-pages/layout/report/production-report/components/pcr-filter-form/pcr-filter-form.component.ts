import { Component, Input, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { NgSelectComponent } from "../../../../../../shared/components/elements/ng-select/ng-select.component";
import { TextComponent } from "../../../../../../shared/components/elements/text/text.component";
import { ProductionReport } from '../../../../../../shared/models/view/report/production-report/production-report.model';
import { ProductionReportService } from '../../production-report.service';
import { takeUntil } from 'rxjs';
import { FilterData } from '../../../../../../shared/models/entities/production-report/filter-data.model';

@Component({
  selector: 'app-pcr-filter-form',
  standalone: true,
  templateUrl: './pcr-filter-form.component.html',
  styleUrl: './pcr-filter-form.component.scss',
  imports: [NgSelectComponent, TextComponent]
})
export class PcrFilterFormComponent extends BaseComponent implements OnInit {
  productionReportService = inject(ProductionReportService);
  @Input() filterFormData !: ProductionReport;

  batchList: string[] = [];
  lineFilterData: FilterData[] = [];
  selectedBatch !: FilterData;
  constructor() {
    super()

    this.getBatchData();
  }
  ngOnInit(): void {

  }

  getBatchData() {
    this.productionReportService.getBatchListFromLine("All")
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.lineFilterData = response;
        this.batchList = response.map(x => x.BatchName);

        this.filterFormData.BatchName = "";
        this.filterFormData.ProductName = "";
      });
  }
  onBatchChange() {
    this.selectedBatch = <FilterData>this.lineFilterData.find(x => x.BatchName == this.filterFormData.BatchName);
    this.filterFormData.ProductName = this.selectedBatch.ProductName;

    this.filterFormData.GTIN = "";
    this.filterFormData.PackagingLevel = "";
  }
}
