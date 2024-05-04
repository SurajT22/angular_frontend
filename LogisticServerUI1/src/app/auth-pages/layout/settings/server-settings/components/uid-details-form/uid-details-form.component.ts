import { Component, Input, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { UidDetails } from '../../../../../../shared/models/entities/server-settings/uid-details.model';
import { TextComponent } from '../../../../../../shared/components/elements/text/text.component';
import { NgSelectComponent } from '../../../../../../shared/components/elements/ng-select/ng-select.component';
import { UidTypeEnum } from '../../../../../../shared/models/entities/server-settings/enums/uid-type.enum';
import { ServerSettingService } from '../../server-settings.service';
import { UidTypeEnumPipe } from '../../pipe/uid-type-enum.pipe';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-uid-details-form',
  standalone: true,
  imports: [
    TextComponent,
    NgSelectComponent
  ],
  templateUrl: './uid-details-form.component.html',
  styleUrl: './uid-details-form.component.scss',
  providers:[
    UidTypeEnumPipe
  ]
})
export class UidDetailsFormComponent extends BaseComponent {
  serverSettingService = inject(ServerSettingService);
  uidTypeEnumPipe = inject(UidTypeEnumPipe);

  @Input() uidLengthList !: string[];
  @Input() uidType !: UidTypeEnum;
  
  uidDetails!: UidDetails;

  constructor(){
    super();
    this.uidDetails = new UidDetails();
  }

  onUidLengthChange(event: string){
    this.getUidDetails(event);
  }

  getUidDetails(uidLength: string){
    const uidType = this.uidTypeEnumPipe.transform(this.uidType);
    this.serverSettingService.getUidDetail(uidLength,uidType)
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.uidDetails = response;
    });
  }
}
