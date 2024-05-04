import { Component, inject } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { MoreSettingService } from '../more-settings.service';
import { ComposeEmail } from '../../../../../shared/models/entities/system-setting/compose-email.model';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { PageHeaderComponent } from "../../../../../shared/components/page/page-header/page-header.component";
import { FormsModule } from '@angular/forms';
import { EmailComponent } from "../../../../../shared/components/elements/email/email.component";
import { TextComponent } from "../../../../../shared/components/elements/text/text.component";
import { MultiLineComponent } from "../../../../../shared/components/elements/multi-line/multi-line.component";
import { FormBtnPrComponent } from "../../../../../shared/components/form/form-btn-pr/form-btn-pr.component";
import { MultiEmailComponent } from "../../../../../shared/components/elements/multi-email/multi-email.component";
import { UploadFilesComponent } from "../../../../../shared/components/elements/upload-files/upload-files.component";

@Component({
    selector: 'app-compose-email',
    standalone: true,
    templateUrl: './compose-email.component.html',
    styleUrl: './compose-email.component.scss',
    imports: [
        PageHeaderComponent,
        FormsModule,
        EmailComponent,
        TextComponent,
        MultiLineComponent,
        FormBtnPrComponent,
        MultiEmailComponent,
        UploadFilesComponent
    ]
})
export class ComposeEmailComponent extends BaseComponent {
  router = inject(Router);
  moreSettingService=inject(MoreSettingService);
  
  
  composeEmail:ComposeEmail;
  

  onToChange(emails: string[]) {
    this.composeEmail.To = emails;
  }

  onCcChange(emails: string[]) {
    this.composeEmail.Cc = emails;
  }
  handleSelectedFiles(files: File[]): void {
    // Update the array of file paths in the parent component
    this.composeEmail.FileNameAndPath = files.map(file => file.name);
    console.log('Selected Files:', this.composeEmail.FileNameAndPath);
  }
  constructor(){
    super();
    this.composeEmail=new ComposeEmail();
  }

  onSendBtnClick(){
    // this.composeEmail.FileNameAndPath = []
    this.moreSettingService
    .createComposeEmail(this.composeEmail)
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      void this.router.navigateByUrl('moresettings/emailconfiguration');
    });
  }


}
