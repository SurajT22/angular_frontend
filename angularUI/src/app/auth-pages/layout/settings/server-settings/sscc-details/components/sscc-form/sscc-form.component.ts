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
  companyPrefixList = [
    "4051223",
    "55551223"
  ];

  RegulatoryList = [
    { label: "DGFT", value: RegulatoryEnum.DGFT },
    { label: 'HDMA', value: RegulatoryEnum.HDMA },
    { label: 'SFDA', value: RegulatoryEnum.SFDA },
    { label: 'EU', value: RegulatoryEnum.EU },
    { label: 'RUSSIAN', value: RegulatoryEnum.RUSSIAN },
    { label: 'CFDA', value: RegulatoryEnum.CFDA },
    { label: 'SOUTH_KORIA', value: RegulatoryEnum.SOUTH_KORIA },
    { label: 'TURKEY', value: RegulatoryEnum.TURKEY },
    { label: 'ANVISA', value: RegulatoryEnum.ANVISA },
    { label: 'ARGENTINA', value: RegulatoryEnum.ARGENTINA },
    { label: 'EGYPT', value: RegulatoryEnum.EGYPT },
    { label: 'BAHRAIN', value: RegulatoryEnum.BAHRAIN },
    { label: 'DHA', value: RegulatoryEnum.DHA },
    { label: 'UAE', value: RegulatoryEnum.UAE },
  ];


  ssccStatusEnum = SsccStatusEnum
  constructor() {
    super();
    this.sscc = new Sscc();
  }

  ngOnInit(): void {
    if (this.isUpdate) {
      const ID = this.activatedRoute.snapshot.paramMap.get('ID') || '';

    } else {
      this.sscc.CompanyPrefrix = "1234";
      this.sscc.RemainingQty = RegulatoryEnum.BAHRAIN;
    }
  }

  onBtnClick(): void {
    this.btnClick.emit(this.sscc);
  }
}
