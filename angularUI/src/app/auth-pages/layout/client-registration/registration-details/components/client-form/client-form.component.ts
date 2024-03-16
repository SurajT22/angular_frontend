import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { Client } from '../../../../../../shared/models/entities/client-registration/client.model';
import { FormFooterComponent } from '../../../../../../shared/components/form/form-footer/form-footer.component';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../../../../../shared/components/elements/text/text.component';
import { ActivatedRoute } from '@angular/router';
import { NgSelectComponent } from '../../../../../../shared/components/elements/ng-select/ng-select.component';
import { RegistrationStatusEnum } from '../../../../../../shared/models/entities/client-registration/enums/registration-status.enum';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
    FormsModule,
    TextComponent,
    FormFooterComponent,
    NgSelectComponent
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent extends BaseComponent implements OnInit {

  @Input() client: Client;
  @Input() btnLabel = '';
  @Input() isUpdate = false;
  @Output() btnClick: EventEmitter<Client | null> = new EventEmitter();

  activatedRoute = inject(ActivatedRoute);
  registrationStatusEnum = RegistrationStatusEnum;
  packagingLevelList = ['0','1','2','3','4','5','6','7','8','9'];
  
  constructor() {
    super();
    this.client = new Client();
  }

  ngOnInit(): void {
    if (this.isUpdate) {
      const ip = this.activatedRoute.snapshot.paramMap.get('ip') || '';
      const mac = this.activatedRoute.snapshot.paramMap.get('mac') || '';

      
    }
  }

  onBtnClick(): void {
    this.btnClick.emit(this.client);
  }

}
