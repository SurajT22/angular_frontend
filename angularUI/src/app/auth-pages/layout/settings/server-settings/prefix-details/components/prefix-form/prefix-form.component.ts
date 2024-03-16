import { Component, EventEmitter, Input, OnInit,Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../../../../../../shared/components/elements/text/text.component';
import { FormFooterComponent } from '../../../../../../../shared/components/form/form-footer/form-footer.component';
import { NgSelectComponent } from '../../../../../../../shared/components/elements/ng-select/ng-select.component';
import { BaseComponent } from '../../../../../../../shared/components/base/base.component';
import { Prefix } from '../../../../../../../shared/models/entities/server-settings/prefix.model';
import { ActivatedRoute } from '@angular/router';


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
  @Input() prefix: Prefix;
  @Input() btnLabel = '';
  @Input() isUpdate = false;
  @Output() btnClick: EventEmitter<Prefix | null> = new EventEmitter();
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    super();
    this.prefix = new Prefix();
  }

  ngOnInit(): void {
    if (this.isUpdate) {
      const Prefix = this.activatedRoute.snapshot.paramMap.get('pref') || '';
      //const CustomerName = this.activatedRoute.snapshot.paramMap.get('cust') || '';
    }
  }

  onBtnClick(): void {
    this.btnClick.emit(this.prefix);
  }

}
