import { Component, EventEmitter, Input, OnInit,Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../../../../../../shared/components/elements/text/text.component';
import { FormFooterComponent } from '../../../../../../../shared/components/form/form-footer/form-footer.component';
import { NgSelectComponent } from '../../../../../../../shared/components/elements/ng-select/ng-select.component';
import { BaseComponent } from '../../../../../../../shared/components/base/base.component';
import { PrefixDetail } from '../../../../../../../shared/models/entities/server-settings/prefix.model';
import { ActivatedRoute } from '@angular/router';
import { PrefixDetailsService } from '../../prefix-details.service';
import { takeUntil } from 'rxjs';


@Component({
  selector: 'app-prefix-form',
  standalone: true,
  imports: [
    FormsModule,
    TextComponent,
    FormFooterComponent,
    NgSelectComponent
  ],
  templateUrl: './prefix-form.component.html',
  styleUrl: './prefix-form.component.scss'
})
export class PrefixFormComponent extends BaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  prefixdetailservice = inject(PrefixDetailsService)

  @Input() prefixDetail!: PrefixDetail;
  @Input() btnLabel = '';
  @Input() isUpdate = false;
  @Output() btnClick: EventEmitter<PrefixDetail | null> = new EventEmitter();

  constructor() {
    super();
   
  }

  ngOnInit(): void {
    if (this.isUpdate) {
      const prefix = this.activatedRoute.snapshot.paramMap.get('pref') || '';
      const customerName = this.activatedRoute.snapshot.paramMap.get('cust') || '';
      this.prefixDetail.CompanyPrefix = prefix;
      this.prefixDetail.CustomerName = customerName;
      
    }
  }

 


  onBtnClick(): void {
    this.btnClick.emit(this.prefixDetail);
  }

}
