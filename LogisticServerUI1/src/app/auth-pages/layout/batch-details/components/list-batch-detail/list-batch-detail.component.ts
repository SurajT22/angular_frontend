import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { ConfirmDialogService } from '../../../../../shared/components/dialogs/confirm-dialogbox/confirm-dialog.service';
import { Router, RouterModule } from '@angular/router';
import { NgSelectComponent } from "../../../../../shared/components/elements/ng-select/ng-select.component";
import { FormsModule } from '@angular/forms';
import { BatchDetails } from '../../../../../shared/models/entities/batch-detail/batch-detail.model';
import { PackagingTypeEnum } from '../../../../../shared/models/entities/batch-detail/enum/packaging-type.enum';
import { PackagingTypeEnumPipe } from '../../../../../shared/pipes/packaging-type-enum.pipe';
import { BatchDetailsService } from '../../batch-details.service';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'app-list-batch-detail',
    standalone: true,
    templateUrl: './list-batch-detail.component.html',
    styleUrl: './list-batch-detail.component.scss',
    imports: [
      NgSelectComponent,
      RouterModule,
      FormsModule,
    ],
    providers:[
      PackagingTypeEnumPipe
    ]
})
export class ListBatchDetailComponent extends BaseComponent implements OnInit {
  router = inject(Router);
  batchDetailsService = inject(BatchDetailsService);
  packagingTypeEnumPipe = inject(PackagingTypeEnumPipe);

  selectedPackagingType:PackagingTypeEnum = PackagingTypeEnum.HOMOGENEOUS;
  packagingTypeList = [
    {label: this.packagingTypeEnumPipe.transform(PackagingTypeEnum.HOMOGENEOUS), value: PackagingTypeEnum.HOMOGENEOUS},
    {label: this.packagingTypeEnumPipe.transform(PackagingTypeEnum.HETEROGENEOUS), value: PackagingTypeEnum.HETEROGENEOUS}
  ];

  selectedBatchName: string = "All"
  batchNameList: string[] = ["All"];

  batchList!:BatchDetails[];

 constructor(){
  super();
 }
  ngOnInit(): void {
    this.getBatchByFilter();
  }

  onPackagingTypeChange(){
    this.selectedBatchName = "All";
    this.getBatchByFilter();
  }

  getBatchByFilter(){
    var batchName = this.selectedBatchName && this.selectedBatchName == "All" ? "":this.selectedBatchName;
    var packagingType = this.selectedPackagingType.toString();

    this.batchDetailsService.getBatchByFilter(batchName, packagingType)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      var batchNameList = [...new Set(response.map(x => x.BatchName))];

      this.batchNameList = ["All", ... batchNameList];
      this.batchList = response;
    });
  }
}
