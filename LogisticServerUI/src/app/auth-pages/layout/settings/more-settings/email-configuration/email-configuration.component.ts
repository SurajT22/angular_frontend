import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { EmailConfiguration } from '../../../../../shared/models/entities/system-setting/email-configuration.model';
import { MoreSettingService } from '../more-settings.service';
import { PageHeaderComponent } from "../../../../../shared/components/page/page-header/page-header.component";
import { FormsModule } from '@angular/forms';
import { TextComponent } from "../../../../../shared/components/elements/text/text.component";
import { FormFooterComponent } from "../../../../../shared/components/form/form-footer/form-footer.component";
import { FormBtnPrComponent } from "../../../../../shared/components/form/form-btn-pr/form-btn-pr.component";
import { EmailComponent } from "../../../../../shared/components/elements/email/email.component";

@Component({
    selector: 'app-email-configuration',
    standalone: true,
    templateUrl: './email-configuration.component.html',
    styleUrl: './email-configuration.component.scss',
    imports: [
        PageHeaderComponent,
        FormsModule,
        TextComponent,
        FormFooterComponent,
        FormBtnPrComponent,
        EmailComponent
    ]
})
export class EmailConfigurationComponent extends BaseComponent {
  moreSettingService=inject(MoreSettingService)

  emailConfiguration:EmailConfiguration;


  constructor() {
    super();
    this.emailConfiguration = new EmailConfiguration();
  }

  ngOnInit(){
    this.getEmailConfiguration();
  }

  getEmailConfiguration(){
    this.moreSettingService.getEmailConfiguration()
    .subscribe((res)=>{
      this.emailConfiguration = res;
    });
  }

  onUpdateBtnClick(){
   this.moreSettingService.updateEmailConfiguration(this.emailConfiguration)
   .subscribe(() =>{
    
   });
  }
}
