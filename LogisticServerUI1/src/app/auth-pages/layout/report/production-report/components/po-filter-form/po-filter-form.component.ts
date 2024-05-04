import { Component, Input, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { NgSelectComponent } from "../../../../../../shared/components/elements/ng-select/ng-select.component";
import { ActivatedRoute } from '@angular/router';
import { SERIAL_NUMBER_STATUS_LIST } from '../../../../../../shared/models/common/const/serial-number-status-list.const';
import { ProductionReport } from '../../../../../../shared/models/view/report/production-report/production-report.model';
import { ProductionReportService } from '../../production-report.service';
import { FilterData } from '../../../../../../shared/models/entities/production-report/filter-data.model';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-po-filter-form',
  standalone: true,
  templateUrl: './po-filter-form.component.html',
  styleUrl: './po-filter-form.component.scss',
  imports: [NgSelectComponent]
})
export class PoFilterFormComponent extends BaseComponent implements OnInit {
  productionReportService = inject(ProductionReportService);

  @Input() filterFormData !: ProductionReport;

  poList: string[] = [];
  batchList: string[] = [];
  gtinList: string[] = [];
  statusList: string[] = SERIAL_NUMBER_STATUS_LIST;
  poFilterData: FilterData[] = [];
  selectedBatch !: FilterData;
  selectedPo !: string;
  constructor() {
    super()
  }
  ngOnInit(): void {
    this.getPoList();
  }

  getPoList(){
    this.productionReportService.getPoList()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.poList = response;
    });
  }

  onPoChange(){
    this.productionReportService.getPOwiseBatchList(this.selectedPo)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.poFilterData = response;
      this.batchList = response.map(x => x.BatchName);

      this.filterFormData.BatchName = "";
      this.filterFormData.GTIN = "";
      this.filterFormData.PackagingLevel = "";
    });
  }

  onBatchChange() {
    this.selectedBatch = <FilterData>this.poFilterData.find(x => x.BatchName == this.filterFormData.BatchName);
    this.gtinList = this.selectedBatch.LevelData.map(x => x.GTIN);
    this.filterFormData.ProductName = this.selectedBatch.ProductName;
    this.filterFormData.GTIN = "";
    this.filterFormData.PackagingLevel = "";
  }

  onGtinChange() {
    this.filterFormData.PackagingLevel = <string>this.selectedBatch.LevelData.find(x => x.GTIN == this.filterFormData.GTIN)?.PackagingLevel;
  }
}
