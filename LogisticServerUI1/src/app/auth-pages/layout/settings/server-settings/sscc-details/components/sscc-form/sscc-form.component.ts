import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../../../../../../shared/components/elements/text/text.component';
import { FormFooterComponent } from '../../../../../../../shared/components/form/form-footer/form-footer.component';
import { NgSelectComponent } from '../../../../../../../shared/components/elements/ng-select/ng-select.component';
import { BaseComponent } from '../../../../../../../shared/components/base/base.component';
import { Sscc } from '../../../../../../../shared/models/entities/server-settings/sscc.model';
import { ActivatedRoute } from '@angular/router';
import { SsccStatusEnum } from '../../../../../../../shared/models/entities/server-settings/enums/sscc-status.enum';
import { RegulatoryEnum } from '../../../../../../../shared/models/entities/server-settings/enums/sscc-regulatory.enum';
import { SsccDetailsService } from '../../sscc-details.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-sscc-form',
  standalone: true,
  imports: [
    FormsModule,
    TextComponent,
    FormFooterComponent,
    NgSelectComponent
  ],
  templateUrl: './sscc-form.component.html',
  styleUrl: './sscc-form.component.scss'
})
export class SsccFormComponent extends BaseComponent implements OnInit {

  @Input() sscc: Sscc;
  @Input() btnLabel = '';
  @Input() isUpdate = false;
  @Output() btnClick: EventEmitter<Sscc | null> = new EventEmitter();
  activatedRoute = inject(ActivatedRoute);
  ssccDetailService = inject(SsccDetailsService);


  companyPrefixList: string[] = []
  ssccStatusEnum = SsccStatusEnum

  // RegulatoryList = [
  //   { label: "DGFT", value: RegulatoryEnum.DGFT },
  //   { label: 'HDMA', value: RegulatoryEnum.HDMA },
  //   { label: 'SFDA', value: RegulatoryEnum.SFDA },
  //   { label: 'EU', value: RegulatoryEnum.EU },
  //   { label: 'RUSSIAN', value: RegulatoryEnum.RUSSIAN },
  //   { label: 'CFDA', value: RegulatoryEnum.CFDA },
  //   { label: 'SOUTH_KORIA', value: RegulatoryEnum.SOUTH_KORIA },
  //   { label: 'TURKEY', value: RegulatoryEnum.TURKEY },
  //   { label: 'ANVISA', value: RegulatoryEnum.ANVISA },
  //   { label: 'ARGENTINA', value: RegulatoryEnum.ARGENTINA },
  //   { label: 'EGYPT', value: RegulatoryEnum.EGYPT },
  //   { label: 'BAHRAIN', value: RegulatoryEnum.BAHRAIN },
  //   { label: 'DHA', value: RegulatoryEnum.DHA },
  //   { label: 'UAE', value: RegulatoryEnum.UAE },
  // ];

  RegulatoryList: any[] = [];


  constructor() {
    super();
    this.sscc = new Sscc();
    this.getRegulatoryDetailList();
  }

  ngOnInit(): void {
    if (this.isUpdate) {
      const ID = this.activatedRoute.snapshot.paramMap.get('id') || '';
      // this.sscc.Regulatory = RegulatoryEnum.BAHRAIN;
      this.sscc.Status = this.ssccStatusEnum.Open;
      this.getSscc(ID);

    } else {
      // this.sscc.CompanyPrefrix = "1234";
      // this.sscc.Regulatory = RegulatoryEnum.BAHRAIN;
      this.getCompanyPrefixList();
      this.sscc.Status = this.ssccStatusEnum.Open;
    }
  }

  getSscc(ID: string) {
    this.ssccDetailService.getSscc(ID)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.sscc = response;
        this.sscc.Quantity = response.RemainingQty;
        this.sscc.Regulatory = response.Regulatory;
      });
  }

  getCompanyPrefixList() {
    this.ssccDetailService.getCompanyPrefix()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.companyPrefixList = res;
      })
  }

  getRegulatoryDetailList() {
    this.ssccDetailService.getAllRegulatory()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        // this.RegulatoryList = [];
        // var regulatoryList = res.filter(item => item.IsLicensed);
        // this.RegulatoryList = regulatoryList.map((x) => { return { label: x.Name, value: <RegulatoryEnum>x.Name } })
        this.RegulatoryList = res.map(item => ({
          label: item.Name,
          value: <RegulatoryEnum>item.Name, // Assign null for unlicensed items
          disabled: !item.IsLicensed // Disable unlicensed items
        }));
      })
  }

  onBtnClick(): void {
    this.btnClick.emit(this.sscc);
  }
}
